import React from "react";
import { Accordion } from "react-bootstrap";
import FaqItem from "./Item";

class FaqSection extends React.Component {
  renderItem(section, items) {
    const rows = [];
    for (let i = 0; i < items.length; i++) {
      rows.push(
        <FaqItem key={i} no={`${section}_${i}`} item={items[i]} />
      );
    }

    return rows;
  }

  render() {
    return (
      <div className="faq-section">
        <div className="container-fluid bg-success py-2">
          <p className="mb-0 text-white">{this.props.section.title}</p>
        </div>
        <Accordion>
          {this.renderItem(this.props.no, this.props.section.items)}
        </Accordion>
      </div >
    );
  }
}

export default FaqSection;