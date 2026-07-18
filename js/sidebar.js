/* Sidebar shared logic — SEAGRI */
(function(){
  var sidebar = document.getElementById('sidebar');
  if(!sidebar) return;

  // Inject backdrop if not present
  var backdrop = document.getElementById('sidebarBackdrop');
  if(!backdrop){
    backdrop = document.createElement('div');
    backdrop.id = 'sidebarBackdrop';
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);
  }

  // Inject mobile hamburger into header if not present
  var header = document.querySelector('header');
  if(header && !header.querySelector('.mobile-menu-btn')){
    var btn = document.createElement('button');
    btn.className = 'mobile-menu-btn';
    btn.setAttribute('aria-label','Abrir menu');
    btn.innerHTML = '&#9776;';
    header.insertBefore(btn, header.firstChild);
    btn.addEventListener('click', openSidebar);
  }

  function isMobile(){ return window.innerWidth <= 768; }

  function openSidebar(){
    sidebar.classList.add('open');
    if(isMobile()){
      backdrop.classList.add('show');
    } else {
      document.body.classList.add('sidebar-open');
    }
  }

  function closeSidebar(){
    sidebar.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.classList.remove('sidebar-open');
  }

  // Init: open sidebar on desktop, closed on mobile
  if(!isMobile()){
    openSidebar();
    document.body.classList.add('sidebar-open');
  } else {
    closeSidebar();
  }

  // Sidebar toggle button (X inside sidebar)
  var toggle = sidebar.querySelector('.sidebar-toggle');
  if(toggle) toggle.addEventListener('click', closeSidebar);

  // Expand tab (left edge)
  var expand = document.querySelector('.sidebar-expand');
  if(expand) expand.addEventListener('click', openSidebar);

  // Backdrop click closes
  backdrop.addEventListener('click', closeSidebar);

  // Handle resize
  window.addEventListener('resize', function(){
    if(!isMobile()){
      backdrop.classList.remove('show');
      if(sidebar.classList.contains('open')){
        document.body.classList.add('sidebar-open');
      }
    } else {
      document.body.classList.remove('sidebar-open');
      if(sidebar.classList.contains('open') && !backdrop.classList.contains('show')){
        backdrop.classList.add('show');
      }
    }
  });

  // Mark active link
  var p = location.pathname.split('/').pop().replace('.html','');
  if(!p || p === '') p = 'index';
  var a = document.querySelector('.sidebar-link[data-page="'+p+'"]');
  if(a) a.classList.add('ativo');

  // Admin visibility — Chamados e Contatos só aparecem com senha
  function refreshAdmin(){
    var isAdmin = sessionStorage.getItem('seagri_admin') === '1';
    var c = document.getElementById('sidebarLinkContatos');
    if(c) c.style.display = isAdmin ? '' : 'none';
    var ch = document.getElementById('sidebarLinkChamados');
    if(ch) ch.style.display = isAdmin ? '' : 'none';
  }
  refreshAdmin();
  window._sidebarRefreshAdmin = refreshAdmin;
})();
