const toggleNavBtn = document.querySelector(".mobile-nav-toggle")
const navigation = document.querySelector(".primary-navigation")

toggleNavBtn.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible")

  if (visibility === "false") {
    navigation.setAttribute("data-visible", "true")
    toggleNavBtn.setAttribute("aria-expanded", true)
  } else {
    navigation.setAttribute("data-visible", "false")
    toggleNavBtn.setAttribute("aria-expanded", false)
  }
})
