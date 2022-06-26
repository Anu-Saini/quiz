//Date today in
//Date today in
var now = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(now);

var events = [
  {
    start: "Sun Jun 26 2022 09:00:00",
    end: "Sun Jun 26 2022 09:30:00",
    isFinished: true,
    description: "to_market_for_shopping",
  },
  {
    start: "Sun Jun 26 2022 10:30:00",
    end: "Sun Jun 26 2022 11:30:00",
    isFinished: true,
    description: "car_rego",
  },
  {
    start: "Sun Jun 26 2022 11:00:00",
    end: "Sun Jun 26 2022 12:00:00",
    isFinished: true,
    description: "car washing",
  },
  {
    start: "Sun Jun 26 2022 12:00:00",
    end: "Sun Jun 26 2022 14:00:00",
    isFinished: false,
    description: "car rego payment",
  },
  {
    start: "Sun Jun 26 2022 13:00:00",
    end: "Sun Jun 26 2022 13:20:00",
    isFinished: false,
    description: "study",
  },
  {
    start: "Sun Jun 26 2022 15:00:00",
    end: "Sun Jun 26 2022 16:00:00",
    isFinished: false,
    description: "icecream",
  },
];


function assignTask() {
        events.forEach((x) => {
            if (moment(x.start).format("DD/MM/YY") == moment().format("DD/MM/YY")) {
                const startTime = moment(x.start).format("H");
    const endTime = moment(x.end).format("H");
    var row = document.getElementsByClassName("col-10");
    for (var i = 0; i < row.length; i++) {
      const id = row[i].id;
      if (id === `event${startTime}`) {
        document.getElementById(id).innerText = x.description;
        if (
          moment(x.start).format("DD/MM/YY HH") < moment().format("DD/MM/YY HH")
        ) {
          document.getElementById(id).classList.add("past");
        }
        else if (
                moment(x.start).format("DD/MM/YY HH") > moment().format("DD/MM/YY HH")
         ) {
                document.getElementById(id).classList.add("future");}
         else {       document.getElementById(id).classList.add("present");}
              
    }
}} });
}

assignTask();

$('.form-control').click(function(){
  document.getElementById(this.id).setAttribute('readonly', false);
  })