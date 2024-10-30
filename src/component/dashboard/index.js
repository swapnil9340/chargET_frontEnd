import Suggestion from "../suggestions/suggestion";
import Homesection from "../Homesection/Homesection";
import Header from "../Header/Header";
export default function Home() {
return(
    <div className="">
        <Header/>
        <Homesection title={'Top Publishers'} />
        <Homesection title={'Your Devices'}/>
      
    </div>
)
}