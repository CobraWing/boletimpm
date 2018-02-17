const config = {}

config.MongoStore = {
  secret: "FTESP",
  url: "mongodb://boletimpm:pmboletim@ds239638.mlab.com:39638/boletimpm"
}
config.text = {
	sheriff: "FTESP - Força Tática",
	pd: "PMESP - Rádio Patrulha",
	ems: "SAMU - Serviço de Atendimento Médico de Urgência",
	highway: "ROCAM - Rondas Ostensiva Com Apóio de Motos",
	sheriffbackground: "here goes a URL TO THE BACKGROUND IMAGE of your sheriff department",
	pdbackground: "here goes a URL TO THE BACKGROUND IMAGE of your police department",
	emsbackground: "here goes a URL TO THE BACKGROUND IMAGE of your fire rescue department",
	highwaybackground: "here goes a URL TO THE BACKGROUND IMAGE of your highway patrol department",
	mainbackgroundone: "http://cdn.escapistmagazine.com/media/global/images/library/deriv/632/632377.jpg",
	mainbackgroundtwo: "http://www.mytrickrc.com/wp-content/uploads/2013/11/Mustang_L34_dark.jpg",
	mainbackgroundthree: "https://img.gta5-mods.com/q75/images/mastercom-b-siren/02f0b4-AFPGetty-167087672.jpg",
	maintextone: "Text to be displayed on the first image of the slideshow on the home page",
	maintexttwo: "Text to be displayed on the second image of the slideshow on the home page",
	maintextthree: "Text to be displayed on the third image of the slideshow on the home page",
	sherifflogo: "URL to sheriff logo",
	pdlogo: "URL to police dept. logo",
	emslogo: "URL to fire rescue logo",
	highwaylogo: "URL to highway patrol logo"


}

config.admin = {
	username: "moraes",
	password: "moura18"
}

module.exports = config
