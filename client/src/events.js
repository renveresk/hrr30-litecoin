export default [
  {
    id: 0,
    title: 'Assessment Test',
    allDay: true,
    start: new Date(2018, 3, 14),
    end: new Date(2018, 3, 14),
  },
  {
    id: 1,
    title: 'Solo Week',
    allDay: true,
    start: new Date(2018, 3, 16),
    end: new Date(2018, 3, 22),
  },

]

//Month is 0 based meaning
//new Date(2018, 0, 2) refers to January 2, 2018
//new Data(2018, 2, 13) refers to March, 13, 2018
//start: includes that day
//end: doesn not include that day
//More details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date