// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import axios from "axios";
export default function App() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [Month, setMonth] = useState("");
  const [NumberOfDeaths, setNumberOfDeaths] = useState(0);
  const [NumberOfNewCases, setNumberOfNewCases] = useState(0);
  const [NumberOfRecovered, setNumberOfRecovered] = useState(0);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:5000/api/adddata", {
        Month,
        NumberOfDeaths,
        NumberOfNewCases,
        NumberOfRecovered,
      });
      console.log("success ", response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="Month"
                  name="Month"
                  autoComplete="Month"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                >
                  <option>Select Month</option>
                  {months.map((o) => (
                    <option>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number Of Deaths
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="NumberOfDeaths"
                  id="NumberOfDeaths"
                  autoComplete="NumberOfDeaths"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setNumberOfDeaths(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number Of New Cases
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="NumberOfNewCases"
                  id="NumberOfNewCases"
                  autoComplete="NumberOfNewCases"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setNumberOfNewCases(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number Of Recovered People
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="NumberOfRecovered"
                  id="NumberOfRecovered"
                  autoComplete="NumberOfRecovered"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setNumberOfRecovered(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
}
