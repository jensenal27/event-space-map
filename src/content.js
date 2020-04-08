import React from 'react';
import { useTransition, animated } from 'react-spring';
import ContentEvent from './contentevent';
import {MdKeyboardArrowLeft} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";

const Content = ({events, activeRoom, setActiveRoom, eventPage, eventTotal, test, showB, showC}) => {

    const transition = useTransition(events, events => events.BookingID._text, {
        from: { opacity: 0, height: 0, transform: 'translatey(1rem)' },
        enter: { opacity: 1, height: 100, transform: 'translatey(0rem)' },
        leave: { opacity: 0, height: 0, transform: 'translatey(1rem)' }
    });

    if (eventTotal > 0) {
    return (
        <div className = 'contentwrap'>
            <div className = 'contentwraptitle'>Today's Events</div>
            <div className = 'contentwrapsubtitle'>Tap Your Meeting Below For Directions</div>
            {transition.map(({ item, key, props }) => (
                <animated.div className = 'contentwrapcontent' key={key} style={props}>
                    <ContentEvent item={item} activeRoom={activeRoom} setActiveRoom={setActiveRoom} showB={showB} showC={showC}/>
                </animated.div>
            ))}
            <div className = 'buttonwrap' id = {eventTotal < 7 ? 'hidden' : ''}>
                <div className = 'lastbutton' id = {eventPage === 1 ? 'off' : 'on'} onClick = {test}><MdKeyboardArrowLeft/></div>
                <div className = 'nextbutton' id = {eventPage === 2 ? 'off' : 'on'} onClick = {test}><MdKeyboardArrowRight/></div>
            </div>
        </div>
    );
    } else {
        return (
            <div className = 'contentwrap'>
                <div className = 'contentwraptitle'>Today's Events</div>
                <div className = 'eventbox'>
                    <div className = 'eventtitlezero'>Check back tomorrow for more!</div>
                </div>
            </div>
        );
    }
}

export default Content;