import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {

  const [sorted, set_data] = useState([]);
  function Handler(event) {
    event.preventDefault();

    const save_data = {
      location: event.target.location.value,
      min_customers: event.target.min.value,
      max_customers: event.target.max.value,
      avg_cookies: event.target.avg.value,

    }
    set_data(sorted => [...sorted, save_data])

  }



  return (
    <div className="">
      <Head>
        <title>Cookies Stand Admin</title>
      </Head>

      <header className="py-5 text-3xl bg-green-400">
        <p>Cookies Stand Admin</p>
      </header>

      <main className="px-20 rounded shadow-md pt-15 pb-14">

        <form class="bg-green-300 shadow-md rounded px-20 pt-15 pb-14 mb-14" onSubmit={Handler}>
          <h1 className='my-6 text-2xl text-center'>Create Cookie Stand</h1>

          <div className="flex " >
            <label className="mx-1" >Location</label>
            <input name="location" className="flex-auto" />
          </div>


          <div className="flex w-3.5/4 mx-auto my-5">
            <div className="flex-col w-1/4">
              <label>Min Customers per hour</label>
              <input type='number' name="min" className="" />
            </div>


            <div className="flex-col w-1/4">
              <label>Max Customers per hour</label>
              <input type='number' name="max" className="" />
            </div>


            <div className="flex-col w-1/4">
              <label>Average Cookies per Sale</label>
              <input type='number' name="avg" className="" />
            </div>

            <button className="w-1/5 bg-green-500 ">Create</button>
          </div>
        </form>

        <p className='my-3 text-center text-1xl'>
          Report Table Coming Soon...
        </p>

        {sorted.map((i) =>
          <p className='my-3 text-center text-gray-600 text-1xl'>
            {JSON.stringify(i)}
          </p>
        )
        }
      </main>

      <footer className="p-3 text-3xl bg-green-400" >

        <p>&copy; 2021 </p>

      </footer>
    </div>
  )
}