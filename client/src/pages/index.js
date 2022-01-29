import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';

import Knowledge from 'sections/knowledge';
import WorkFlow from 'sections/workflow';
import Product from 'sections/product';
// import Support from 'sections/support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO description='add the description here' title='Synart' />
        <Banner />
        <Feature />
        <Product />
        <Knowledge />
        {/* <ClientFeedback /> */}
        <WorkFlow />
        {/* <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
