//Navigation

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

//Tabs

const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

tabList.addEventListener("keydown", changeTabFocus)

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel)
})

let tabFocus = 0
function changeTabFocus(e) {
  const keydownLeft = 37
  const keydownRight = 39

  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1)

    // if the right key is pushed, move to the next tab on the right

    if (e.keyCode === keydownRight) {
      tabFocus++
      if (tabFocus >= tabs.length) {
        tabFocus = 0
      }
    }
    // if the left key is pushed, move to the next tab on the left
    if (e.keyCode === keydownLeft) {
      tabFocus--
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0)
    tabs[tabFocus].focus()
  }
}

function changeTabPanel(e) {
  const targetTab = e.target
  const targetPanel = targetTab.getAttribute("aria-controls")
  const targetImage = targetTab.getAttribute("data-image")

  const tabContainer = targetTab.parentNode
  const mainContainer = tabContainer.parentNode

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false)
  targetTab.setAttribute("aria-selected", "true")

  hideContent(mainContainer, '[role="tabpanel"]')

  /* mainContainer
    .querySelectorAll('[role="tabpanel"]')
    .forEach((panel) => panel.setAttribute("hidden", true))*/

  showContent(mainContainer, [`#${targetPanel}`])
  //mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden")

  hideContent(mainContainer, "picture")
  /*
  mainContainer
    .querySelectorAll()
    .forEach((picture) => picture.setAttribute("hidden", true)) */

  showContent(mainContainer, [`#${targetImage}`])

  // mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden")
}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true))
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden")
}
