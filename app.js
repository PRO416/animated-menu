const set = document.querySelector('.set');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav li');
const close = document.querySelector('.close');
const line = document.querySelector('.line');

const len = navItems.length - 1;

set.addEventListener('click', () => {
  navItems.forEach((l, k) => {
    l.style.transform = 'translateX(0)';
    l.style.transitionDelay = `${k / 10}s`;
    l.style.opacity = 1;
  });
  close.style.transform = 'translateY(0%) scale(1)';
  line.style.transform = 'scale(1)';
});

close.addEventListener('click', () => {
  navItems.forEach((l, k) => {
    k = len - k;
    l.style.transform = 'translateX(150%)';
    l.style.transitionDelay = `${k / 15}s`;
    l.style.opacity = 0;
  });
  close.style.transform = 'translateY(-32vh) scale(0)';
  line.style.transform = 'scale(0)';
})