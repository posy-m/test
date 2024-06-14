const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")

let modal1 = document.querySelector("#popup1")
let modal2 = document.querySelector("#popup2")
let modal3 = document.querySelector("#popup3")
let modal4 = document.querySelector("#popup4")

img1.addEventListener("click", () => {
  modal1.style.display = "block"
})

modal1.addEventListener("click", () => {
  modal1.style.display = "none"
})

img2.addEventListener("click", () => {
  modal2.style.display = "block"
})

modal2.addEventListener("click", () => {
  modal2.style.display = "none"
})

img3.addEventListener("click", () => {
  modal3.style.display = "block"
})

modal3.addEventListener("click", () => {
  modal3.style.display = "none"
})

img4.addEventListener("click", () => {
  modal4.style.display = "block"
})

modal4.addEventListener("click", () => {
  modal4.style.display = "none"
})


