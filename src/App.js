import { Row } from 'react-bootstrap';
import { Fragment, Suspense } from 'react';
import Header from './Components/Utility/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './Pages/Home/HomePages';
import Footer from './Components/Utility/Footer';
import Authentication from './Pages/Auth/Authentication';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient,QueryClientProvider } from 'react-query';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { AuthProvider } from './contexts/AuthContext';
import SelectResumePage from './Pages/RusmePages/SelectResumePage';
import Porfile from './Components/Profile/Porfile';
import MainSpinner from './Components/MainSpinner';
import AddNewTemplate from './Pages/RusmePages/AddNewTemplate';
import { CreateRusme, TemplateDesignDetails } from './Pages';

function App() {
  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <Fragment className="App">
    <Header/>
    <main style={{backgroundColor:'#F9F7F7',minHeight:'670px',
    paddingBottom:'50px',margin:'0px',minWidth:'100%'}}  className='main'>

     <Suspense fallback={MainSpinner}>
      
      <BrowserRouter>
      
      <Routes>
      
      <Route index element={<HomePages/>}/>
      <Route path="/login" element={<Authentication/>}/>
      <Route path="/RusmePage" element={<SelectResumePage/>}/>
      <Route path="/Profile" element={<Porfile/>}/>
      <Route path="/AddNewTemplate/create" element={<AddNewTemplate/>}/>
      <Route path="/CreateRusme/*" element={<CreateRusme/>}/>
      <Route path="/Profile/:uid" element={<Porfile/>}/>
      <Route pathe= "/TemplateDesignDetails/:templateID" element={<TemplateDesignDetails/>}/>
  
      
      </Routes>
      
     
      </BrowserRouter>
      
      </Suspense>
     
      
    </main>
    <Footer/>
     <ToastContainer position='top-right' />
    </Fragment>
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
   
  );
}

export default App;
 