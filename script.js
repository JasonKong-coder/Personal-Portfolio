// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
  })
})

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar')
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)'
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)'
  } else {
    navbar.style.backgroundColor = 'rgba(30, 41, 59, 0.95)'
    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)'
  }
})