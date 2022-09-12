import React from "react";
import '../tabs.scss';

class Attributes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-body">
                <h1>Cable is</h1>
                <div className="attributes-list">
                    <ul className="attributes-column">
                        <li>Hard Driving</li>
                        <li>Intense</li>
                        <li>Powerful</li>
                        <li>Energetic</li>
                        <li>Bold</li>
                        <li>Epic</li>
                        <li>Historical</li>
                        <li>Suspenseful</li>
                        <li>Unpredictable</li>
                        <li>Exhilarating</li>
                        <li>Inspirational</li>
                        <li>Memorable</li>
                    </ul>
                    
                    <ul className="attributes-column">
                        <li>Heated</li>
                        <li>Masculine</li>
                        <li>Rugged</li>
                        <li>Gritty</li>
                        <li>Relatable</li>
                        <li>Sexy</li>
                        <li>Vivid</li>
                        <li>Artful</li>
                        <li>Deep</li>
                        <li>Soulful</li>
                        <li>Compelling</li>
                        <li>Edgy</li>
                    </ul>
                </div>
                
                <h1>Cable is NOT</h1>

                <div className="attributes-list">
                    <ul className="attributes-column">
                        <li>Saccharine</li> 
                        <li>Fluffy</li>
                        <li>Predictable</li> 
                        <li>Cliché</li>
                        <li>Cheesy</li>
                        <li>Dumbed-down</li>
                    </ul>
                </div>


            </div>
        )
    }
}

export default Attributes;