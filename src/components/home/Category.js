import React from "react";

class Category extends React.Component {
  render() {
    return (
      <div className="row mb-5">
        <div className="col-md-4 grid-margin">
          <div className="m-3">
            <div className="card card-item-preview">
              <img className="card-img-top" src="https://media.gucci.com/style/DarkGray_South_0_160_540x540/1628009102/446744_UM8AN_1000_001_055_0016_Light-GG-Marmont-mini-shoulder-bag.jpg" alt="bags" />
              <div className="card-body py-3 border-top">
                <h3 className="font-weight-normal mb-0 text-center">BAGS</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin">
          <div className="m-3">
            <div className="card card-item-preview">
              <img className="card-img-top" src="https://assets.hermes.com/is/image/hermesproduct/donna-60-pump--212240Z%20N1-worn-1-0-0-540-540-q50_b.jpg" alt="shoes" />
              <div className="card-body py-3 border-top">
                <h3 className="font-weight-normal mb-0 text-center">SHOES</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin">
          <div className="m-3">
            <div className="card card-item-preview">
              <img className="card-img-top" src="https://media.gucci.com/style/White_Center_0_0_540x540/1633509904/456117_17WEN_2754_001_100_0016_Light-GG-Marmont-zip-around-wallet.jpg" alt="slg" />
              <div className="card-body py-3 border-top">
                <h3 className="font-weight-normal mb-0 text-center">WALLETS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;