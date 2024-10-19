import React from 'react'
import HomePagewrapper from '@/components/rootWrapper.js/homePagewrapper';
import styles from './page.module.css'
const getdata = async()=>{
  const res = await fetch("http://localhost:3000/api/alldata");
  return await res.json();
}
const Page = async() => {
  const data = await getdata();
  //console.log(data)
  return (
    <div className={styles['home-page']}>
    <HomePagewrapper data={data} />
    </div>
  )
}

export default Page