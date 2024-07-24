"use client";
// app/experiences/page.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/component/navbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/component/footer/footer";
import Trema from "@/components/component/trema";
import ParticleBackground from "@/components/component/particleBackground";

import { CSSTransition } from "react-transition-group";
import Select from 'react-select';

const Experiences = () => {
  const handleButtonClick = () => {
    window.location.href = "./about";
  };

  const projects = [
    {
      title: "Ce site web",
      year: "Juillet 2024",
      company: "Projet Personnel",
      description: `Création d'un nouveau site Portfolio :<br/><br/>
• Recherche d'inspiration sur une liste conséquente de Portfolio pour imaginer un Portfolio original. <br/>
• Création d'un design sur Canva. <br/>
• Recherche de composants React pour simplifier les développements.<br/>
• Développement du Portfolio & responsivité. <br/>
• Développement de composants customisés (CommandPrompt, formulaire de contact).
`,
      tags: ["React", "TypeScript", "Framer-motion", "TailwindCS", "Emailjs"]
    },
    {
      title: "R&D pour l'utilisation de l'ia dans le contexte de l'entreprise",
      company: "Infotel Blagnac",
      year: "Mai 2024 - Maintenant",
      description: `Recherches pour la mise en place de l'IA dans le contexte de l'entreprise :<br/>
<br/>
• Analyse du fonctionnement des modèles.<br/>
• Analyse des possibilités pour la mise en place dans le contexte de l'entreprise.<br/>
• Veille technologique sur les avancées les plus récentes & analyse des besoins pour la mise en place.<br/>
• Développement d'un MOC chatbot en react/nextjs suivant la charte graphique de l'entreprise.<br/>
• Analyse pour l'installation et l'apprentissage d'un modèle.<br/>`,
      tags: ["React", "Python", "NextJs"]
    },
    {
      title: "MRDB",
      company: "Infotel Blagnac",
      year: "Avril - Mai 2024",
      description: `Développement d’évolutions sur le projet MRDB :
<br/><br/>
• Analyse des datasets déjà créés pour l'identification de la mise à niveau à réaliser.<br/>
<br/>
• Analyse des besoins du client.<br/>
• Transformation des datas pour le calcul des nouvelles datas envoyés au front. <br/>
• Communication avec le client pour l'évolution des besoins.`,
      tags: ["Skywise", "JavaScript", "Pyspark"]
    },
    {
      title: "Athenaa",
      company: "Infotel Blagnac",
      year: "Mars - Avril 2024",
      description: `Développement d’une application back-end retournant des moyennes d’heures et de cycles de vol pour une liste de MSN :<br/>
<br/>
• Analyse des datasets déjà créés pour l'identification de la mise à niveau à réaliser.<br/>
<br/>
• Transformation des datas pour le calcul des moyennes requises. <br/>
<br/>
• Récupération des datas côté front et insertion des nouvelles datas dans un diagramme, affichant le suivi par mois sur les 48 derniers mois.<br/>
• Communication avec le client pour l'évolution des besoins.`,
      tags: ["Skywise", "JavaScript", "Pyspark"]
    },
    {
      title: "Madness",
      company: "Infotel Blagnac",
      year: "Février - Mars 2024",
      description: `Etude d’une analyse Contour (Outil visuel permettant d’interagir et transformer des datas) pour la rédaction d’une documentation et de spécifications projet :<br/><br/>
    • Analyse de la transformation des datas.<br/>
    • Proposition d’optimisations sur les transformations.<br/>
    • Rédaction de documentation.<br/>
    • Chiffrage pour le développement d'un back-end au projet.`,
      tags: ["Skywise", "JavaScript", "Pyspark"]
    },
    {
      title: "Airframe Services",
      company: "Infotel Blagnac",
      year: "Décembre - Février 2024",
      description: `Mise en place d’une application Slate permettant le suivi de KPIs mensuels et annuels :<br/><br/>
    • Création d’une application data retournant les informations nécessaires au suivi des KPIs.<br/>
    • Intégration des calculs des différents KPIs côté front-end.<br/>
    • Optimisation des requêtes (Nombre de lignes retournées, découpage par calcul).<br/>
    • Création de fichier fusion pour le stockage en dur de données insérables par le client.
    • Communication avec le client pour l'évolution des besoins.`,
      tags: ["Skywise", "JavaScript", "Pyspark"]
    },
    {
      title: "ASN/AOG",
      company: "Infotel Blagnac",
      year: "Septembre - Décembre 2023",
      description: `Mise à niveau d'une application permettant le suivi des incidents liés aux avions de la flotte du client :<br/><br/>
    • Analyse des tâches réalisés, et du restant à faire.<br/>
    • Développement d'une fonctionnalité permettant le suivi des incidents sur des avions.<br/>
    • Développement d'une fonctionnalité de création d'incident pour un avion donné.<br/>
    • Développement d'une fonctionnalité d'administration des incidents en création ou en édition.<br/>
    • Développement d'une fonctionnalité d'administration d'abonnements, permettant le filtrage des informations affichées aux utilisateurs sur la page principale.<br/>
    • Développement d'une gestion de rôles. Les utilisateurs dit "managers" peuvent valider, éditer ou refuser l'ajout d'un incident, et gérer les abonnements des autres utilisateurs. Les utilisateurs basiques peuvent seulement faire la demande pour l'ajout ou la suppression d'incident et l'utilisateur "Lecteur" voit seulement la liste des incidents.<br/>
    • Modification de l'interface existante selon les besoins des utilisateurs.`,
      tags: ["Angular", "C#", "Gitlab", "JIRA", "SQL Server"]
    },
    {
      title: "LP ADV",
      company: "LP Promotion",
      year: "2022 - Mai 2023",
      description: `Refonte de l'outil de l'administration des ventes simplifiant la gestion des étapes d'un dossier :<br/><br/>
    • Analyse de l'ancienne DB pour produire un schéma pour la nouvelle database, permettant aussi une synchronisation avec les anciennes données.<br/>
    • Aide à la mise en place des étapes du projet (architecture, création des repos, back, front).<br/>
    • Développement d'une fonctionnalité de filtrage des résidences et lots en fonction de paramètres (nom, type de résidence,... ).<br/>
    • Intégration fidèles de maquettes faite depuis Figma par la team UX/UI.<br/>
    • Refonte d'un microservice embarquant la génération, la preview & l'envoi d'un courrier recommandé papier ou numérique (AR24).<br/>
    • Optimisation des appels à l'API pour réduire la consommation de ressources.<br/>
    • Tests fonctionnels & Utilisateurs.`,
      tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"]
    },
    {
      title: "LP WORKPLACE",
      company: "LP Promotion",
      year: "Juin - Décembre 2021",
      description: `Création du premier outil de la plateforme LP INSIDE, simplifiant le travail inter service grâce au rassemblement des process,du vocabulaire métier & d'un organigramme sous la même application Web.<br/><br/>
    • Aide à la mise en place des étapes du projet (architecture, création des repos, back, front).<br/>
    • Développement d'une page Glossaire avec filtrage des entités par paramètres via LinQ.<br/>
    • Barre de recherche permettant de lancer une recherche pour trouver des process, des documents ou des employés de l'entreprise.<br/>
    • Ajout d'un système de favoris permettant de garder certains process ou documents faciles d'accès.<br/>
    • Tests fonctionnels en continue.<br/>
    • Tests avec différents utilisateurs.`,
      tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"]
    },
    {
      title: "Ui Framework",
      company: "LP Promotion",
      year: "Octobre 2020 - Mai 2023",
      description: `Développement d'une librairie Blazor de composants réutilisables et customisables à destination des futurs projets à venir : <br/><br/>
    • Analyse des projets legacy & WIP pour lister tous les composants à développer/ inclure dans la librairie.<br/>
    • Remplacement des composants sur les projets récents.<br/>
    • Mise en place de généricité sur certains composants pour être utilisés dans différents contextes.<br/>
    • Mise en place de variables CSS pour permettre une customisation des styles pour être en adéquation avec la charte graphique de chaque projet.<br/>
    • Mise en place d'un site documentation des composants avec différents cas d'utilisations, une liste des paramètres et un tuto pour l'importation dans les projets.`,
      tags: ["Blazor", "C#", "Azure AD", "SQL Server"]
    },
    {
      title: "LP INSIDE",
      company: "LP Promotion",
      year: "Octobre 2020 - Mai 2023",
      description: `Mise en place d'une plateforme qui va recenser tous les nouveaux & futurs projets sous forme de modules :<br/><br/>
    • Aide à la mise en place des méthodes agiles (SCRUM) dans le service.<br/>
    • Passage sous Azure AD pour la gestion des projets.<br/>
    • Conteneurisation des microservices (Docker).<br/>
    • Installation de pipelines CI/CD sur chaque projet.<br/>
    • Process de qualité du code (Policies de branch, conventions de nommage, Quality gate de sonarCloud).<br/>
    • Communication avec le service UX/UI pour mieux répondre aux besoins des services cibles.<br/>
    • Architecture de la communication entre les différents microservices & les SPA.`,
      tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"]
    },
    {
      title: "Flux Partenaire V3",
      company: "LP Promotion",
      year: "Octobre 2019 - Septembre 2020",
      description: `Refonte globale d'un projet de génération de flux XML contenant les informations des résidences et des appartements à louer :<br/><br/>
    • Mise en place d'une architecture microservice multicouches.<br/>
    • Conception & modélisation d'une API REST.<br/>
    • Développement d'une interface pour l'administration de l'application. Celle-ci permet d'ajouter ou de supprimer des partenaires, et de lancer l'envoi de flux aux partenaires.<br/>
    • Ajout d'envoi de flux via FTP ou sFTP.<br/>
    • Ajout d'une fonctionnalité d'édition des noms de balises des fichiers XML pour répondre aux besoins spécifiques de chaque client.<br/>
    • Mise en place d'une gestion d'erreur avec vérification des balises et gestion d'erreurs.`,
      tags: ["JavaScript", "C#", "SQL Server"]
    },
  ];

  const companyNames = projects.map((project) =>project.company);
  const uniqueCompanyNames = [...new Set(companyNames)];
  const companyOptions = uniqueCompanyNames.map((company) => ({
    value: company,
    label: company,
  }));
  companyOptions.unshift({value:"All", label:"Toute les entreprises"})
  const date = new Date();

  const [selectedCompany, setSelectedCompany] = useState("All");
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [isSelectMounted, setIsSelectMounted] = useState(false);
  const handleCompanyChange = (e) => {
    setSelectedCompany(e.value);
  };

  const handleToggle = (index: number) => {
    setExpandedIndices((prev) => {
      if (prev.includes(index)) {
        // Remove index from expandedIndices
        return prev.filter((i) => i !== index);
      } else {
        // Add index to expandedIndices
        return [...prev, index];
      }
    });
  };

  useEffect(() => setIsSelectMounted(true), []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar isOnMainPage={false} />
      <div className="flex-grow" style={{ position: "relative" }}>
        <ParticleBackground />
        <main
          className="mx-auto px-6 sm:px-12 lg:px-24 py-12 my-16"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div>
            <div className="px-4 sm:px-8">
              <div className="text-lg sm:text-2xl">
                Ingénieur développeur Full-stack situé sur Toulouse, France.
                <br />
                <br /> Je suis un développeur full stack passionné travaillant
                actuellement chez Infotel. Mon rôle me permet de me concentrer
                pleinement sur la création de solutions web performantes qui
                répondront à vos besoins.
                <br />
                <br />
                <div className="flex md:flex-row flex-col gap-4 sm:items-center">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-white rounded-3xl flex items-center justify-center px-6 py-6 text-lg sm:text-2xl border-0"
                    onClick={handleButtonClick}
                    style={{ color: "white", backgroundColor: "#172e54" }}
                  >
                    Plus d'infos & Contact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                  <Button
                    className="w-full sm:w-auto bg-azure-radiance-950 text-white rounded-3xl flex items-center justify-center px-6 py-6 text-lg sm:text-2xl border border-azure-radiance-950"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      borderWidth: "1px",
                    }}
                  >
                    Télécharger mon CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="pt-8">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">
                    Technologies
                  </h2>
                </div>
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Frontend:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        React, .NET, Angular.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Backend:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        .NET, Express/Nodejs.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        UI/Styling/Animations:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        shadcn/ui, TailwindCSS, framer-motion.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Databases:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        MySql, SqlServer.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Langages de programmation:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        C#, Typescript.
                      </td>
                    </tr> 
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Versionning:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Git (Gitlab & Github).
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="py-2">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">
                    Compétences métier
                  </h2>
                </div>
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Méthodologies:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Méthodologies Agile (Scrum, Kanban).
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Documentation:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Rédaction de documentation utilisateur, de tests, de
                        light ARD.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Optimisation:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Réduction des temps de récupération des datas.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2  text-sm xl:text-lg text-azure-radiance-500">
                        Esprit d’analyse:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Analyse des besoins et/ou des problèmes.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 text-sm xl:text-lg text-azure-radiance-500">
                        Travail:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Autonomie, collaboration, gestion du stress,
                        adaptabilité.
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>

              <div className="pt-4 flex items-center gap-2">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">Projets</h2>
                  {isSelectMounted ? (
                    <Select onChange={handleCompanyChange} className="select-width rounded-3xl text-md sm:text-lg ml-4 px-4 py-2" options={companyOptions} name="company" defaultValue={companyOptions[0]}></Select>
                  ) : null
                  }
                </div>
              </div>
              <div className="container">
      {projects.map((project, index) => {
        if (project.company !== selectedCompany && selectedCompany !== "All") {
          return null;
        }

        const isExpanded = expandedIndices.includes(index);

        return (
          <div
            key={index}
            className={`bg-hover-transition px-4 py-2 ${
              isExpanded ? "border-b" : ""
            } border-color-lightgray cursor-pointer relative`}
            onClick={() => handleToggle(index)}
          >
            <div className="relative">
              <div className="block lg:grid lg:grid-cols-5 lg:gap-4 w-full">
                <div className="block lg:col-span-1 text-xs sm:text-sm lg:text-lg font-medium">
                  {project.title}
                </div>
                <div className="block lg:col-span-1 text-xs sm:text-sm lg:text-lg">
                  {project.year}
                </div>
                <div className="block lg:col-span-1 text-xs sm:text-sm lg:text-lg">
                  {project.company}
                </div>
                <div className="block lg:col-span-2 mt-2 lg:mt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-azure-radiance-500 px-2 py-1 rounded-lg text-xs sm:text-sm lg:text-md font-medium text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <CSSTransition
                in={isExpanded}
                timeout={isExpanded ? 0 : 1000}
                classNames="fade-enlarge"
                unmountOnExit
              >
                <div className="py-4 expanded-card">
                  <p
                    className="text-gray-700 text-xs sm:text-md lg:text-lg mt-2"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  />
                </div>
              </CSSTransition>
            </div>
            <div
              className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
              style={{ top: "22px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 cursor-pointer ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => handleToggle(index)}
                style={{ transition: "transform 0.3s ease" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
              <div className="py-4">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">
                    Applications/Outils
                  </h2>
                </div>
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        {" "}
                        <a
                          href="https://code.visualstudio.com/"
                          className="underline-link text-azure-radiance-500"
                        >
                          VS Code
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Un des meilleurs éditeurs de code que j'ai pu tester,
                        très customisable.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://github.com/"
                          className="underline-link text-azure-radiance-500"
                        >
                          GitHub
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        La feature des pages est assez folle pour hoster des
                        sites facilement, très pratique pour les portfolios
                        notamment.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://www.sonarsource.com/"
                          className="underline-link text-azure-radiance-500"
                        >
                        Sonarlint/Cloud
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        J'ai beau avoir travaillé peu avec, l'utilité est
                        impressionante. Très simple à installer et la qualité de
                        code est rapidement améliorée.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://azure.microsoft.com/fr-fr/products/devops"
                          className="underline-link text-azure-radiance-500"
                        >
                          Azure DevOps
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        L'ensemble des features est très appréciable. Avoir
                        accès au Kanban, aux repositories, a la création
                        d'artifacts et aux pipelines sur la même plateforme...
                        ça m'a été très utile.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://www.google.com/intl/fr/drive/"
                          className="underline-link text-azure-radiance-500"
                        >
                          Google Workspace
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Gratuit & très complet, pas besoin de dire grand chose
                        de plus.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://www.canva.com/"
                          className="underline-link text-azure-radiance-500"
                        >
                          Canva
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Très utile pour créer des schémas, des documents textes
                        en tout genre, ou même des présentations. Je ne suis pas
                        fan de la disparition des applications tierces
                        cependant.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://v0.dev/"
                          className="underline-link text-azure-radiance-500"
                        >
                          V0 Dev
                        </a>
                      </th>
                      <td className="td-width y-2 px-2 text-sm xl:text-lg">
                        Génération par IA d'interfaces simples. Très utile pour
                        générer des composants en React.
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Experiences;
