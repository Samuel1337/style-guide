import React from "react";
import redLogo from '../../images/logos/cable-logo-red.png';
import './page.scss';

class Page extends React.Component {
    props() {
        this.scrollUp = this.scrollUp.bind(this);
        this.switchTabs = this.switchTabs.bind(this);
    }

    switchTabs(id) {
        const newActiveLi = document.getElementById(id + "-li");
        const newActiveTab = document.getElementById(id + "-tab");
        
        const oldActiveLi = document.querySelector(".active-li");
        const oldActiveTab = document.querySelector(".active-tab");

        if (newActiveLi.id === oldActiveLi.id) return null;

        newActiveLi.classList.add("active-li");
        newActiveTab.classList.add("active-tab");

        oldActiveLi.classList.remove("active-li");
        oldActiveTab.classList.remove("active-tab");
    }

    scrollUp() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="page">
                <div className="page-header" onClick={this.scrollUp}>
                    <h1><span>C</span>ABLE, THE <span>G</span>OLDEN <span>G</span>ATE <span>M</span>USICAL</h1>
                </div>
                <div className="fog" />
                <div className="page-container">
                    <a href="#home">
                    <ul className="list">
                        <li
                            id="who-we-are-li"
                            className="active-li"
                            onClick={()=>this.switchTabs("who-we-are")}
                        >
                            Who we are
                        </li>
                        <li
                            id="the-story-li"
                            onClick={()=>this.switchTabs("the-story")}
                        >
                            The Story
                        </li>
                        <li
                            id="characters-li"
                            onClick={()=>this.switchTabs("characters")}
                        >
                            Characters
                        </li>
                        <li
                            id="attributes-li"
                            onClick={()=>this.switchTabs("attributes")}
                        >
                            Attributes
                        </li>
                        <li
                            id="logo-li"
                            onClick={()=>this.switchTabs("logo")}
                        >
                            Logo
                        </li>
                        <li
                            id="artwork-li"
                            onClick={()=>this.switchTabs("artwork")}
                        >
                            Artwork
                        </li>
                        <li
                            id="music-li"
                            onClick={()=>this.switchTabs("music")}
                        >
                            Music
                        </li>
                        <li
                            id="portfolio-li"
                            onClick={()=>this.switchTabs("portfolio")}
                        >
                            Portfolio
                        </li>
                    </ul>
                    </a>
                    <div className="tab-container">
                        <div id="who-we-are-tab" className="active-tab">
                            <h1>Who we are</h1>
                        </div>
                        <div id="the-story-tab">
                            <h1>The Story</h1>
                        </div>
                        <div id="characters-tab">
                            <h1>Characters</h1>
                        </div>
                        <div id="attributes-tab">
                            <h1>Attributes</h1>
                        </div>
                        <div id="logo-tab">
                            <h1>Logo</h1>
                        </div>
                        <div id="artwork-tab">
                            <h1>Artwork</h1>
                        </div>
                        <div id="music-tab">
                            <h1>Music</h1>
                        </div>
                        <div id="portfolio-tab">
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Page;