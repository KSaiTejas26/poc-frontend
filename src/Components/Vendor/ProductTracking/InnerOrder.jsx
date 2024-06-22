import React, { useEffect } from "react";

const InnerOrder = ({data}) => {
    useEffect(()=>{
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiii in infor')
        console.log(data);
    },[])
  return (
    <td>
      {data.map((data1) => (
        <>
          <td className="size-px whitespace-nowrap">
            <div className="px-6 py-2">
              <span className="text-sm text-gray-600 dark:text-neutral-400">
                {data1.date}
                {console.log(data1.date)}
              </span>
            </div>
          </td>
          <td className="size-px whitespace-nowrap">
            <div className="px-6 py-2">
              <span className="text-sm text-gray-600 dark:text-neutral-400">
                {data1.date}
              </span>
            </div>
          </td>
          <td className="size-px whitespace-nowrap">
            <div className="px-6 py-2">
              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                <svg
                  className="size-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                {data1.status}
              </span>
            </div>
          </td>
          <td className="size-px whitespace-nowrap">
            <div className="px-6 py-2">
              <div className="flex items-center gap-x-2">
                {/* <svg
                  className="size-5"
                  width="400"
                  height="248"
                  viewBox="0 0 400 248"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip05asd)">
                    <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                    <path
                      d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                      fill="#F79E1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip05asd">
                      <rect width="400" height="247.2" fill="white" />
                    </clipPath>
                  </defs>
                </svg> */}
                <span className="text-sm text-gray-600 dark:text-neutral-400">
                  {data1.deliverDate}
                  {console.log(data1.deliverDate)}
                </span>
              </div>
            </div>
          </td>
        </>
      ))}
    </td>
    // <></>
  );
};


export default InnerOrder;
