import React, {useState, useEffect} from 'react';
import Content from './content';
import Building from './building';
import Team from './team';
import Logo from './logo';
import Arrows from './arrows';
import './app.css';
import {MdEventSeat} from "react-icons/md";
import {MdWc} from "react-icons/md";
import {FaBuilding} from "react-icons/fa";
import {FaRobot} from "react-icons/fa";
import {FaLightbulb} from "react-icons/fa";
import {FaRegLightbulb} from "react-icons/fa";
import {data} from './data.js';
import moment from 'moment';

const App = () => {

  const [events, setEvents] = useState(data);
  const [eventTotal, setEventTotal] = useState('');
  const [activeEvents, setActiveEvents] = useState([]);
  const [activeRoom, setActiveRoom] = useState('');
  const [eventPage, setEventPage] = useState(1);
  const [date, setDate] = useState('');
  const [theme, setTheme] = useState('light');
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [idleTimer, setIdleTimer] = useState(1);
  const [dataTimer, setDataTimer] = useState(1);

  const count = () => {
    setIdleTimer((idleTimer) => idleTimer < 60 ? idleTimer + 1 : 0);
    setDataTimer((dataTimer) => dataTimer < 600 ? dataTimer + 1 : 0);
  }

  const resetTimer = () => {
    setIdleTimer(1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
        count();
    }, 1000);
    return () => clearInterval(interval);
  }, [idleTimer], [dataTimer]);

  useEffect(() => {
    if (idleTimer === 0) {
      setShowB(false);
      setShowC(false);
      setActiveRoom('');
      if (eventPage === 2) {
        setActiveEvents(events.slice(0, 6));
        setEventPage(1);
      }
    }
  }, [idleTimer]);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const showOne = () => {
    activeRoom !== '1643_1639' ? setActiveRoom('1643_1639') : setActiveRoom('');
  }
  const showTwo = () => {
    activeRoom !== '1597' ? setActiveRoom('1597') : setActiveRoom('');
  }
  const showThree = () => {
    activeRoom !== '1599' ? setActiveRoom('1599') : setActiveRoom('');
  }
  const showFour = () => {
    activeRoom !== 'wc' ? setActiveRoom('wc') : setActiveRoom('');
  }

  useEffect(() => {
    events.sort((a,b) => moment(a.TimeEventStart._text) - moment(b.TimeEventStart._text));
    const localDate = moment(new Date());
    const futureEvents = events.filter(event => moment(event.TimeEventEnd._text).isAfter(localDate));
    setEventTotal(futureEvents.length);
    setEvents(futureEvents);
    setActiveEvents(
      futureEvents.slice(0, 6)
    );
    setDate(localDate.format('MMMM Do, YYYY'));
  }, []);

  useEffect(() => {
    if(idleTimer === 0) {
      events.sort((a,b) => moment(a.TimeEventStart._text) - moment(b.TimeEventStart._text));
      const localDate = moment(new Date());
      const futureEvents = events.filter(event => moment(event.TimeEventEnd._text).isAfter(localDate));
      setEventTotal(futureEvents.length);
      setEvents(futureEvents);
      setActiveEvents(
        futureEvents.slice(0, 6)
      );
      setDate(localDate.format('MMMM Do, YYYY'));
    }
  }, [idleTimer]);

  // useEffect(() => {

  //   const localDate = moment(new Date());
  //   setDate(localDate.format('MMMM Do, YYYY'));

  //   fetch('http://localhost:4000/soap', {
  //     method: 'get',
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   .then(response => response.json())
  //   .then(response => response.Bookings.Data)
  //   .then(response => response.filter(events => events.StatusID._text === '1'))
  //   .then(response => response.sort((a,b) => moment(a.TimeEventStart._text) - moment(b.TimeEventStart._text)))
  //   .then(response => response.filter(event => moment(event.TimeEventEnd._text).isAfter(localDate)))
  //   .then(response => {
  //     setEvents(response);
  //     setEventTotal(response.length);
  //     setActiveEvents(
  //       response.slice(0,6)
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   if (dataTimer === 0) {

  //     const localDate = moment(new Date());
  //     setDate(localDate.format('MMMM Do, YYYY'));

  //     fetch('http://localhost:4000/soap', {
  //     method: 'get',
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   .then(response => response.json())
  //   .then(response => response.Bookings.Data)
  //   .then(response => response.filter(events => events.StatusID._text === '1'))
  //   .then(response => response.sort((a,b) => moment(a.TimeEventStart._text) - moment(b.TimeEventStart._text)))
  //   .then(response => response.filter(event => moment(event.TimeEventEnd._text).isAfter(localDate)))
  //   .then(response => {
  //     setEvents(response);
  //     setEventTotal(response.length);
  //     setActiveEvents(
  //       response.slice(0,6)
  //     );
  //   }); 
  //   }
  // }, [dataTimer]);

  const test = () => {
      if(eventPage === 1){
        setActiveEvents(events.slice(6, 12));
        setEventPage(2);
      } else {
        setActiveEvents(events.slice(0, 6));
        setEventPage(1);
      }
  }

  const bToggle = () => {
    setShowC(false);
    showB === false ? setShowB(true) : setShowB(false);
  }

  const cToggle = () => {
    setShowB(false);
    showC === false ? setShowC(true) : setShowC(false);
  }
  
  return (
    <div className = {theme === 'light' ? 'container' : 'container_dark'} onClick={resetTimer}>
      <div className = 'header'>
        <div className = 'headertitle'>
          {date}<br/><span>Event Space<br/>Map</span>
        </div>
      </div>
      <div className = 'main'>
        <Logo toggleTheme={toggleTheme} theme={theme} activeRoom={activeRoom}/>
        <div className = 'infobutton' id = {showB === false ? '' : 'bdactive'} onClick = {bToggle}><FaBuilding/></div>
        <div className = 'teambutton' id = {showC === false ? '' : 'tdactive'} onClick = {cToggle}>
          {
            showC === true ? <FaLightbulb/> :
            showC === false && theme === 'light' ? <FaLightbulb/> :
            <FaRegLightbulb/>
          }
        </div>
        <div className = 'map' id = {activeRoom === '' ? '' : `map${activeRoom}`}>
          <img src = {theme === 'light' ? './map.png' : './darkmap.png'} alt = ''/>
          <Arrows activeRoom={activeRoom}/>
        </div>
        <div className = 'maincontent' style = {showB === false && showC === false ? {width: '650px', transitionDuration: '.5s'} : {width: '350px', transitionDuration: '.5s'}}>
          <Content events={activeEvents} activeRoom={activeRoom} setActiveRoom={setActiveRoom} eventPage={eventPage} eventTotal={eventTotal} test={test} showB={showB} showC={showC}/>          
        </div>
        <div className = 'modals'>
          <Building showB={showB}/>
          <Team showC={showC}/>
        </div>
      </div>
      <div className='togglebox'>
        <div className='one' id = {activeRoom==='1643_1639'? 'active' : ''} onClick={showOne}><MdEventSeat/></div>
        <div className='one' id = {activeRoom==='1597' ? 'active' : ''} onClick={showTwo}>1010</div>
        <div className='one' id = {activeRoom==='1599' ? 'active' : ''} onClick={showThree}><FaRobot/></div>
        <div className='one' id = {activeRoom==='wc' ? 'active' : ''} onClick={showFour}><MdWc/></div>
      </div>
      <div className='labelbox'>
        <div className = 'label' id = {activeRoom==='1643_1639' ? 'labactive' : ''}>Event Seating</div>
        <div className = 'label' id = {activeRoom==='1597' ? 'labactive' : ''}>Conference Room</div>
        <div className = 'label' id = {activeRoom==='1599' ? 'labactive' : ''}>Solutions Lab</div>
        <div className = 'label' id = {activeRoom==='wc' ? 'labactive' : ''}>Restrooms</div>
      </div>
    </div>
  );
}

export default App;
