
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAdmin = () => {
  const {user,loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
      queryKey: ['isAdmin', user?.email],
      enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
          const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          return res.data.admin;
      }
  })
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.instructor;
    }
  });
  return [isAdmin,isInstructor, isAdminLoading,isInstructorLoading]

};

export default useAdmin;