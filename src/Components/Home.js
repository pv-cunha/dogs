import React from 'react';
import Feed from '../Components/Feed/Feed';
import Head from '../Components/Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Nome do site Dogs, com feed de fotos." />
      <Feed />
    </section>
  );
};

export default Home;
