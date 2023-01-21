'use strict';

// Preventing default behaviour.

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

document.body.addEventListener('click', function (e) {
  if (e.target.getAttribute('href') === '#') e.preventDefault();
});

var btnScrollTours = document.querySelector('.btn--tours');

btnScrollTours.addEventListener('click', function (e) {
  e.preventDefault();
  var sectionTours = document.querySelector('.section-tours');
  sectionTours.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
});

/* Page Navigation .*/

var navLinksCont = document.querySelector('.navigation__list');

navLinksCont.addEventListener('click', function (e) {
  if (e.target.classList.contains('navigation__link')) {
    e.preventDefault();
    var secSuffix = e.target.dataset.secSuffix;
    var secTarget = document.querySelector('.section-' + secSuffix);
    console.log(secTarget);
    secTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });

    var observer = new IntersectionObserver(function (entries) {
      var _entries = _slicedToArray(entries, 1),
          entry = _entries[0];

      if (!entry.isIntersecting) return;
      document.querySelector('#nav-toggle').checked = false;
      observer.unobserve(entry.target);
    }, { root: null, threshold: 0 });
    observer.observe(secTarget);
  }
});
