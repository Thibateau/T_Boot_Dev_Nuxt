import { ILeftHero, IPictureHero, IRightHero, IToolsBox, ICartoonHero, IProjectPresentation, INavBar, IFooter } from '../types'

export const NAV_BAR_DATA : INavBar = {
  left: [
    { label: 'ACCUEIL', name: 'index' },
    { label: 'A PROPOS', name: 'about' },
  ],
  right: [
    { label: 'PROJETS', name: 'projects' },
    { label: 'CONTACT', name: 'contact' },
  ],
  logo: '/assets/images/logo.png',
}
// HOME PAGE
export const LEFT_HERO_DATA: ILeftHero = {
  picture: 'https://kitwind.io/assets/kometa/laptop.png',
  title: 'T_Boot développement',
  subtitle: 'web front-end',
  paragraph: "Création d'applications web dynamiques , rapides, design.",
}
export const RIGHT_HERO_DATA : IRightHero = {
  picture: 'https://kitwind.io/assets/kometa/full-browser.png',
  title: "Utilisation d'outils performants",
  subtitle: "Je suis soucieux de developper les applications avec des technologies qui ont un rendu perfomant, rapide, stable et sécurisé afin d'optimiser votre rendu.",
  label: 'Me contacter',
}
// ABOUT PAGE
export const PICTURE_HERO_DATA : IPictureHero = {
  title: 'Qui',
  subtitle: 'je suis :',
  paragraph: "Bonjour, je suis Thibaut Plichon,developpeur depuis 2021 j'ai toujours été passionné d'informatique et ai entrepris de devenir développeur dans le but d'accompagner les personnes dans la création d'application web. Je suis tout aussi attentif au côté technique que créatif et ce mélange me permet de réaliser du contenu performant et personnalisé.",
  socials: [
    { url: 'https://www.instagram.com/t_boot_dev/?hl=fr', label: 'Instagram' },
    { url: 'https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/', label: 'Linkedin' },
    { url: 'https://github.com/Thibateau', label: 'Github' },
  ],
  picture: '/assets/images/Thibaut.png',
}
export const TOOL_BOX_DATA : IToolsBox = {
  title: 'Ma boite à outils :',
  paragraph: "j'utilise différents languages de programmation et technologies afin de répondre au mieux à vos besoins",
  toolsitems: [
    { picture: '/assets/images/html.png', label: 'HTML' },
    { picture: '/assets/images/css.png', label: 'CSS' },
    { picture: '/assets/images/javascript.png', label: 'Javascript' },
    { picture: '/assets/images/vuejs.png', label: 'Vue & NuxtJs' },
    { picture: '/assets/images/wordpress.png', label: 'Wordpress' },
    { picture: '/assets/images/figma.png', label: 'Figma' },
    { picture: '/assets/images/tailwind.png', label: 'Tailwind ' },
    { picture: '/assets/images/photoshop.png', label: 'Photoshop' },
  ],
}
// PROJECTS PAGE
export const CARTOON_HERO_DATA : ICartoonHero = {
  picture: '/assets/images/cartoon.PNG',
  title: 'Voici mes différentes applications',
  subtitle: 'Développées dans divers domaines',
  label: 'A votre tour ?',
}
export const PROJECT_PRESENTATION_DATA : IProjectPresentation = {
  title: 'Voici nos travaux :',
  text: "Ces projets ont été développés dans le cadre d'étude ou pour des professionels.",
  works: [
    { picture: '/assets/images/psukheMockup.jpg', title: 'Psukhé', text: 'Site réalisé pour une psychologue Lilloise.' },
    { picture: '/assets/images/AntManne.jpg', title: 'Ant-Manne', text: "Simulateur d'une fourmiliére avec site dédié." },
    { picture: '/assets/images/simpsonsMockup.jpg', title: 'Random Simpsons', text: "Projet personnel dans le but d'utiliser les api avec nuxt." },
    { picture: '/assets/images/TBoot.png', title: 'T Boot', text: 'Création de site web sous Nuxt.JS pour branding' },
    { picture: '/assets/images/Prout.png', title: 'Prout', text: "Landing page animé en javascript design avec un peu d'humour " },
    { picture: '/assets/images/BinBin.png', title: 'Binbin Jaaro', text: "Site web pour la présentation d'une marque de bijoux" },
  ],
}
// FOOTER
export const FOOTER_DATA : IFooter = {
  title: 'T_Boot',
  subtitle: 'T_Boot développement web Front-End.',
  items: [
    { label: 'ACCUEIL', name: 'index' },
    { label: 'A PROPOS', name: 'about' },
    { label: 'PROJETS', name: 'projets' },
    { label: 'CONTACT', name: 'contact' },
  ],
  rights: ' © Copyright 2022 T_Boot_Dev. All rights reserved.',
  logo: '/assets/images/logo.png',
  social: [
    { url: 'https://www.instagram.com/t_boot_dev/?hl=fr', label: 'Instagram' },
    { url: 'https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/', label: 'Linkedin' },
    { url: 'https://github.com/Thibateau', label: 'Github' }],
}
