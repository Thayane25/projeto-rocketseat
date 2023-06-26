function toggleMode() {
const html = document.documentElement
  html.classList.toggle("light")
const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {img.setAttribute('src','./assets/avatar-light.png')
}else{img.setAttribute("src", "./assets/avatar.png") }

if (html.classList.contains("light")) {
  img.setAttribute("alt", "Foto de Mayk Brito usando óculos escuros num fundo roxo e azul.")
} else {
  img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos, camisa preta e fundo amarelo")
}


}