// año en footer
document.getElementById('y')?.append(new Date().getFullYear());

// toggle dark mode
document.getElementById('btnTheme')?.addEventListener('click',()=>{
  document.documentElement.classList.toggle('theme-dark');
});

// activar link actual del navbar
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a=>{
  if(a.getAttribute('href') === here) a.classList.add('active');
});

// validación Bootstrap (contacto)
(()=>{
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form=>{
    form.addEventListener('submit',evt=>{
      if(!form.checkValidity()){
        evt.preventDefault();
        evt.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// filtros del menú (botones data-filter)
const btns = document.querySelectorAll('[data-filter]');
const grid = document.getElementById('menuGrid');
btns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const tag = btn.getAttribute('data-filter');
    const items = grid?.querySelectorAll('[data-tags]');
    items?.forEach(card=>{
      const tags = (card.getAttribute('data-tags')||'').split(' ');
      if(tag === 'all' || tags.includes(tag)){
        card.classList.remove('d-none');
      }else{
        card.classList.add('d-none');
      }
    });
    // UI simple activa
    btns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// cerrar navbar al hacer click (mobile)
document.querySelectorAll('.navbar .nav-link').forEach(link=>{
  link.addEventListener('click',()=>{
    const bsCollapse = bootstrap.Collapse.getInstance(document.getElementById('nav'));
    bsCollapse?.hide();
  });
});



