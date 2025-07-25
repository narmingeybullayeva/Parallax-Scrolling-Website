const button = document.getElementById("btn")
const heading = document.getElementById("heading")
const sun = document.getElementById("sun")
const airBaloon = document.getElementById("air_baloon")
const cloud = document.getElementById("cloud")
const mountain = document.getElementById("mountain")
const header = document.getElementById("header")
const footer = document.querySelector("footer")

window.addEventListener("scroll", function () {
  let value = window.scrollY
  
  // Calculate the maximum scroll position (document height - window height)
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  
  // Calculate footer position relative to viewport
  const footerRect = footer.getBoundingClientRect()
  const footerTop = footerRect.top + window.scrollY
  
  // Stop parallax effects when footer comes into view or when reaching max scroll
  const shouldStopParallax = footerRect.top <= window.innerHeight || value >= maxScroll
  
  if (!shouldStopParallax) {
    // Apply parallax effects only when not at the bottom
    heading.style.top = 50 + value * -0.5 + "%"
    airBaloon.style.top = value * -1.5 + "px"
    airBaloon.style.left = value * -1.5 + "px"
    sun.style.top = value * 1.5 + "px"
    button.style.marginTop = value * 1.5 + "px"
    mountain.style.top = value * 0.2 + "px"
    header.style.top = value * 0.25 + "px"
  }

  // Handle background color transition
  // Use a threshold based on content height rather than sun position
  const colorChangeThreshold = document.querySelector('.content_container').offsetTop * 0.3
  
  if (value >= colorChangeThreshold && !shouldStopParallax) {
    document.body.style.backgroundImage =
      "linear-gradient(to right, #FFA08C , #FF705C)"
  } else if (!shouldStopParallax) {
    document.body.style.backgroundImage =
      "linear-gradient(to right, #004258, #004F76)"
  }
  
  // Ensure we maintain the final state when at bottom
  if (shouldStopParallax) {
    document.body.style.backgroundImage =
      "linear-gradient(to right, #FFA08C , #FF705C)"
  }
})

// Prevent scroll beyond document bounds
window.addEventListener("scroll", function() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  if (window.scrollY > maxScroll) {
    window.scrollTo(0, maxScroll)
  }
})