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
                <div className="page-header" id= "home" onClick={this.scrollUp}>
                    <h1><span>C</span>ABLE, THE <span>G</span>OLDEN <span>G</span>ATE <span>M</span>USICAL</h1>
                </div>
                <div className="page-container">
                    <ul className="list">
                        <li>Who we are</li>
                        <li>The Story</li>
                        <li>Characters</li>
                        <li>Attributes</li>
                        <li>Logo</li>
                        <li>Artwork</li>
                        <li>Music</li>
                        <li>Portfolio</li>
                    </ul>
                    <div className="tab-container">
                        <div className="who-we-are-tab">
                            <h1>Who we are</h1>
                        </div>
                        <div className="the-story-tab">
                            <h1>The Story</h1>
                        </div>
                        <div className="characters-tab">
                            <h1>Characters</h1>
                        </div>
                        <div className="attributes-tab">
                            <h1>Attributes</h1>
                        </div>
                        <div className="logo-tab">
                            <h1>Logo</h1>
                        </div>
                        <div className="artwork-tab">
                            <h1>Artwork</h1>
                        </div>
                        <div className="music-tab">
                            <h1>Music</h1>
                        </div>
                        <div className="portfolio-tab">
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                </div>    

            </div>
        )
    }
}

export default Page;