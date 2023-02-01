import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setUsers] = useState<any[]>([])
// write a async function to fetch data from the server
    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        }
        fetchUsers();
    }, []);
   console.log(users);
    return (
        <div className='w-[90%] mx-auto mt-10'>
            {
                users?.map(user => {
                    return (
                        
                            <div className='grid grid-cols-5 h-[150px]  shadow-2xl my-10  justify-center items-center '>  
                                <div className='mt-5'>UserName </div>
                                <div className='flex flex-col '> <span className='font-bold'> Contract </span>  {user.name}</div>
                                <div className='flex flex-col'> <span className='font-bold'> City </span>  {user.address.city}</div>
                                <div className='flex flex-col'> <span className='font-bold'> State </span>  {user.address.street}</div>
                                <Link to={`/details/${user.id}`} className='bg-red-500 text-white p-2 rounded-md w-[50%] text-center'>More Info</Link>
                            
                            </div>
                      
                    )
                })
            }
        </div>
    );
};

export default Home;