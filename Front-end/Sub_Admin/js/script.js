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
      data: [10, 8, 6, 4, 2],
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
    categories: ["Kacyiru Hospital", "Muhimu Hospital", "Rwinkwavu Hospital", "Shyira Hospital", "Ruhengeri Hospital"],
    title: {
      text: "Hospital Names",
    }
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