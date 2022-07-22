import React from 'react'
import Chart from '../../components/chart/Chart'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import Widgetlarge from '../../components/widgetlarge/Widgetlarge'
import Widgetsmall from '../../components/widgetsmall/Widgetsmall'
import data from '../../Dummydata'
import './Home.css'

const Home= () => {
  return (
    <div className='home'>
<Featuredinfo />
<Chart data={data} title='User Analytics'  dataKey='Active user' />
<div className="homeWidgets">
  <Widgetsmall />
  <Widgetlarge />

</div>
    </div>
  )
}

export default Home
