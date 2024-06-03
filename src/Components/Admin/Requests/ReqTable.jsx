// import { useState,useEffect } from 'react';
// import PersonIcon from '@mui/icons-material/Person';
// import DoneIcon from '@mui/icons-material/Done';
// import CancelIcon from '@mui/icons-material/Cancel';
// import AdminHeader from "../LinkdminHeader";
// import axios from 'axios';
// const ReqTable = () => {
//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState([{}]);
//   const [vendorData, setVendorData] = useState({});
//   // console.log(data);
//   async function fetchData() {
//     axios.get('http://localhost:3000/Linkpi/Linkdmin/vendor/requests')
//      .then(response => {

//         setData(response.data.data); // Set the fetched data into state
//         //console.log(response.data);
//       })
//      .catch(error => {
//         console.log('Error while fetching data from backend:', error);
//       });
//   }

//   useEffect(() => { 
//     console.log("function called");
//     fetchData(); // Call the async function
//   },[]);
  

//   const handleOpen = (vendor) => {
//     setOpen(true);
//     setVendorData(vendor);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const overlayClasses = `${open ? 'hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500' : 'mt-0 opacity-0'} shadow-lg ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto`;

//   return (
//     <>
//       {/* <div>
//         {/* <LinkdminHeader/> */}
//       {/* </div> */}
//       <div>

//         {/* Table Section */}

//         <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto -mt-8"> 
//           {/* Card */}
//           <div className="flex flex-col">
//             <div className="-m-1.5 overflow-x-auto">
//               <div className="p-1.5 min-w-full inline-block align-middle">
//                 <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
//                   {/* Table */}
//                   <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
//                     <thead className="bg-gray-50 dark:bg-neutral-900">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Business Name</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">GST Number</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Business Registration Number</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Email</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Phone Number</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-end" />
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
//                       {data.map((vendor, index) => (
//                         <tr key={index} className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="font-mono text-sm text-blue-600 dark:text-blue-500">{vendor.business_name}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.gst_number}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
//                                   {vendor.business_registration_number}
//                                 </span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.email}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.phone_number}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal" onClick={()=>handleOpen(vendor)}>
//                               <span className="px-6 py-1.5">
//                                 <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
//                                   <svg className="flex-shrink-0 size-4" xmlns="http:www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                                     <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.8-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zM2 3v10h12V3H2zm1 0h10v10H3V3z" />
//                                   </svg>
//                                   View
//                                 </span>
//                               </span>
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   {/* End Table */}
//                   {/* Pagination */}
//                   <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
//                     <div>
//                       <p className="text-sm text-gray-600 dark:text-neutral-400">
//                         <span className="font-semibold text-gray-800 dark:text-neutral-200">{data.length}</span> results
//                       </p>
//                     </div>
//                     <div>
//                       <div className="inline-flex gap-x-2">
//                         <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
//                           <svg className="size-4" xmlns="http:www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                             <path d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
//                           </svg>
//                           Prev
//                         </button>
//                         <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
//                           Next
//                           <svg className="size-4" xmlns="http:www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                             <path d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Pagination */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End Card */}
//         </div>
//       </div>

