
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useCart = email =>{
    const {user} = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myclass?email=${user?.email}`)
            return res.json();
          }
      })
      return[cart,refetch]

}
export default useCart;