import React from 'react';
import './arrowtwo.css';

const Arrows = ({activeRoom}) => {
    return (
        <>
            <div className = 'arrow1' id = {activeRoom.includes('1643') || activeRoom.includes('1639') ? 'arrowactive' : ''}>
                <div id="arrow1wrap">
                    <div id="arrow1scroll">
                        <span className="arrow1down">
                        </span>
                    </div>
                    <div id="arrow11scroll">
                        <span className="arrow11down">
                        </span>
                    </div>
                    <div id="arrow12scroll">
                        <span className="arrow12down">
                        </span>
                    </div>
                    <div id="arrow13scroll">
                        <span className="arrow13down">
                        </span>
                    </div>
                    <div id="arrow14scroll">
                        <span className="arrow14down">
                        </span>
                    </div>
                </div>
            </div>
            <div className = 'arrow2' id = {activeRoom==='1599' ? 'arrowactive' : ''}>
                <div id="arrow2wrap">
                    <div id="arrow2scroll">
                        <span className="arrow2down">
                        </span>
                    </div>
                    <div id="arrow21scroll">
                        <span className = "arrow21down">
                        </span>
                    </div>
                    <div id="arrow22scroll">
                        <span className = "arrow22down">
                        </span>
                    </div>
                    <div id="arrow23scroll">
                        <span className = "arrow23down">
                        </span>
                    </div>
                    <div id="arrow24scroll">
                        <span className = "arrow24down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow3" id = {activeRoom==='1597' ? 'arrowactive' : ''}>
                <div id="arrow3wrap">
                    <div id="arrow3scroll">
                        <span className="arrow3down">
                        </span>
                    </div>
                    <div id="arrow31scroll">
                        <span className="arrow31down">
                        </span>
                    </div>
                    <div id="arrow32scroll">
                        <span className="arrow32down">
                        </span>
                    </div>
                    <div id="arrow33scroll">
                        <span className="arrow33down">
                        </span>
                    </div>
                    <div id="arrow34scroll">
                        <span className="arrow34down">
                        </span>
                    </div>
                    <div id="arrow35scroll">
                        <span className="arrow35down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow4" id = {activeRoom==='wc' ? 'arrowactive' : ''}>
                <div id="arrow4wrap">
                    <div id="arrow4scroll">
                        <span className="arrow4down">
                        </span>
                    </div>
                    <div id="arrow41scroll">
                        <span className="arrow41down">
                        </span>
                    </div>
                    <div id="arrow42scroll">
                        <span className="arrow42down">
                        </span>
                    </div>
                    <div id="arrow43scroll">
                        <span className="arrow43down">
                        </span>
                    </div>
                    <div id="arrow44scroll">
                        <span className="arrow44down">
                        </span>
                    </div>
                    <div id="arrow45scroll">
                        <span className="arrow45down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow5" id = {activeRoom==='wc' ? 'arrowactive' : ''}>
                <div id="arrow5wrap">
                    <div id="arrow5scroll">
                        <span className="arrow5down">
                        </span>
                    </div>
                    <div id="arrow51scroll">
                        <span className="arrow51down">
                        </span>
                    </div>
                    <div id="arrow52scroll">
                        <span className="arrow52down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow6" id = {activeRoom==='1588' ? 'arrowactive' : ''}>
                <div id="arrow6wrap">
                    <div id="arrow6scroll">
                        <span className="arrow6down">
                        </span>
                    </div>
                    <div id="arrow61scroll">
                        <span className="arrow61down">
                        </span>
                    </div>
                    <div id="arrow62scroll">
                        <span className="arrow62down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow7" id = {activeRoom==='1589' ? 'arrowactive' : ''}>
                <div id="arrow7wrap">
                    <div id="arrow7scroll">
                        <span className="arrow7down">
                        </span>
                    </div>
                    <div id="arrow71scroll">
                        <span className="arrow71down">
                        </span>
                    </div>
                    <div id="arrow72scroll">
                        <span className="arrow72down">
                        </span>
                    </div>
                    <div id="arrow73scroll">
                        <span className="arrow73down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow8" id = {activeRoom==='1594' || activeRoom==='1596' ? 'arrowactive' : ''}>
                <div id="arrow8wrap">
                    <div id="arrow8scroll">
                        <span className="arrow8down">
                        </span>
                    </div>
                    <div id="arrow81scroll">
                        <span className="arrow81down">
                        </span>
                    </div>
                    <div id="arrow82scroll">
                        <span className="arrow82down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow9" id = {activeRoom==='1595' || activeRoom==='1596' ? 'arrowactive' : ''}>
                <div id="arrow9wrap">
                    <div id="arrow9scroll">
                        <span className="arrow9down">
                        </span>
                    </div>
                    <div id="arrow91scroll">
                        <span className="arrow91down">
                        </span>
                    </div>
                    <div id="arrow92scroll">
                        <span className="arrow92down">
                        </span>
                    </div>
                    <div id="arrow93scroll">
                        <span className="arrow93down">
                        </span>
                    </div>
                    <div id="arrow94scroll">
                        <span className="arrow94down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow10" id = {activeRoom==='1602' ? 'arrowactive' : ''}>
                <div id="arrow10wrap">
                    <div id="arrow10scroll">
                        <span className="arrow10down">
                        </span>
                    </div>
                    <div id="arrow101scroll">
                        <span className="arrow101down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow011" id = {activeRoom==='1598' ? 'arrowactive' : ''}>
                <div id="arrow011wrap">
                    <div id="arrow011scroll">
                        <span className="arrow011down">
                        </span>
                    </div>
                    <div id="arrow0111scroll">
                        <span className="arrow0111down">
                        </span>
                    </div>
                    <div id="arrow0112scroll">
                        <span className="arrow0112down">
                        </span>
                    </div>
                    <div id="arrow0113scroll">
                        <span className="arrow0113down">
                        </span>
                    </div>
                    <div id="arrow0114scroll">
                        <span className="arrow0114down">
                        </span>
                    </div>
                    <div id="arrow0115scroll">
                        <span className="arrow0115down">
                        </span>
                    </div>
                </div>
            </div>
            <div className="arrow012" id = {activeRoom==='1598' ? 'arrowactive' : ''}>
                <div id="arrow012wrap">
                    <div id="arrow012scroll">
                        <span className="arrow012down">
                        </span>
                    </div>
                    <div id="arrow0121scroll">
                        <span className="arrow0121down">
                        </span>
                    </div>
                    <div id="arrow0122scroll">
                        <span className="arrow0122down">
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Arrows;