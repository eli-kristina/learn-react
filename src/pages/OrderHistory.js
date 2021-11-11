import React from "react";
import OrderItem from "../components/order/Item";

class OrderHistory extends React.Component {
  renderItems() {
    const rows = [];

    for (let i = 0; i < 5; i++) {
      rows.push(
        <OrderItem key={i} />
      );
    }

    return rows;
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="card">
          <div className="card-body">
            <div className="d-flex mb-4">
              <h5 className="font-weight-semibold">Order History</h5>
            </div>
            <div className="row mx-sm-0">
              {this.renderItems()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderHistory;