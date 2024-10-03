import React from 'react';  // Ensure React is imported
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Layout from "../layout/layout";
import Layout1 from "../layout/layout1";
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createEmotionCache from '../createEmotionCache';  // Corrected path
import PropTypes from 'prop-types';
import Head from 'next/head';
import theme from '../styles/style';  // Ensure theme is imported
import { useRouter } from 'next/router';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/globals.css'; // Your global styles (if any)
const layouts = {
  default: Layout,
  layout1: Layout1,
};

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const Layout = layouts[Component.layout] || layouts.default;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>ChargET</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

