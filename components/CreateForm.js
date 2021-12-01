export default function Form(props) {

    function Handler(event) {
        event.preventDefault();

        const save_data = {

            location: event.target.location.value,
            min_customers: event.target.min.value,
            max_customers: event.target.max.value,
            avg_cookies: event.target.avg.value,
            hourly_sales : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

        }
        props.update(save_data)
    }

    return (

        <div className="px-20">
        <form className="px-20 bg-green-300 rounded shadow-md pt-15 pb-14 mb-14" onSubmit={Handler}>
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
    </div>
    )


}