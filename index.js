const Cal = require('public-google-calendar')
const _ = require('lodash')
const moment = require('moment')

const publicGoogleCalendar = new Cal({ calendarId: 'ipfs.io_eal36ugu5e75s207gfjcu0ae84@group.calendar.google.com' })

publicGoogleCalendar.getEvents(function(err, events) {
  if (err) { return console.log(err.message) }

  var todaysEvents = _.filter(events, function(event) {
    return moment(event.start).add(1, "days").isSame(new Date(), "day")
  })

  console.log(todaysEvents)
  // events is now array of all calendar events
})
