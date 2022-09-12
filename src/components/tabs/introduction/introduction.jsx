import photo49 from '../../../images/construction-pictures/Golden_Gate_Bridge_construction_49.jpg'
import React from "react";
import '../tabs.scss';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-body">
                <h1>The Impossible Dream</h1>
                
                <h2 className="quote">"Your dream is the most Important thing you have"</h2>
                <p className="author">— Don Propstra</p>

                <img src={photo49} />

                <p className="center">Cable is the story of two intersecting Impossible Dreams.</p>

                <p>
                    The construction of the Golden Gate Bridge was a <b>groundbreaking 1930s
                    public works project</b> that few thought possible.  Hounded by <b>fierce opposition </b>
                    from the time its prospect was but a distant dream, this revered bridge now
                    stands as a testimony to the <b>grit and courage</b> of the men who built it.  
                    It beacons the essence of San Francisco — boundless beauty, unlimited
                    possibilities, and an <b>undying creative spirit</b>.
                </p>


                <p>
                    The far west journey of Depression-era Oklahoma farmer <b>Tony Wright</b> was a gamble
                    against all odds.  Penniless, friendless, and jobless, his burning desire to
                    explore possibilities <b>well beyond his imagination</b> ultimately lands him on a
                    <b> cable-laying crew</b> during the construction of the <b>Golden Gate Bridge</b>.  It unleashes
                    his <b>innermost potential</b> and awakens his true self, as he steps into the dream of 
                    building this <b>iconic bridge</b>.
                </p>
    
                    <h2>What is your dream?</h2>
            </div>
        )
    }
}

export default Introduction;