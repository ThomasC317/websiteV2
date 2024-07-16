"use client";
// app/experiences/page.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/component/navbar";
import React, { useState } from 'react';
import Footer from "@/components/component/footer/footer";
import Trema from "@/components/component/trema";
import ParticleBackground from "@/components/component/particleBackground";
import "./work.css"

const Experiences = () => {
  
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleButtonClick = () => {
    window.location.href = '/about';
  };
  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
};
const projects = [
  {
    title: "Ce site web",
    year:"Juillet 2024",
    finishYear:2024,
    company: "Projet Personnel",
    description: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`,
    tags: ["React", "JavaScript"]
  },
  {
    title: "Recherche IA pour l'entreprise",
    company: "Infotel Blagnac",
    year:"Mai 2024 - Maintenant",
    finishYear:2024,
    description: `Recherches pour la mise en place de l'IA dans le contexte de l'entrepise.<br/>
    - Recherche sur les avancées les plus récentes.<br/>
    - Analyse des possibilités pour l'entreprise.<br/>
    - Développement une interface de Chatbot avec une direction artistique proche de celle de l'entreprise.`,
    tags: ["React", "Python", "NextJs"]
  },
  { 
    title: "MRDB",
    company: "Infotel Blagnac",
    year:"Avril - Mai 2024",
    finishYear:2024,
    description: `Développement d’évolutions sur le projet MRDB.<br/>
    - Analyse du code déjà présent.<br/>
    - Analyse des besoins du client.<br/>
    - Ajout des nouvelles features et tests.`,
    tags: ["Skywise", "JavaScript", "Pyspark"]
  },
  {
    title: "Athenaa",
    company: "Infotel Blagnac",
    year:"Mars - Avril 2024",
    finishYear:2024,
    description: `Développement d’une application datas retournant des moyennes d’heures et de cycles de vol pour une liste de MSN<br/>
    - Analyse des datas en entrée.<br/>
    - Transformation des datas pour retourner les colonnes voulues.<br/>
    - Importation dans le front et test.`,
    tags: ["Skywise", "JavaScript", "Pyspark"]
  },
  {
    title: "Madness",
    company: "Infotel Blagnac",
    year:"Février - Mars 2024",
    finishYear:2024,
    description: `Etude d’une analyse Contour (Outil visuel permettant d’interagir et transformer des datas) pour la rédaction d’une documentation et de spécifications projet :<br/>
    - Analyse des différentes transformations.<br/>
    - Proposition d’optimisations sur les transformations.<br/>
    - Rédaction de documentation.<br/>
    - Chiffrage pour créer un vrai back au projet.`,
    tags: ["Skywise", "JavaScript", "Pyspark"]
  },
  {
    title: "Airframe Services",
    company: "Infotel Blagnac",
    year:"Décembre - Février 2024",
    finishYear:2024,
    description: `Mise en place d’une application Slate permettant le suivi de KPIs mensuels et annuels :<br/>
    - Création d’une application data en pyspark retournant les informations nécessaires au suivi des KPI<br/>
    - Mise en place des calculs des KPI avec la valeur mensuelle et annuelle côté Front.<br/>
    - Optimisation des requêtes (Nombre de lignes retournées, découpage par calcul).<br/>
    - Création de fichier fusion pour le stockage en dur de données insérables par le client.`,
    tags: ["Skywise", "JavaScript", "Pyspark"]
  },
  {
    title: "ASN/AOG",
    company: "Infotel Blagnac",
    year:"Septembre - Décembre 2023",
    finishYear:2023,
    description: `Mise à niveau d'une application permettant le suivi des incidents liés aux avions de la flotte du client :<br/>
    - Mise à niveau de la DB pour les besoins de ma partie.<br/>
    - Ajout d'une nouvelle partie permettant le filtrage des informations envoyées aux utilisateurs. Grâce à cela, les utilisateurs abonnées à la compagnie "ABC" recevront seulement les mails liés à cette compagnie.<br/>
    - Gestion de rôles. Les utilisateurs dit "managers" peuvent valider, éditer ou refuser l'ajout d'un incident, et gérer les abonnements des autres utilisateurs. Les utilisateurs basiques peuvent seulement faire la demande pour l'ajout ou la suppression d'incident et l'utilisateur "Lecteur" voit seulement la liste des incidents.`,
    tags: ["Angular", "C#", "Gitlab", "JIRA", "SQL Server"]
  },
  {
    title: "LP ADV",
    company: "LP Promotion",
    year:"2022 - Mai 2023",
    finishYear:2023,
    description: `Refonte de l'outil de l'administration des ventes simplifiant la gestion des étapes d'un dossier :<br/>
    - Analyse de l'ancienne DB pour produire un schéma pour la nouvelle database, permettant aussi une synchronisation avec les anciennes données.<br/>
    - Aide à la mise en place des étapes du projet (architecture, création des repos, back, front).<br/>
    - Interface de filtrage des résidences et lots en fonction de paramètres (nom, type de résidence,... ) via LinQ.<br/>
    - Intégration fidèles de maquettes faite depuis Figma par la team UX/UI.<br/>
    - Refonte d'un microservice embarquant la génération, la preview & l'envoi d'un courrier recommandé papier ou numérique (AR24).<br/>
    - Optimisation des appels à l'API pour réduire la consommation de ressources.<br/>
    - Tests fonctionnels & Utilisateurs.`,
    tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"]
  },
  {
    title: "LP WORKPLACE",
    company: "LP Promotion",
    year:"Juin - Décembre 2021",
    finishYear:2021,
    description: `Création du premier outil de la plateforme LP INSIDE, simplifiant le travail inter service grâce au rassemblement des process,du vocabulaire métier & d'un organigramme sous la même application Web.<br/>
    - Aide à la mise en place des étapes du projet (architecture, création des repos, back, front).<br/>
    - Développement d'une page Glossaire avec filtrage des entités par paramètres via LinQ.<br/>
    - Barre de recherche permettant de lancer une recherche pour trouver des process, des documents ou des employés de l'entreprise.<br/>
    - Ajout d'un système de favoris permettant de garder certains process ou documents faciles d'accès.<br/>
    - Tests fonctionnels en continue.<br/>
    - Tests avec différents utilisateurs.`,
    tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"]
  },
  {
    title: "Ui Framework",
    company: "LP Promotion",
    year:"Octobre 2020 - Mai 2023",
    finishYear:2023,
    description: `Développement d'une librairie Blazor de composants réutilisables et customisables à destination des futurs projets à venir : <br/>
    - Analyse des projets legacy & WIP pour lister tous les composants à développer/ inclure dans la librairie.<br/>
    - Remplacement des composants sur les projets récents.<br/>
    - Mise en place de généricité sur certains composants pour être utilisés dans différents contextes.<br/>
    - Mise en place de variables CSS pour permettre une customisation des styles pour être en adéquation avec la charte graphique de chaque projet.<br/>
    - Mise en place d'un site documentation des composants avec différents cas d'utilisations, une liste des paramètres et un tuto pour l'importation dans les projets.`,
    tags: ["Blazor", "C#", "Azure AD", "SQL Server"]
  },
  {
    title: "LP INSIDE",
    company: "LP Promotion",
    year:"Octobre 2020 - Mai 2023",
    finishYear:2023,
    description: `Mise en place d'une plateforme qui va recenser tous les nouveaux & futurs projets sous forme de modules :<br/>
    - Aide à la mise en place des méthodes agiles (SCRUM) dans le service.<br/>
    - Passage sous Azure AD pour la gestion des projets.<br/>
    - Conteneurisation des microservices (Docker).<br/>
    - Installation de pipelines CI/CD sur chaque projet.<br/>
    - Process de qualité du code (Policies de branch, conventions de nommage, Quality gate de sonarCloud).<br/>
    - Communication avec le service UX/UI pour mieux répondre aux besoins des services cibles.<br/>
    - Architecture de la communication entre les différents microservices & les SPA.`,
    tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"]
  },
  {
    title: "Flux Partenaire V3",
    company: "LP Promotion",
    finishYear:2020,
    year:"Octobre 2019 - Septembre 2020",
    description: `Refonte globale d'un projet de génération de flux XML contenant les informations des résidences et des appartements à louer :<br/>
    - Mise en place d'une architecture microservice multicouches.<br/>
    - Conception & modélisation d'une API REST.<br/>
    - Développement d'une interface pour l'administration de l'application. Celle-ci permet d'ajouter ou de supprimer des partenaires, et de lancer l'envoi de flux aux partenaires.<br/>
    - Ajout d'envoi de flux via FTP ou sFTP.<br/>
    - Ajout d'une fonctionnalité d'édition des noms de balises des fichiers XML pour répondre aux besoins spécifiques de chaque client.<br/>
    - Mise en place d'une gestion d'erreur avec vérification des balises et gestion d'erreurs.`,
    tags: ["C#", "JavaScript", "SQL Server"]
  }
];

