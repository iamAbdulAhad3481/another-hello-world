import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import bootstrapPlugin from "@fullcalendar/bootstrap"
import timelinePlugin from '@fullcalendar/timeline';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';

class EventCalender extends Component {

  handleDateClick = (args) => {
    alert(args.dateStr)
  }

  render() {
    return (
      <div className="w-50 m-auto">
        <FullCalendar dateClick={this.handleDateClick}
          // defaultView="timeGrid"
          defaultView="dayGrid"
          header={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
          // header={ {left: 'prev,next',center: 'title',right: 'timelineDay,timelineWeek,timelineMonth'}}
          plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin, timeGridPlugin, timelinePlugin]}
          // hiddenDays={[ 1, 3, 5 ]} 
          // weekends={false}
          //columnHeader={false}
          // columnHeaderFormat={{ weekday: 'long' }}
          // columnHeaderHtml={ function(date) {
          //     if (date.getUTCDay() === 5) {
          //       return '<b>Friday!</b>';
          //     } else {
          //       return '<i>other day</i>';
          //     }
          //   }
          // }
          // themeSystem= 'bootstrap'
          // height= {'default'}
          // contentHeight= {600}
          handleWindowResize={true}
          // windowResize={
          //   function(view) {
          //     alert('The calendar has adjusted to a window resize');
          //   }
          // } 
          events={[{ title: 'My BirthDay', start: '2019-12-01', end: '2019-12-02' },{ id: 'a', title: 'my event', start: '2018-09-01' }]}>
        </FullCalendar>>

      </div>
    )
  }
}

export default EventCalender
