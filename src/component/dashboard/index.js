import Suggestion from "../suggestions/suggestion";
import Homesection from "../Homesection/Homesection";
import Header from "../Header/Searchbar";
import DeviceSection from "../Homesection/DeviceSection";
import DeviceInfo from "../Homesection/DeviceInfo";
import Leftbar from '@/component/Leftbar/Index';
import styled from '@/styles/style.module.scss'
import NameAndLocation from "../Homesection/nameandlocation";
export default function Home() {
return(
    <div className={styled.dashboard}>
         <div className={styled.mainDashboardsection}>
            <Header/>
            <Homesection title={'Top Publishers'} />
            <NameAndLocation></NameAndLocation>
            <DeviceSection/>
            <DeviceInfo/>
         </div>
         <div className={styled.DashboardLeftSection}>
           <Leftbar/>
         </div>
    </div>
)
}