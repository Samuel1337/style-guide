import React from "react";
import '../tabs.scss';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-body">
                <h1>Books</h1>

                <div className="portfolio-line">
                    <div className="portfolio-tile">
                        <p className="portfolio-title"></p>
                        <p className="portfolio-subtitle"></p>
                    </div>
                    <div className="portfolio-tile">
                        <p className="portfolio-title"></p>
                        <p className="portfolio-subtitle"></p>
                    </div>
                    <div className="portfolio-tile">
                        <p className="portfolio-title"></p>
                        <p className="portfolio-subtitle"></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;