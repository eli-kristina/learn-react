import React from "react";

class OrderItem extends React.Component {
  render() {
    return (
      <div className="col-md-12 mb-5 pt-2 px-0">
        <div className="card rounded shadow-none">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <h5>Order #12345</h5>
              </div>
              <div className="col-md-6 text-right">
                <h5>2021-01-01</h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 col-lg-9 d-lg-flex">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="user-avatar mb-auto">
                      <img className="profile-img img-lg" src="https://media.gucci.com/style/DarkGray_South_0_160_540x540/1628009102/446744_UM8AN_1000_001_055_0016_Light-GG-Marmont-mini-shoulder-bag.jpg" alt="bags" />
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="wrapper ml-3">
                      <div className="wrapper d-flex align-items-center">
                        <h4 className="mb-0 font-weight-semibold">Store Name</h4>
                      </div>
                      <div className="wrapper d-flex align-items-center">
                        <p>GG Marmont mini shoulder bag</p>
                      </div>
                      <div className="wrapper d-flex align-items-start">
                        <div className="badge badge-success text-dark mt-2">DELIVERED</div>
                        <div className="wrapper ml-5 d-none d-sm-block">
                          <h6 className="font-weight-semibold text-center">3</h6>
                          <p className="text-muted">Items</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="wrapper d-flex float-right">
                  <button className="btn btn-sm btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;