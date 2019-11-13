import "../../styles/index.scss";

export default { title: "Design System|Navigation" };

export const baseNav = () => `
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
`;

export const alignment = () => `
<ul class="nav justify-content-center">
<li class="nav-item">
  <a class="nav-link active" href="#">Active</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</li>
</ul>
<hr />
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
`;

export const navbar = () => `
<nav class="navbar navbar-expand navbar-dark justify-content-between winterthur-navbar-top">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="https://secure.winterthur.org/ecommerce/ItemList.aspx" target="_blank">Buy
        Tickets</a>
    </li>
    <li class="nav-item winterthur-nav-spacer"></li>
    <li class="nav-item">
      <a class="nav-link" href="http://www.winterthur.org/visit/hours-directions/" target="_blank">Hours &
        Directions</a>
    </li>
    <li class="nav-item winterthur-nav-spacer"></li>
    <li class="nav-item">
      <a class="nav-link" href="http://www.winterthur.org/visit/calendar/" target="_blank">Calendar</a>
    <li class="nav-item winterthur-nav-spacer"></li>
    <li class="nav-item">
      <a class="nav-link" href="https://inside.winterthur.org/give" target="_blank">Give</a>
    </li>
  </ul>
  <ul class="navbar-nav">
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.facebook.com/winterthurmuse/?ref=nf" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://twitter.com/winterthurmuse" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.pinterest.com/winterthurmuse/" target="_blank">
        <i class="fab fa-pinterest"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.instagram.com/winterthurmuse/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.tripadvisor.com/Attraction_Review-g34060-d138300-Reviews-Winterthur_Museum_Garden_Library-Winterthur_Delaware.html"
        target="_blank">
        <i class="fab fa-tripadvisor"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="http://museumblog.winterthur.org/" target="_blank">
        <i class="fas fa-blog"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="mailto:webmaster@winterthur.org" target="_blank">
        <i class="fas fa-envelope"></i>
      </a>
    </li>
  </ul>
</nav>
`;

export const topBar = () => `
<nav class="navbar navbar-expand navbar-dark justify-content-between winterthur-navbar-top">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="https://secure.winterthur.org/ecommerce/ItemList.aspx" target="_blank">Buy Tickets</a>
    </li>
    <li class="nav-item winterthur-nav-spacer" /></li>
    <li class="nav-item">
      <a class="nav-link" href="http://www.winterthur.org/visit/hours-directions/" target="_blank">Hours & Directions</a>
    </li>
    <li class="nav-item winterthur-nav-spacer" /></li>
    <li class="nav-item">
      <a class="nav-link" href="http://www.winterthur.org/visit/calendar/" target="_blank">Calendar</a>
    </li>
    <li class="nav-item winterthur-nav-spacer" /></li>
    <li class="nav-item">
      <a class="nav-link" href="https://inside.winterthur.org/give" target="_blank">Give</a>
    </li>
  </ul>
  <ul class="navbar-nav">
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.facebook.com/winterthurmuse/?ref=nf" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://twitter.com/winterthurmuse" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.pinterest.com/winterthurmuse/" target="_blank">
        <i class="fab fa-pinterest"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.instagram.com/winterthurmuse/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="https://www.tripadvisor.com/Attraction_Review-g34060-d138300-Reviews-Winterthur_Museum_Garden_Library-Winterthur_Delaware.html" target="_blank">
        <i class="fab fa-tripadvisor"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="http://museumblog.winterthur.org/" target="_blank">
      <i class="fas fa-blog"></i>
      </a>
    </li>
    <li class="nav-item winterthur-nav-item-social">
      <a href="mailto:webmaster@winterthur.org" target="_blank">
        <i class="fas fa-envelope"></i>
      </a>
    </li>
  </ul>
</nav>
`;
