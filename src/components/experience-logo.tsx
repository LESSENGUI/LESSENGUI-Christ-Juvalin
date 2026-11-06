import Image from "next/image";

export function ExperienceLogo({
  logo,
  name,
  initials,
}: {
  logo?: string;
  name: string;
  initials: string;
}) {
  return (
    <span className={`experience-logo${logo ? "" : " experience-logo-fallback"}`}>
      {logo ? (
        <Image src={logo} alt={`Logo de ${name}`} width={56} height={56} />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </span>
  );
}
