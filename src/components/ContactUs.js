import React from 'react'

const ContactUs = () => {
  return (
    <div>
        {/* ============================================*/}
  {/* <section> begin ============================*/}
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 col-xl-4">
          <img src="assets/img/illustrations/callback.png" alt="..." />
          <h5 className="text-danger">REQUEST A CALLBACK</h5>
          <h2>We will contact in the shortest time.</h2>
          <p className="text-muted">Monday to Friday, 9am-5pm.</p>
        </div>
        <div className="col-md-6 col-lg-5 col-xl-4">
          <form className="row">
            <div className="mb-3">
              <label className="form-label visually-hidden" htmlFor="inputName">
                Name
              </label>
              <input
                className="form-control form-quriar-control"
                id="inputName"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label visually-hidden"
                htmlFor="inputEmail"
              >
                Another label
              </label>
              <input
                className="form-control form-quriar-control"
                id="inputEmail"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <label
                className="form-label visually-hidden"
                htmlFor="validationTextarea"
              >
                Message
              </label>
              <textarea
                className="form-control form-quriar-control is-invalid border-400"
                id="validationTextarea"
                placeholder="Message"
                style={{ height: 150 }}
                required="required"
                defaultValue={""}
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Send Message
                <i className="fas fa-paper-plane ms-2" />
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

export default ContactUs