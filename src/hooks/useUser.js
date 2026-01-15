
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

const useUser = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return { data: null, isLoading: true, isError: false, refetch: () => {} };
  }

  if (currentUser) {
    toast.success("مرحباً بك");
    return { data: currentUser.providerData[0], isLoading: false, isError: false, refetch: () => {} };
  } else {
    if (!loading) {
      toast.error('ليس لديك صلاحية الدخول، يرجى تسجيل الدخول أولاً');
    }
    return { data: null, isLoading: false, isError: true, refetch: () => {} };
  }
};

export default useUser;