const button = document.getElementById("btn")
const heading = document.getElementById("heading")
const sun = document.getElementById("sun")
const airBaloon = document.getElementById("air_baloon")
const cloud = document.getElementById("cloud")
const mountain = document.getElementById("mountain")
const header = document.getElementById("header")
const footer = document.querySelector("footer")

// Store initial positions to prevent accumulation
const initialPositions = {
  heading: { top: 50 },
  airBaloon: { top: 0, left: 0 },
  sun: { top: 0 },
  button: { marginTop: 0 },
  mountain: { top: 0 },
  header: { top: 0 }
}

window.addEventListener("scroll", function () {
  let value = window.scrollY
  
  // Calculate the maximum useful scroll position (when footer starts to appear)
  const footerRect = footer.getBoundingClientRect()
  const footerStartsAt = footer.offsetTop - window.innerHeight
  
  // Only apply parallax effects when we're in the main content area
  const shouldApplyParallax = value < footerStartsAt && footerRect.top > 0
  
  if (shouldApplyParallax) {
    // Apply parallax effects with proper bounds
    heading.style.top = (initialPositions.heading.top + value * -0.5) + "%"
    airBaloon.style.top = (initialPositions.airBaloon.top + value * -1.5) + "px"
    airBaloon.style.left = (initialPositions.airBaloon.left + value * -1.5) + "px"
    sun.style.top = (initialPositions.sun.top + value * 1.5) + "px"
    button.style.marginTop = (initialPositions.button.marginTop + value * 1.5) + "px"
    mountain.style.top = (initialPositions.mountain.top + value * 0.2) + "px"
    header.style.top = (initialPositions.header.top + value * 0.25) + "px"
  } else {
    // Reset elements to their final positions when footer is reached
    heading.style.top = (initialPositions.heading.top + footerStartsAt * -0.5) + "%"
    airBaloon.style.top = (initialPositions.airBaloon.top + footerStartsAt * -1.5) + "px"
    airBaloon.style.left = (initialPositions.airBaloon.left + footerStartsAt * -1.5) + "px"
    sun.style.top = (initialPositions.sun.top + footerStartsAt * 1.5) + "px"
    button.style.marginTop = (initialPositions.button.marginTop + footerStartsAt * 1.5) + "px"
    mountain.style.top = (initialPositions.mountain.top + footerStartsAt * 0.2) + "px"
    header.style.top = (initialPositions.header.top + footerStartsAt * 0.25) + "px"
  }

  // Handle background color transition with better logic
  const contentContainer = document.querySelector('.content_container')
  const heroHeight = document.querySelector('.hero').offsetHeight
  const sunsetStart = heroHeight * 0.3
  const sunsetEnd = contentContainer.offsetTop + contentContainer.offsetHeight * 0.5
  
  // Create a sunset window that doesn't extend to the very bottom
  const isInSunsetWindow = value >= sunsetStart && value <= sunsetEnd
  
  if (isInSunsetWindow) {
    document.body.style.backgroundImage = "linear-gradient(to right, #FFA08C , #FF705C)"
  } else {
    document.body.style.backgroundImage = "linear-gradient(to right, #004258, #004F76)"
  }
})

// Ensure scroll doesn't go beyond document bounds
window.addEventListener("scroll", function() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  if (window.scrollY > maxScroll) {
    window.scrollTo(0, maxScroll)
  }
})