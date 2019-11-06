import "../../../../styles/index.scss";

export default { title: "Components|Dynamic/Image Content" };

export const fullWidthImage = () => `
<section class="container">
  <div class="row justify-content-lg-center">
    <div class="col">
      <img class="img-fluid" src="https://inside.winterthur.org/image/winterthur-estate-pond.jpg"
        style="width: 100%; max-height: 400px; object-fit: cover;" />
    </div>
  </div>
</section>
`;

export const fullWidthImageWithCaption = () => `
<section class="container">
  <div class="row justify-content-lg-center">
    <div class="col">
      <img class="img-fluid" src="https://inside.winterthur.org/image/winterthur-estate-pond.jpg"
        style="width: 100%; max-height: 400px; object-fit: cover;" />
      <p class="winterthur-typ-caption">Nulla vitae elit libero, a pharetra augue.</p>
    </div>
  </div>
</section>
`;
