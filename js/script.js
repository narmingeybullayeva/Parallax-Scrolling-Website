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
  const contentContainer = document.querySelector('.content_container')
  const colorChangeThreshold = contentContainer.offsetTop * 0.5
  
  // Only change to sunset when we're in the middle section, not at the very bottom
  const isInMiddleSection = value >= colorChangeThreshold && value < (contentContainer.offsetTop + contentContainer.offsetHeight * 0.8)
  
  if (isInMiddleSection) {
    document.body.style.backgroundImage =
      "linear-gradient(to right, #FFA08C , #FF705C)"
  } else {
    // Keep night sky for beginning and end
    document.body.style.backgroundImage =
      "linear-gradient(to right, #004258, #004F76)"
  }
})

// Prevent scroll beyond document bounds
window.addEventListener("scroll", function() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  if (window.scrollY > maxScroll) {
    window.scrollTo(0, maxScroll)
  }
})