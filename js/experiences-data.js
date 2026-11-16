/* ==== DÉTAIL DES EXPÉRIENCES : contexte, ce que j’ai fait, résultats chiffrés, technologies.
   Même principe que js/data.js : chaque texte existe en 2 versions [français, anglais].
   Le numéro d’une expérience correspond à l’ordre des cartes du bloc EXPÉRIENCES (0 = la première). ==== */
const XPD=[
 {
  "c": "c",
  "t": [
   "Consultante technique CRM · Capgemini",
   "Technical CRM consultant · Capgemini"
  ],
  "x": [
   "Alternance · Nantes · Sept. 2025 — Sept. 2026",
   "Work-study · Nantes · Sept. 2025 — Sept. 2026"
  ],
  "ctx": [
   "Alternance de 12 mois au sein d’une équipe de conseil ServiceNow (CSM/ITSM). Mission : accompagner de grands comptes de trois secteurs (santé, banque, transport) dans le paramétrage, l’intégration et le maintien en conditions opérationnelles (MCO) de leur plateforme, en Agile Scrum.",
   "12-month work-study within a ServiceNow (CSM/ITSM) consulting team. Mission: supporting large accounts in three sectors (healthcare, banking, transport) with the configuration, integration and application maintenance (MCO) of their platform, in Agile Scrum."
  ],
  "b": [
   [
    "<b>Santé Publique France (santé)</b> : transformation et MCO ITSM. Traitement des incidents N1/N2/N3, traduction des besoins métiers en spécifications et paramétrage low-code de workflows automatisés sous ServiceNow.",
    "<b>Crédit Agricole (banque)</b> : montée de version et déploiement SI. Analyse fonctionnelle des Release Notes, revue et traitement de 550 Skip Records, résolution de 8 à 10 anomalies de configuration, rédaction du Runbook d’exploitation.",
    "<b>RATP (transport)</b> : recette et qualité applicative. Exécution de plus de 35 cas de tests d’intégration et de recette métier."
   ],
   [
    "<b>Santé Publique France (healthcare)</b>: ITSM transformation and maintenance. Handling L1/L2/L3 incidents, turning business needs into specifications and low-code configuration of automated workflows on ServiceNow.",
    "<b>Crédit Agricole (banking)</b>: version upgrade and IS deployment. Functional analysis of the release notes, review and processing of 550 Skip Records, fixing 8 to 10 configuration issues, writing the operations Runbook.",
    "<b>RATP (transport)</b>: acceptance testing and application quality. Running over 35 integration and business acceptance test cases."
   ]
  ],
  "res": [
   {
    "n": "3",
    "l": [
     "grands comptes, 3 secteurs",
     "large accounts, 3 sectors"
    ]
   },
   {
    "n": "550",
    "l": [
     "Skip Records traités",
     "Skip Records processed"
    ]
   },
   {
    "n": "8–10",
    "l": [
     "anomalies de configuration résolues",
     "configuration issues fixed"
    ]
   },
   {
    "n": "35+",
    "l": [
     "cas de tests d’intégration et de recette",
     "integration and acceptance test cases"
    ]
   }
  ],
  "rb": [
   [
    "Santé Publique France : processus internes plus fluides et suivi des demandes métiers optimisé.",
    "Crédit Agricole : mise en production sécurisée et fiabilisée.",
    "RATP : conformité de l’application validée avant déploiement auprès des utilisateurs."
   ],
   [
    "Santé Publique France: smoother internal processes and better tracking of business requests.",
    "Crédit Agricole: secure and reliable go-live.",
    "RATP: application compliance validated before rollout to users."
   ]
  ],
  "s": [
   "ServiceNow (CSM/ITSM)",
   "ITIL",
   "Jira",
   "EasyVista",
   "JavaScript",
   "Tests fonctionnels",
   "Agile Scrum"
  ]
 },
 {
  "c": "s",
  "t": [
   "Détection de fraude par IA et graphes · Hitachi",
   "AI & graph fraud detection · Hitachi"
  ],
  "x": [
   "Projet ESEO · Angers · Oct. 2025 — Janv. 2026",
   "ESEO project · Angers · Oct. 2025 — Jan. 2026"
  ],
  "ctx": [
   "Projet réalisé dans le cadre de ma formation à l’ESEO pour Hitachi : détecter automatiquement des comportements frauduleux dans des données transactionnelles complexes de transport en commun, sans exemples de fraude étiquetés (approche non supervisée).",
   "Project carried out during my ESEO studies for Hitachi: automatically detecting fraudulent behaviour in complex mass-transit transaction data, without labelled fraud examples (unsupervised approach)."
  ],
  "b": [
   [
    "Conception et développement d’un pipeline complet sous Python (Pandas, NumPy) : préparation de plus de 100 000 données transactionnelles aux formats XML et CSV, fusion de jeux de données Parquet et CSV.",
    "Construction d’un graphe hétérogène à plusieurs types de nœuds et intégration de modèles d’apprentissage sur graphes (GAT) avec PyTorch Geometric.",
    "Clustering avec Isolation Forest pour repérer les anomalies et automatiser l’analyse.",
    "Résolution de problèmes de mémoire et de compatibilité PyTorch, documentation technique et visualisations pour les présentations (Power BI)."
   ],
   [
    "End-to-end Python pipeline (Pandas, NumPy): preparing over 100,000 transaction records in XML and CSV, merging Parquet and CSV datasets.",
    "Building a heterogeneous graph with several node types and integrating graph learning models (GAT) with PyTorch Geometric.",
    "Clustering with Isolation Forest to spot anomalies and automate the analysis.",
    "Fixing memory and PyTorch compatibility issues, writing the technical documentation and visualisations for presentations (Power BI)."
   ]
  ],
  "res": [
   {
    "n": "100 000+",
    "l": [
     "données transactionnelles traitées",
     "transaction records processed"
    ]
   },
   {
    "n": "92 %",
    "l": [
     "de réduction du périmètre d’analyse",
     "reduction of the analysis scope"
    ]
   },
   {
    "n": "100 %",
    "l": [
     "de précision et de rappel sur le jeu de validation",
     "precision and recall on the validation set"
    ]
   }
  ],
  "s": [
   "Python",
   "PyTorch Geometric",
   "Scikit-Learn",
   "Pandas",
   "NumPy",
   "Power BI",
   "Git"
  ]
 },
 {
  "c": "v",
  "t": [
   "Développeuse full-stack · ImsCloud",
   "Full-stack developer · ImsCloud"
  ],
  "x": [
   "Stage · Le Mans · Juil. — Oct. 2024",
   "Internship · Le Mans · Jul. — Oct. 2024"
  ],
  "ctx": [
   "Stage de 4 mois au sein de l’équipe produit d’ImsCloud, sur une application web de gestion de commandes utilisée par deux profils d’utilisateurs, en Agile (Kanban).",
   "4-month internship within ImsCloud’s product team, on an order management web application used by two user profiles, in Agile (Kanban)."
  ],
  "b": [
   [
    "Développement full-stack de widgets interactifs de tableau de bord (React JS côté interface, Node JS et Express JS côté serveur).",
    "Amélioration de la visualisation des données en temps réel et de l’expérience utilisateur.",
    "Participation au développement de nouvelles fonctionnalités et collaboration avec l’équipe produit pour répondre aux besoins métier.",
    "Maquettes sous Figma et versionnage avec Git."
   ],
   [
    "Full-stack development of interactive dashboard widgets (React JS on the front end, Node JS and Express JS on the back end).",
    "Better real-time data visualisation and user experience.",
    "Contribution to new features and collaboration with the product team to meet business needs.",
    "Mockups in Figma and version control with Git."
   ]
  ],
  "res": [
   {
    "n": "4",
    "l": [
     "mois de stage",
     "months of internship"
    ]
   },
   {
    "n": "2",
    "l": [
     "profils d’utilisateurs servis par l’application",
     "user profiles served by the app"
    ]
   }
  ],
  "rb": [
   [
    "Widgets interactifs de tableau de bord développés pour l’application de gestion de commandes."
   ],
   [
    "Interactive dashboard widgets built for the order management application."
   ]
  ],
  "s": [
   "JavaScript",
   "React JS",
   "Node JS",
   "Express JS",
   "Git",
   "Figma"
  ]
 },
 {
  "c": "m",
  "t": [
   "Stagiaire · RobotsMali",
   "Intern · RobotsMali"
  ],
  "x": [
   "Stage · Bamako, Mali · Juil. — Août 2022",
   "Internship · Bamako, Mali · Jul. — Aug. 2022"
  ],
  "ctx": [
   "Stage de 2 mois sur site, à Bamako (Mali), au sein de RobotsMali, sur un projet de maison intelligente basée sur Arduino.",
   "2-month on-site internship in Bamako (Mali) at RobotsMali, on an Arduino-based smart home project."
  ],
  "b": [
   [
    "Conception et réalisation d’une maison intelligente basée sur Arduino.",
    "Intégration et configuration de capteurs et d’actionneurs pour automatiser certaines fonctions du système.",
    "Participation à l’analyse des besoins, à l’assemblage des composants électroniques et au développement de la logique embarquée.",
    "Tests et validation du fonctionnement des équipements connectés."
   ],
   [
    "Design and build of an Arduino-based smart home.",
    "Integration and configuration of sensors and actuators to automate some of the system’s functions.",
    "Contribution to needs analysis, assembly of the electronic components and development of the embedded logic.",
    "Testing and validation of the connected devices."
   ]
  ],
  "res": [
   {
    "n": "2",
    "l": [
     "mois sur site à Bamako",
     "months on site in Bamako"
    ]
   }
  ],
  "s": [
   "Arduino",
   "Capteurs",
   "Actionneurs",
   "Électronique",
   "Tests"
  ]
 }
];
