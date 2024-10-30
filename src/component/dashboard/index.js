import Suggestion from "../suggestions/suggestion";
import Homesection from "../Homesection/Homesection";
import Header from "../Header/Header";
import DeviceSection from "../Homesection/DeviceSection";
import DeviceInfo from "../Homesection/DeviceInfo";
export default function Home() {
return(
    <div className="">
        <Header/>
        <Homesection title={'Top Publishers'} />
         <DeviceSection/>
         <DeviceInfo/>
    </div>
)
}