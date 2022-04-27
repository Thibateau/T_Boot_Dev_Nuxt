import { ILeftHero, IPictureHero, IRightHero, IToolsBox, ICartoonHero, IProjectPresentation, INavBar, IFooter } from '../types'

export const NAV_BAR_DATA : INavBar = {
  left: [
    { label: 'ACCUEIL', url: 'index.vue' },
    { label: 'A PROPOS', url: 'about.vue' },
  ],
  right: [
    { label: 'PROJETS', url: 'projets.vue' },
    { label: 'CONTACT', url: 'contact.vue' },
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
  subtitle: 'Nous sommes soucieux de developper les applications avec des technologies qui ont un rendu perfomant, rapide, stable et sécurisé.',
  ctas: [
    { label: 'Me contacter', url: '#' },
  ],
}
// ABOUT PAGE
export const PICTURE_HERO_DATA : IPictureHero = {
  title: 'Qui',
  subtitle: 'je suis :',
  paragraph: "Bonjour, je suis Thibaut Plichon,developpeur depuis 2021 j'ai toujours été passionné d'informatique et ai entrepris de devenir développeur dans le but d'accompagner les personnes dans l& création d'application web. <br> Je suis tout aussi attentif au côté technique que créatif et ce mélange me permet de réaliser du contenu performant et personnalisé.",
  socials: [
    { url: 'https://www.instagram.com/t_boot_dev/?hl=fr', label: 'Instagram' },
    { url: 'https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/', label: 'Linkedin' },
    { url: 'https://github.com/Thibateau', label: 'Github' },
  ],
  picture: 'Thibaut.png',
}
export const TOOL_BOX_DATA : IToolsBox = {
  title: 'Notre boite à outils :',
  paragraph: "j'utilise différents languages de programmation et technologies afin de répondre au mieux à vos besoins",
  toolsitems: [
    { picture: 'html.png', label: 'HTML' },
    { picture: 'css.png', label: 'CSS' },
    { picture: 'javascript.png', label: 'Javascript' },
    { picture: 'nuxt.png', label: 'Vue & NuxtJs' },
    { picture: 'wordpress.png', label: 'Wordpress' },
    { picture: 'figma.png', label: 'Figma' },
    { picture: 'tailwind.png', label: 'Tailwind ' },
    { picture: 'photoshop.png', label: 'Photoshop' },
  ],
}
// PROJECTS PAGE
export const CARTOON_HERO_DATA : ICartoonHero = {
  picture: 'cartoon.PNG',
  title: 'Voici nos différentes applications',
  subtitle: 'Développées dans divers domaines',
  ctas: [
    { label: 'A votre tour ?', url: '' },
  ],
}
export const PROJECT_PRESENTATION_DATA : IProjectPresentation = {
  title: 'Voici nos travaux :',
  text: "Ces projets ont été développés dans le cadre d'étude ou pour des professionels.",
  works: [
    { picture: 'psukheMockup.jpg', title: 'Psukhé', text: 'Site réalisé pour une psychologue Lilloise.' },
    { picture: 'AntManne.jpg', title: 'Ant-Manne', text: "Simulateur d'une fourmiliére avec site dédié." },
    { picture: 'simpsonsMockup.jpg', title: 'Random Simpsons', text: "Projet personnel dans le but d'utiliser les api avec nuxt." },
    { picture: 'TBoot.jpg', title: 'T Boot', text: 'Création de site web sous Nuxt.JS pour branding' },
  ],
}
// FOOTER
export const FOOTER_DATA : IFooter = {
  title: 'T_Boot',
  subtitle: 'T_Boot développement web Front-End.',
  items: [
    { label: 'ACCUEIL', url: 'index.vue' },
    { label: 'A PROPOS', url: 'about.vue' },
    { label: 'PROJETS', url: 'projets.vue' },
    { label: 'CONTACT', url: 'contact.vue' },
  ],
  rights: ' © Copyright 2022 T_Boot_Dev. All rights reserved.',
  logo: '/assets/images/logo.png',
  social: [
    { url: 'https://www.instagram.com/t_boot_dev/?hl=fr', label: 'Instagram' },
    { url: 'https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/', label: 'Linkedin' },
    { url: 'https://github.com/Thibateau', label: 'Github' }],
}
