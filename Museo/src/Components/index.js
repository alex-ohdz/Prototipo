
//evento para resaltar imagen
addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.setProperty('--mouse-x', x);
  document.body.style.setProperty('--mouse-y', y);
});