//       {/* Modal */}
//       {open && (
//         <div id="hs-ai-invoice-modal" className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto">
//           <div className={overlayClasses}>
//             <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-800">
//               <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
//                 {/* Close Button */}
//                 <div className="absolute top-2 end-2">
//                   <button type="button" className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-neutral-700 dark:focus:ring-offset-gray-800" onClick={handleClose}>
//                     <span className="sr-only">Close</span>
//                     <svg className="w-4 h-4" xmlns="http:www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M18 6 6 18" />
//                       <path d="m6 6 12 12" />
//                     </svg>
//                   </button>
//                 </div>
//                 {/* SVG Background Element */}
//                 <figure className="absolute inset-x-0 bottom-0">
//                   <svg preserveAspectRatio="none" xmlns="http:www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
//                     <path fill="currentColor" className="fill-white dark:fill-neutral-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
//                   </svg>
//                 </figure>
//               </div>
//               <div className="relative z-10 -mt-12">
//               <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
//             <PersonIcon/>
//            </span>
//            {/* End Icon */}
//          </div>
//          {/* Body */}
//          <div className="p-4 sm:p-7 overflow-y-auto">
//            <div className="text-center">
//              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
//                Vendor Details
//              </h3>
//            </div>
//            {/* Grid */}
//            <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
//              <div>
//                <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
//                  Company Website URL:
//                </span>
//                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
//                  {vendorData.company_website_url}
//                </span>
//              </div>
//              {/* End Col */}
//              <div className='ml-9'>
//                <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
//                  First Name:
//                </span>
//                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
//                  {vendorData.vendor_first_name}
//                </span>
//              </div>
//              {/* End Col */}
//              <div className='ml-5' >
//                <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
//                  Last Name:
//                </span>
//                <div className="flex items-center gap-x-2">
//                  <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
//                    {vendorData.vendor_last_name}
//                  </span>
//                </div>
//              </div>
//              {/* End Col */}
//            </div>
//            {/* End Grid */}
//            <div className="mt-5 sm:mt-10">
//              <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
//                Bank Details
//              </h4>
//              <ul className="mt-3 flex flex-col">
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Bank Account Name</span>
//                    <span>{vendorData.bank_account_name}</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Bank Account Number</span>
//                    <span>{vendorData.bank_account_number}</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>IFSC Code</span>
//                    <span>{vendorData.IFSC_code}</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Account Holder Name</span>
//                    <span>{vendorData.account_holder_name}</span>
//                  </div>
//                </li>
//              </ul>
//            </div>
//            <div className="mt-5 sm:mt-10">
//              <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
//                Logistics and Operations
//              </h4>
//              <ul className="mt-3 flex flex-col">
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Expected Order Processing Time</span>
//                    <span>24 Hours</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Average Shipping Time</span>
//                    <span>48 Hours</span>
//                  </div>
//                </li>
//              </ul>
//            </div>
//            {/* Product Description */}
//            <div className="mt-5 sm:mt-10">
//              <span>Product Categories</span>
//              <div className="max-w-sm space-y-3 mt-3 flex flex-col">
//              <div className="text-sm border rounded-lg py-3 px-4 leading-relaxed text-gray-700 dark:text-neutral-200 dark:border-neutral-700">
//                 {vendorData.categories_list && vendorData.categories_list.map((category, index) => (
//                   <span key={index}>{category}<br/></span>  
//                 ))}
//              </div>
//                {/* <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Categories" readOnly>{vendorData.categories_list}</textarea> */}
//              </div>
//            </div>
//            <div className="mt-5 sm:mt-10">
//              <span>Product Description</span>
//              <div className="max-w-sm space-y-3 mt-3 flex flex-col">
//                <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Description" readOnly></textarea>
//              </div>
//            </div>
//            {/* Button */}
//            <div className="mt-5 flex justify-end gap-x-2">
//              <Link
//               className="py-2 px-3 inline-flex justify-center bg-green-600  hover:bg-green-700 text-white items-center gap-2 rounded-lg border font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
//               to="#"
//             >
//               <DoneIcon/>Accept
//             </Link>
//             <Link
//               className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
//               to="#"
//             >
//               <CancelIcon/> Reject
//             </Link>
//           </div>
//           {/* End Buttons */}
//           <div className="mt-5 sm:mt-10">
//             <p className="text-sm text-gray-500 dark:text-neutral-500">
//               If you have any questions, please contact us at{" "}
//               <Link
//                 className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
//                 to="#"
//               >
//                 example@site.com
//               </Link>{" "}
//               or call at{" "}
//               <Link
//                 className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
//                 to="tel:+1898345492"
//               >
//                 +1 898-34-5492
//               </Link>
//             </p>
//           </div>
//         </div>
//               </div>
//             </div>
//           </div>
//        )} 
//     </>
//     // <>
//     // hi
//     // </>
//   );
// };

// export default ReqTable;



