import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
  const {user} = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const {  data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json();
    }
})
return[isAdmin?.admin || false,isAdminLoading]

};

export default useAdmin;