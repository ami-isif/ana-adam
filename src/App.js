import React from "react";
import Greeting from './Greeting';
import Head from './Head';
import Link from './Link';
import List from './List';
import Quote from './Quote';
import Sketche from './Sketche';
import Table from './Table';
import Notes from './Notes';
import Body from './Body';
import Footer from './Footer';

function App () {
  return (
    <div>
      <Greeting />
        <Head/>
        <Link/>
        <List/>
       < Quote/>
       <Sketche/>
       <Table/>
       <Notes/>
       <Body/>
       <Footer/>
    </div>
  );
}
export default App