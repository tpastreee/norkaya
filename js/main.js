
document.addEventListener('click', function(e){
  const btn = e.target.closest('.acc-btn');
  if(!btn) return;
  const item = btn.closest('.acc-item');
  item.classList.toggle('open');
});
