const menu = document.querySelector('.menu');
const nav = document.querySelector('#navMenu');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('#navMenu a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const filters = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projects.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
    });
  });
});

document.querySelectorAll('.choice-grid button').forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.querySelector('b')?.textContent || 'project';
    window.location.hash = 'contact';
    setTimeout(() => alert(`Great choice: ${label}. Update the contact email/social links in index.html, then your client can contact you about this project.`), 250);
  });
});
