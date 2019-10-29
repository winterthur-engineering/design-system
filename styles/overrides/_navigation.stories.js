import "../index.scss";

export default { title: "Components|Navigation" };

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
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
    <img src="http://www.winterthur.org/wp-content/uploads/2018/01/web-logo300dpi.jpg" style="height: auto; max-width: 250px" />
  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="http://www.winterthur.org/visit/" target="_blank">Visit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.winterthur.org/exhibitions-events/" target="_blank">Exhibitions & Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.winterthur.org/education/" target="_blank">Education</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.winterthur.org/collections/" target="_blank">Collections</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.winterthur.org/membership/" target="_blank">Membership</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.winterthur.org/support/" target="_blank">Support</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.winterthur.org/shop/" target="_blank">Shop</a>
      </li>
    </ul>
  </div>
</nav>
<div>
`;
