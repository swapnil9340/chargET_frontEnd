import Suggestion from "../suggestions/suggestion";
import Homesection from "../Homesection/Homesection";
import Header from "../Header/Header";
import DeviceSection from "../Homesection/DeviceSection";
import DeviceInfo from "../Homesection/DeviceInfo";
import Leftbar from '@/component/Leftbar/Index';
import styled from '@/styles/style.module.scss'
export default function Home() {
return(
    <div className={styled.dashboard}>
         <div>
            <Header/>
            <Homesection title={'Top Publishers'} />
            <DeviceSection/>
            <DeviceInfo/>
         </div>
         <div>
           <Leftbar/>
         </div>
    </div>
)
}