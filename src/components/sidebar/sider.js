"use client";
import React from 'react'
import './sider.css'
import Link from 'next/link';
const Sider = () => {
  const showSidebar = ()=>{
    const sidebar = document.getElementById('sider');
    sidebar.classList.toggle('visible');
  }
  return (
    <div id='sider' className='sider'>
        <Link onClick={showSidebar} href={'/'}>Home</Link>
        <Link onClick={showSidebar} href={'/?edit=true'}>Edit MODE</Link>
        <Link onClick={showSidebar} href={'/?sort=true'}>Sort MODE</Link>
    </div>
  )
}

export default Sider