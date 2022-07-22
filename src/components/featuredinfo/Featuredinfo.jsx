import React from 'react'
import './Featuredinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Featuredinfo = () => {
  return (

    <div className='featured'>

        {/* item 1 */}

      <div className="featureditem">
        <span className="featuredtitle">Revenue</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$2,421</span>
            <span className="featuredmoneyrate">-1.8 <ArrowDownwardIcon className='featuredicon negative' /> </span>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>

{/* item 2 */}

<div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$4,421</span>
            <span className="featuredmoneyrate">-1.4 <ArrowDownwardIcon className='featuredicon negative' /> </span>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>

{/* item 3 */}
      <div className="featureditem">
        <span className="featuredtitle">Cost</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$5,421</span>
            <span className="featuredmoneyrate">+2.4 <ArrowUpwardIcon className='featuredicon' /> </span>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>



    </div>
  )
}

export default Featuredinfo
