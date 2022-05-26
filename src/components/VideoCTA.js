import React from 'react'

const VideoCTA = () => {
  return (
    <div>
        {/* ============================================*/}
  {/* <section> begin ============================*/}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card bg-dark text-white py-4 py-sm-0">
            <img
              className="w-100"
              src="assets/img/gallery/video.png"
              alt="video"
            />
            <div className="card-img-overlay bg-dark-gradient d-flex flex-column flex-center">
              <img src="assets/img/icons/play.png" width={80} alt="play" />
              <h5 className="text-primary">FASTEST DELIVERY</h5>
              <p className="text-center">
                You can get your valuable item in the fastest period of
                <br className="d-none d-sm-block" />
                time with safety. Because your emergency
                <br className="d-none d-sm-block" />
                is our first priority.
              </p>
              <a
                className="stretched-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content overflow-hidden">
                    <div className="modal-header p-0">
                      <div className="ratio ratio-16x9" id="exampleModalLabel">
                        <iframe
                          src="https://www.youtube.com/embed/TlcP2aTOp-Q"
                          title="YouTube video"
                          allowFullScreen="allowfullscreen"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default VideoCTA