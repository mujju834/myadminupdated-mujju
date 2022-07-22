import React from 'react'
import './Widgetsmall.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Widgetsmall = () => {
  return (
    <div className='widgetsmall'>
<span className="widgetsmtitle">New Join Members</span>
<ul className="widgetsmlist">
    <li className="widgetsmlistitem">
        <img src="./images/rio3.jpeg" alt="" className="widgetsmimg" />
        <div className="widgetsmuser">
            <span className="widgetsmusername">MM</span>
            <span className="widgetsmusertitle">Software</span>
        </div>
        <button className="widgetsmbutton">
<VisibilityIcon className='widgetsmicon' />Display
        </button>
    </li>
{/* list item 2 */}
<li className="widgetsmlistitem">
        <img src="./images/rio3.jpeg" alt="" className="widgetsmimg" />
        <div className="widgetsmuser">
            <span className="widgetsmusername">MM</span>
            <span className="widgetsmusertitle">Software</span>
        </div>
        <button className="widgetsmbutton">
<VisibilityIcon className='widgetsmicon' />Display
        </button>
    </li>

    {/* list item 3 */}
    <li className="widgetsmlistitem">
        <img src="./images/rio3.jpeg" alt="" className="widgetsmimg" />
        <div className="widgetsmuser">
            <span className="widgetsmusername">MM</span>
            <span className="widgetsmusertitle">Software</span>
        </div>
        <button className="widgetsmbutton">
<VisibilityIcon className='widgetsmicon' />Display
        </button>
    </li>

    {/* list item 4 */}
    <li className="widgetsmlistitem">
        <img src="./images/rio3.jpeg" alt="" className="widgetsmimg" />
        <div className="widgetsmuser">
            <span className="widgetsmusername">MM</span>
            <span className="widgetsmusertitle">Software</span>
        </div>
        <button className="widgetsmbutton">
<VisibilityIcon className='widgetsmicon' />Display
        </button>
    </li>

    {/* list item 5 */}
    <li className="widgetsmlistitem">
        <img src="./images/rio3.jpeg" alt="" className="widgetsmimg" />
        <div className="widgetsmuser">
            <span className="widgetsmusername">MM</span>
            <span className="widgetsmusertitle">Software</span>
        </div>
        <button className="widgetsmbutton">
<VisibilityIcon  className='widgetsmicon'/>Display
        </button>
    </li>

    {/* lists ended */}

</ul>
    </div>
  )
}

export default Widgetsmall
