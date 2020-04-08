import React from 'react';
import {useTransition, animated} from 'react-spring';

const Team = ({showC}) => {

    const transition = useTransition(showC, null, {
        from: {opacity: 0, transform: 'translatex(-400px)'},
        enter: {opacity: 1, transform: 'translatex(100px)'},
        leave: {opacity: 0, transform: 'translatex(-400px)'}
    });

    return transition.map(({item, props, key}) =>
        item && (<animated.div className = 'teamdiv' key={key} style={props}>
            
            <div className = 'cardborder'><div className = 'cardimg'></div></div>
            <div className = 'cardtitle'>Product Spotlight</div>
            <div className = 'cardinfo'>
                <div className = 'cardsubtitle'>Dignissim Enim Sit.</div>
                <div className = 'cardtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Blandit turpis cursus in hac.</div>
                <div className = 'cardsubtitle'>Non Odio Euismod Lacinia. At Quis Risus Sed.</div>
            </div>
            
        </animated.div>)
    );
}

export default Team;