import React from "react";
import '../tabs.scss';
import artwork from '../../../images/artworks/cable-poster.jpg';

class Artwork extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-body">
                <h1>Artwork</h1>
                <img className="artwork" src={artwork} />
                <p className="artwork-credits"><b>Halfway to Hell Club</b> by Higgie the Artist</p>
            </div>
        )
    }
}

export default Artwork;