import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../../theme';
import createEmotionCache from '../../utils/createEmotionCache';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { Box } from '@mui/material';
import { CacheProvider as RTLCacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';

// Create RTL cache
const clientSideRtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface BaseLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  favicon?: string;
  header?: any;
  footer?: any;
}

const BaseLayout = (props: BaseLayoutProps) => {
  const { 
    children, 
    title = 'נטלי - ייעוץ שינה מקצועי', 
    description = 'ייעוץ שינה מקצועי לנשים בהריון ולהורים לתינוקות. אני כאן לעזור למשפחתך לישון טוב יותר וליצור הרגלי שינה בריאים.',
    favicon = '/images/baby-sleep-favicon.svg',
    header,
    footer
  } = props;

  return (
    <RTLCacheProvider value={clientSideRtlCache}>
      <CacheProvider value={clientSideEmotionCache}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={favicon} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              bgcolor: 'background.default',
            }}
            dir="rtl"
          >
            <Header {...header} />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer {...footer} />
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </RTLCacheProvider>
  );
};

export default BaseLayout;