// import { useState,useEffect } from 'react';
// import PersonIcon from '@mui/icons-material/Person';
// import DoneIcon from '@mui/icons-material/Done';
// import CancelIcon from '@mui/icons-material/Cancel';
// import AdminHeader from "../LinkdminHeader";
// import axios from 'axios';
// const ReqTable = () => {
//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState([{}]);
//   const [vendorData, setVendorData] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   async function fetchData() {
//     axios.get('http://localhost:3000/Linkpi/Linkdmin/vendor/requests')
//      .then(response => {

//         setData(response.data.data); // Set the fetched data into state
//         //console.log(response.data);
//       })
//      .catch(error => {
//         console.log('Error while fetching data from backend:', error);
//       });
//   }

//   useEffect(()  => {
//     fetchData();
//   },[]);

//   const handleOpen = (vendor) => {
//     setOpen(true);
//     setVendorData(vendor);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const overlayClasses = `${open ? 'hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500' : 'mt-0 opacity-0'} shadow-lg ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto`;

//   // Get current items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       {/* <div>
//         {/* <LinkdminHeader/> */}
//       {/* </div> */}
//       <div>

//         {/* Table Section */}

//         <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto -mt-8"> 
//           {/* Card */}
//           <div className="flex flex-col">
//             <div className="-m-1.5 overflow-x-auto">
//               <div className="p-1.5 min-w-full inline-block align-middle">
//                 <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
//                   {/* Table */}
//                   <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
//                     <thead className="bg-gray-50 dark:bg-neutral-900">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Business Name</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">GST Number</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Business Registration Number</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Email</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-start">
//                           <div className="flex items-center gap-x-2">
//                             <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Phone Number</span>
//                           </div>
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-end" />
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
//                       {currentItems.map((vendor, index) => (
//                         <tr key={index} className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="font-mono text-sm text-blue-600 dark:text-blue-500">{vendor.business_name}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.gst_number}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
//                                   {vendor.business_registration_number}
//                                 </span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.email}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
//                               <span className="block px-6 py-2">
//                                 <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.phone_number}</span>
//                               </span>
//                             </button>
//                           </td>
//                           <td className="size-px whitespace-nowrap">
//                             <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal" onClick={()=>handleOpen(vendor)}>
//                               <span className="px-6 py-1.5">
//                                 <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
//                                   <svg className="size-4" xmlns="http:www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                                     <path d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
//                                   </svg>
//                                   View
//                                 </span>
//                               </span>
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   {/* End Table */}
//                   {/* Pagination */}
//                   <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
//                     <div>
//                       <p className="text-sm text-gray-600 dark:text-neutral-400">
//                         <span className="font-semibold text-gray-800 dark:text-neutral-200">{data.length}</span> results
//                       </p>
//                     </div>
//                     <div>
//                       <div className="inline-flex gap-x-2">
//                         {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((pageNumber) => (
//                           <button
//                             key={pageNumber}
//                             type="button"
//                             className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium ${pageNumber + 1 === currentPage? 'bg-gray-50 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-900'} text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800`}
//                             onClick={() => paginate(pageNumber + 1)}
//                           >
//                             {pageNumber + 1}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Pagination */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End Card */}
//         </div>
//       </div>

