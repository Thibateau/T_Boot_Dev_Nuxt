
// NAVBAR
export interface ILeftItems {
	label: string;
	url:string;
}
export interface IRightItems {
	label: string;
	url:string;
}
export interface INavBar{
	left : ILeftItems[]
	right : IRightItems[]
	logo: string
}

// INDEX PAGE
export interface ILeftHero {
	picture : string,
	title: string,
	subtitle: string,
	paragraph: string
}
export interface ICta{
	label: string,
	url: string
}
export interface IRightHero {
	picture : string,
	title: string,
	subtitle: string,
	ctas: ICta[]
}

// ABOUT PAGE
export interface ISocial{
	url : string,
	label : string
}
export interface IPictureHero{
	title : string,
	subtitle : string,
	paragraph: string,
	socials : ISocial[],
	picture : string
}
export interface IToolList {
	picture : string,
	label: string
}
export interface IToolsBox{
	title : string,
	paragraph : string,
	toolsitems: IToolList[]
}

// PROJECTS PAGE
export interface ICartoonHero {
	picture : string,
	title: string,
	subtitle: string,
	ctas: ICta[]
}
export interface WorkItem{
	picture:string,
	title : string,
	text: string
}
export interface IProjectPresentation{
	title: string,
	text: string,
	works: WorkItem[]
}
// FOOTER
export interface IFooter {
	title:string,
	subtitle: string,
	items: ILeftItems[] & IRightItems[],
	logo:string,
	rights: string,
	social: ISocial[]
}
