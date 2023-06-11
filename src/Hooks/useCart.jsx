
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () =>{
    const {user,loading} = useContext(AuthContext);
// const token = localStorage.getItem('access-token');
const [axiosSecure] = useAxiosSecure();
const { refetch, data: cart = [] } = useQuery({
    queryKey: ['myclass', user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await axiosSecure(`/myclass?email=${user?.email}`)
        // console.log('res from axios', res)
        return res.data;
    },
})

return [cart, refetch]

}
export default useCart;