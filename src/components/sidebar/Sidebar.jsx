import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaidIcon from '@mui/icons-material/Paid';
import ReportIcon from '@mui/icons-material/Report';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar' >
<div className="sidebarwrapper">

    {/* first side bar */}

    <div className="sidebarmenu">
        <h3 className="sidebartitle">Dashboard</h3>
        <ul className="sidebarlist">
        
        <Link to='/' className='link'> 
                   <li className="sidebarlistitem active">
<LineStyleIcon className='sidebaricon'/> Home </li>
</Link>

<li className="sidebarlistitem">
<TimelineIcon className='sidebaricon' /> Analytics </li>

<li className="sidebarlistitem">
<TrendingUpIcon className='sidebaricon' />Sales </li>
        </ul>
    </div>

{/* second side bar */}

    <div className="sidebarmenu">
        <h3 className="sidebartitle">Quick Menu</h3>
        <ul className="sidebarlist">

        {/* linking the button to users pages */}
        <Link to='/users' className='link'>
<li className="sidebarlistitem active">            
<PeopleIcon className='sidebaricon'/> users </li>
</Link>

{/* linking to products page */}
<Link to='/products' className='link'> 
<li className="sidebarlistitem">
<ProductionQuantityLimitsIcon className='sidebaricon' /> products </li>
</Link>


<li className="sidebarlistitem">
<PaidIcon className='sidebaricon' />Transactions </li>

<li className="sidebarlistitem">
<ReportIcon className='sidebaricon' />Reports </li>
        </ul>
    </div>

{/* third side bar */}
<div className="sidebarmenu">
        <h3 className="sidebartitle">Notifications</h3>
        <ul className="sidebarlist">
            <li className="sidebarlistitem active">
<MailIcon className='sidebaricon'/> Mail </li>

<li className="sidebarlistitem">
<FeedbackIcon className='sidebaricon' /> Feedback </li>

<li className="sidebarlistitem">
<MessageIcon className='sidebaricon' />Messages </li>
        </ul>
    </div>

    {/* fourth sidebar */}
    <div className="sidebarmenu">
        <h3 className="sidebartitle">Staff</h3>
        <ul className="sidebarlist">
            <li className="sidebarlistitem active">
<ManageHistoryIcon className='sidebaricon'/> Manage </li>

<li className="sidebarlistitem">
<AnalyticsIcon className='sidebaricon' /> Analytics </li>

<li className="sidebarlistitem">
<ReportProblemIcon className='sidebaricon' />Reports </li>
        </ul>
    </div>

    {/* sidebars finished */}

</div>
    </div>
  )
}

export default Sidebar
