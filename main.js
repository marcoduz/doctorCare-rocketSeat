window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //para verificar se a seção passou da targetLine
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEndAt = sectionTop + sectionHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //apenas para ver no console a lógica funcionando
  /*console.log(
    'A seção chegou/passou da linha?',
    sectionTopReachOrPassedTargetLine
  )*/

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  //console.log(sectionBoundaries)

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

//scrollY pega as coordenadas da barra de scroll
//classList pega a lista de classes
function showNavOnScroll() {
  //identifica os elementos do html através do id
  //adiciona a classe scrollY de nav quando o scrollY for maior que 0
  //se não remove a classe scrollY de nav
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header
#services .card
#contact`)
