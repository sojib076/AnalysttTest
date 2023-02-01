import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const data: any = useLoaderData();
    console.log(data);

    return (
        <div className='w-[90%] mx-auto p-5'>
            <div className='grid grid-cols-5 h-[150px]  shadow-2xl my-10  justify-center items-center '>
                <div className='mt-5'>UserName </div>
                <div className='flex flex-col '> <span className='font-bold'> Contract </span>  {data.name}</div>
                <div className='flex flex-col'> <span className='font-bold'> City </span>  {data.address.city}</div>
                <div className='flex flex-col'> <span className='font-bold'> State </span>  {data.address.street}</div>
                <Link to={`/details/`} className='bg-red-500 text-white p-2 rounded-md w-[50%] text-center'>More Info</Link>

            </div>
            <div className='flex flex-col'> <span className='font-bold'> Description </span> 
             {data.company.catchPhrase}</div>
                <div className='grid grid-cols-2'> 
                    <div className='flex flex-col justify-evenly'>    
                      <div className='flex flex-col '> <span className='font-bold'> Contract </span>  {data.name}
                      </div>
                      <div className='flex flex-col '> <span className='font-bold'> Email </span>  {data.email}
                      </div>
                      <div className='flex flex-col '> <span className='font-bold'> Phone </span>  {data.phone}
                      </div>
                      <div className='flex flex-col '> <span className='font-bold'> Phone </span>  {data.website}
                      </div>
                     </div>
                    <div> 
        <div className='flex flex-col '> <span className='font-bold'> address </span>  {data.address.city} ,{data.address.street}</div>
        <div className='flex flex-col'> <span className='font-bold'> City </span>  {data.address.city}</div>
                <div className='flex flex-col'> <span className='font-bold'> State </span>  {data.address.street}</div>
                 </div>
                </div>

        </div>
    );
};

export default Details;