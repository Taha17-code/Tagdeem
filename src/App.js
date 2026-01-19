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

function App() {
  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
      <ToastContainer position='top-right' />
    </div>
    <Footer/>
    
    </Fragment>
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
   
  );
}

export default App;
 