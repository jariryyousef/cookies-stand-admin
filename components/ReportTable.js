import { data } from './data';
import useResource from '../hooks/useResource'
import Form from '../components/CreateForm';
import React, { useState, useEffect } from 'react'

export default function Table() {
    const { resources, deleteResource } = useResource();

    if (resources?.length) {

    return (


        <>

            <main className="px-20 rounded shadow-md pt-15 pb-14">


                <table className="w-1/2 mx-auto my-4">
                    <thead className='bg-green-500'>
                        <tr className='bg-green-500'>
                            {data.map(item =>

                                <th className="border border-gray-70">{item}</th>

                            )

                            }
                        </tr>
                    </thead>

                    <tbody>
                        {resources?.map((store, idx) => {
                            const element = (
                                <>  
                                <div className="flex items-center justify-between border border-black">
                                    <td className="px-2">{store.location}</td>

                                    <svg onClick={() => deleteResource(store.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                 </svg>
                                </div>
                                    {store.hourly_sales.map((item) => {
                                        return <td className="border border-black"> {item} </td>;
                                    })}
                                    <td className="px-2 border border-black">{(store.hourly_sales.reduce((a, b) => a + b, 0))}</td>
                                </>
                            );

                            if (idx % 2 == 0) {
                                return <tr className="bg-green-400">{element}</tr>;
                            } else {
                                return <tr className="bg-green-300">{element}</tr>;
                            }
                        })}

                    </tbody>

                    <tfoot className="bg-green-500">

                        <td className="px-2 border border-black" >Totals</td>
                    </tfoot>

                </table> 


            </main>
        </>
    )
                    }
                    return(
                        <p className="text-center">No Cookies Stands Available</p>
                    )
}
