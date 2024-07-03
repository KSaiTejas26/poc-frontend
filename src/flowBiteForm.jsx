import React from 'react';

function Form() {

    const data = ['RealPage Exchange','On-Site','YieldStar','PropertyWare','RealpagePayments','UPP','ClickPay'];
    
    return (
        <div className="max-w-lg mx-auto">
            <form className="bg-white rounded-lg  px-8 pt-6 pb-8 mb-4">
                <div className="grid gap-6 mb-6">
                    <div>
                        <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
                        <select id="product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="">Select Product</option>
                            {data.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mt-7"><h2 className=" mt-7 mb-2 text-lg font-medium text-gray-900 dark:text-white">Observability</h2></div>
                    <div>
                        <label htmlFor="servers" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Servers</label>
                        <input type="text" id="servers" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number of servers" required />
                    </div>
                    <div>
                        <label htmlFor="infra_health" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Infra Health Coverage</label>
                        <input type="text" id="infra_health" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Infra health coverage" required />
                    </div>
                    <div>
                        <label htmlFor="web_health" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Web Health Coverage</label>
                        <input type="text" id="web_health" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Web health coverage" required />
                    </div>
                </div>
                
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
}

export default Form;
