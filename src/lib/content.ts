export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Parcours", href: "/parcours" },
  { label: "Expériences", href: "/experiences" },
  { label: "Projets", href: "/projets" },
  { label: "Services", href: "/services" },
  { label: "Engagements", href: "/engagements" },
  { label: "Contact", href: "/contact" },
];

export const stories = [
  {
    title: "Histoire de ma vie",
    href: "/stories/histoire-de-ma-vie",
    number: "01",
  },
  {
    title: "Engagements & leadership",
    href: "/stories/engagements-leadership",
    number: "02",
  },
  {
    title: "Activités réalisées",
    href: "/stories/activites-realisees",
    number: "03",
  },
  {
    title: "Parcours personnel",
    href: "/stories/parcours-personnel",
    number: "04",
  },
  {
    title: "Transition écologique",
    href: "/stories/transition-ecologique",
    number: "05",
  },
  {
    title: "Impact & développement",
    href: "/stories/impact-developpement",
    number: "06",
  },
];

export const education = [
  {
    date: "2025 – 2026",
    title: "Licence professionnelle en maintenance industrielle",
    place: "École Nationale Supérieure Polytechnique (ENSP), Université Marien Ngouabi (UMNG), Brazzaville",
  },
  {
    date: "2022 – 2023",
    title: "Licence 1 en maintenance industrielle / Licence 2 en physique",
    place: "ENSP – UMNG et Faculté des Sciences et Techniques (FST) – UMNG, Brazzaville",
  },
  {
    date: "2021 – 2022",
    title: "Licence 1 — Physique",
    place: "Faculté des Sciences et Techniques, Université Marien Ngouabi",
  },
  {
    date: "2020 – 2021",
    title: "Baccalauréat scientifique — série C",
    place: "Lycée de Nkayi",
  },
  { date: "2017 – 2018", title: "Brevet d’études du premier cycle (BEPC)", place: "CEG de Divenié" },
];

export const experiences = [
  {
    date: "Mars 2026 – aujourd’hui",
    title: "Responsable médiathécaire",
    place: "Académie Militaire Marien NGOUABI",
    logo: undefined,
    logoText: "AM",
    details: [
      "Gestion des infrastructures et plateformes numériques de l’Académie.",
      "Pilotage de la bibliothèque numérique et physique, modernisation des services numériques, structuration de la gestion documentaire et amélioration de l’accès aux ressources (note n°0612/FAC/COMEC/DPIC).",
    ],
  },
  {
    date: "2025 – aujourd’hui",
    title: "Enseignant de TP/TD en informatique et gestion-économie",
    place: "École Nationale Supérieure Polytechnique (ENSP), Université Marien Ngouabi, Brazzaville",
    logo: "/img/logos/ensp.png",
    logoText: "ENSP",
    details: [
      "Assurer les séances de travaux pratiques et de travaux dirigés en informatique et en gestion-économie auprès des étudiants de l’ENSP.",
    ],
  },
  {
    date: "Août – octobre 2025",
    title: "Stagiaire en maintenance mécanique",
    place: "BRALICO (Groupe Castel), Pointe-Noire",
    logo: "/img/logos/bralico.png",
    logoText: "BRALICO",
    details: [
      "Diagnostiqué les causes racines des pannes de la ligne 1 avec des fiches « 5 Pourquoi », consolidées en fiches REX pour l’ensemble des équipements.",
      "Actualisé la fiche Symptôme-Cause-Remède et le plan de maintenance de la soutireuse K-123-626 ; documenté les fiches d’anomalies de la ligne 1.",
      "Contribué au remplacement de l’encaisseuse et de la décaisseuse (génération 2025) avec des ingénieurs Krones (France, Allemagne et Tunisie), le Directeur technique, la Maintenance et les superviseurs des lignes L1, L3 et L4.",
      "Assuré la disponibilité de la ligne de conditionnement 1 par des maintenances préventives quotidiennes, hebdomadaires et mensuelles, ainsi que des rondes pendant la production.",
      "Réalisé des maintenances correctives sur soutireuse, laveuse de bouteilles, pasteurisateur, étiqueteuse, dépalettiseur, palettiseur, moteurs synchrones et asynchrones, buses Lubranol et chaînes.",
      "Participé aux séances de lubrification et encodé les bons de travail pour garantir la traçabilité des interventions.",
    ],
  },
  {
    date: "Septembre – novembre 2023",
    title: "Stagiaire en mécanique générale",
    place: "Atelier de mécanique générale — Tours Mécaniques Chinois",
    logo: undefined,
    logoText: "TM",
    details: [
      "Diagnostiqué, réparé et remonté des blocs moteurs pour restaurer leurs performances.",
      "Surfacé des culasses afin de rétablir leur planéité et l’étanchéité des moteurs.",
      "Remis en conformité des vilebrequins selon les tolérances d’usinage et réparé des pompes d’injection.",
      "Structuré une fiche de maintenance préventive journalière, hebdomadaire, mensuelle, semestrielle et annuelle pour les équipements de l’atelier.",
    ],
  },
];

export const trainingCategories = [
  {
    slug: "gestion-projets-developpement-durable",
    title: "Gestion de projets et développement durable",
    description: "Pilotage, suivi-évaluation, partenariats et développement.",
  },
  {
    slug: "leadership-gouvernance-citoyennete",
    title: "Leadership, gouvernance et citoyenneté",
    description: "Leadership, responsabilité, collaboration et engagement citoyen.",
  },
  {
    slug: "informatique-developpement-web",
    title: "Informatique et développement web",
    description: "Programmation, développement numérique et outils informatiques.",
  },
  {
    slug: "education-recherche-communautaire",
    title: "Éducation, recherche et développement communautaire",
    description: "Formation, ressources pédagogiques, recherche et action communautaire.",
  },
  {
    slug: "administration-developpement-professionnel",
    title: "Administration et développement professionnel",
    description: "Administration du personnel, gestion et développement professionnel.",
  },
  {
    slug: "sciences-innovation",
    title: "Sciences et innovation",
    description: "Génomique de la biodiversité, approche One Health et données scientifiques.",
  },
] as const;

export type Training = {
  slug: string;
  category: string;
  date: string;
  title: string;
  organization: string;
  organizationMark: string;
  logo?: string;
  duration?: string;
  summary: string;
  description: string;
  objectives: string[];
  skills: string[];
  technologies?: string[];
  status: string;
  certificate?: {
    id: string;
    title: string;
    sourcePath: string;
    url: string;
  };
};

