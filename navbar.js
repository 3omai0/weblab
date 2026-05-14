// navbar.js - inject shared navbar
function renderNavbar(activePage) {
  const username = sessionStorage.getItem('username') || '';
  const role = sessionStorage.getItem('role') || '';
  const cartCount = localStorage.getItem('cartCount') || 0;

  const nav = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold d-flex align-items-center gap-2" href="home.html">
        <i class="fa-solid fa-mobile-screen-button text-primary"></i> Mobile Store
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link ${activePage==='home'?'active':''}" href="home.html">Home</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='products'?'active':''}" href="products.html">Our Products</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='search'?'active':''}" href="search.html">Search Product</a></li>
          ${role === 'customer' ? `<li class="nav-item"><a class="nav-link ${activePage==='buy'?'active':''}" href="buy.html">Buy</a></li>` : ''}
          ${role === 'customer' ? `<li class="nav-item"><a class="nav-link ${activePage==='cart'?'active':''}" href="cart.html">MyCart <span class="badge bg-danger" id="cartBadge">${cartCount}</span></a></li>` : ''}
          ${role === 'admin' ? `<li class="nav-item"><a class="nav-link ${activePage==='manage'?'active':''}" href="manage.html">Manage Items</a></li>` : ''}
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><span class="nav-link text-light"><i class="fa fa-user me-1"></i>${username}</span></li>
          <li class="nav-item"><a class="nav-link text-warning fw-bold" href="login.html" onclick="sessionStorage.clear()">LOGOUT</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
  document.getElementById('navbar-placeholder').innerHTML = nav;
}
