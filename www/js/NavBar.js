class NavBar {

  render() {
    $('header').html(/*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-primary navbar-dark fixed-top ">
    <a class=" navbar-brand" href="#">Chyvek-Data</a>
    <div  id="nav-active-line"></div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"><span>Start</span></a>
       
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#omoss"><span>Om oss</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#produkter" id="produkter" role="button" data-toggle="collapse" data-target="#sub-nav" ><span>Produkter</span></a>
           <div class="collapse " id="sub-nav">
           <div class="d-lg-flex" id="sub-menu">
           <a class="nav-link" id="product-laptop" href="#produkter&laptop"><span>Laptops</span></a>
           <a class="nav-link" id="product-monitor" href="#produkter&monitor"><span>Screens</span></a>
           <a class="nav-link" id="product-usb" href="#produkter&usb"><span>USB-accessories</span></a>
           </div>
           </div>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="cart-icon" id="cart-counter">
          <a class="fas fa-shopping-cart nav-link position-relative" href="#cart"><span class="cart-icon-number">1</span></a>
        </li>
      </ul>
    </div>
    
  </nav>
    `);
  }


  subNavCollapse(){
    $('#sub-nav').collapse('hide')
  }








}