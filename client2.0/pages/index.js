import React from 'react';
import { Nav } from '@components/NavBar';
import { Header } from '@components/Header';
import { Services } from '@components/Services';
import { Cta } from '@components/Cta';
import { Footer } from '@components/Footer';
import { Product } from '@components/Product';
import { Contact } from '@components/Contact';
import { Hiring } from '@components/Hiring';

function IndexPage() {
  return (
    <div id='top'>
      <Nav />
      <Header />

      <Services />
      <Product />

      <Cta />
      <Hiring />
      <Contact />
      <Footer />
    </div>
  );
}

export default IndexPage;
