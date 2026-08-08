document.querySelector('.menu')?.addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px';
  nav.style.background = '#fff';
  nav.style.flexDirection = 'column';
  nav.style.borderBottom = '1px solid #e8eaf0';
});
