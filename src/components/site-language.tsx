"use client";

import { useEffect, useState } from "react";

type GoogleTranslateWindow = Window & {
  google?: {
    translate?: {
      TranslateElement: new (
        options: { pageLanguage: string; autoDisplay: boolean },
        elementId: string,
      ) => unknown;
    };
  };
  googleTranslateElementInit?: () => void;
};

const languageAliases: Record<string, string> = {
  he: "iw",
  jv: "jw",
  fil: "tl",
};

export function SiteLanguage() {
  const [status, setStatus] = useState("Détection de la langue du navigateur…");

  useEffect(() => {
    const detectedLanguage = navigator.language || "fr";
    const normalizedLanguage = detectedLanguage.replace("_", "-");
    const primaryLanguage = normalizedLanguage.split("-")[0].toLowerCase();
    const documentElement = document.documentElement;

    if (primaryLanguage === "fr") {
      documentElement.lang = "fr";
      setStatus("Français — langue par défaut");
      return;
    }

    const container = document.getElementById("google_translate_element");
    if (!container) {
      setStatus("Traduction automatique indisponible — affichage en français.");
      return;
    }

    const translateWindow = window as GoogleTranslateWindow;
    let active = true;
    let observer: MutationObserver | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const reportUnavailable = () => {
      if (active) {
        setStatus(
          `La langue « ${detectedLanguage} » n’est pas disponible — affichage en français.`,
        );
      }
    };

    const initializeTranslate = () => {
      const TranslateElement =
        translateWindow.google?.translate?.TranslateElement;

      if (!TranslateElement || container.dataset.translationInitialized) {
        return;
      }

      container.dataset.translationInitialized = "true";
      observer = new MutationObserver(() => {
        const select = container.querySelector<HTMLSelectElement>(".goog-te-combo");
        if (!select) {
          return;
        }

        observer?.disconnect();
        if (timeout) {
          clearTimeout(timeout);
        }

        const candidates = [
          normalizedLanguage,
          primaryLanguage,
          languageAliases[primaryLanguage],
        ].filter((language): language is string => Boolean(language));
        const option = Array.from(select.options).find((item) =>
          candidates.some(
            (candidate) =>
              item.value.toLowerCase() === candidate.toLowerCase(),
          ),
        );

        if (!option || option.value === "fr") {
          reportUnavailable();
          return;
        }

        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        documentElement.lang = option.value;
        if (active) {
          setStatus(`Traduction automatique : ${option.text}`);
        }
      });

      observer.observe(container, { childList: true, subtree: true });
      timeout = setTimeout(() => {
        observer?.disconnect();
        reportUnavailable();
      }, 15000);

      new TranslateElement({ pageLanguage: "fr", autoDisplay: false }, container.id);
    };

    translateWindow.googleTranslateElementInit = initializeTranslate;

    if (translateWindow.google?.translate?.TranslateElement) {
      initializeTranslate();
    } else {
      let script = document.querySelector<HTMLScriptElement>(
        'script[src^="https://translate.google.com/translate_a/element.js"]',
      );

      if (!script) {
        script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onerror = reportUnavailable;
        document.body.appendChild(script);
      } else {
        script.addEventListener("error", reportUnavailable, { once: true });
      }
    }

    return () => {
      active = false;
      observer?.disconnect();
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <div className="footer-language">
      <span className="footer-language-accessible-label">Choisir la langue du site</span>
      <div
        id="google_translate_element"
        aria-label="Choisir la langue du site"
      />
      <p className="footer-language-status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
