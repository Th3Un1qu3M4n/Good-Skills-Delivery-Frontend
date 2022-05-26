import React from 'react'

const FooterNav = () => {
  return (
    <div>

        {/* ============================================*/}
  {/* <section> begin ============================*/}
  <section className="bg-900 pb-0 pt-5">
    <div className="container" id='footerNav'>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0">
          <a className="text-decoration-none" href="#">
            <img src="assets/img/gallery/footer-logo.png" height={51} alt="" />
          </a>
          <p className="text-500 my-4">
            The most trusted Courier
            <br />
            company in your area.
          </p>
        </div>
        <div className="col-12 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
          <h5 className="lh-lg fw-bold mb-2 text-light font-sans-serif">
            Other links{" "}
          </h5>
          <ul className="list-unstyled mb-md-4 mb-lg-0">
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Blogs
              </a>
            </li>
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Movers website
              </a>
            </li>
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Traffic Update
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
          <h5 className="lh-lg fw-bold text-light mb-2 font-sans-serif">
            Services
          </h5>
          <ul className="list-unstyled mb-md-4 mb-lg-0">
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Corporate goods
              </a>
            </li>
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Artworks
              </a>
            </li>
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Documents
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
          <h5 className="lh-lg fw-bold text-light mb-2 font-sans-serif">
            {" "}
            Customer Care
          </h5>
          <ul className="list-unstyled mb-md-4 mb-lg-0">
            <li className="lh-lg">
              <a className="text-500" href="#!">
                About Us
              </a>
            </li>
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Contact US
              </a>
            </li>
            <li className="lh-lg">
              <a className="text-500" href="#!">
                Get Update
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* end of .container*/}
  </section>
  {/* <section> close ============================*/}
  {/* ============================================*/}

    </div>
  )
}

export default FooterNav