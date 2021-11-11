import React from "react";
import { Accordion, Card } from "react-bootstrap";

class FaqItem extends React.Component {
  render() {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.no}>
          {this.props.item.question}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.no}>
          <Card.Body>{this.props.item.answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default FaqItem;