const companyNames = projects.map(project => project.company);
const uniqueCompanyNames = [...new Set(companyNames)];

const date = new Date();

const [selectedCompany, setSelectedCompany] = useState('All');

const handleCompanyChange = (e) => {
  setSelectedCompany(e.target.value);
  e.preventDefault();
};

  return (<div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <div className="flex-grow" style={{ position: "relative"}}>
        <ParticleBackground />
        <main className="mx-auto px-24 py-12 my-16" style={{ position: "relative", zIndex: 1 }}>
            <div>
  <div className="px-8">
  <p className="text-2xl">
  Ingénieur développeur Full-stack situé sur Toulouse, France. Je suis un développeur full stack passionné travaillant actuellement chez Infotel. 
  Mon rôle me permet de me concentrer pleinement sur la création de solutions web perfommantes qui répondront à vos besoins.<br/><br/>
  <div className="flex gap-4 sm:items-center">
          <Button variant="outline" className="w-full sm:w-auto" onClick={handleButtonClick}>
            Plus d'infos & Contact
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" style={{ backgroundColor: 'black', color: 'white' }}>
            Télécharger mon CV
          </Button>
        </div>
  </p>
  <div className="pt-8">
    <div className="flex" style={{alignItems:"baseline"}}> <Trema />    <h2 className="text-2xl mb-4 ml-4">Technologies</h2></div>

    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Frontend:</h3>
      <p className="ml-2 text-lg">React, .NET, Angular.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Backend:</h3>
      <p className="ml-2 text-lg">.NET, Express/Nodejs.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">UI/Styling/Animations:</h3>
      <p className="ml-2 text-lg">shadcn/ui, TailwindCSS, framer-motion.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Databases:</h3>
      <p className="ml-2 text-lg">MySql, SqlServer.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Langages de programmation:</h3>
      <p className="ml-2 text-lg">C#, Typescript.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Versionning:</h3>
      <p className="ml-2 text-lg">Git (Gitlab & Github).</p>
    </div>
  </div>
  <div className="py-2">
  <div className="flex" style={{alignItems:"baseline"}}> <Trema />    <h2 className="text-2xl mb-4 ml-4">Compétences métier</h2></div>

    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Méthodologies:</h3>
      <p className="ml-2 text-lg">Méthodologies Agile (Scrum, Kanban).</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Documentation:</h3>
      <p className="ml-2 text-lg">Rédaction de documentation utilisateur, de tests, de light ARD.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Optimisation:</h3>
      <p className="ml-2 text-lg">Réduction des temps de récupération des datas.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Esprit d’analyse:</h3>
      <p className="ml-2 text-lg">Analyse des besoins et/ou des problèmes.</p>
    </div>
    <div className="mb-3 flex items-center">
      <h3 className="text-lg font-bold text-azure-radiance-500">Travail:</h3>
      <p className="ml-2 text-lg">Autonomie, collaboration, gestion du stress, adaptabilité.</p>
    </div>
  </div>
  </div>
                <div className="px-8 pt-4 flex items-center gap-2 pb-4 ">
                    <h2 className="text-2xl">Projets</h2>
                    <select
                        id="companyFilter"
                        name="companyFilter"
                        className="ml-4 px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={selectedCompany}
                        onChange={handleCompanyChange}
                    >
                        <option value="All">Entreprise</option>
                        {uniqueCompanyNames.map((company, index) => (
                            <option key={index} value={company}>{company}</option>
                        ))}
                    </select>
                </div>
                 <div className="w-full">
            {projects.map((project, index) => {
                if (project.company !== selectedCompany && selectedCompany !== "All") {
                    return null;
                }

                const isExpanded = expandedIndex === index;
                return (
                  <div
                      key={index}
                      className={`bg-hover-transition px-8 py-4 border-b border-color-lightgray cursor-pointer relative`}
                      onClick={() => handleToggle(index)}
                  >
                      {!isExpanded ? (
                          <div className="relative">
                              <table className="w-full">
                                  <tbody>
                                      <tr>
                                          <td className="w-1/8 text-sm text-gray-300">{project.finishYear}</td>
                                          <td className="w-1/4 text-xl">{project.title}</td>
                                          <td className="w-1/4 text-sm text-gray-600">{project.company}</td>
                                          <td colSpan={3} className="mt-2 w-3/8">
                                              <div className="flex gap-2">
                                                  {project.tags.map((tech, techIndex) => (
                                                      <span
                                                          key={techIndex}
                                                          className="bg-azure-radiance-500 px-3 py-1 rounded-lg text-xs font-medium text-gray-200"
                                                      >
                                                          {tech}
                                                      </span>
                                                  ))}
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      ) : (
                          <div key={index} className={`px-8 py-6 `}>
                              <div className="relative w-full left-1/2 transform -translate-x-1/2">
                                  <h3 className="text-xl mb-2">{project.title}</h3>
                                  <p className="text-sm text-gray-600 mb-2">{project.company}</p>
                                  <p className="text-sm text-gray-300 mb-2">{project.year}</p>
                                  <p className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: project.description }} />
                                  <div className="mt-4 flex flex-wrap gap-2">
                                      {project.tags.map((tech, index) => (
                                          <span
                                              key={index}
                                              className="bg-azure-radiance-500  px-3 py-1 rounded-lg text-xs font-medium text-gray-200"
                                          >
                                              {tech}
                                          </span>
                                      ))}
                                  </div>

                              </div>
                          </div>
                      )}
                                                        <div className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform" style={{top:"2rem"}}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 cursor-pointer ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => handleToggle(index)}
        style={{ transition: 'transform 0.3s ease' }}
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
                <div className="px-8 py-4">
                <div className="flex" style={{alignItems:"baseline"}}> <Trema />    <h2 className="text-2xl mb-4 ml-4">Applications/Outils</h2></div>
                    <div className="mb-3 flex">
                        <a href="https://code.visualstudio.com/" className="underline-link whitespace-nowrap text-azure-radiance-500">VS Code </a>
                        <Trema />
                        <p className="ml-2">Un des meilleurs éditeurs de code que j'ai pu tester, très customisable.</p>
                    </div>
                    <div className="mb-3 flex">
                        <a href="https://github.com/" className="underline-link whitespace-nowrap text-azure-radiance-500">GitHub </a>
                        <Trema />
                        <p className="ml-2">La feature des pages est assez folle pour hoster des sites facilement, très pratique pour les portfolios notamment.</p>
                    </div>
                    <div className="mb-3 flex">
                        <a href="https://www.sonarsource.com/" className="underline-link whitespace-nowrap text-azure-radiance-500">Sonarlint/Cloud </a>
                        <Trema />
                        <p className="ml-2">J'ai beau avoir travaillé peu avec, l'utilité est impressionante. Très simple à installer et la qualité de code est rapidement améliorée.</p>
                    </div>
                    <div className="mb-3 flex">
                        <a href="https://azure.microsoft.com/fr-fr/products/devops" className="underline-link whitespace-nowrap text-azure-radiance-500">Azure Devops </a>
                        <Trema />
                        <p className="ml-2">L'ensemble des features est très appréciable. Avoir accès au Kanban, aux repositories, a la création d'artifacts et aux pipelines sur la même plateforme... ça m'a été très utile.</p>
                    </div>
                    <div className="mb-3 flex">
                        <a href="https://www.google.com/intl/fr/drive/" className="underline-link whitespace-nowrap text-azure-radiance-500">Google Workspace </a>
                        <Trema />
                        <p className="ml-2">Gratuit & très complet, pas besoin de dire grand chose de plus.</p>
                    </div>
                    <div className="mb-3 flex">
                        <a href="https://www.canva.com/" className="underline-link whitespace-nowrap text-azure-radiance-500">Canva </a>
                        <Trema />
                        <p className="ml-2">Très utile pour créer des schémas, des documents textes en tout genre, ou même des présentations. Je ne suis pas fan de la disparition des applications tierces cependant.</p>
                    </div>
                    <div className="mb-3 flex">
                        <a href="https://v0.dev/" className="underline-link whitespace-nowrap text-azure-radiance-500">V0 Dev </a>
                        <Trema />
                        <p className="ml-2">Génération par IA d'interfaces simples. Très utile pour générer des composants en React.</p>
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
