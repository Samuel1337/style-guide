import React from "react";
import redLogo from '../../images/logos/cable-logo-red.png';
import './page.scss';

class Page extends React.Component {
    props() {
        this.scrollUp = this.scrollUp.bind(this);
    }

    scrollUp() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="page">
                <div className="page-header" id= "page-header" onClick={this.scrollUp}>
                    <h1>Cable, the Golden Gate Musical</h1>
                </div>
                <div className="list-container">
                    <h1></h1>
                    <ul className="list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="tab-container">
                        <div className="about-us-tab"></div>
                        <div className="logo-tab"></div>
                    </div>
                </div>    

            </div>
        )
    }
}

export default Page;