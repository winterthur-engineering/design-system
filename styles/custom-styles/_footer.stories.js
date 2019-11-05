import "../index.scss";

export default { title: "Components|Footer" };

export const footer = () => `
<footer class="winterthur-footer">
    <div class="container">
      <div class="row justify-content-lg-center">
        <div class="col-md-4 col-sm-4 winterthur-footer-col">
          <ul class="winterthur-footer-list">
            <li>
              <a target="_blank" href="http://www.winterthur.org/contacts/">Contact Us</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/visit/about-winterthur/">About Winterthur</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/employment/">Employment</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/volunteer/">Volunteer</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/press-room/">Press Room</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/suggestion-box/">Suggestion Box</a>
            </li>
          </ul>
          </ul>
        </div>
        <div class="col-md-4 col-sm-4 winterthur-footer-col">
          <ul class="winterthur-footer-list">
            <li>
              <p>
                <span class="d-block">Winterthur Museum, Garden & Library</span>
                <span class="d-block">5105 Kennett Pike</span>
                <span class="d-blokc">Winterthur, Delaware, 19735</span>
              </p>
              <br />
              <p>
                <span class="d-block">800.448.3883</span>
                <span class="d-block">302.888.4600</span>
                <span class="d-block">302.888.4907 TTY</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-4 winterthur-footer-col">
          <ul class="winterthur-footer-list">
            <li>
              <a target="_blank" href="http://www.winterthur.org/newsletter-signup/">E-Newsletter Signup</a>
            </li>
            <li>
              <a target="_blank" href="http://museumblog.winterthur.org/">Museum & Library Blog</a>
            </li>
            <li>
              <a target="_blank" href="http://gardenblog.winterthur.org/">Garden Blog</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/visit/weddings/">Weddings</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/visit/corporate-entertaining/">Corporate
                Entertaining</a>
            </li>
            <li>
              <a target="_blank" href="http://www.winterthur.org/photo-credits/">Photo Credits</a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div class="row justify-content-center">
        <div class="col">
          <p class="text-primary">All rights reserved | &copy; Winterthur 2019</p>
        </div>
      </div>
    </div>
  </footer>
`;
