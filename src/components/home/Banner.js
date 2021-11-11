import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-wrapper">
        <div className="container">
          <div className="row py-sm-5 py-0">
            <div className="col-lg-7 banner-content">
              <h1 className="me-2 text-white">Banners</h1>
              <h3 className="font-weight-light text-white pt-2 pb-5">Lorem ipsum dolor sit amet</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;