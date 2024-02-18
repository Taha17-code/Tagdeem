
import { Row } from 'react-bootstrap';

import { Fragment } from 'react';
import Header from './Components/Utility/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './Pages/Home/HomePages';
import Footer from './Components/Utility/Footer';

function App() {
  return (
    <Fragment>
    <Header/>
    <div style={{backgroundColor:'#F9F7F7',minHeight:'670px',
    paddingBottom:'50px',margin:'0px',minWidth:'100%'}}>
     
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePages/>}/>
      
      </Routes>
      
      </BrowserRouter>
      
    </div>
    <Footer/>
    </Fragment>
  );
}

export default App;
