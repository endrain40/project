const act = document.querySelectorAll(".activity");

console.log(act)

// act[0].addEventListener("mouseenter", () => {
//   act[0].style.backgroundColor = "red"
// })

// act[0].addEventListener("mouseleave", () => {
//   act[0].style.backgroundColor = "white"
// })

for (const a of act) {
  a.addEventListener("mouseenter", () => {
  a.style.backgroundColor = "orange"
})

  a.addEventListener("mouseleave", () => {
  a.style.backgroundColor = "white"
})
}