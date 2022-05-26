import React from 'react'

const Footer = () => {
  return (
    <div>

        {/* ============================================*/}
  {/* <section> begin ============================*/}
  <section className="py-0 bg-1000">
    <div className="container">
      <div className="row justify-content-md-between justify-content-evenly py-4">
        <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
          <p className="fs--1 my-2 fw-bold text-200">
            All rights Reserved © Good Skills Delivery, {new Date().getFullYear()}
          </p>
        </div>
        <div className="col-12 col-sm-8 col-md-6">
          <p className="fs--1 my-2 text-center text-md-end text-200">
            {" "}
            Made with&nbsp;
            <svg
              className="bi bi-suit-heart-fill"
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="#F95C19"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
            </svg>
            &nbsp;by&nbsp;
            <a
              className="fw-bold text-primary"
              href="https://ahmedev.me/"
              target="_blank"
            >
              Th3Un1qu3M4n
            </a>
          </p>
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

export default Footer