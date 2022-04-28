const mobileNavButton = document.getElementById('mobileNavBarButton');
const closeButton = document.getElementById('closeButton');
const justWow = document.querySelector('.mobileNavBar');


mobileNavButton.addEventListener('click',() => {
  justWow.classList.add('activeClass');
});

closeButton.addEventListener('click',() => {
  justWow.classList.remove('activeClass');
});
