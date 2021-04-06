
import React,{useState} from 'react';
// local styles
import './index.css';

// Components

import Loading from './components/Loading';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Menu from './components/Menu';
import Skills from './components/Skills';
import Header from './components/Header';



function App() {

const [loading,setloading]=useState(false);
if (loading){
  return( <Loading/>)
}
else {



  return (
    <div>
 <Menu />
 <Header />
<Portfolio />
      
<Skills />
<Contact />

</div>

)
};
}

export default App;