export const trainings: Training[] = [
  {
    slug: "pilotage-projets-developpement-afd",
    category: "gestion-projets-developpement-durable",
    date: "Août 2026",
    title: "Introduction à la mise en œuvre et au pilotage des projets de développement",
    organization: "Groupe AFD",
    organizationMark: "AFD",
    summary: "Introduction à la mise en œuvre et au pilotage de projets de développement.",
    description:
      "Formation consacrée à la mise en œuvre et au pilotage de projets de développement, telle qu’indiquée dans le parcours.",
    objectives: ["Découvrir les principes de mise en œuvre et de pilotage des projets de développement."],
    skills: ["Mise en œuvre de projets", "Pilotage de projets de développement"],
    status: "Formation suivie",
  },
  {
    slug: "suivi-evaluation-projets-miniers-idep",
    category: "gestion-projets-developpement-durable",
    date: "31 août 2025",
    title: "Structuration, analyse et suivi-évaluation des projets miniers",
    organization: "Institut Africain de Développement Économique et de Planification (IDEP / UNIDEP)",
    organizationMark: "IDEP",
    summary: "Programme IDEP consacré à la structuration, l’analyse et au suivi-évaluation des projets miniers.",
    description:
      "Le certificat IDEP confirme la participation et la réussite du programme en ligne de formation portant sur la structuration, l’analyse et le suivi-évaluation des projets miniers.",
    objectives: ["Structurer et analyser des projets miniers.", "Appliquer les principes de suivi et d’évaluation des projets."],
    skills: ["Structuration de projets", "Analyse de projets", "Suivi-évaluation"],
    status: "Certification obtenue",
    certificate: {
      id: "idep-projets-miniers-2025",
      title: "Certificat de réussite — Structuration, analyse et suivi-évaluation des projets miniers",
      sourcePath: "img/Nouveau certificats/CERTIFICAT_DE_REUSSITE_IDEP-min.pdf",
      url: "/img/formations/idep-structuration-projets-miniers.pdf",
    },
  },
  {
    slug: "project-management-advanced-pm-coaching",
    category: "gestion-projets-developpement-durable",
    date: "Avril 2024",
    title: "Project Management Advanced",
    organization: "PM Coaching, Paris",
    organizationMark: "PM",
    summary: "Formation avancée en management de projet.",
    description: "Formation de perfectionnement en management de projet, telle qu’indiquée dans le parcours.",
    objectives: ["Approfondir les connaissances en management de projet."],
    skills: ["Management de projet"],
    status: "Formation suivie",
  },
  {
    slug: "cs50-python-harvard",
    category: "informatique-developpement-web",
    date: "Octobre 2024",
    title: "CS50P — Introduction to Programming with Python",
    organization: "HarvardX",
    organizationMark: "CS50P",
    summary: "Introduction à la programmation avec Python dans le cadre du cours CS50P.",
    description: "Cours d’introduction à la programmation Python proposé par HarvardX.",
    objectives: ["Découvrir les fondamentaux de la programmation avec Python."],
    skills: ["Programmation Python"],
    technologies: ["Python"],
    status: "Formation suivie",
  },
  {
    slug: "conception-ressources-pedagogiques-oif",
    category: "education-recherche-communautaire",
    date: "Session novembre – décembre 2025",
    title: "Conception de ressources pédagogiques sur l’égalité femmes-hommes",
    organization: "Institut de la Francophonie pour l’Éducation et la Formation (IFEF) / Organisation internationale de la Francophonie (OIF)",
    organizationMark: "OIF",
    summary: "Formation sur la conception de ressources pédagogiques traitant de l’égalité femmes-hommes.",
    description:
      "L’attestation de l’OIF confirme la participation avec succès à la formation sur la conception de ressources pédagogiques relatives à l’égalité femmes-hommes, lors de la session de novembre à décembre 2025.",
    objectives: ["Concevoir des ressources pédagogiques sur l’égalité femmes-hommes."],
    skills: ["Conception de ressources pédagogiques", "Éducation à l’égalité femmes-hommes"],
    status: "Attestation de participation obtenue",
    certificate: {
      id: "oif-ressources-pedagogiques-2025",
      title: "Attestation — Conception de ressources pédagogiques sur l’égalité femmes-hommes",
      sourcePath: "img/Nouveau certificats/Attestation Concepteur des ressource pedagogique sur égalité_OIF.pdf",
      url: "/img/formations/oif-conception-ressources-pedagogiques.pdf",
    },
  },
  {
    slug: "negociations-climatiques-jeunes-idep",
    category: "gestion-projets-developpement-durable",
    date: "30 novembre 2025",
    title: "Négociations sur le changement climatique pour les jeunes négociateurs africains",
    organization: "Institut Africain de Développement Économique et de Planification (IDEP / UNIDEP)",
    organizationMark: "IDEP",
    summary: "Programme IDEP en ligne consacré aux négociations climatiques pour les jeunes négociateurs africains.",
    description:
      "Le certificat de réussite IDEP confirme la fin avec succès du programme de formation en ligne sur les négociations relatives au changement climatique pour les jeunes négociateurs africains.",
    objectives: ["Se former aux négociations sur le changement climatique."],
    skills: ["Négociation climatique"],
    status: "Certification obtenue",
    certificate: {
      id: "idep-negociations-climatiques-2025",
      title: "Certificat de réussite — Négociations sur le changement climatique pour les jeunes négociateurs africains",
      sourcePath: "img/Nouveau certificats/CERTIFICAT_DE_REUSSITE IDEP JEUNE NEGOCIATEUR.pdf",
      url: "/img/formations/idep-negociations-climatiques-jeunes.pdf",
    },
  },
  {
    slug: "collaboration-developpement-effectifs-yali",
    category: "leadership-gouvernance-citoyennete",
    date: "19 octobre 2025",
    title: "Collaboration et développement des effectifs",
    organization: "YALI Network",
    organizationMark: "YALI",
    summary: "Formation YALI Network consacrée à la collaboration et au développement des effectifs.",
    description: "Le certificat YALI Network atteste de la réussite de la formation Collaboration et développement des effectifs.",
    objectives: ["Développer les connaissances en collaboration et en développement des effectifs."],
    skills: ["Collaboration", "Développement des effectifs"],
    status: "Certification obtenue",
    certificate: {
      id: "yali-collaboration-effectifs-2025",
      title: "Certificate of completion — Collaboration et Developpement des Effectifs",
      sourcePath: "img/Nouveau certificats/Certificat Collaboration .pdf",
      url: "/img/formations/yali-collaboration-developpement-effectifs.pdf",
    },
  },
  {
    slug: "organisation-communautaire-action-yali",
    category: "education-recherche-communautaire",
    date: "19 octobre 2025",
    title: "Organisation communautaire et action",
    organization: "YALI Network",
    organizationMark: "YALI",
    summary: "Formation YALI Network sur l’organisation communautaire et le passage à l’action.",
    description: "Le certificat YALI Network atteste de la réussite de la formation Organisation communautaire et action.",
    objectives: ["Découvrir les principes de l’organisation communautaire et de l’action."],
    skills: ["Organisation communautaire", "Action collective"],
    status: "Certification obtenue",
    certificate: {
      id: "yali-organisation-communautaire-2025",
      title: "Certificate of completion — Organisation communautaire et action",
      sourcePath: "img/Nouveau certificats/Certificat_LESSENGUI_Organisation Communautaire et Action.pdf",
      url: "/img/formations/yali-organisation-communautaire-action.pdf",
    },
  },
  {
    slug: "leadership-responsable-gouvernance-yali",
    category: "leadership-gouvernance-citoyennete",
    date: "19 octobre 2025",
    title: "Leadership responsable, transparence et bonne gouvernance",
    organization: "YALI Network",
    organizationMark: "YALI",
    summary: "Formation YALI Network portant sur le leadership responsable, la transparence et la bonne gouvernance.",
    description: "Le certificat YALI Network atteste de la réussite de la formation sur le leadership responsable, la transparence et la bonne gouvernance.",
    objectives: ["Étudier les principes du leadership responsable, de la transparence et de la bonne gouvernance."],
    skills: ["Leadership responsable", "Transparence", "Bonne gouvernance"],
    status: "Certification obtenue",
    certificate: {
      id: "yali-leadership-gouvernance-2025",
      title: "Certificate of completion — Leadership responsable, transparence et bonne gouvernance",
      sourcePath: "img/Nouveau certificats/Certificat leadership transparent .pdf",
      url: "/img/formations/yali-leadership-transparence-gouvernance.pdf",
    },
  },
  {
    slug: "partenariats-public-prive-yali",
    category: "gestion-projets-developpement-durable",
    date: "19 octobre 2025",
    title: "Éléments de base des partenariats public-privé",
    organization: "YALI Network",
    organizationMark: "YALI",
    summary: "Formation YALI Network sur les éléments de base des partenariats public-privé.",
    description: "Le certificat YALI Network atteste de la réussite de la formation Éléments de base des partenariats public-privé.",
    objectives: ["Découvrir les éléments de base des partenariats public-privé."],
    skills: ["Principes des partenariats public-privé"],
    status: "Certification obtenue",
    certificate: {
      id: "yali-partenariats-public-prive-2025",
      title: "Certificate of completion — Éléments de base des partenariats public-privé",
      sourcePath: "img/Nouveau certificats/Certificat Éléments de Base des Partenariats Public-Privé.pdf",
      url: "/img/formations/yali-partenariats-public-prive.pdf",
    },
  },
  {
    slug: "elections-responsabilite-citoyenne-yali",
    category: "leadership-gouvernance-citoyennete",
    date: "19 octobre 2025",
    title: "Comprendre les élections et la responsabilité citoyenne",
    organization: "YALI Network",
    organizationMark: "YALI",
    summary: "Formation YALI Network portant sur les élections et la responsabilité citoyenne.",
    description: "Le certificat YALI Network atteste de la réussite de la formation Comprendre les élections et la responsabilité citoyenne.",
    objectives: ["Comprendre les élections et les notions de responsabilité citoyenne."],
    skills: ["Éducation citoyenne", "Responsabilité citoyenne"],
    status: "Certification obtenue",
    certificate: {
      id: "yali-elections-responsabilite-2025",
      title: "Certificate of completion — Comprendre les élections et la responsabilité citoyenne",
      sourcePath: "img/Nouveau certificats/Certificat election & responsabilité.pdf",
      url: "/img/formations/yali-elections-responsabilite-citoyenne.pdf",
    },
  },
  {
    slug: "egalite-femmes-hommes-education-oif",
    category: "education-recherche-communautaire",
    date: "Session octobre – novembre 2025",
    title: "Formation sur l’égalité filles-garçons dans l’éducation",
    organization: "Institut de la Francophonie pour l’Éducation et la Formation (IFEF) / Organisation internationale de la Francophonie (OIF)",
    organizationMark: "OIF",
    summary: "Formation en ligne sur l’égalité filles-garçons dans l’éducation.",
    description:
      "L’attestation de l’OIF confirme la participation à la formation en ligne sur l’égalité filles-garçons dans l’éducation, session d’octobre à novembre 2025.",
    objectives: ["Étudier les enjeux de l’égalité femmes-hommes dans l’éducation."],
    skills: ["Éducation à l’égalité filles-garçons"],
    status: "Attestation de participation obtenue",
    certificate: {
      id: "oif-egalite-filles-garcons-2025",
      title: "Attestation — Formation sur l’égalité filles-garçons dans l’éducation",
      sourcePath: "img/Nouveau certificats/_Attestation__formation_sur_lgalit_filles-garons_dans_lducation.pdf",
      url: "/img/formations/oif-egalite-femmes-hommes-education.pdf",
    },
  },
  {
    slug: "developpement-web-dclic-oif",
    category: "informatique-developpement-web",
    date: "Février – juillet 2025",
    title: "Développement web full-stack junior — Programme D-Clic",
    organization: "Organisation internationale de la Francophonie (OIF)",
    organizationMark: "OIF",
    duration: "6 mois",
    summary: "Programme D-Clic de développement web full-stack junior.",
    description: "Formation de six mois en développement web full-stack junior dans le cadre du programme D-Clic de l’OIF.",
    objectives: ["Se former au développement web full-stack junior."],
    skills: ["Développement web full-stack"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MongoDB", "GitHub"],
    status: "Formation suivie",
  },
  {
    slug: "formateurs-instruction-civique-education-morale",
    category: "education-recherche-communautaire",
    date: "Avril 2025",
    title: "Formation de formateurs en instruction civique et éducation morale",
    organization: "Ministère de la Jeunesse et des Sports",
    organizationMark: "MJS",
    summary: "Formation de formateurs en instruction civique et en éducation morale.",
    description: "Formation de formateurs en instruction civique et éducation morale, attestée par le certificat de fin de formation disponible.",
    objectives: ["Se former à l’instruction civique et à l’éducation morale en vue de la formation."],
    skills: ["Instruction civique", "Éducation morale", "Formation"],
    status: "Attestation de fin de formation obtenue",
    certificate: {
      id: "formateurs-instruction-civique-2025",
      title: "Certificat des formateurs — Instruction civique et éducation morale",
      sourcePath: "img/Nouveau certificats/Certificat des formateurs.pdf",
      url: "/img/formations/formation-formateurs-instruction-civique.pdf",
    },
  },
  {
    slug: "leadership-developpement-durable-ausp",
    category: "leadership-gouvernance-citoyennete",
    date: "23 novembre et 14 décembre 2024",
    title: "Atelier de leadership de l’AUSP (AUSP Leadership Workshop)",
    organization: "African Union Students’ Platform (AUSP)",
    organizationMark: "AUSP",
    logo: "/img/logos/ausp.jpg",
    summary: "Atelier de leadership et de développement organisationnel organisé par l’AUSP.",
    description: "L’attestation confirme la participation à l’AUSP Leadership Workshop des 23 novembre et 14 décembre 2024, consacré au leadership, au développement organisationnel et aux Agendas 2030 et 2063.",
    objectives: ["Approfondir les notions de leadership et de développement organisationnel abordées durant l’atelier."],
    skills: ["Leadership", "Développement organisationnel", "Agendas 2030 et 2063"],
    status: "Attestation de participation obtenue",
    certificate: {
      id: "ausp-leadership-workshop-2024",
      title: "Certificate of Participation — AUSP Leadership Workshop",
      sourcePath: "img/certificat leadership AUSP.png",
      url: "/img/certificat leadership AUSP.png",
    },
  },
  {
    slug: "gestion-caisse-paie-administration-personnel",
    category: "administration-developpement-professionnel",
    date: "Attestation délivrée le 10 mars 2025",
    title: "Gestion de caisse, gestion de paie et administration du personnel — option hôtesse d’accueil et réceptionniste",
    organization: "Programmes et Actions pour le Développement (PAD) / Centre international de renforcement de capacités professionnelles",
    organizationMark: "PAD",
    duration: "3 mois",
    summary: "Formation de trois mois en gestion de caisse, paie et administration du personnel, avec une option accueil et réception.",
    description: "L’attestation de fin de formation délivrée le 10 mars 2025 confirme la réussite de la formation en gestion de caisse, gestion de paie et administration du personnel, avec l’option hôtesse d’accueil et réceptionniste.",
    objectives: ["Se former à la gestion de caisse, de la paie et de l’administration du personnel."],
    skills: ["Gestion de caisse", "Gestion de paie", "Administration du personnel", "Accueil et réception"],
    status: "Attestation de fin de formation obtenue",
    certificate: {
      id: "pad-gestion-caisse-paie-personnel-2025",
      title: "Attestation de fin de formation — Gestion de caisse, paie et administration du personnel",
      sourcePath: "img/Certificat PAD.png",
      url: "/img/Certificat%20PAD.png",
    },
  },
  {
    slug: "tech-jeunesse-projet-professionnel",
    category: "administration-developpement-professionnel",
    date: "31 août 2024",
    title: "La tech au service de la jeunesse : construire son projet professionnel",
    organization: "Jeunesse & Perspectives",
    organizationMark: "J&P",
    summary: "Ateliers consacrés à l’usage de la technologie au service du projet professionnel des jeunes.",
    description: "L’attestation confirme la participation aux ateliers de Jeunesse & Perspectives sur le thème « La tech au service de la jeunesse : construire son projet professionnel », le 31 août 2024.",
    objectives: ["Réfléchir à la construction d’un projet professionnel et à la place de la technologie."],
    skills: ["Construction d’un projet professionnel", "Technologie au service de la jeunesse"],
    status: "Attestation de participation obtenue",
    certificate: {
      id: "jeunesse-perspectives-tech-projet-professionnel-2024",
      title: "Attestation de participation — Ateliers « La tech au service de la jeunesse »",
      sourcePath: "img/certificat perspective.png",
      url: "/img/certificat%20perspective.png",
    },
  },
  {
    slug: "programmation-langage-c",
    category: "informatique-developpement-web",
    date: "Novembre 2023 – février 2024",
    title: "Initiation à la programmation en langage C",
    organization: "Dev-C++, Visual Studio Code",
    organizationMark: "C",
    summary: "Initiation à la programmation en langage C.",
    description: "Formation d’initiation à la programmation en langage C.",
    objectives: ["Découvrir les bases de la programmation en langage C."],
    skills: ["Programmation en langage C"],
    technologies: ["Langage C", "Dev-C++", "Visual Studio Code"],
    status: "Formation suivie",
  },
  {
    slug: "gestion-temps-developpement-personnel",
    category: "administration-developpement-professionnel",
    date: "Novembre 2023",
    title: "Gestion du temps et développement personnel",
    organization: "Formation complémentaire",
    organizationMark: "FC",
    summary: "Formation complémentaire en gestion du temps et développement personnel.",
    description: "Formation complémentaire consacrée à la gestion du temps et au développement personnel.",
    objectives: ["Développer des connaissances en gestion du temps et en développement personnel."],
    skills: ["Gestion du temps", "Développement personnel"],
    status: "Formation suivie",
  },
  {
    slug: "leadership-en-ligne",
    category: "leadership-gouvernance-citoyennete",
    date: "Septembre 2023",
    title: "Leadership en ligne",
    organization: "Formation complémentaire",
    organizationMark: "FC",
    summary: "Formation complémentaire en leadership.",
    description: "Formation de leadership mentionnée dans le parcours.",
    objectives: ["Découvrir des notions de leadership."],
    skills: ["Leadership"],
    status: "Formation suivie",
  },
  {
    slug: "initiation-informatique-office-latex",
    category: "informatique-developpement-web",
    date: "Mars – juin 2020",
    title: "Initiation à l’informatique — Microsoft Office et LaTeX",
    organization: "Formation complémentaire",
    organizationMark: "IT",
    summary: "Initiation à l’informatique avec Microsoft Office et LaTeX.",
    description: "Formation complémentaire d’initiation à l’informatique portant sur Microsoft Office et LaTeX.",
    objectives: ["Se familiariser avec Microsoft Office et LaTeX."],
    skills: ["Bureautique", "Mise en forme de documents"],
    technologies: ["Microsoft Office", "LaTeX"],
    status: "Formation suivie",
  },
  {
    slug: "african-biogenome-biodiversite-one-health",
    category: "sciences-innovation",
    date: "7–8 septembre 2026",
    title: "Atelier régional African BioGenome Project et congrès sur les données de séquences numériques",
    organization: "African BioGenome Project (AfricaBP) / South African Medical Research Council (SAMRC)",
    organizationMark: "ABP",
    duration: "2 jours",
    summary: "Atelier régional sur la génomique de la biodiversité, l’approche One Health et les infrastructures de données de séquences numériques.",
    description:
      "Le certificat atteste de la participation à l’atelier régional African BioGenome Project, consacré à la génomique de la biodiversité et à l’approche One Health, ainsi qu’au premier Congrès africain sur les données de séquences numériques, leurs infrastructures et leurs politiques.",
    objectives: ["Explorer la génomique de la biodiversité et l’approche One Health.", "Aborder les infrastructures et les politiques liées aux données de séquences numériques en Afrique."],
    skills: ["Génomique de la biodiversité", "Approche One Health", "Politiques des données de séquences numériques"],
    status: "Attestation de participation obtenue",
    certificate: {
      id: "african-biogenome-workshop-2026",
      title: "Certificate of Participation — African BioGenome Project Regional Workshop",
      sourcePath: "img/Nouveau certificats/African BioGenome Project cerficat.jpeg",
      url: "/img/formations/african-biogenome-workshop.jpeg",
    },
  },
  {
    slug: "redaction-demandes-subvention-aphrc",
    category: "education-recherche-communautaire",
    date: "2 décembre 2025",
    title: "Rédaction de demandes de subvention pour les chercheurs en début et milieu de carrière en Afrique",
    organization: "African Population and Health Research Center (APHRC), avec le soutien de Wellcome",
    organizationMark: "APHRC",
    summary: "Formation en ligne à la rédaction de demandes de subvention pour des chercheurs africains en début et milieu de carrière.",
    description:
      "Le certificat de completion de l’APHRC atteste de la réussite de la formation en ligne sur la rédaction de demandes de subvention pour les chercheurs en début et milieu de carrière en Afrique.",
    objectives: ["Se former à la rédaction de demandes de subvention pour la recherche."],
    skills: ["Rédaction de demandes de subvention"],
    status: "Certification obtenue",
    certificate: {
      id: "aphrc-grant-writing-2025",
      title: "Certificate of Completion — Grant Writing for Early- and Mid-Career African Researchers",
      sourcePath: "img/Nouveau certificats/Certificate_of_completion.pdf",
      url: "/img/formations/aphrc-redaction-demandes-subvention.pdf",
    },
  },
];

export const skillCategories = [
  {
    title: "Maintenance industrielle & mécanique",
    skills: [
      "Maintenance préventive et corrective",
      "Diagnostic et résolution des pannes techniques",
      "Analyse et optimisation des équipements industriels",
      "Mécanique, réparation de moteurs et pompes d’injection",
      "Méthode 5 Pourquoi et fiches de retour d’expérience",
    ],
  },
  {
    title: "Gestion de projets & administration",
    skills: [
      "Structuration, analyse et suivi-évaluation de projets",
      "Planification, pilotage et coordination d’équipes",
      "Gestion administrative et du personnel",
      "Gestion des ressources, rapports et archivage",
      "Gestion de caisse et paie",
    ],
  },
  {
    title: "Leadership & gouvernance",
    skills: [
      "Leadership responsable, transparence et bonne gouvernance",
      "Collaboration et développement des effectifs en équipe",
      "Réseautage, diplomatie et communication interculturelle",
      "Organisation communautaire et mobilisation citoyenne",
      "Adaptabilité, créativité et innovation",
    ],
  },
  {
    title: "Numérique, STEM & bureautique",
    skills: [
      "Développement web : HTML, CSS et JavaScript",
      "Programmation en C et Python",
      "Business intelligence, cybersécurité et robotique VEX IQ",
      "Formation et éducation STEM",
      "Microsoft Office, LaTeX et RDM6",
    ],
  },
  {
    title: "Sciences, communication & langues",
    skills: [
      "Connaissances en mécanique et mathématiques",
      "Analyse et résolution de problèmes",
      "Éducation, formation et rédaction",
      "Français — excellent",
      "Anglais — intermédiaire ; quatre langues nationales congolaises",
    ],
  },
];

export function getTrainingCertificateUrl(training: Training) {
  return training.certificate?.url;
}

export const trainingCertificates = trainings.flatMap((training) =>
  training.certificate
    ? [{
        ...training.certificate,
        trainingSlug: training.slug,
        trainingTitle: training.title,
        organization: training.organization,
        date: training.date,
      }]
    : [],
);

export const skills = skillCategories.flatMap((category) => category.skills);

export const associativeCommitments = [
  {
    date: "Janvier 2026 – présent",
    title: "Directeur national",
    organization: "African Union Students’ Platform (AUSP) Congo",
    details: [
      "Représente officiellement l’organisation au Congo et veille à l’atteinte de ses objectifs nationaux dans le respect de sa Constitution.",
      "A mis en place le comité exécutif national, supervise l’ensemble des projets et programmes et participe systématiquement aux réunions exécutives.",
      "Développe le plan stratégique national et des projets conformes au plan de travail, alignés sur l’Agenda 2030 des Nations Unies et l’Agenda 2063 de l’Union africaine.",
      "Élabore des propositions de partenariat gagnantes avec des acteurs internationaux afin de renforcer les programmes nationaux.",
    ],
  },
  {
    date: "Janvier 2026 – présent",
    title: "Secrétaire général",
    organization: "YALI Congo Alumni",
    details: [
      "Supervise l’alignement des projets et programmes nationaux sur la mission du réseau YALI : leadership, entrepreneuriat, engagement civique et bonne gouvernance.",
      "Coordonne le bureau exécutif et les assemblées générales, veille à l’application des décisions et pilote la planification, le suivi et l’évaluation des programmes de leadership et d’éducation civique.",
      "Organise et supervise des ateliers de leadership, conférences, débats et projets communautaires, tout en développant des partenariats stratégiques de formation, de financement et de support technique.",
      "Pilote la gestion administrative et opérationnelle : planification des activités, suivi des objectifs, rapports d’avancement et communications institutionnelles.",
      "Maintient une communication régulière avec les adhérents, partenaires et parties prenantes, et assure la tenue des archives institutionnelles : procès-verbaux, correspondances et registres.",
    ],
  },
  {
    date: "2024 – présent",
    title: "Secrétaire général",
    organization: "ONG-BK",
    details: [
      "Coordonne les projets communautaires, gère au quotidien les financements associés et rédige les courriers administratifs nécessaires.",
      "Structure, analyse et suit-évalue les projets de l’ONG, puis rédige le plan d’exercice annuel.",
      "Appuie la conception et la mise en œuvre de programmes d’autonomisation des jeunes femmes et organise des ateliers sur le genre, la gouvernance inclusive et le leadership féminin.",
      "Anime des ateliers de formation, réalise un suivi-évaluation participatif des activités et rédige les rapports d’impact.",
      "Contribue aux initiatives climatiques et à la transition écologique locale, notamment en appuyant la formation des jeunes en économie verte et en innovation.",
    ],
  },
  {
    date: "Mars 2025 – présent",
    title: "Représentant et formateur",
    organization: "Adelphi Holding (États-Unis), République du Congo",
    details: [
      "Supervise la conception, le développement et le déploiement d’une plateforme de formation en ligne et de programmes STEM — codage, cybersécurité, business intelligence et robotique — pour les jeunes du Congo et de la RDC.",
      "Coordonne les équipes techniques et pédagogiques afin de garantir la qualité des contenus numériques et la structuration des modules.",
      "Conçoit, met en œuvre et anime des formations en développement web, programmation, cybersécurité, business intelligence et robotique VEX IQ.",
      "Prépare les apprenants aux compétitions nationales et internationales de robotique et développe des partenariats académiques et institutionnels pour promouvoir les STEM.",
      "Encadre les jeunes en robotique, codage et technologies émergentes afin de favoriser leur autonomisation numérique en Afrique centrale.",
    ],
  },
  {
    date: "2022 – 2025",
    title: "Organisation d’événements civiques et académiques",
    organization: "Initiatives communautaires et universitaires",
    details: [
      "A initié les Assises de Divenié (18–21 août 2024), un dialogue communautaire réunissant 230 participants — autorités, forces de sécurité, sages et chefs de quartiers — pour prévenir les tensions postélectorales et renforcer paix, cohésion sociale et tolérance politique.",
      "A coordonné la distribution de kits scolaires dans le département du Niari pour l’ONG-BK le 30 septembre 2024.",
      "A organisé la 3ᵉ édition de NDOSSI ONE (3–7 octobre 2023) : programme de cinq jours, 25 activités et plus de 6 000 étudiants touchés à l’Université Denis Sassou Nguesso pour promouvoir les sciences, les technologies et les STEM.",
      "A organisé la 2ᵉ édition de NDOSSI ONE (12–15 octobre 2022) à l’Université Denis Sassou Nguesso.",
      "A organisé ENSP-Connecte à l’Université Marien Ngouabi le 30 avril 2025.",
    ],
  },
];

export const otherAssociativeRoles = [
  "Représentant parlementaire de l’African Union Students’ Platform (AUSP) en République du Congo",
  "Membre de l’ONG Butterfly",
  "Secrétaire général du Collectif des cadres et capacités pour le développement communautaire",
  "Secrétaire général de l’Association Alpha Science Bêta Technologie",
  "Secrétaire chargé des relations extérieures de l’Association des étudiants de l’ENSP (AENSP)",
  "Secrétaire chargé de la culture et de l’éducation de l’Association Cri du Cœur",
];

export const publications = [
  {
    title: "Application de la formule de Leibniz pour la résolution de quelques intégrales généralisées",
    domain: "Mathématiques",
    publisher: "Éditions Universitaires Européennes",
    isbn: "978-66-30-15620-1",
    status: "Publié",
    image: "/img/Application%20de%20la%20formule%20de%20Leinniz%20img.jpeg",
    editions: [],
    href: "https://morebooks.de/shop-ui/shop/search?q=978-66-30-15620-1&page=1",
  },
  {
    title: "Analyse et optimisation du fonctionnement de la soutireuse K-123-626 de la société BRALICO",
    domain: "Mécanique",
    publisher: "Éditions Universitaires Européennes",
    isbn: "978-66-30-13132-1",
    status: "Publié · éditions multilingues",
    image: undefined,
    editions: [
      { language: "Édition originale", image: "/img/BRALICO.jpeg" },
      { language: "Français", image: "/img/BRALICO%20EN%20FRANCAIS.jpeg" },
      { language: "Russe", image: "/img/BRALICO%20EN%20RUSSE.jpeg" },
    ],
    href: "https://morebooks.de/shop-ui/shop/search?q=978-66-30-13132-1&page=1",
  },
  {
    title: "Apprendre le Yipunu",
    domain: "Littérature",
    publisher: "Éditions Universitaires Européennes",
    isbn: "978-66-30-22529-7",
    status: "Publié",
    image: undefined,
    editions: [],
    href: "https://morebooks.de/shop-ui/shop/product/9786630225297",
  },
  {
    title: "Histoire de ma vie",
    domain: "Littérature",
    publisher: "En cours",
    status: "En cours",
    isbn: undefined,
    image: undefined,
    editions: [],
    href: undefined,
  },
  {
    title: "Insuffisance du deuxième principe de la thermodynamique",
    domain: "Physique",
    publisher: "En cours",
    status: "En cours",
    isbn: undefined,
    image: undefined,
    editions: [],
    href: undefined,
  },
];

export const resumeDocuments = [
  {
    title: "CV en français",
    filename: "CV LESSENGUI Christ Juvalin_French.pdf",
    description: "Curriculum vitæ — version française",
  },
  {
    title: "CV Union africaine — Français",
    filename: "CV_LESSENGUI_Christ_Juvalin_UA en Français.pdf",
    description: "Candidature et parcours selon le format de l’Union africaine",
  },
];

export const interests = [
  "Lecture et recherche culturelle",
  "Technologies de l’information et de la communication",
  "Football",
  "Développement durable",
];

export const roles = [
  "Directeur national de l’African Union Students’ Platform (AUSP) Congo",
  "Secrétaire général de YALI Congo Alumni",
  "Secrétaire général de l’ONG-BK",
  "Représentant et formateur d’Adelphi Holding",
  ...otherAssociativeRoles,
];
export const services = [
  {
    title: "Innovation technologique",
    description:
      "Conseil et accompagnement autour de la business intelligence, de la cybersécurité et des technologies émergentes.",
    href: "/services/innovation-technologique",
    icon: "✳",
  },
  {
    title: "Gestion et suivi-évaluation de projets",
    description:
      "Structuration, analyse, suivi et évaluation de projets de développement.",
    href: "/services/gestion-projets",
    icon: "↗",
  },
  {
    title: "Développement web et digital",
    description:
      "Création de solutions web et appui à la transformation numérique.",
    href: "/services/developpement-web-digital",
    icon: "⌘",
  },
  {
    title: "Formation STEM et robotique",
    description:
      "Initiation des jeunes aux technologies, aux compétences numériques et à la robotique VEX IQ.",
    href: "/services/formation-stem-robotique",
    icon: "◎",
  },
  {
    title: "Maintenance industrielle",
    description:
      "Maintenance mécanique, entretien préventif et optimisation des équipements industriels.",
    href: "/services/maintenance-industrielle",
    icon: "⚙",
  },
  {
    title: "Leadership et gouvernance",
    description:
      "Accompagnement d’initiatives de leadership, d’engagement civique et de mobilisation communautaire.",
    href: "/services/leadership-gouvernance",
    icon: "◇",
  },
];

export const aiProfiles = [
  {
    slug: "ia-strategie-decision",
    name: "IA Stratégie & Décision",
    title: "IA Stratégie & Décision",
    description:
      "Un assistant d’analyse pour transformer les données en décisions plus rapides, plus claires et plus efficaces.",
    heroLine: "Voir plus vite. Décider avec plus de confiance.",
    summary:
      "Cette IA aide les équipes à synthétiser les informations, comparer plusieurs scénarios et orienter les choix stratégiques.",
    overview:
      "Elle s’adresse aux organisations qui veulent réduire le bruit informationnel, identifier les priorités et prendre des décisions mieux documentées. Elle transforme les tableaux, les rapports et les situations complexes en recommandations exploitables.",
    features: [
      "Analyse rapide des données et synthèses de performances",
      "Identification des tendances et des points de friction",
      "Aide à la priorisation des actions et à la planification",
    ],
    outcomes: [
      "Moins de temps perdu dans le tri d’informations.",
      "Des décisions plus structurées et mieux argumentées.",
      "Une meilleure visibilité sur les priorités de l’équipe.",
    ],
    metrics: [
      { label: "Usage", value: "Pilotage" },
      { label: "Valeur", value: "Clarté" },
      { label: "Impact", value: "Décision" },
    ],
    image: "/img/christ1.jpg",
  },
  {
    slug: "ia-support-client",
    name: "IA Support Client",
    title: "IA Support Client",
    description:
      "Une IA dédiée à l’assistance clientèle, répondant rapidement, de manière claire et en continu.",
    heroLine: "Répondre vite. Servir mieux. Construire la confiance.",
    summary:
      "Cette solution automatise la première ligne de contact pour répondre aux demandes fréquentes et orienter les cas complexes vers les bons interlocuteurs.",
    overview:
      "Conçue pour les entreprises qui veulent améliorer la qualité du service sans augmenter la charge manuelle, elle fournit des réponses rapides, homogènes et traçables pour une meilleure expérience client.",
    features: [
      "Réponses instantanées aux demandes courantes",
      "Qualification des demandes et routage intelligent",
      "Support multicanal et suivi des interactions",
    ],
    outcomes: [
      "Des temps de réponse nettement plus rapides.",
      "Un meilleur niveau de service sans surcharge opérationnelle.",
      "Plus de cohérence dans les réponses et le parcours client.",
    ],
    metrics: [
      { label: "Usage", value: "Service" },
      { label: "Valeur", value: "Réactivité" },
      { label: "Impact", value: "Satisfaction" },
    ],
    image: "/img/Lessengui%20img2.jpg",
  },
  {
    slug: "ia-productivite-automatisation",
    name: "IA Productivité & Automatisation",
    title: "IA Productivité & Automatisation",
    description:
      "Un assistant intelligent pour automatiser les tâches répétitives et libérer du temps pour les missions à forte valeur.",
    heroLine: "Automatiser les tâches. Libérer le potentiel humain.",
    summary:
      "Cette IA aide à structurer les workflows, traiter les données et accompagner les équipes dans des tâches répétitives ou chronophages.",
    overview:
      "Elle est pensée pour améliorer l’efficacité des organisations sans complexifier les usages. Elle simplifie la gestion administrative, la préparation de documents, la collecte d’informations et l’exécution de tâches standardisées.",
    features: [
      "Automatisation des tâches répétitives et chronophages",
      "Rédaction assistée et préparation de contenus",
      "Structuration des flux de travail et organisation des données",
    ],
    outcomes: [
      "Plus de temps pour les décisions et l’exécution stratégique.",
      "Une meilleure organisation des tâches et des informations.",
      "Des équipes plus rapides et plus concentrées sur leur cœur de métier.",
    ],
    metrics: [
      { label: "Usage", value: "Opération" },
      { label: "Valeur", value: "Efficacité" },
      { label: "Impact", value: "Gain de temps" },
    ],
    image: "/img/christ2.jpg",
  },
];

const trainingCertificateProjects = trainingCertificates.map((certificate) => ({
  title: certificate.title,
  category: "Certificats",
  image: certificate.url,
  href: `/formations/${certificate.trainingSlug}`,
  description: `${certificate.trainingTitle} · ${certificate.organization} · ${certificate.date}`,
}));

export const projects = [
  {
    title: "Site web de ONG BK",
    category: "Applications",
    image: "/assets/img/portfolio/app-1.jpg",
    href: "https://ongbk.vercel.app/",
    description: "Site web de l’ONG BK.",
  },
  ...trainingCertificateProjects,
  {
    title: "Attestation de fin de stage — BRALICO",
    category: "Distinctions & attestations",
    image: "/img/nouveaux-certificats/bralico.jpeg",
    href: "/img/nouveaux-certificats/bralico.jpeg",
    description: "Attestation de fin de stage en maintenance mécanique au sein de la Direction technique de BRALICO.",
  },
  {
    title: "Nomination au Parlement AUSP",
    category: "Distinctions & attestations",
    image: "/img/Certificat AUSP parliament.png",
    href: "/portfolio/nomination-au-parlement-ausp",
    description: "Reconnaissance en qualité de parlementaire de la cohorte AUSP 2025, distincte d’une attestation de fin de formation.",
  },
  {
    title: "Attestation de membre organisateur — 2e Semaine des activités scientifiques (2023–2024)",
    category: "Distinctions & attestations",
    image: "/img/Certificat ndossi one 2023.png",
    href: "/portfolio/leadership-gouvernance-2023",
    description: "Attestation de participation en qualité de membre organisateur à la Semaine des activités scientifiques de la Faculté des Sciences Appliquées.",
  },
  {
    title: "Attestation de membre organisateur — 1re Semaine des activités scientifiques (2022–2023)",
    category: "Distinctions & attestations",
    image: "/img/Ndossi one 2022.png",
    href: "/portfolio/certificat-leadership-2022",
    description: "Attestation de participation en qualité de membre organisateur à la Semaine des activités scientifiques de la Faculté des Sciences Appliquées.",
  },
];

export const certificates = [
  "CERTIFICAT_DE_REUSSITE IDEP JEUNE NEGOCIATEUR.pdf",
  "CERTIFICAT_DE_REUSSITE_IDEP-min.pdf",
  "Certificat Collaboration et Developpement des Effectifs_YALINETWORK.pdf",
  "Certificat Un Leadership Responsable en Matière de Transparence et de Bonne Gouvernance_YALINETWORK.pdf",
  "Certificat election & responsabilité_YALINETWORK.pdf",
  "Certificat Éléments de Base des Partenariats Public-Privé_YALINETWORK.pdf",
  "_Attestation__formation_sur_lgalit_filles-garons_dans_lducation.pdf",
];

export const serviceDetails = [
  {
    slug: "innovation-technologique",
    title: "Innovation technologique",
    summary:
      "Conseil et accompagnement autour de la business intelligence, du numérique, de la cybersécurité et des technologies émergentes.",
    overview:
      "J’accompagne les structures et les jeunes talents dans l’identification de solutions concrètes, plus performantes, plus vertes et mieux alignées avec leurs objectifs.",
    focus: [
      "Analyse de besoins et cadrage stratégique",
      "Conception de solutions digitales orientées impact",
      "Accompagnement sur la transformation numérique",
    ],
    outcomes: [
      "Des projets plus lisibles, structurés et mobilisateurs.",
      "Une meilleure visibilité des données et des opportunités de développement.",
      "Un accompagnement orienté résultats et innovation responsable.",
    ],
    metrics: [
      { label: "Spécialité", value: "Numérique & BI" },
      { label: "Approche", value: "Impact + stratégie" },
      { label: "Cadre", value: "Afrique et diaspora" },
    ],
  },
  {
    slug: "gestion-projets",
    title: "Gestion et suivi-évaluation de projets",
    summary:
      "Structuration, analyse, suivi et évaluation de projets de développement dans une logique de performance et d’impact social.",
    overview:
      "Je mets à profit une logique de projet claire pour aider les organisations à mieux planifier, piloter et rendre compte de leurs actions.",
    focus: [
      "Planification et cadrage de projets",
      "Suivi-évaluation et reporting",
      "Gestion des ressources et coordination d’équipe",
    ],
    outcomes: [
      "Une meilleure gouvernance des initiatives.",
      "Plus de clarté dans la mise en œuvre et la mesure d’impact.",
      "Un pilotage plus efficace des projets de développement.",
    ],
    metrics: [
      { label: "Focus", value: "Suivi d’impact" },
      { label: "Compétence", value: "Organisation" },
      { label: "Valeur", value: "Clarté + résultats" },
    ],
  },
  {
    slug: "developpement-web-digital",
    title: "Développement web et digital",
    summary:
      "Création de solutions web, de sites vitrine et d’outils numériques utiles pour les organisations et les projets de développement.",
    overview:
      "Le numérique est un levier fort pour la visibilité, la communication, la sensibilisation et la gestion de données.",
    focus: [
      "Sites vitrines et portfolios",
      "Interfaces simples et modernes",
      "Appui à la transformation numérique",
    ],
    outcomes: [
      "Une présence digitale plus crédible et plus fluide.",
      "Des outils plus accessibles pour les publics cibles.",
      "Un niveau de professionnalisation renforcé.",
    ],
    metrics: [
      { label: "Stack", value: "HTML / CSS / JS / Next" },
      { label: "Sens", value: "Accessible & moderne" },
      { label: "But", value: "Visibilité + engagement" },
    ],
  },
  {
    slug: "formation-stem-robotique",
    title: "Formation STEM et robotique",
    summary:
      "Initiation des jeunes aux sciences, à la robotique, à la technologie et à la culture innovante pour renforcer leur autonomie.",
    overview:
      "Je crois profondément à la puissance des technologies pour ouvrir des opportunités aux jeunes, surtout dans les contextes où l’accès à l’innovation reste limité.",
    focus: [
      "Ateliers STEM et robotique",
      "Sensibilisation aux métiers du numérique",
      "Encadrement et mentorat de jeunes",
    ],
    outcomes: [
      "Plus d’intérêt pour les matières scientifiques.",
      "Un appui concret à l’inclusion et à la motivation des jeunes.",
      "Des communautés plus engagées et mieux outillées.",
    ],
    metrics: [
      { label: "Public", value: "Jeunes & étudiants" },
      { label: "Format", value: "Ateliers & mentorat" },
      { label: "Impact", value: "Inclusion + curiosité" },
    ],
  },
  {
    slug: "maintenance-industrielle",
    title: "Maintenance industrielle",
    summary:
      "Maintenance mécanique, entretien préventif et optimisation des équipements pour garantir la continuité des activités.",
    overview:
      "Le bon fonctionnement des équipements est essentiel à la performance des systèmes de production et des activités industrielles.",
    focus: [
      "Maintenance préventive et curative",
      "Diagnostic et optimisation des équipements",
      "Mécanique et amélioration des ateliers",
    ],
    outcomes: [
      "Une meilleure fiabilité des installations.",
      "Moins de temps d’arrêt et plus d’efficience opérationnelle.",
      "Des structures plus durables et mieux maîtrisées.",
    ],
    metrics: [
      { label: "Domaine", value: "Industrie" },
      { label: "Objectif", value: "Performance & fiabilité" },
      { label: "Valeur", value: "Continuité d’activité" },
    ],
  },
  {
    slug: "leadership-gouvernance",
    title: "Leadership et gouvernance",
    summary:
      "Accompagnement d’initiatives de leadership, de mobilisation citoyenne et de gouvernance collective au service du développement.",
    overview:
      "Les meilleurs projets naissent quand les personnes sont bien organisées, engagées et guidées par une vision claire.",
    focus: [
      "Accompagnement du leadership jeune",
      "Gouvernance et coordination collective",
      "Mobilisation communautaire et engagement civique",
    ],
    outcomes: [
      "Des équipes plus motivées et mieux organisées.",
      "Un engagement citoyen renforcé dans la communauté.",
      "Une dynamique collective favorable à l’action publique et sociale.",
    ],
    metrics: [
      { label: "Valeur", value: "Engagement" },
      { label: "Cadre", value: "Jeunesse & communauté" },
      { label: "Mission", value: "Impact local" },
    ],
  },
];

export const storyDetails = [
  {
    slug: "histoire-de-ma-vie",
    title: "Histoire de ma vie",
    intro:
      "Né à Divenié, dans le département du Niari, j’ai grandi entre épreuves, solidarité et rêves d’avenir. Ce récit retrace le chemin d’un enfant du village devenu acteur de son propre parcours.",
    paragraphs: [
      "Mon parcours est marqué par une grande curiosité pour les sciences et les technologies, ainsi qu’un désir profond d’apprendre et d’agir.",
      "À travers les études, les stages et les responsabilités associatives, j’ai appris à relier le travail technique, le sens social et l’ambition collective.",
      "Aujourd’hui, je cherche à construire un parcours où la compétence technique sert le développement durable et la transformation des communautés.",
    ],
  },
  {
    slug: "engagements-leadership",
    title: "Engagements & leadership",
    intro:
      "Le leadership prend tout son sens lorsqu’il transforme une responsabilité en action collective, structurée et utile aux communautés.",
    paragraphs: [
      "De la représentation institutionnelle à la coordination de projets, mes engagements m’amènent à fédérer des équipes, à organiser l’action et à créer des espaces où les jeunes peuvent prendre part aux décisions.",
      "Au sein de l’AUSP Congo et de YALI Congo Alumni, je contribue à structurer la gouvernance, à définir des priorités et à faire avancer des programmes liés au leadership, à l’éducation et à la citoyenneté. Avec l’ONG-BK et Adelphi Holding, cet engagement se prolonge dans des actions de terrain, de formation et d’autonomisation.",
      "Cette expérience m’a appris qu’un leadership durable repose autant sur l’écoute et la coopération que sur la capacité à planifier, mobiliser des partenaires, suivre les résultats et transmettre des compétences.",
    ],
  },
  {
    slug: "activites-realisees",
    title: "Activités réalisées",
    intro:
      "Des dialogues communautaires aux rendez-vous universitaires, ces activités traduisent une même volonté : réunir les personnes, faire circuler les savoirs et créer des occasions d’apprendre et d’agir.",
    paragraphs: [
      "J’ai contribué à des initiatives civiques et académiques dans le Niari et à Brazzaville. Elles ont pris des formes différentes — dialogue public, distribution de kits scolaires, programmation STEM et rencontre universitaire — mais reposent toutes sur la préparation, la coordination et le travail avec les acteurs concernés.",
      "Voici quelques repères de ces activités, avec leurs dates et les éléments documentés. Ils montrent comment l’organisation d’événements peut soutenir la cohésion sociale, l’accès à l’éducation et l’intérêt des jeunes pour les sciences.",
    ],
  },
  {
    slug: "parcours-personnel",
    title: "Parcours personnel",
    intro:
      "De Divenié à Brazzaville, mon parcours s’est construit étape par étape : une formation scientifique, une spécialisation en maintenance industrielle et des expériences qui relient l’apprentissage au terrain.",
    paragraphs: [
      "Après le BEPC obtenu dans le parcours suivi au CEG de Divenié, j’ai poursuivi mes études au lycée de Nkayi où j’ai préparé un baccalauréat scientifique, série C. Cette base m’a conduit vers la physique, puis vers la maintenance industrielle à l’Université Marien Ngouabi et à l’École Nationale Supérieure Polytechnique.",
      "Les stages en atelier de mécanique générale et chez BRALICO m’ont permis de confronter les enseignements aux réalités des équipements, du diagnostic et de la maintenance. L’enseignement et la gestion documentaire numérique prolongent aujourd’hui ce parcours dans la transmission et les services numériques.",
      "La chronologie ci-dessous rassemble les étapes de formation et les expériences professionnelles documentées dans mon parcours.",
    ],
  },
  {
    slug: "transition-ecologique",
    title: "Transition écologique",
    intro:
      "La transition écologique relie les enjeux climatiques mondiaux aux choix et aux compétences qui peuvent faire évoluer les pratiques localement.",
    paragraphs: [
      "Mon engagement sur ce sujet se traduit par une formation consacrée aux négociations sur le changement climatique pour les jeunes négociateurs africains, ainsi que par ma contribution aux initiatives climatiques et à la transition écologique locale avec l’ONG-BK.",
      "Dans ce cadre, j’appuie notamment la formation de jeunes en économie verte et en innovation. Cette démarche complète mon intérêt pour le développement durable : comprendre les enjeux, renforcer les capacités et relier les apprentissages aux réalités du territoire.",
      "La transition demande des connaissances, du dialogue et des solutions adaptées aux communautés. Elle représente un champ d’apprentissage et d’action où les jeunes peuvent prendre part aux transformations de leur environnement.",
    ],
  },
  {
    slug: "impact-developpement",
    title: "Impact & développement",
    intro:
      "Faire du développement une réalité, c’est relier les besoins du terrain aux compétences, aux partenariats et aux initiatives qui ouvrent des perspectives durables.",
    paragraphs: [
      "Mon engagement s’articule autour de leviers complémentaires : prévenir les tensions et renforcer la cohésion, élargir l’accès à l’éducation et aux sciences, soutenir l’inclusion, puis donner aux jeunes des outils pour agir dans leur environnement.",
      "Ces leviers prennent forme dans des initiatives concrètes : un dialogue communautaire à Divenié, des événements STEM à l’Université Denis Sassou Nguesso, des programmes d’autonomisation avec l’ONG-BK et des formations technologiques destinées aux jeunes du Congo et de la RDC.",
      "Les chiffres témoignent de l’ampleur de certaines actions, mais l’impact se mesure aussi dans les capacités acquises, les liens créés et les projets que les participants peuvent ensuite faire grandir. C’est pourquoi je privilégie la coopération avec les communautés, les établissements et les partenaires, ainsi que le suivi des activités et de leurs résultats.",
    ],
  },
];

export const impactHighlights = [
  {
    label: "Paix & cohésion sociale",
    title: "Créer des espaces de dialogue",
    description:
      "Les Assises de Divenié ont réuni autorités, forces de sécurité, sages et chefs de quartiers autour de la prévention des tensions postélectorales, de la tolérance politique et de la cohésion sociale.",
    metric: "230 participants · 18–21 août 2024",
  },
  {
    label: "Éducation & STEM",
    title: "Rendre les sciences accessibles",
    description:
      "La 3ᵉ édition de NDOSSI ONE a proposé un programme universitaire de cinq jours, avec des activités destinées à susciter l’intérêt des étudiants pour les sciences et les technologies.",
    metric: "25 activités · plus de 6 000 étudiants touchés",
  },
  {
    label: "Inclusion & autonomisation",
    title: "Faire progresser la participation",
    description:
      "Avec l’ONG-BK, des ateliers abordent le genre, la gouvernance inclusive et le leadership féminin, en complément des initiatives d’autonomisation des jeunes femmes.",
    metric: "Ateliers, accompagnement et suivi participatif",
  },
  {
    label: "Compétences numériques",
    title: "Former aux technologies d’avenir",
    description:
      "Les programmes d’Adelphi Holding associent formation en ligne et apprentissages pratiques en programmation, cybersécurité, business intelligence et robotique VEX IQ.",
    metric: "Jeunes du Congo et de la RDC",
  },
];

export const activityHighlights = [
  {
    date: "12–15 octobre 2022",
    category: "Événement universitaire",
    title: "2ᵉ édition de NDOSSI ONE",
    description:
      "Organisation de la deuxième édition de NDOSSI ONE à l’Université Denis Sassou Nguesso, à Brazzaville.",
  },
  {
    date: "3–7 octobre 2023",
    category: "Sciences & technologies",
    title: "3ᵉ édition de NDOSSI ONE",
    description:
      "Coordination d’un programme de cinq jours à l’Université Denis Sassou Nguesso : 25 activités et plus de 6 000 étudiants touchés pour promouvoir les sciences, les technologies et les STEM.",
  },
  {
    date: "18–21 août 2024",
    category: "Dialogue & cohésion sociale",
    title: "Assises de Divenié",
    description:
      "Initiation et organisation d’un dialogue communautaire réunissant 230 participants — autorités, forces de sécurité, sages et chefs de quartiers — pour prévenir les tensions postélectorales et renforcer la paix, la cohésion sociale et la tolérance politique.",
  },
  {
    date: "30 septembre 2024",
    category: "Éducation",
    title: "Distribution de kits scolaires dans le Niari",
    description:
      "Coordination d’une distribution de kits scolaires dans le département du Niari pour le compte de l’ONG-BK.",
  },
  {
    date: "30 avril 2025",
    category: "Rencontre académique",
    title: "ENSP-Connecte",
    description:
      "Organisation de l’événement ENSP-Connecte à l’Université Marien Ngouabi, à Brazzaville.",
  },
];

export const projectDetails = [
  {
    slug: "systeme-gmao-cloud",
    title: "Système GMAO Cloud",
    category: "Applications",
    summary: "Solution de gestion des équipements et des interventions techniques en environnement industriel.",
    image: "/assets/img/portfolio/app-1.jpg",
    bullets: [
      "Suivi des équipements, interventions et pièces de rechange.",
      "Centralisation des données de maintenance et des historiques techniques.",
      "Amélioration de la fiabilité et de la planification des activités.",
    ],
  },
  {
    slug: "dashboard-analytics-temps-reel",
    title: "Dashboard Analytics temps réel",
    category: "Applications",
    summary: "Tableau de bord conçu pour suivre la performance et les indicateurs clés dans le temps réel.",
    image: "/assets/img/portfolio/app-2.jpg",
    bullets: [
      "Visibilité sur les tendances et les performances opérationnelles.",
      "Mise en place d’indicateurs utiles pour la prise de décision.",
      "Présentations plus lisibles pour les décideurs et les équipes.",
    ],
  },
  {
    slug: "plateforme-formation-elearning",
    title: "Plateforme de formation E-learning",
    category: "Applications",
    summary: "Expérience numérique pour l’apprentissage, le suivi et l’accès aux contenus pédagogiques.",
    image: "/assets/img/portfolio/app-3.jpg",
    bullets: [
      "Organisation du contenu pédagogique de manière claire.",
      "Accès simple et scalable pour les apprenants.",
      "Approche orientée parcours, suivi et progression.",
    ],
  },
  {
    slug: "plateforme-ecommerce-securisee",
    title: "Plateforme e-commerce sécurisée",
    category: "Produits",
    summary: "Expérience commerciale en ligne pensée pour la gestion de stock, de commandes et de clients.",
    image: "/assets/img/portfolio/product-1.jpg",
    bullets: [
      "Gestion des catalogues et des commandes.",
      "Optimisation de la relation client et du parcours d’achat.",
      "Cadre pensé pour un produit scalable et fiable.",
    ],
  },
  {
    slug: "crm-intelligent",
    title: "CRM intelligent",
    category: "Produits",
    summary: "Outil de gestion de la relation client pour centraliser les interactions et l’activité commerciale.",
    image: "/assets/img/portfolio/product-2.jpg",
    bullets: [
      "Centralisation des données clients et des prises de contact.",
      "Meilleure organisation de la vente et du suivi.",
      "Aide à la décision et au pilotage commercial.",
    ],
  },
  {
    slug: "systeme-erp-modulaire",
    title: "Système ERP modulaire",
    category: "Produits",
    summary: "Plateforme intégrée pour centraliser plusieurs fonctions et processus d’organisation.",
    image: "/assets/img/portfolio/product-3.jpg",
    bullets: [
      "Gestion conjointe des opérations internes et des ressources.",
      "Cohérence des données entre services.",
      "Plus d’efficacité et de réactivité organisationnelle.",
    ],
  },
  {
    slug: "certificat-idep-gestion-projets",
    title: "Certificat IDEP — Gestion de projets",
    category: "Certificats",
    summary: "Formation autour de la structuration, de l’analyse et du suivi-évaluation des projets de développement.",
    image: "/img/Certificat gestion des projets.png",
    bullets: [
      "Renforcement de la capacité à cadrer des projets.",
      "Mise en œuvre d’une logique de suivi et d’évaluation.",
      "Approche utile pour les projets publics et privés.",
    ],
  },
  {
    slug: "nomination-au-parlement-ausp",
    title: "Nomination au Parlement AUSP",
    category: "Certificats",
    summary: "Reconnaissance institutionnelle dans le cadre de la représentation estudiantine et de la gouvernance.",
    image: "/img/Certificat AUSP parliament.png",
    bullets: [
      "Participation à des mécanismes de représentation.",
      "Appui à la gouvernance étudiante et à l’engagement collectif.",
      "Contribution à l’expression des jeunes dans les structures de décision.",
    ],
  },
  {
    slug: "leadership-gouvernance-2023",
    title: "Leadership et gouvernance — 2023",
    category: "Certificats",
    summary: "Certification démontrant une implication dans les dynamiques de leadership, de gouvernance et d’action collective.",
    image: "/img/Certificat ndossi one 2023.png",
    bullets: [
      "Renforcement du sens de la responsabilité collective.",
      "Approfondissement des dimensions politique, sociale et citoyenne.",
      "Consolidation d’une posture de leader responsable.",
    ],
  },
  {
    slug: "certificat-leadership-ausp",
    title: "Certificat Leadership AUSP",
    category: "Certificats",
    summary: "Formation à la leadership, à la gouvernance et à l’inclusion dans les structures de jeunesse.",
    image: "/img/certificat leadership AUSP.png",
    bullets: [
      "Approfondissement de la gouvernance locale et associatives.",
      "Développement d’une culture du leadership responsable.",
      "Valorisation des compétences de coordination et d’engagement.",
    ],
  },
  {
    slug: "certificat-leadership-2022",
    title: "Certificat Leadership — 2022",
    category: "Certificats",
    summary: "Formation sur le leadership, la prise de décision et la gestion d’équipe dans des contextes dynamiques.",
    image: "/img/Ndossi one 2022.png",
    bullets: [
      "Compréhension plus nette des mécanismes de coordination.",
      "Mieux appréhender la gestion des équipes et des priorités.",
      "Renforcement des qualités de décision et de responsabilité.",
    ],
  },
  {
    slug: "perspectives-entrepreneuriales",
    title: "Perspectives entrepreneuriales",
    category: "Certificats",
    summary: "Programme dédié à la pensée entrepreneuriale, à l’innovation et à la création de projets viables.",
    image: "/img/certificat perspective.png",
    bullets: [
      "Approche sur les modèles d’affaires inclusifs.",
      "Mise en lumière du potentiel entrepreneurial des jeunes.",
      "Combinaison entre innovation, stratégie et impact social.",
    ],
  },
  {
    slug: "economie-developpement-pad",
    title: "Économie du développement — PAD",
    category: "Certificats",
    summary: "Certification sur les enjeux économiques et les mécanismes de développement social et territorial.",
    image: "/img/Certificat PAD.png",
    bullets: [
      "Approfondissement de la compréhension des dynamiques de développement.",
      "Mieux analyser les leviers économiques et sociaux.",
      "Consolidation d’une approche intégrée et durable.",
    ],
  },
];
