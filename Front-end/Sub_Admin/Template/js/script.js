// Sidebar Toggle
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// Get the menu icon and close icon elements
var menuIcon = document.getElementById("menu-icon");
var closeIcon = document.getElementById("close-icon");

// Attach click event listeners
if (menuIcon) {
  menuIcon.addEventListener("click", openSidebar);
}

if (closeIcon) {
  closeIcon.addEventListener("click", closeSidebar);
}

function performSearch() {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  alert(`You searched for: ${searchText}`);
}

// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [
    {
      data: [103, 114, 143, 140, 152],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ["#4318FF", "#05CD99", "#2B3674", "#A3AED0", "#6AD2FF", ""],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    title: {
      text: "Month of the Year",
    },
  },
  yaxis: {
    title: {
      text: "Number Of Patients",
    },
  },
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// AREA CHART
var areaChartOptions = {
  series: [
    {
      name: "Patient_Id",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Amount paid",
      data: [200, 300, 400, 150, 140, 152, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#4318FF", "#6AD2FF"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Patient_Id",
      },
    },
    {
      opposite: true,
      title: {
        text: "Amount paid",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

// PIE CHART
// chart.js
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    chart: {
      type: "pie",
      width: "600px", // Adjust the width to make the chart medium-sized (in pixels).
    },
    series: [67, 33], // Unoccupied: 67%, Occupied: 33% (100 - 67 = 33)
    labels: ["Unoccupied", "Occupied"],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return val.toFixed(0) + "%";
      },
      textAnchor: "middle",
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        colors: ["green", "red"], // Set the colors for unoccupied and occupied.
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#fff",
        opacity: 0.9,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: "#000",
          opacity: 0.45,
        },
      },
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
  chart.render();
});
