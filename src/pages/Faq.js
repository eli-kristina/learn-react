import React from "react";
import { FaqService } from "../services/api";
import FaqSection from "../components/faq/Section";

class Faq extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            faqs: []
        }
    }

    componentDidMount() {
        FaqService().then(res => {
            if (res.status === 200 && res.data.error === 0) {
                this.setState({ faqs: res.data.data.faqs });
            }
        });
    }

    renderFaqs() {
        const rows = [];
        for (let i = 0; i < this.state.faqs.length; i++) {
            rows.push(
                <FaqSection key={i} no={i} section={this.state.faqs[i]} />
            );
        }

        return rows;
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="page-header">
                    <h3 className="page-title">FAQ</h3>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">{this.renderFaqs()}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;