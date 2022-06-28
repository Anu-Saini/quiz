//Date today in
//Date today in
var now = moment("6/26/2022, 11.30", "MM-DD-YYYY,h:mm a").format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(now);


//var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
//$("#3a").text(reformatDate);



var events_ = [
  {
    start: "Tue Jun 28 2022 10:00:00",
    end: "Tue Jun 28 2022 10:30:00",
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
var events = localStorage.events ?  JSON.parse(localStorage.events) : events_;
function assignTask() {

  events.forEach((x) => {
    if (moment(x.start).format("DD/MM/YY") == moment().format("DD/MM/YY")) {
      const startTime = moment(x.start).format("H");
      const endTime = moment(x.end).format("H");
      var row = document.getElementsByClassName("col-10");
      for (var i = 0; i < row.length; i++) {
        const id = row[i].children.length > 0 ? row[i].children[0].id : "";
        if (id === `event${startTime}`) {
          document.getElementById(id).innerText = x.description;
          if (
            moment(x.start).format("DD/MM/YY HH") <
            moment().format("DD/MM/YY HH")
          ) {
            document.getElementById(id).classList.add("past");
          } else if (
            moment(x.start).format("DD/MM/YY HH") >
            moment().format("DD/MM/YY HH")
          ) {
            document.getElementById(id).classList.add("future");
          } else {
            document.getElementById(id).classList.add("present");
          }
        }
      }
    }
  });
}

assignTask();

$(".form-control").click(function () {
  this.readOnly = false;
});

$(".fa-save").click(function () {
  const id = `event${this.parentNode.id.replace("save", "")}`;
  const hour = `${this.parentNode.id.replace("save", "")}`;
  const text = document.getElementById(id).value;
  const newDate = moment().format('ddd MMM D YYYY') + ` ${hour}:00:00`;

  let updated = false;
  events.forEach((x) => {
    if (moment(x.start).format("DD/MM/YY") == moment().format("DD/MM/YY")) {
      const startTime = moment(x.start).format("H");
      if(hour === startTime)
      {
        x.description = text;
        localStorage.setItem('events', JSON.stringify(events));
        updated = true;
      } 

    }
  });
  if(!updated)
  {
    

    const event = {
      start:  newDate,  //change the format
      end:  moment(newDate).add(1, 'hours'),
      isFinished: false,
      description: text,
    }
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
  }
  document.getElementById(id).readOnly = true;
  assignTask();
  
});
