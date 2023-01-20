import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { DashboardContainer } from './Dashboard.element'
import Sidebar from './Sidebar/Sidebar'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
import { MetaData } from '../layout/MetaData'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

function Dashboard() {
 const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
  };
  const lineState = {
    labels: ['Initial Amount', 'Amount Earned'],
    datasets: [
      {
        label: 'TOTAL AMOUNT',
        backgroundColor: ['tomato'],
        hoverBackgroundColor: ['rgb(197,72,49)'],
        data: [0, 4000],
      },
    ],
  }

  const doughnutState={
    labels:["Out of Stock","InStock"],
    datasets:[
      {
        backgroundColor: ['#00a6b4',"#6800b4"],
        hoverBackgroundColor: ['#4b5000',"#35014f"],
        data: [2, 10],
      }
    ]
  }

  return (
    <Fragment>
      <MetaData title="Admin -- Dashboard"/>
      <DashboardContainer>
        <Sidebar />
        <div className="container">
          <Typography component={'h1'}>Dashboard</Typography>
          <div className="dashboardSummary">
            <div>
              <p>
                Total Ammount <br /> $2000
              </p>
            </div>
            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Product</p>
                <p>50</p>
              </Link>

              <Link to="/admin/orders">
                <p>Orders</p>
                <p>4</p>
              </Link>

              <Link to="/admin/users">
                <p>Users</p>
                <p>2 </p>
              </Link>
            </div>
          </div>
          <div className="lineChart">
            <Line data={lineState} />
          </div>

          <div className="doughnutChart">
            <Doughnut  data={doughnutState} />
          </div>
        </div>
      </DashboardContainer>
    </Fragment>
  )
}

export default Dashboard
