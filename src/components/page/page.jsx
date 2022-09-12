import React from "react";
import redLogo from '../../images/logos/cable-logo-red.png';
import detail from '../../images/details/cable-website-novel-background.png';
import './page.scss';
import WhoWeAre from "../tabs/who-we-are/whoWeAre";
import TheStory from "../tabs/the-story/theStory";
import Characters from "../tabs/characters/characters";
import Attributes from "../tabs/attributes/attributes";
import Logo from "../tabs/logo/logo";
import Artwork from "../tabs/artwork/artwork";
import Portfolio from "../tabs/portfolio/portfolio";
import Music from "../tabs/music/music";


class Page extends React.Component {
    props() {
        this.scrollUp = this.scrollUp.bind(this);
        this.switchTabs = this.switchTabs.bind(this);
        this.openTab = this.openTab.bind(this);
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

    // scrollUp() {
    //     window.scrollTo(0, 0);
    // }

    render() {
        return (
            <div className="page">
                <div className="page-header">
                    <a href="#home">
                        <h1><span>C</span>ABLE, THE <span>G</span>OLDEN <span>G</span>ATE <span>M</span>USICAL</h1>
                    </a>
                </div>
                {/* <img src={detail} className="detail" /> */}
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
                        <div id="who-we-are-tab" className="tab active-tab">
                            <WhoWeAre />
                        </div>
                        <div id="the-story-tab" className="tab">
                            <TheStory />
                        </div>
                        <div id="characters-tab" className="tab">
                            <Characters />
                        </div>
                        <div id="attributes-tab" className="tab">
                            <Attributes />
                        </div>
                        <div id="logo-tab" className="tab">
                            <Logo />
                        </div>
                        <div id="artwork-tab" className="tab">
                            <Artwork />
                        </div>
                        <div id="music-tab" className="tab">
                            <Music />
                        </div>
                        <div id="portfolio-tab" className="tab">
                            <Portfolio />
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Page;