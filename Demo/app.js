// app.js

// Biểu đồ hình tròn cho số lượng CP Tăng, Giảm, Không đổi
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Tăng', 'Giảm', 'Không đổi'],
        datasets: [{
            data: [199, 169, 67],
            backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Số lượng CP Tăng, Giảm, Không đổi'
            }
        }
    }
});

// Biểu đồ cột cho Phân bổ dòng tiền
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Tăng', 'Giảm'],
        datasets: [{
            label: 'Dòng tiền (tỷ)',
            data: [6520.2, 3654.2],
            backgroundColor: ['#4caf50', '#f44336'],
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Trạng thái'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Dòng tiền (tỷ)'
                }
            }
        }
    }
});

// Heatmap cho các ngành nghề
const heatmapData = [
    { name: 'VHM', value: 0.85, color: '#4caf50' },
    { name: 'VPB', value: 0.99, color: '#4caf50' },
    { name: 'TCB', value: -0.42, color: '#ff5722' },
    // Add more stocks here...
];

const heatmapContainer = d3.select("#heatmap");
const width = 800;
const height = 500;

const svg = heatmapContainer.append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("rect")
    .data(heatmapData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => (i % 10) * 80)
    .attr("y", (d, i) => Math.floor(i / 10) * 50)
    .attr("width", 70)
    .attr("height", 40)
    .attr("fill", d => d.color)
    .attr("stroke", "#333");

svg.selectAll("text")
    .data(heatmapData)
    .enter()
    .append("text")
    .attr("x", (d, i) => (i % 10) * 80 + 35)
    .attr("y", (d, i) => Math.floor(i / 10) * 50 + 25)
    .attr("text-anchor", "middle")
    .attr("fill", "#fff")
    .text(d => d.name);
