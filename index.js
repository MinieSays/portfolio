let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape')
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove('dark-theme')
  }
}

function contact(event) {
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += ' modal__overlay--visible'
// Forms on default refresh.. instead:
event.preventDefault()
    emailjs
    .sendForm(
        'service_42ic5hi',
        'template_a3q4i04',
        event.target,
        '7wxX0U7TD5w60Xlp_'
    ).then(() => {
      // Forces error
      // throw new Error('error')
      loading.classList.remove('modal__overlay--visible')
      success.classList += ' modal__overlay--visible'
    }).catch(() => {
      loading.classList.remove('modal__overlay--visible')
      alert(
        'The Email service is temperarily unavailable. Please contact us'
      );
    })
    setTimeout(() => {

        console.log('it worked???')
    }, 1000)
}


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open')

  }
  isModalOpen = true
document.body.classList += ' modal--open'

}