import Form from '../components/CreateForm';
import React, { useState ,useEffect} from 'react'

export default function Table() {

    const data = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals']
    const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]


    const [sorted, set_data] = useState([]);
    function update(save_data) {
        set_data(sorted => [...sorted, save_data])
    }

    const [totals, settotals] = useState([48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516])

    // useEffect(() => {
    //     if (sorted.length > 0) {
    //         let oldTotals = sorted.map((element, idx) => {
    //             return element = element +sorted[0].hourly_sales[idx]
    //         });
    //         settotals(oldTotals)
    //     }

    // }, [sorted])

    return (
        <>
            <Form
                update={update}
            />


            <main className="px-20 rounded shadow-md pt-15 pb-14">

                {sorted.length ?
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
                            {sorted.map((store, idx) => {
                                const element = (
                                    <>
                                        <td className="px-2 border border-black">{store.location}</td>
                                        {hourly_sales.map((item) => {
                                            return <td className="border border-black"> {item} </td>;
                                        })}

                                        <td className="border border-black">{516}</td>
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
                            {totals.map((ele, index) => {
                                return (<td className="border border-black " key={index}>{ele}</td>)
                            })}

                        </tfoot>

                    </table> :
                    <p className="text-center">No Cookies Stands Available</p>
                }
            </main>
        </>
    )
}