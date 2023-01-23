import { Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
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
  ArcElement,
} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
import { MetaData } from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAdminProduct,
} from '../../redux/actions/productActions'
import { getAllOrdersAdmin } from '../../redux/actions/orderAction'
import { getAllUsersAdmin } from '../../redux/actions/userAction'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
)

function Dashboard() {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  const { users } = useSelector((state) => state.allUsersAdmin)

  const { orders } = useSelector((state) => state.allOrders)

  let outOfStock = 0
  products &&
    products.forEach((prod) => {
      if (prod.stock === 0) {
        outOfStock += 1
      }
    })

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

  const doughnutState = {
    labels: ['Out of Stock', 'InStock'],
    datasets: [
      {
        backgroundColor: ['#00a6b4', '#6800b4'],
        hoverBackgroundColor: ['#4b5000', '#35014f'],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  }

  useEffect(() => {
    dispatch(getAdminProduct())
    dispatch(getAllOrdersAdmin())
    dispatch(getAllUsersAdmin())

  }, [dispatch])

  return (
    <Fragment>
      <MetaData title="Admin -- Dashboard" />
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
                <p>Products</p>
                <p>{products && products.length}</p>
              </Link>

              <Link to="/admin/orders">
                <p>Orders</p>
                <p>{orders && orders.length}</p>
              </Link>

              <Link to="/admin/users">
                <p>Users</p>
                <p>{users && users.length} </p>
              </Link>
            </div>
          </div>
          <div className="lineChart">
            <Line data={lineState} />
          </div>

          <div className="doughnutChart">
            <Doughnut data={doughnutState} />
          </div>
        </div>
      </DashboardContainer>
    </Fragment>
  )
}

export default Dashboard
