// hamburger menu
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.addEventListener('click', function(e){
    if(e.target != navMenu && e.target != hamburger){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})


// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light';
    }
})


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true ;
  document.documentElement.classList.add('dark');
} else {
  darkToggle.checked = false ;
  document.documentElement.classList.remove('dark');
}

// message form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwVYIGvmz8exPNpwRUgFjnnnyvRXotucLKXR0Qz334-bAzC_uYHaZsBPW3K3MIfythe/exec'
    const form = document.forms['message-portfolio-form']
    const btnLoading = document.querySelector('.btn-loading')
    const btnSend = document.querySelector('.btn-send')
    const alert = document.querySelector('.alert')

    form.addEventListener('submit', e => {
      e.preventDefault()
      btnSend.classList.toggle('hidden')
      btnLoading.classList.toggle('hidden')
      btnLoading.classList.add('flex')
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          console.log('Success!', response)
          alert.classList.remove('hidden');
          btnSend.classList.toggle('hidden')
          btnLoading.classList.toggle('hidden')
          form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })

    // hapus alert
    const btnAlert = document.querySelector('.btn-alert')

    btnAlert.addEventListener('click', function(){
        alert.classList.toggle('hidden')
    })