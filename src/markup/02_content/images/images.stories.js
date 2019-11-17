import "../../../styles/index.scss";

export default { title: "Content|Image" };

export const fullWidthImage = () => `
<section class="container">
  <div class="row">
    <div class="col">
      <img class="img-fluid" src="https://inside.winterthur.org/image/winterthur-estate-pond.jpg"
        style="width: 100%; max-height: 400px; object-fit: cover;" />
    </div>
  </div>
</section>
`;

export const fullWidthImageWithCaption = () => `
<section class="container">
  <div class="row">
    <div class="col">
      <img class="img-fluid" src="https://inside.winterthur.org/image/winterthur-estate-pond.jpg"
        style="width: 100%; max-height: 400px; object-fit: cover;" />
      <p class="winterthur-typ-caption">Nulla vitae elit libero, a pharetra augue.</p>
    </div>
  </div>
</section>
`;

export const sideBySideImageWithCaption = () => `
<section class="container">
  <div class="row">
    <div class="col-md">
      <img class="img-fluid" src="https://inside.winterthur.org/image/winterthur-estate-pond.jpg"
        style="width: 100%; max-height: 400px; object-fit: cover;" />
      <p class="winterthur-typ-caption">Nulla vitae elit libero, a pharetra augue.</p>
    </div>
    <div class="col-md">
      <h1 class="text-primary">Page Title</h1>
      <p>Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius
        blandit sit amet non magna. <span class="font-weight-bold">Aenean eu leo quam. Pellentesque ornare</span>
        sem lacinia quam venenatis vestibulum.
      </p>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </div>
  </div>
  </div>
</section>
`;
export const titleWithSideBySideImageAndCaption = () => `
<section class="container">
<div class="row">
  <div class="col">
  <h1 class="text-primary">Page Title</h1>
  </div>
</div>
  <div class="row">
    <div class="col-md">
      <img class="img-fluid" src="https://inside.winterthur.org/image/winterthur-estate-pond.jpg"
        style="width: 100%; max-height: 400px; object-fit: cover;" />
      <p class="winterthur-typ-caption">Nulla vitae elit libero, a pharetra augue.</p>
    </div>
    <div class="col-md">
      <p>Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius
        blandit sit amet non magna. <span class="font-weight-bold">Aenean eu leo quam. Pellentesque ornare</span>
        sem lacinia quam venenatis vestibulum.
      </p>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </div>
  </div>
  </div>
</section>
`;

export const titleWithSideBySideTextAndImage = () => `
<section class="container">
<div class="row">
  <div class="col">
  <h1 class="text-primary">Page Title</h1>
  </div>
</div>
  <div class="row">
    <div class="col-md">
      <p>Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius
        blandit sit amet non magna. <span class="font-weight-bold">Aenean eu leo quam. Pellentesque ornare</span>
        sem lacinia quam venenatis vestibulum.
      </p>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </div>
    <div class="col-md">
    <img class="img-fluid" src="https://inside.winterthur.org/image/winterthur-estate-pond.jpg"
      style="width: 100%; max-height: 400px; object-fit: cover;" />
    <p class="winterthur-typ-caption">Nulla vitae elit libero, a pharetra augue.</p>
  </div>
  </div>
  </div>
</section>
`;
