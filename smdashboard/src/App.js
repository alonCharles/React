import React from 'react'
import Followers from "./components/Followers";
import Header from "./components/Header";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <section className='p-20 max-width-8xl mx-auto'>
      <Header/>
      <Followers />
      <Overview/>
      </section>
    </>
  );
}

export default App;
