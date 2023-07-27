function onScroll() {
  if (scrollY > 4) {
    navegac.classList.add('scroll')
  } else {
    navegac.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
