import React from 'react'
import './User.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className='user'>
            <div className="usertitlecontainer">
                <h1 className="usertitle">Edit user</h1>
                <Link to='/newUser'>
                <button className="useraddbutton">Create</button>
                </Link>      
            </div>
            <div className="usercontainer">
                <div className="usershow">
                    <div className="usershowtop">
                        <img src='/images/rio3.jpeg' className='usershowimg' alt="" />
                        <div className="usershowtoptitle">
                            <span className="usershowusername">Maze me</span>
                            <span className="usershowusertitle">Blockchain</span>
                        </div>
                    </div>
                    <div className="usershowbottom">

                        <span className="usershowtitle">Account Details</span>
{/* first usershow info */}
                        <div className="usershowinfo">

                        <PermIdentityIcon className='usershowicon'/>
                        <span className="usershowinfotitle">mujju99</span>
                        </div>
{/*second usershow info */}
                        
                        <div className="usershowinfo">

                        < CalendarTodayIcon className='usershowicon'/>
                        <span className="usershowinfotitle">10.12.1998</span>
                        </div>
{/*third usershow info */}
<span className="usershowtitle">Contact Details</span>
                        
                        <div className="usershowinfo">

                        <PhoneAndroidIcon className='usershowicon'/>
                        <span className="usershowinfotitle">+1 1325 458 987</span>
                        </div>
{/*fourth usershow info */}
                        
                        <div className="usershowinfo">

                        <MailOutlineIcon className='usershowicon'/>
                        <span className="usershowinfotitle">mazeme@gmail.com</span>
                        </div>
{/*fifth usershow info */}
                        
                        <div className="usershowinfo">

                        <LocationSearchingIcon className='usershowicon'/>
                        <span className="usershowinfotitle">Delhi</span>
                        </div>
                        {/* finished user show info */}
                    </div>

                </div>
                <div className="userupdate">
<div className="userupdatetitle">Edit</div>
<form action="" className="userupdateform">
<div className="userupdateleft">
    <div className="userupdateitem">
        <label > Username</label>
        <input type="text" placeholder='mujju' name="" className='userupdateinput' />
    </div>
    <div className="userupdateitem">
        <label > Full Name</label>
        <input type="text" placeholder='Mujahid' name="" className='userupdateinput' />
    </div>
    <div className="userupdateitem">
        <label > Email</label>
        <input type="Email" placeholder='mujju@gmail.com' name="" className='userupdateinput' />
    </div>
    <div className="userupdateitem">
        <label > Phone</label>
        <input type="number" placeholder='+1 1325 458 98' name="" className='userupdateinput' />
    </div>
    <div className="userupdateitem">
        <label > Address</label>
        <input type="text" placeholder='Address' name="" className='userupdateinput' />
    </div>
</div>
<div className="userupdateright"></div>
<div className="userupdateupload">
<img className='userupdateimg' src="/images/beach.jpg" alt="" />

<label htmlFor="file"> <PublishIcon className='userupdateicon' /> </label>
  <input style={{display:"none"}} type="file" id="file" />

  <button onClick={(e)=>{e.preventDefault(); }} className="userupdatebutton">Update</button>
</div>
</form>
   </div>
       </div>
        </div>
    )
}

export default User
