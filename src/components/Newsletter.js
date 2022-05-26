import React from 'react'

const Newsletter = () => {
  return (
    <div>

        {/* ============================================*/}
  {/* <section> begin ============================*/}
  <section className="bg-1000">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="fw-bold text-white">Get an update every week</h2>
          <p className="text-300">
            We ensure that your product is delivered in the safest possible
            <br />
            manner, at the correct location, at the right time.
          </p>
        </div>
        <div className="col-lg-6">
          <h5 className="text-primary mb-3">SUBSCRIBE TO NEWSLETTER </h5>
          <form className="row gx-2 gy-2 align-items-center">
            <div className="col">
              <div className="input-group-icon">
                <label className="visually-hidden" htmlFor="inputEmailCta">
                  Address
                </label>
                <input
                  className="form-control input-box form-quriar-control text-light"
                  id="inputEmailCta"
                  type="email"
                  placeholder="Enter your mail"
                />
              </div>
            </div>
            <div className="d-grid gap-3 col-sm-auto">
              <button className="btn btn-danger" type="submit">
                Subscribe
              </button>
            </div>
          </form>
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

export default Newsletter