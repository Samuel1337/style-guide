import React from "react";
import '../tabs.scss';
import ace from '../../../images/characters/Ace.jpg';
import andrew from '../../../images/characters/Andrew.jpg';
import blaze from '../../../images/characters/Blaze.jpg';
import charles from '../../../images/characters/Charles_Ellis.jpg';
import claire from '../../../images/characters/Claire.jpg';
import crowley from '../../../images/characters/Crowley.jpg';
import father from '../../../images/characters/Father.jpg';
import francis from '../../../images/characters/Francis.png';
import gianini from '../../../images/characters/Gianini.jpg';
import james from '../../../images/characters/James.jpg';
import johnny from '../../../images/characters/Johnny_bob.jpg';
import kate from '../../../images/characters/Kate.jpg';
import luisa from '../../../images/characters/Luisa.jpg';
import martha from '../../../images/characters/Martha.jpg';
import mayor from '../../../images/characters/Mayor_Rossi.jpg';
import girl from '../../../images/characters/Nameless_Girl.png';
import rooster from '../../../images/characters/Rooster.png';
import rose from '../../../images/characters/Rose.jpeg';
import sally from '../../../images/characters/Sally.jpg';
import sophie from '../../../images/characters/Sophie.png';
import strauss from '../../../images/characters/Strauss.jpg';
import tony from '../../../images/characters/Tony.jpg';
import will from '../../../images/characters/Will.jpg';
import yorkie from '../../../images/characters/Yorkie.jpg';
import banker from '../../../images/characters/Foreclosure_Banker.jpg';
import bridges from '../../../images/characters/Harry_Bridges.png';
import lilly from '../../../images/characters/Lilly.jpeg';
import paine from '../../../images/characters/Paine.jpg';

class Characters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-body">
                <h1>The Crew</h1>
                    
                    <div className="character-line">
                        <div className="character-tile">
                            <img src={ace} className="character-photo" />
                            <p className="character-name">Ace</p>
                        </div>
                        <div className="character-tile">
                            <img src={blaze} className="character-photo" />
                            <p className="character-name">Blaze</p>
                        </div>
                        <div className="character-tile">
                            <img src={rooster} className="character-photo" />
                            <p className="character-name">Rooster</p>
                        </div>
                    </div>
                    
                    <div className="character-line">
                        <div className="character-tile">
                            <img src={tony} className="character-photo" />
                            <p className="character-name">Tony</p>
                        </div>
                        <div className="character-tile">
                            <img src={will} className="character-photo" />
                            <p className="character-name">Will</p>
                        </div>
                        <div className="character-tile">
                            <img src={yorkie} className="character-photo" />
                            <p className="character-name">Yorkie</p>
                        </div>
                    </div>

                <h1>Golden Gate Bridge</h1>

                    <div className="character-line">
                        <div className="character-tile">
                            <img src={claire} className="character-photo" />
                            <p className="character-name">Claire</p>
                        </div>
                        <div className="character-tile">
                            <img src={charles} className="character-photo" />
                            <p className="character-name">Charles Ellis</p>
                        </div>
                        <div className="character-tile">
                            <img src={strauss} className="character-photo" />
                            <p className="character-name">Joseph Strauss</p>
                        </div>
                    </div>

                <h1>San Francisco</h1>
                    
                    <div className="character-line">
                        <div className="character-tile">
                            <img src={andrew} className="character-photo" />
                            <p className="character-name">Andrew</p>
                        </div>
                        <div className="character-tile">
                            <img src={luisa} className="character-photo" />
                            <p className="character-name">Luisa</p>
                        </div>
                        <div className="character-tile">
                            <img src={kate} className="character-photo" />
                            <p className="character-name">Kate</p>
                        </div>
                    </div>

                    <div className="character-line">
                        <div className="character-tile">
                            <img src={gianini} className="character-photo" />
                            <p className="character-name">A.P. Gianini</p>
                        </div>
                        <div className="character-tile">
                            <img src={mayor} className="character-photo" />
                            <p className="character-name">Mayor Rossi</p>
                        </div>
                        <div className="character-tile">
                            <img src={sally} className="character-photo" />
                            <p className="character-name">Sally</p>
                        </div>
                    </div>

                    <div className="character-line">
                        <div className="character-tile">
                            <img src={crowley} className="character-photo" />
                            <p className="character-name">Crowley</p>
                        </div>
                        <div className="character-tile">
                            <img src={francis} className="character-photo" />
                            <p className="character-name">Nameless Boy</p>
                        </div>
                        <div className="character-tile">
                            <img src={girl} className="character-photo" />
                            <p className="character-name">Nameless Girl</p>
                        </div>
                    </div>

                <h1>Oklahoma</h1>

                    <div className="character-line">
                        <div className="character-tile">
                            <img src={father} className="character-photo" />
                            <p className="character-name">Father</p>
                        </div>
                        <div className="character-tile">
                            <img src={martha} className="character-photo" />
                            <p className="character-name">Martha</p>
                        </div>
                        <div className="character-tile">
                            <img src={james} className="character-photo" />
                            <p className="character-name">James</p>
                        </div>
                    </div>

                    <div className="character-line">
                        <div className="character-tile">
                            <img src={johnny} className="character-photo" />
                            <p className="character-name">Johnny Bob</p>
                        </div>
                        <div className="character-tile">
                            <img src={rose} className="character-photo" />
                            <p className="character-name">Rose</p>
                        </div>
                        <div className="character-tile">
                            <img src={sophie} className="character-photo" />
                            <p className="character-name">Sophie</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Characters;