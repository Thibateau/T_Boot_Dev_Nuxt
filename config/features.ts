import { ILeftHero, IPictureHero, IRightHero, IToolsBox, ICartoonHero, IProjectPresentation, INavBar, IFooter } from '../types'

export const NAV_BAR_DATA : INavBar = {
  left: [
    { label: 'Accueil', name: 'index' },
    { label: 'Perso', name: 'about' },
  ],
  right: [
    { label: 'Projets', name: 'projects' },
    { label: 'Contact', name: 'contact' },
  ],
  logo: '/images/logo.png',
}
// HOME PAGE
export const LEFT_HERO_DATA: ILeftHero = {
  picture: 'https://kitwind.io/assets/kometa/laptop.png',
  title: 'TBoot développement',
  subtitle: 'Web front-end',
  paragraph: 'Je crée des sites, applications web dynamiques , rapides, design afin de vous donner de la visibilité.',
}
export const RIGHT_HERO_DATA : IRightHero = {
  picture: 'https://kitwind.io/assets/kometa/half-phone.png',
  title: 'Création de supports web',
  subtitle: "Je suis soucieux de developper des applications avec des technologies qui ont un rendu perfomant, rapide, stable et sécurisé afin d'optimiser le résultat.",
  label: 'Me contacter',
}
// ABOUT PAGE
export const PICTURE_HERO_DATA : IPictureHero = {
  title: 'Qui',
  subtitle: 'je suis :',
  paragraph: "Je suis Thibaut Plichon, <strong>développeur</strong> depuis 2021 j'ai toujours été passionné d'informatique et ai entrepris de poursuivre cette voie dans le but d'accompagner les professionels dans la création d'applications <strong>web</strong>. <br><br> Je suis tout aussi attentif au côté <strong>technique</strong> que <strong>créatif</strong> et ce mélange me permet de réaliser du contenu performant et personnalisé pour les particuliers ainsi que les professionels.",
  socials: [
    { url: 'https://www.instagram.com/t_boot_dev/?hl=fr', label: 'Instagram' },
    { url: 'https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/', label: 'Linkedin' },
    { url: 'https://github.com/Thibateau', label: 'Github' },
  ],
  picture: '/images/thibaut2.jpg',
}
export const TOOL_BOX_DATA : IToolsBox = {
  title: 'Ma boite à outils :',
  paragraph: "J'utilise différents languages de programmation et technologies afin de répondre au mieux à vos besoins",
  toolsitems: [
    { picture: '/images/html.png', label: 'HTML' },
    { picture: '/images/css.png', label: 'CSS' },
    { picture: '/images/javascript.png', label: 'Javascript' },
    { picture: '/images/vuejs.png', label: 'Vue & NuxtJs' },
    { picture: '/images/wordpress.png', label: 'Wordpress' },
    { picture: '/images/figma.png', label: 'Figma' },
    { picture: '/images/tailwind.png', label: 'Tailwind ' },
    { picture: '/images/photoshop.png', label: 'Photoshop' },
  ],
}
// PROJECTS PAGE
export const CARTOON_HERO_DATA : ICartoonHero = {
  picture: '/images/cartoon.PNG',
  title: 'Voici mes différentes applications',
  subtitle: 'Développées dans divers domaines',
  label: 'A votre tour ?',
}

export const PROJECT_PRESENTATION_DATA : IProjectPresentation = {
  title: 'Mes travaux :',
  text: "Ces projets ont été développés dans le cadre d'études ou pour des professionels.",
  works: [
    { picture: '/images/psukheMockup.jpg', title: 'Psukhé', text: 'Site réalisé pour une psychologue Lilloise' },
    { picture: '/images/AntManne.jpg', title: 'Ant-Manne', text: 'Simulateur de fourmiliére avec site dédié' },
    { picture: '/images/simpsonsMockup.jpg', title: 'Random Simpsons', text: "Projet personnel dans le but d'utiliser une api avec nuxt" },
    { picture: '/images/TBoot.png', title: 'T Boot', text: 'Création de site web sous Nuxt.JS pour branding' },
    { picture: '/images/Prout.png', title: 'P.design', text: 'Landing page animé en javascript design avec humour' },
    { picture: '/images/BinBin.png', title: 'Binbin Jaaro', text: "Site web pour la présentation d'une marque de bijoux" },
  ],
}
// FOOTER
export const FOOTER_DATA : IFooter = {
  title: 'T_Boot',
  subtitle: 'T_Boot développement web Front-End.',
  items: [
    { label: 'ACCUEIL', name: 'index' },
    { label: 'PERSO', name: 'about' },
    { label: 'PROJETS', name: 'projets' },
    { label: 'CONTACT', name: 'contact' },
  ],
  rights: ' © Copyright 2022 T_Boot_Dev. All rights reserved.',
  logo: '/images/logo.png',
  social: [
    { url: 'https://www.instagram.com/t_boot_dev/?hl=fr', label: 'Instagram' },
    { url: 'https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/', label: 'Linkedin' },
    { url: 'https://github.com/Thibateau', label: 'Github' }],
}
