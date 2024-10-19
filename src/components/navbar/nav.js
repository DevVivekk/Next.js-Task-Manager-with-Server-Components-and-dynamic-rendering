"use client";
import React from 'react'
import './navbar.css'
import { BsLayoutSidebarInset } from "react-icons/bs";
const Nav = () => {
  const showSidebar = ()=>{
    const sidebar = document.getElementById('sider');
    sidebar.classList.toggle('visible');
  }
  return (
    <nav className='navbar'>
    <BsLayoutSidebarInset size={'3.5rem'} onClick={showSidebar} />
    </nav>
  )
}

export default Nav