import React from "react";
import '../tabs.scss';
import dustBowlOne from '../../../images/pictures/dust-bowl-1.png';
import constructionOne from '../../../images/pictures/construction-1.jpg';
import constructionTwo from '../../../images/construction-pictures/Golden_Gate_Bridge_construction_27.jpg';

class TheStory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-body">
                <h1>The Story</h1>
                <img src={dustBowlOne} />
                <p>
                    In the desolation and loss of the <b>Oklahoma Dust Bowl</b> of the 1930s,
                    Tony, 19, a farmer’s son with the hidden heart of an artist, and his
                    brother James, 22,<b> struggle to hang on to the family farm</b>, even as it
                    dwindles to a ghostly stretch of dying livestock and shriveled earth.
                </p>
                <p>
                    When James dies in a <b>fall from a windmill</b> and the farm is foreclosed,
                    Tony lights out for points west. On the road, he is beaten and robbed,
                    <b> cheated of wages for day labor</b>, and tormented through the long nights,
                    remembering the ruin he left behind.
                </p>
                <img src={constructionOne} />
                <p>
                    In far off San Francisco, <b>"the bridge that couldn’t be built”</b> is rising
                    against all odds, driven by the <b>stubborn dream</b> of engineer Joseph Strauss.
                    When Tony follows rumors of work to San Francisco, he camps out near the
                    site of the just-rising <b>Golden Gate Bridge</b>, where <b>protests against the
                    structure</b> rage, and Strauss battles lawsuits intent on halting the project.
                </p>
                <p>
                    Through <b>persistence and luck</b>, Tony is hired as a <b>laborer on the bridge</b>.
                    The challenges are legion — <b>fierce cold</b>, howling winds, and engineering
                    quandaries tackled on a wing and a prayer. But <b>his knack for mechanical
                    fixes</b> catches the attention of the foreman, Will, who encourages and soon
                    <b> relies on his abilities</b>. Regular wages gain him a bed at a <b>boarding house</b>, 
                    and his <b>growing camaraderie with the crew</b> gives him a sense of community.
                    Unexpectedly, he finds love.
                </p>
                <img src={constructionTwo} />
                <p>
                    As Tony realizes his talents and <b>bonds with the bridge crew</b>, he learns
                    the value in staking <b>all one has on a dream</b>. Through his efforts to help
                    <b> Strauss bring his vision</b> of the bridge into towering reality, Tony finds
                    the courage to <b>pursue his own dream</b>.
                </p>

            </div>
        )
    }
}

export default TheStory;