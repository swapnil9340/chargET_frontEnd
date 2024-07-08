import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import layout from "../layout/layout"
import layout1 from "../layout/layout1"

const layouts = {
  default: layout,
  layout1: layout1,
};
export default function App({ Component, pageProps }) {

  const Layout = layouts[Component.layout] || layouts.default;

  return (
  
      <Layout>
        <Component {...pageProps} />
      </Layout>

  );
}