//       {/* Modal */}
//       {open && (
//         <div id="hs-ai-invoice-modal" className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto">
//           <div className={overlayClasses}>
//             <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-800">
//               {/*... */}
//               <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
//                 {/* Close Button */}
//                 <div className="absolute top-2 end-2">
//                   <button type="button" className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-neutral-700 dark:focus:ring-offset-gray-800" onClick={handleClose}>
//                     <span className="sr-only">Close</span>
//                     <svg className="w-4 h-4" xmlns="http:www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M18 6 6 18" />
//                       <path d="m6 6 12 12" />
//                     </svg>
//                   </button>
//                 </div>
//                 {/* SVG Background Element */}
//                 <figure className="absolute inset-x-0 bottom-0">
//                   <svg preserveAspectRatio="none" xmlns="http:www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
//                     <path fill="currentColor" className="fill-white dark:fill-neutral-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
//                   </svg>
//                 </figure>
//               </div>
//               <div className="relative z-10 -mt-12">
//               <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
//             <PersonIcon/>
//            </span>
//            {/* End Icon */}
//          </div>
//          {/* Body */}
//          <div className="p-4 sm:p-7 overflow-y-auto">
//            <div className="text-center">
//              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
//                Vendor Details
//              </h3>
//            </div>
//            {/* Grid */}
//            <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
//              <div>
//                <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
//                  Company Website URL:
//                </span>
//                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
//                  {vendorData.company_website_url}
//                </span>
//              </div>
//              {/* End Col */}
//              <div className='ml-9'>
//                <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
//                  First Name:
//                </span>
//                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
//                  {vendorData.vendor_first_name}
//                </span>
//              </div>
//              {/* End Col */}
//              <div className='ml-5' >
//                <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
//                  Last Name:
//                </span>
//                <div className="flex items-center gap-x-2">
//                  <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
//                    {vendorData.vendor_last_name}
//                  </span>
//                </div>
//              </div>
//              {/* End Col */}
//            </div>
//            {/* End Grid */}
//            <div className="mt-5 sm:mt-10">
//              <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
//                Bank Details
//              </h4>
//              <ul className="mt-3 flex flex-col">
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Bank Account Name</span>
//                    <span>{vendorData.bank_account_name}</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Bank Account Number</span>
//                    <span>{vendorData.bank_account_number}</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>IFSC Code</span>
//                    <span>{vendorData.IFSC_code}</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Account Holder Name</span>
//                    <span>{vendorData.account_holder_name}</span>
//                  </div>
//                </li>
//              </ul>
//            </div>
//            <div className="mt-5 sm:mt-10">
//              <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
//                Logistics and Operations
//              </h4>
//              <ul className="mt-3 flex flex-col">
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Expected Order Processing Time</span>
//                    <span>24 Hours</span>
//                  </div>
//                </li>
//                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
//                  <div className="flex items-center justify-between w-full">
//                    <span>Average Shipping Time</span>
//                    <span>48 Hours</span>
//                  </div>
//                </li>
//              </ul>
//            </div>
//            {/* Product Description */}
//            <div className="mt-5 sm:mt-10">
//              <span>Product Categories</span>
//              <div className="max-w-sm space-y-3 mt-3 flex flex-col">
//              <div className="text-sm border rounded-lg py-3 px-4 leading-relaxed text-gray-700 dark:text-neutral-200 dark:border-neutral-700">
//                 {vendorData.categories_list && vendorData.categories_list.map((category, index) => (
//                   <span key={index}>{category}<br/></span>  
//                 ))}
//              </div>
//                {/* <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Categories" readOnly>{vendorData.categories_list}</textarea> */}
//              </div>
//            </div>
//            <div className="mt-5 sm:mt-10">
//              <span>Product Description</span>
//              <div className="max-w-sm space-y-3 mt-3 flex flex-col">
//                <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Description" readOnly></textarea>
//              </div>
//            </div>
//            {/* Button */}
//            <div className="mt-5 flex justify-end gap-x-2">
//              <Link
//               className="py-2 px-3 inline-flex justify-center bg-green-600  hover:bg-green-700 text-white items-center gap-2 rounded-lg border font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
//               to="#"
//             >
//               <DoneIcon/>Accept
//             </Link>
//             <Link
//               className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
//               to="#"
//             >
//               <CancelIcon/> Reject
//             </Link>
//           </div>
//           {/* End Buttons */}
//           <div className="mt-5 sm:mt-10">
//             <p className="text-sm text-gray-500 dark:text-neutral-500">
//               If you have any questions, please contact us at{" "}
//               <Link
//                 className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
//                 to="#"
//               >
//                 example@site.com
//               </Link>{" "}
//               or call at{" "}
//               <Link
//                 className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
//                 to="tel:+1898345492"
//               >
//                 +1 898-34-5492
//               </Link>
//             </p>
//           </div>
//         </div>
//               </div>
//             </div>
//           </div>
//        )} 
  
//     </>
//   );
// };

