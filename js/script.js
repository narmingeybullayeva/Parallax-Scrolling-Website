const button = document.getElementById("btn")
const heading = document.getElementById("heading")
const sun = document.getElementById("sun")
const airBaloon = document.getElementById("air_baloon")
const cloud = document.getElementById("cloud")
const mountain = document.getElementById("mountain")
const header = document.getElementById("header")
const footer = document.querySelector("footer")
const body = document.body
const html = document.documentElement

window.addEventListener("scroll", function () {
  let value = window.scrollY
  
  // Calculate footer position and document boundaries
  const footerTop = footer.offsetTop
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const bodyHeight = document.body.scrollHeight
  const maxScroll = Math.min(footerTop - windowHeight + footer.offsetHeight, documentHeight - windowHeight)
  
  // Prevent scrolling beyond the calculated maximum
  if (value > maxScrollValue) {
    window.scrollTo(0, maxScrollValue)
    return
  }
  
  // Apply parallax effects
  heading.style.top = value * -0.5 + "%"
  airBaloon.style.top = value * -1.5 + "px"
  airBaloon.style.left = value * -1.5 + "px"
  sun.style.top = value * 1.5 + "px"
  button.style.marginTop = value * 1.5 + "px"
  mountain.style.top = value * 0.2 + "px"
  header.style.top = value * 0.25 + "px"
}
)