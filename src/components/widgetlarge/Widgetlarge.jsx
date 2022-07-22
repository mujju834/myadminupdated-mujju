import React from 'react'
import './Widgetlarge.css'

// widgetlg

const Widgetlarge = () => {
  const Button=({type})=>{
  return <button className={'widgetlgbutton '+type}> {type} </button>
  }
  return (
    <div className='widgetlarge'>
<h3 className="widgetlgtitle">Latest Transactions</h3>
<table className="widgetlgtable">
  <tr className="widgetlgtr">
    <th className="widgetlgth">Customer</th>
    <th className="widgetlgth">Date</th>
    <th className="widgetlgth">Amount</th>
    <th className="widgetlgth">Status</th>
</tr>
{/* first customer */}
<tr className="widgetlgtr">
  <td className="widgetlguser"> <img src="./images/mujju.jpg" alt="" className="widgetlgimg" />
  <span className="widgetlgname">Maze me</span>
  </td>
<td className="widgetlgdate">2 Jun 20</td>
<td className="widgetlgamount">$123</td>
<td className="widgetlgstatus">
  <Button type="Approved" />
</td>
</tr>

{/* second customer */}
<tr className="widgetlgtr">
  <td className="widgetlguser"> <img src="./images/mujju.jpg" alt="" className="widgetlgimg" />
  <span className="widgetlgname">Maze me</span>
  </td>
<td className="widgetlgdate">2 Jun 20</td>
<td className="widgetlgamount">$123</td>
<td className="widgetlgstatus">
  <Button type="Declined" />
</td>
</tr>
 {/*third customer  */}
 <tr className="widgetlgtr">
  <td className="widgetlguser"> <img src="./images/mujju.jpg" alt="" className="widgetlgimg" />
  <span className="widgetlgname">Maze me</span>
  </td>
<td className="widgetlgdate">2 Jun 20</td>
<td className="widgetlgamount">$123</td>
<td className="widgetlgstatus">
  <Button type="Pending" />
</td>
</tr>
{/* fourth customer */}
<tr className="widgetlgtr">
  <td className="widgetlguser"> <img src="./images/mujju.jpg" alt="" className="widgetlgimg" />
  <span className="widgetlgname">Maze me</span>
  </td>
<td className="widgetlgdate">2 Jun 20</td>
<td className="widgetlgamount">$123</td>
<td className="widgetlgstatus">
  <Button type="Approved" />
</td>
</tr>


</table>


    </div>
  )
}

export default Widgetlarge
