import React from 'react';
import {useTransition, animated} from 'react-spring';

const Building = ({showB}) => {

    const transition = useTransition(showB, null, {
        from: {opacity: 0, transform: 'translatex(-400px)'},
        enter: {opacity: 1, transform: 'translatex(100px)'},
        leave: {opacity: 0, transform: 'translatex(-400px)'}
    });

    return ( transition.map(({item, props, key}) =>
        item && (<animated.div className = 'buildingdiv' key={key} style={props}>
            <div className = 'cardborder'><div className = 'cardimg'></div></div>
            <div className = 'cardtitle'>Building Info</div>
            <div className = 'cardinfo'>
                <div className = 'cardsubtitle'>Faucibus scelerisque eleifend donec?</div>
                <div className = 'cardtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                <div className = 'cardsubtitle'>Sed libero enim sed faucibus turpis?</div>
                <div className = 'cardtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                <div className = 'cardsubtitle'>Nisl Tincidunt:</div>
                <div className = 'cardtext'>12th Floor | 555-123-4567</div>
                <div className = 'cardsubtitle'>Pretium:</div>
                <div className = 'cardtext'>14th Floor | 555-765-4321</div>
            </div>
            
            
            </animated.div>)
        )
    );
}

export default Building;