import React from "react";
import redLogo from '../../images/logos/cable-logo-red.png';
import './footer.scss';

class Footer extends React.Component {
    props() {
        this.scrollUp = this.scrollUp.bind(this);
    }

    scrollUp() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="footer">
                <div className="back-to-top" onClick={this.scrollUp}>
                    Back to top
                </div>
                <div className="logo-container">
                    <img src={redLogo} />
                </div>
                <div className="final-line">
                    This style guide was developed by Sam Martins on September 2022
                </div>
            </div>
        )
    }
}

export default Footer;