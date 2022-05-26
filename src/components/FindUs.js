import React from 'react'

const FindUs = () => {
  return (
    <div>
        
        {/* ============================================*/}
  {/* <section> begin ============================*/}
  <section id="findUs">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5 mb-6 text-center">
          <h5 className="text-danger">FIND US</h5>
          <h2>Access us easily</h2>
        </div>
        <div className="col-12">
          <div className="card card-span rounded-2 mb-3">
            <div className="row">
              <div className="col-md-6 col-lg-7 d-flex">
                  <a href="https://www.google.com/maps/dir/25.25340,+55.33091/@25.2534516,55.322191,15z/data=!4m5!4m4!1m3!2m2!1d55.33091!2d25.2534"
                   alt="office-location" target="_blank">
                <img
                  className="w-100 fit-cover rounded-md-start rounded-top rounded-md-top-0"
                  src="assets/img/gallery/map.png"
                  alt="map"
                />
                </a>
              </div>
              <div className="col-md-6 col-lg-5 d-flex flex-center text-center">
                <div className="card-body">
                  <h5>Contact with us</h5>
                  <p className="text-700 my-4">
                    {" "}
                    <i className="fas fa-map-marker-alt text-warning me-3" />
                    <span>Office #106, Nakheel center, <br/>Near Souq Al Shabii Gym <br/>Diera, Dubai, UAE</span>
                  </p>
                  <p>
                    <i className="fas fa-phone-alt text-warning me-3" />
                    <span className="text-700">
                      Monday - Saturday: 10 am - 10pm
                      <br />
                      <span className="ps-4">Sunday: 11 am - 9pm</span>
                    </span>
                  </p>
                  <p>
                    <i className="fas fa-envelope text-warning me-3"> </i>
                    <a className="text-700" href="mailto:vctung@outlook.com">
                      {" "}
                      info@gsdelivery.com
                    </a>
                  </p>
                  {/* <ul className="list-unstyled list-inline mt-5">
                    <li className="list-inline-item">
                      <a className="text-decoration-none" href="#!">
                        <i className="fab fa-facebook-square fs-2" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-decoration-none" href="#!">
                        <i className="fab fa-instagram-square fs-2" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-decoration-none" href="#!">
                        <i className="fab fa-twitter-square fs-2" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary px-5 mt-4" type="submit">
              <i className="fas fa-phone-alt me-2" />
              <a className="text-light" href="tel:+971-508109297">
                Call for Support +971 508109297
              </a>
            </button>
          </div>
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

export default FindUs