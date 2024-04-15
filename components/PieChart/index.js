import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function VerticalBar() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Sales $',
                data: [10, 30, 14, 5, 12, 25],
                borderColor: [
                    'rgba(53, 162, 235, 0.4)',
                    'rgba(0, 162, 235, 0.4)',
                    'rgba(255, 162, 235, 0.4)',
                    'rgba(53, 0, 235, 0.4)',
                    'rgba(53, 0, 0, 0.4)',
                    'rgba(53, 255, 255, 0.4)',
                ],
                backgroundColor: [
                    'rgba(53, 162, 235, 0.4)',
                    'rgba(0, 162, 235, 0.4)',
                    'rgba(255, 162, 235, 0.4)',
                    'rgba(53, 0, 235, 0.4)',
                    'rgba(53, 0, 0, 0.4)',
                    'rgba(53, 255, 255, 0.4)',
                ],
                borderWidth: 1
            }]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                },
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <div>
            <Pie data={chartData} options={chartOptions} style={{ width: "500px", height: "500px" }} />
        </div>
    )
}