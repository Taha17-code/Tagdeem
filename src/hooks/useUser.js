/* eslint-disable no-unused-expressions */

import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';
import { useQuery } from 'react-query';
import { getUserDetail } from '../api/index';

const useUser = () => {
  const {data,isError, isLoading,refetch}= useQuery(
     // const { currentUser, loading } = useAuth();
  "users", async () => {

    try {
    const userDetail = await getUserDetail();
    return userDetail; 

    } catch (error) {
      if(!error.message.includes('not authenticated')){
        toast.error('ليس لديك صلاحية الدخول، يرجى تسجيل الدخول أولاً');
      }
    }
  },{refetchOnWindowFocus:false}

 

  );
   return {data,isLoading,isError,refetch};
 
  // if (loading) {
  //   return { data: null, isLoading: true, isError: false, refetch: () => {} };
  // }

  // if (currentUser) {
  //   toast.success("مرحباً بك");
  //   return { data: currentUser.providerData[0], isLoading: false, isError: false, refetch: () => {} };
  // } else {
  //   if (!loading) {
  //     toast.error('ليس لديك صلاحية الدخول، يرجى تسجيل الدخول أولاً');
  //   }
  //   return { data: null, isLoading: false, isError: true, refetch: () => {} };
  // }
};

export default useUser;