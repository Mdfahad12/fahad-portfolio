import React from 'react'
import './Layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
const Layout = () => {
  return (
    <div className='App'>
      <p>kjhjkh</p>
      <Sidebar />
      <div className='page'>
        <p>khkjhjkhjk</p>
        <span className='tags top-tags'>
          &lt;body&gt;
        </span>
        <Outlet />
        <span className='tags bottom-tags'>
          &lt;body&gt;
          <br />
          <span className='bottom tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
