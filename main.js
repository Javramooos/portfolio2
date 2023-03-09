const contactSection = document.querySelector('#contact');
const contactSectionHeight = contactSection.offsetHeight;
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const distanceFromTop = contactSection.getBoundingClientRect().top;

  if (distanceFromTop - windowHeight + contactSectionHeight <= 0) {
    contactSection.classList.add('in-view');
  } else {
    contactSection.classList.remove('in-view');
  }
});

