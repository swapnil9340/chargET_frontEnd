import Head from "next/head";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const Dashbord = dynamic(() => import('../component/dashboard/index'), )

 function Home() {
  return (
    <>
     <Dashbord></Dashbord>
    </>
  );
}

export default Home


// export async function getServerSideProps(context) {
//   const { req } = context;
//   const tokenString = req?.cookies?.ChargeET_UserToken;
//   // console.log(tokenString)
//   // Use the token to fetch data
//   // const response = await fetch('https://api.example.com/data', {
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //   },
//   // });

//   const data = []

//   return {
//     props: {
//       data,
//     },
//   };
// }