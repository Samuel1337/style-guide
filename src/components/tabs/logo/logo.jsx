import React from "react";
import '../tabs.scss';
import logoRed from '../../../images/logos/cable-logo-red.png';
import logoYellow from '../../../images/logos/cable-logo-yellow.png';
import logoBlue from '../../../images/logos/cable-logo-blue.png';
import logoTransparentRed from '../../../images/logos/cable-logo-transparent-red.png';
import logoTransparentYellow from '../../../images/logos/cable-logo-transparent-yellow.png';
import logoTransparentBlue from '../../../images/logos/cable-logo-transparent-blue.png';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-body">
                <h1>Logo</h1>
                <p>The brand has three general directions as follows:</p>
                <div className="logos-display">
                    <img id="logo-display-red" src={logoRed} />
                    <div className="secondary-logos">
                        <img src={logoYellow} />
                        <img src={logoBlue} />
                    </div>
                </div>
                <br />
                <p>They represent the Pacific Ocean, the Golden Gate, and the Bridge.</p>
                <br />
                <div className="logos-display">
                    <img id="logo-display-red" src={logoTransparentRed} />
                    <div className="secondary-logos">
                        <img src={logoTransparentYellow} />
                        <img src={logoTransparentBlue} />
                    </div>
                </div>
                <h1>Colors</h1>
                <div className="color-swatches">
                    <div className="red-swatch">
                        <p className="color-code">C0372C</p>
                        <p className="color-name">International Orange</p>
                    </div>
                    <div className="yellow-swatch">
                        <p className="color-code">FEBF10</p>
                        <p className="color-name">Mango</p>
                    </div>
                    <div className="blue-swatch">
                        <p className="color-code">255999</p>
                        <p className="color-name">Bdazzled Blue</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logo;