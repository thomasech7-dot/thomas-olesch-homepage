const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(opened));
    nav.classList.toggle('open', opened);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {toggle.setAttribute('aria-expanded', 'false');nav.classList.remove('open');}
  });
}
