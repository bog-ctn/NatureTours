'use strict';

// Preventing default behaviour.
document.body.addEventListener('click', function (e) {
  if (e.target.getAttribute('href') === '#') e.preventDefault();
});

const btnScrollTours = document.querySelector('.btn--tours');

btnScrollTours.addEventListener('click', function (e) {
  e.preventDefault();
  const sectionTours = document.querySelector('.section-tours');
  sectionTours.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
});

/* Page Navigation .*/

const navLinksCont = document.querySelector('.navigation__list');

navLinksCont.addEventListener('click', function (e) {
  if (e.target.classList.contains('navigation__link')) {
    e.preventDefault();
    const secSuffix = e.target.dataset.secSuffix;
    const secTarget = document.querySelector(`.section-${secSuffix}`);
    console.log(secTarget);
    secTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        document.querySelector('#nav-toggle').checked = false;
        observer.unobserve(entry.target);
      },
      { root: null, threshold: 0 }
    );
    observer.observe(secTarget);
  }
});
