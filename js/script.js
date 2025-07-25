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
  
  // Calculate the maximum scroll position (total content height minus viewport height)
  const maxScroll = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight
  
  // Get footer position
  const footerTop = footer.offsetTop
  const footerHeight = footer.offsetHeight
  
  // Stop parallax effects when footer comes into view
  if (value >= footerTop - window.innerHeight) {
    // Lock elements at their final positions when footer is reached
    const finalValue = footerTop - window.innerHeight
    
    heading.style.top = finalValue * -0.5 + "%"
    airBaloon.style.top = finalValue * -1.5 + "px"
    airBaloon.style.left = finalValue * -1.5 + "px"
    sun.style.top = finalValue * 1.5 + "px"
    button.style.marginTop = finalValue * 1.5 + "px"
    mountain.style.top = finalValue * 0.2 + "px"
    header.style.top = finalValue * 0.25 + "px"
    
    return // Exit early to prevent further calculations
  }
  
  // Apply normal parallax effects only when not at footer
  heading.style.top = value * -0.5 + "%"
  airBaloon.style.top = value * -1.5 + "px"
  airBaloon.style.left = value * -1.5 + "px"
  sun.style.top = value * 1.5 + "px"
  button.style.marginTop = value * 1.5 + "px"
  mountain.style.top = value * 0.2 + "px"
  header.style.top = value * 0.25 + "px"
})