// export default ReqTable;


import { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
const ReqTable = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [vendorData, setVendorData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  async function fetchData() {
    axios.get('http://localhost:3000/api/admin/vendor/requests')
     .then(response => {

        setData(response.data.data); // Set the fetched data into state
        //console.log(response.data);
      })
     .catch(error => {
        console.log('Error while fetching data from backend:', error);
      });
  }


  const handleAccept = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/admin/vendor/requests/${id}/accept`);
      setData(data.filter((vendor) => vendor._id !== vendorData._id));
      handleClose();
    } catch (error) {
      console.log('Error while accepting vendor request:', error);
    }
  };
  
  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/admin/vendor/requests/${id}/reject`);
      setData(data.filter((vendor) => vendor._id !== vendorData._id));
      handleClose();
    } catch (error) {
      console.log('Error while rejecting vendor request:', error);
    }
  };



  useEffect(()  => {
    fetchData();
  },[]);

  const handleOpen = (vendor) => {
    setOpen(true);
    setVendorData(vendor);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const overlayClasses = `${open ? 'hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500' : 'mt-0 opacity-0'} shadow-lg ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto`;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    if (pageNumber === 0) {
      setCurrentPage(1);
    } else if (pageNumber === -1) {
      setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      {/* <div>
        {/* <LinkdminHeader/> */}
      {/* </div> */}
      <div>

        {/* Table Section */}

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto -mt-8"> 
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                  {/* Table */}
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-900">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Business Name</span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">GST Number</span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Business Registration Number</span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Email</span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Phone Number</span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-end" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {currentItems.map((vendor, index) => (
                        <tr key={index} className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                          <td className="size-px whitespace-nowrap">
                            <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
                              <span className="block px-6 py-2">
                                <span className="font-mono text-sm text-blue-600 dark:text-blue-500">{vendor.business_name}</span>
                              </span>
                            </button>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
                              <span className="block px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.gst_number}</span>
                              </span>
                            </button>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
                              <span className="block px-6 py-2">
                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                  {vendor.business_registration_number}
                                </span>
                              </span>
                            </button>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
                              <span className="block px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.email}</span>
                              </span>
                            </button>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal">
                              <span className="block px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-neutral-400">{vendor.phone_number}</span>
                              </span>
                            </button>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal" onClick={()=>handleOpen(vendor)}>
                              <span className="px-6 py-1.5">
                                <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                  <svg className="size-4" xmlns="http:www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                  </svg>
                                  View
                                </span>
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* End Table */}
                  {/* Pagination */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">{data.length}</span> results
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <button
                          type="button"
                          className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white dark:bg-neutral-900'} text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800`}
                          onClick={() => paginate(-1)}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((pageNumber) => (
                          <button
                            key={pageNumber}
                            type="button"
                            className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium ${pageNumber + 1 === currentPage ? 'bg-gray-50 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-900'} text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800`}
                            onClick={() => paginate(pageNumber + 1)}
                          >
                            {pageNumber + 1}
                          </button>
                        ))}
                        <button
                          type="button"
                          className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium ${currentPage === Math.ceil(data.length / itemsPerPage) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white dark:bg-neutral-900'} text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800`}
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                        >
                          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Pagination */}
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>

      {/* Modal */}
        {open && (
        <div id="hs-ai-invoice-modal" className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto">
          <div className={overlayClasses}>
            <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-800">
              {/*... */}
              <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
                {/* Close Button */}
                <div className="absolute top-2 end-2">
                  <button type="button" className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-neutral-700 dark:focus:ring-offset-gray-800" onClick={handleClose}>
                    <span className="sr-only">Close</span>
                    <svg className="w-4 h-4" xmlns="http:www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                {/* SVG Background Element */}
                <figure className="absolute inset-x-0 bottom-0">
                  <svg preserveAspectRatio="none" xmlns="http:www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                    <path fill="currentColor" className="fill-white dark:fill-neutral-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
                  </svg>
                </figure>
              </div>
              <div className="relative z-10 -mt-12">
              <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
            <PersonIcon/>
           </span>
           {/* End Icon */}
         </div>
         {/* Body */}
         <div className="p-4 sm:p-7 overflow-y-auto">
           <div className="text-center">
             <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
               Vendor Details
             </h3>
           </div>
           {/* Grid */}
           <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
             <div>
               <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                 Company Website URL:
               </span>
               <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                 {vendorData.company_website_url}
               </span>
             </div>
             {/* End Col */}
             <div className='ml-9'>
               <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                 First Name:
               </span>
               <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                 {vendorData.vendor_first_name}
               </span>
             </div>
             {/* End Col */}
             <div className='ml-5' >
               <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                 Last Name:
               </span>
               <div className="flex items-center gap-x-2">
                 <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                   {vendorData.vendor_last_name}
                 </span>
               </div>
             </div>
             {/* End Col */}
           </div>
           {/* End Grid */}
           <div className="mt-5 sm:mt-10">
             <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
               Bank Details
             </h4>
             <ul className="mt-3 flex flex-col">
               <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                 <div className="flex items-center justify-between w-full">
                   <span>Bank Account Name</span>
                   <span>{vendorData.bank_account_name}</span>
                 </div>
               </li>
               <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                 <div className="flex items-center justify-between w-full">
                   <span>Bank Account Number</span>
                   <span>{vendorData.bank_account_number}</span>
                 </div>
               </li>
               <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                 <div className="flex items-center justify-between w-full">
                   <span>IFSC Code</span>
                   <span>{vendorData.IFSC_code}</span>
                 </div>
               </li>
               <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                 <div className="flex items-center justify-between w-full">
                   <span>Account Holder Name</span>
                   <span>{vendorData.account_holder_name}</span>
                 </div>
               </li>
             </ul>
           </div>
           <div className="mt-5 sm:mt-10">
             <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
               Logistics and Operations
             </h4>
             <ul className="mt-3 flex flex-col">
               <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                 <div className="flex items-center justify-between w-full">
                   <span>Expected Order Processing Time</span>
                   <span>24 Hours</span>
                 </div>
               </li>
               <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                 <div className="flex items-center justify-between w-full">
                   <span>Average Shipping Time</span>
                   <span>48 Hours</span>
                 </div>
               </li>
             </ul>
           </div>
           {/* Product Description */}
           <div className="mt-5 sm:mt-10">
             <span>Product Categories</span>
             <div className="max-w-sm space-y-3 mt-3 flex flex-col">
             <div className="text-sm border rounded-lg py-3 px-4 leading-relaxed text-gray-700 dark:text-neutral-200 dark:border-neutral-700">
                {vendorData.categories_list && vendorData.categories_list.map((category, index) => (
                  <span key={index}>{category}<br/></span>  
                ))}
             </div>
               {/* <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Categories" readOnly>{vendorData.categories_list}</textarea> */}
             </div>
           </div>
           <div className="mt-5 sm:mt-10">
             <span>Product Description</span>
             <div className="max-w-sm space-y-3 mt-3 flex flex-col">
               <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Description" readOnly></textarea>
             </div>
           </div>
           {/* Button */}
           <div className="mt-5 flex justify-end gap-x-2">
           <Link
              className="py-2 px-3 inline-flex justify-center bg-green-600  hover:bg-green-700 text-white items-center gap-2 rounded-lg border font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              to="#"
              onClick={()=>handleAccept(vendorData.vendor_id)}
            >
              <DoneIcon/>Accept
            </Link>
            <Link
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              to="#"
              onClick={()=>handleReject(vendorData.vendor_id)}
            >
              <CancelIcon/> Reject
            </Link>
          </div>
          {/* End Buttons */}
          <div className="mt-5 sm:mt-10">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              If you have any questions, please contact us at{" "}
              <Link
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                to="#"
              >
                example@site.com
              </Link>{" "}
              or call at{" "}
              <Link
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                to="tel:+1898345492"
              >
                +1 898-34-5492
              </Link>
            </p>
          </div>
        </div>
              </div>
            </div>
          </div>
       )} 
    </>
  );
};

export default ReqTable;