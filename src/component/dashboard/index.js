import Suggestion from "../suggestions/suggestion";
import Homesection from "../Homesection/Homesection";
import Header from "../Header/Header";
export default function Home() {
return(
    <div className="px-3">
        <Header/>
        <Homesection title={'AI Suggetions'} />
        <Homesection title={'Your Devices'}/>
      
    </div>
)
}