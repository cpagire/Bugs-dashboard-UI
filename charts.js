//Line chart
var xValues = ["28 Jul","29 Jul","1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","8 Aug","10 Aug","11 Aug","12 Aug"];
var raised = [7,8,8,9,9,9,10,11,14,14,15];
var fixed = [6,6,7,8,9,8,9,9,7,10,11];
new Chart("dailyChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label:"Bugs raised",
      lineTension: 0,
      borderColor: "#ff2a2a",
      data: raised
    }, {
      label:"Bugs resolved",
      lineTension: 0,
      borderColor: "#00cc44",
      data: fixed
    }]
  },
  options: {
    legend: {display: false}
  }
});

//pia chart
var xValues = ["Critical", "Major", "Minor", "Low"];
var yValues = [5, 9, 11, 2];
var barColors = [
  "#ff0000",
  "#ff6666",
  "#ffb3b3",
  "#ffe6e6"
];

new Chart("pia_chart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false}
  }
});
