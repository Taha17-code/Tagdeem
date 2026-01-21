import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { useAuth } from "../contexts/AuthContext";
import { getUserDetail } from "../api";

const useUser = () => {
  const { currentUser, isLoading: authLoading } = useAuth();

  const query = useQuery(
    ["user", currentUser?.uid],
    () => getUserDetail(),
    {
      enabled: !!currentUser, // 🔥 لا يعمل إلا بعد تسجيل الدخول
      refetchOnWindowFocus: false,
      onError: (error) => {
        if (!error.message.includes("not authenticated")) {
          toast.error("ليس لديك صلاحية الدخول، يرجى تسجيل الدخول أولاً");
        }
      },
    }
  );

  return {
    data: query.data,
    isLoading: authLoading || query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
};

export default useUser;
