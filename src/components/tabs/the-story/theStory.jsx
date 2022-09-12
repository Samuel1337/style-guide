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
                    In the desolation and loss of the Oklahoma Dust Bowl of the 1930s,
                    Tony, 19, a farmer’s son with the hidden heart of an artist, and his
                    brother James, 22, struggle to hang on to the family farm, even as it
                    dwindles to a ghostly stretch of dying livestock and shriveled earth.
                </p>
                <p>
                    When James dies in a fall from a windmill and the farm is foreclosed,
                    Tony lights out for points west. On the road, he is beaten and robbed,
                    cheated of wages for day labor, and tormented through the long nights,
                    remembering the ruin he left behind.
                </p>
                <img src={constructionOne} />
                <p>
                    In far off San Francisco, the “bridge that couldn’t be built” is rising
                    against all odds, driven by the stubborn dream of engineer Joseph Strauss.
                    When Tony follows rumors of work to San Francisco, he camps out near the
                    site of the just-rising Golden Gate Bridge, where protests against the
                    structure rage, and Strauss battles lawsuits intent on halting the project.
                </p>
                <p>
                    Through persistence and luck, Tony is hired as a laborer on the bridge.
                    The challenges are legion — fierce cold, howling winds, and engineering
                    quandaries tackled on a wing and a prayer. But his knack for mechanical
                    fixes catches the attention of the foreman, Will, who encourages and soon
                    relies on his abilities. Regular wages gain him a bed at a boarding house, 
                    and his growing camaraderie with the crew gives him a sense of community.
                    Unexpectedly, he finds love.
                </p>
                <img src={constructionTwo} />
                <p>
                    As Tony realizes his talents and bonds with the bridge crew, he learns
                    the value in staking all one has on a dream. Through his efforts to help
                    Strauss bring his vision of the bridge into towering reality, Tony finds
                    the courage to pursue his own dream.
                </p>

            </div>
        )
    }
}

export default TheStory;