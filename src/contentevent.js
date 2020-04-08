import React from 'react';
import moment from 'moment';

const ContentEvent = ( props ) => {

    const { showB, showC, activeRoom, setActiveRoom, item: {EventName}, item: {RoomID}, item: {TimeEventStart}, item: {TimeEventEnd} } = props;

    const mapRoom = {
        1588: "Brainstorm Room",
        1589: "Solutions Room",
        1597: "1010 - Conference Room",
        1599: "Solutions Lab",
        1598: "Recharge Room",
        1643: "Event Space",
        1639: "Lower Hall",
        1594: "Team Room D",
        1596: "Team Room D + E",
        1595: "Team Room E",
        1602: "Upper Hall"
    };

    const roomNumber = RoomID._text.replace(/1588|1589|1597|1599|1598|1643|1639|1594|1596|1595|1602/gi, function(matched) {
        return mapRoom[matched];
    });

    const startTime = moment(TimeEventStart._text).format('h:mm A');
    const endTime = moment(TimeEventEnd._text).format('h:mm A');

    const test = () => {
        if(activeRoom !== RoomID._text) {
            setActiveRoom(RoomID._text);
        } else {
            setActiveRoom('');
        }
    }

    return (
        <div className = 'eventbox' style = {showB === false && showC === false ? {gridTemplateColumns: '10% 55% 35%'} : {gridTemplateColumns: '20% 55% 25%'}} onClick = {test}>
            <div className = 'eventtoggle'><span id={activeRoom.includes(RoomID._text) ? 'activeroom' : '' }></span></div>
            <div className = 'eventtitle' style = {showB === false && showC === false ? {fontSize: '22px'} : {fontSize: '18px'}}>{EventName._text}</div>
            <div className = 'eventtime' style = {showB === false && showC === false ? {fontSize: '18px', marginTop: '0px', transitionDuration: '.5s'} : {fontSize: '14px', marginTop: '20px', transitionDuration: '.5s'}}>{startTime} - {endTime}</div>
            <div className = 'eventroom' style = {showB === false && showC === false ? {fontSize: '18px'} : {fontSize: '14px'}}>{roomNumber}</div>
        </div>
    );
}

export default ContentEvent;