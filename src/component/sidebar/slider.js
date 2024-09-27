import React, { useState } from "react";
import classes from "../../styles/style.module.scss"
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import Image from 'next/image'
import { PiRectangleDashed } from "react-icons/pi";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { MdKeyboardArrowDown , MdHelpCenter ,MdElectricalServices , MdAccountBox} from "react-icons/md";
import { useRouter } from "next/router";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
const Sldeslider = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [dpopen, setdpopen] = useState(false);
  const router = useRouter()
  return (
    <div className={isOpen ? "slid" : "sidebar_head"} >
      <div>
      <div className="d-flex">
        <div className="option">
          {isOpen ? <div className="option12"> <span><PiRectangleDashed/></span>{`Full Screens`}</div> :<span> <IoReorderThreeOutline size={32} onClick={() => setIsOpen(!isOpen)}/></span>  }
        </div>
        { isOpen &&   <div className="closebuttom" onClick={() => setIsOpen(!isOpen)}>
          <Image width={100} height={30} className={classes.icon} src="/icon1.png"></Image>
          </div>}
      </div>
      <div className={classes.Sidebarlist}>
          <div className={"sidebaritem"}>
            <Link href="/" className={router.pathname == "/" ? "activeLink" : ""}>  <span><FaHome/></span><span>{`Home`}</span></Link>
          </div>
          <div className={classes.sidebardropdown}> 
            <p onClick={()=>{setdpopen(!dpopen)}}  className={dpopen ? `m-0 ${classes.sidebardropdowntitle}` : 'm-0'  }><span><MdElectricalServices/></span><span> {`EV-Drop`}</span><span className={classes.dropdwonbox}><MdKeyboardArrowDown/> </span></p>
            <ul className={dpopen  ? classes.dropsidedrop :""}>
              <li> <Link href="/mediaupload" className={router.pathname == "/mediaupload" ? "active" : ""}> <span></span><span>{`Media Upload`}</span></Link></li>
              <li> <Link href="/" className={router.pathname == "/" ? "active" : ""}> <span></span><span>{'Ad-Create'}</span></Link></li>
              <li> <Link href="/" className={router.pathname == "/" ? "active" : ""}> <span></span><span>{'Schedule'}</span></Link></li>
              <li> <Link href="/" className={router.pathname == "/" ? "active" : ""}> <span></span><span>{'Campaigns'}</span></Link></li>
            </ul>
          </div>
          <div className={"sidebaritem"}>
            <Link href="/about" className={router.pathname == "/about" ? "activeLink" : ""}> <span><BiSolidPieChartAlt2/></span><span>{'Analytics'}</span></Link>
          </div>
          <div className={"sidebaritem"}>
            <Link href="/billing" className={router.pathname == "/billing" ? "activeLink" : ""}> <span><IoNewspaper/></span><span>{'Billing & Subscription'}</span></Link>
          </div>
          <div className={"sidebaritem"}>
            <Link href="/" className={router.pathname == "/" ? "active" : ""}> <span><IoSettingsSharp/></span><span>{'Settings'}</span></Link>
          </div>
          <div className={"sidebaritem"}>
            <Link href="/" className={router.pathname == "/" ? "active" : ""}> <span><MdAccountBox/>
            </span><span>{'Account'}</span></Link>
          </div>
      </div>
      </div>
      <div className={classes.sidebarfooter}>
            <div>
              <p className="m-0"><span><MdHelpCenter/></span> <span>{`Help`}</span></p>
            </div>
            <div className={classes.profilesection}>
              <div className="d-flex align-items-center">
                <div className={classes.profileCircle}>
                  <Image src="/user.jpg" width={100} height={100} alt="Picture of the author"/>
                </div>
              { isOpen && <span>{`User Name`}</span>}
                </div>
               {isOpen && <span><MdLogout /></span>}
            </div>
      </div>
    </div>
  );
};

export default Sldeslider;