import Head from "next/head";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import nextCookies from 'next-cookies';
const Dashbord = dynamic(() => import('../component/dashboard/index'), )

 function Home() {
  return (
    <>
     <Dashbord></Dashbord>
    </>
  );
}

export default Home


export async function getStaticProps(context) {
  const { token } = nextCookies(context);
console.log(token)
  // Use the token to fetch data
  // const response = await fetch('https://api.example.com/data', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  const data = []

  return {
    props: {
      data,
    },
  };
}