/* LINE CHART */
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Sales",
            data: [3000, 4000, 3500, 5000, 6000, 7000],
            borderWidth: 2,
            tension: 0.4
        }]
    }
});

/* BAR CHART */
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [{
            label: "Revenue",
            data: [2000, 3000, 4000, 5000]
        }]
    }
});

/* PIE CHART */
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["USA", "India", "UK", "Germany"],
        datasets: [{
            data: [40, 30, 20, 10]
        }]
    }
});