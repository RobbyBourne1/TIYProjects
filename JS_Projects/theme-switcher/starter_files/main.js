
function switchKitten() {
  document.body.id = "kittens"
  let hKittens = document.querySelector("h1")
    hKittens.textContent = "Kittens"

    let pKittens = document.querySelector("p")
    pKittens.innerHTML = "A kitten, also known as a kitty or kitty cat, is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days."

}
function switchTokyo() {
  document.body.id = "tokyo"
  let hTokyo = document.querySelector("h1")
    hTokyo.textContent = "Neo Tokyo"

  let pTokyo = document.querySelector("p")
  pTokyo.innerHTML = "The Neo Tokyo aesthetic has permeated some of the biggest films and novels of the last 40 years, including Blade Runner and Akira."

}
function switchMetal() {
  document.body.id = "metal"
  let hMetal = document.querySelector("h1")
    hMetal.textContent = "Heavy Metal"

  let pMetal = document.querySelector("p")
  pMetal.innerHTML = "Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States."
}
