import Head from "next/head";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
const Dashbord = dynamic(() => import('../component/dashboard/index'), 
// {
  // loading: () => <p>Loading...</p>,
// }
)

export default function Home() {
  return (
    <>
     <Dashbord></Dashbord>
    </>
  );
}
