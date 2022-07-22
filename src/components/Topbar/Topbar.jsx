import React from 'react'
import './Topbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar() {
  return (
    <div className='topbar'>

<div className="topbarwrapper">
<div className="topleft">
<span className="logo">Admin</span>
</div>
<div className="topright">
    <div className="topbariconcontainer">
        <NotificationsActiveIcon />
        <span className="topiconbagde">2</span>
    </div>

    <div className="topbariconcontainer">
        <LanguageIcon />
        <span className="topiconbagde">2</span>
    </div>

    <div className="topbariconcontainer">
        <SettingsIcon />
    </div>
<img src='/images/beach.jpg' alt="" className="topavatar" />
</div>
    </div>
    </div>
  )
}
