import { Row } from 'react-bootstrap';
import { Fragment, Suspense } from 'react';
import Header from './Components/Utility/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './Pages/Home/HomePages';
import Footer from './Components/Utility/Footer';
import Authentication from './Pages/Auth/Authentication';

function App() {
  return (
    
    <Fragment>
    <Header/>
    <div style={{backgroundColor:'#F9F7F7',minHeight:'670px',
    paddingBottom:'50px',margin:'0px',minWidth:'100%'}}>

     <Suspense fallback={<div> Loading..</div>}>
      
      <BrowserRouter>
      
      <Routes>
      <Route index element={<HomePages/>}/>
      <Route path="/login" element={<Authentication/>}/>
      
      </Routes>
      
     
      </BrowserRouter>
      
      </Suspense>
    </div>
    <Footer/>
    </Fragment>
   
  );
}

export default App;
