import React, { Fragment } from 'react'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'
import { TreeView, TreeItem } from '@mui/lab'
import {
  Dashboard,
  RateReview,
  People,
  ListAlt,
  PostAdd,
  ImportExport,
  ExpandMore,
  Add,
} from '@mui/icons-material'
import { SidebarContainer } from './Sidebar.element'

function Sidebar() {
  return (
    <Fragment>
      <SidebarContainer>
        <Link to="/">
          <img src={logo} alt="Ecommerce-logo" />
        </Link>
        <Link to="/admin/dashboard">
          <p>
          <Dashboard /> Dashboard
          </p>
        </Link>

        <Link>
          <TreeView
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ImportExport />}
          >
            <TreeItem nodeId='1' label="Products">
              <Link to="/admin/products">
                <TreeItem nodeId='2' label="All" icon={<PostAdd/>}/>
              </Link>
              <Link to="/admin/product">
                <TreeItem nodeId='3' label="Create" icon={<Add/>}/>
              </Link>
            </TreeItem>
          </TreeView>
        </Link>

        <Link to='/admin/orders'>
          <p>
            <ListAlt/>
            Orders
          </p>
        </Link>
        <Link to='/admin/users'>
          <p>
            <People/>
            Users
          </p>
        </Link>

        <Link to='/admin/reviews'>
          <p>
            <RateReview/>
            Reviews
          </p>
        </Link>
        
        
      </SidebarContainer>
    </Fragment>
  )
}

export default Sidebar
