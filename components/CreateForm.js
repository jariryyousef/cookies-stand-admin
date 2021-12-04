import useResource from '../hooks/useResource'

export default function Form() {
    const {  createResource } = useResource();

    function Handler(event) {
        event.preventDefault();
        let array=[]
        for (let i = 0; i < 14; i++) {
           let value= Math.floor((Math.random() * (event.target.max.value - event.target.min.value) ))
           array.push(Number(value)+ Number(event.target.min.value))
        }

        const save_data = {

            location: event.target.location.value,
            minimum_customers_per_hour: event.target.min.value,
            maximum_customers_per_hour: event.target.max.value,
            average_cookies_per_sale: event.target.avg.value,
            hourly_sales : array

        }
        createResource(save_data)
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