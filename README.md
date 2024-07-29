Bienvenue sur le repo git de mon portfolio !

## Technos utilisées

Pour la réalisation de ce site, j'ai utilisé [NextJS](https://github.com/vercel/next.js/), framework react très utile.
Voici la liste des packages que j'ai utilisé pour la réalisation : 
- TailwindCS, pour le style et la gestion de la responsivité (en grande partie).
- EmailJS, pour l'envoi de mail dans la partie [À PROPOS](https://thomasc317.github.io/websitev2/about) du site.
- Framer-Motion, pour certaines animations.

## Pages

J'ai créé 3 pages sur ce site :
- Accueil, page qui contient un message d'accueil et un CommandPrompt interactif, vous permettant d'avoir quelques informations à mon sujet.
- Mon Travail, page résumant les expériences de ma carrière, mes compétences, et mes outils favoris.
- À Propos, page content d'autres petites infos & un formulaire de contact.

## Composants

J'ai utilisé certains composants déjà existants pour certaines tâches (modal de validation dans le formulaire de contact, Selecteur d'entreprise dans la liste des expériences), mais j'ai aussi créé quelques composants pour la réalisation du site :
- [Navbar](https://github.com/ThomasC317/websitev2/blob/master/components/component/navbar.tsx) : Composant de navigation responsive.
- [Footer](https://github.com/ThomasC317/websitev2/blob/master/components/component/footer/footer.tsx) : Composant de pied de page responsive.
- [AnimatedButton](https://github.com/ThomasC317/websitev2/blob/master/components/component/animatedButton.tsx) : Bouton provenant de base de la librairie [MagicUi](https://magicui.design/), mais modifié à mon goût.
- [ColorPicker](https://github.com/ThomasC317/websitev2/blob/master/components/component/colorPicker.tsx), Composant permettant la selection du thème du site, situé dans la [Navbar](https://github.com/ThomasC317/websitev2/blob/master/components/component/navbar.tsx).
- [CommandPrompt](https://github.com/ThomasC317/websitev2/blob/master/components/component/commandPrompt.tsx) : Composant invité de commande contenant diverses commandes vous permettant d'avoir quelques informations à mon sujet.
- [Contact](https://github.com/ThomasC317/websitev2/blob/master/components/component/contact.tsx) : Formulaire de contact à utiliser pour toute demande ou offre !
- [CustomSelect](https://github.com/ThomasC317/websitev2/blob/master/components/component/customSelect.tsx) : Composant originaire de la librairie [React-select](https://react-select.com/home), légèrement modifié pour fit au style de mon portfolio.
- [ParticleBackground](https://github.com/ThomasC317/websitev2/blob/master/components/component/particleBackground.tsx) : Implémentation du composant provenant de la librairie [TsParticle](https://www.npmjs.com/package/tsparticles) pour du gain de lisibilité.

## Déploiment

J'ai géré le côté déploiement automatique grâce à GitHub pages & Actions. Cela m'a permis de publier le site à chaque push sur la branche main sans soucis.

## Liens

Voici des liens utiles : 
- [Portefolio](https://thomasc317.github.io/websitev2/)
- [Linkedin](https://www.linkedin.com/in/thomas-cerdera-305ab3153/)
- [GitHub Profile](https://github.com/ThomasC317)
