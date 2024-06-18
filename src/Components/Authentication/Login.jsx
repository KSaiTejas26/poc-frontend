
// export default function Example() {

//   const [userdetails, setUserdetails] = useState({
//     usertype:'',
//     email: '',
//     password: '',
    
//   });
//   return (
//     <>

// <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20">
      
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="https://cdn.realpage.com/images/rp-logo.svg"
//             alt="Your Company"
//           />
          
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">


//           <div>
//               <label htmlFor="user-type" className="block text-sm font-medium leading-6 text-gray-900">
//                 User Type
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="usertype"
//                   name="usertype"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 >
//                   <option value="">User</option>
//                   <option value="vendor">Vendor</option>
//                   <option value="customer">Customer</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
//             </div>


//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
                
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

            

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>

            
//           </form>

//           <div className="mt-4">
//               <hr className="border-gray-300" />
//             </div>

//             <div className="mt-4">
//             <a href="/register" className="text-white no-underline hover:no-underline">
//               <button
//                 className="flex w-full justify-center  rounded-md bg-orange-500 hover:bg-orange-400 font-semibold px-3 py-1.5 text-sm leading-6"
//               >
//                 Sign Up
//               </button>
//               </a>
//             </div>

        
//         </div>
//       </div></div>
//     </>
//   )
// }


import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'
import Header from './Header';
export default function Example() {
  const navigate = useNavigate();
  const [userdetails, setUserdetails] = useState({
    usertype: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdetails({
      ...userdetails,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { usertype, email, password } = userdetails;
    let apiUrl = '';

    // Determine API endpoint based on usertype
    switch (usertype) {
      case 'vendor':
        apiUrl = 'http://localhost:3000/api/auth/vendor/login';
        break;
      case 'customer':
        apiUrl = 'http://localhost:3000/api/auth/customer/login';
        break;
      case 'admin':
        apiUrl = 'http://localhost:3000/api/auth/admin/login';
        break;
      default:
        // Handle error or default action
        break;
    }
    console.log(email,password)
    // Make the API call
    axios.post(apiUrl, { email, password })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        console.log(response.data.auth_token);
        localStorage.setItem("token",  response.data.auth_token );
        if(response.data.role==='admin') {
          toast.success('logged In succesfully')
          navigate('/request')
        }
        else if(response.data.role==='customer'){
          toast.success('logged In succesfully')
          navigate('/customer')
        }
        else if(response.data.role==='vendor') {
          toast.success('logged In succesfully')
          navigate('/vendorsproduct')
        }
      })
      .catch((error) => {
        toast.error('Please check your credentials')
        // Handle error
        console.error(error);
      });
  };

  return (
    <>
    <Header/>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Your logo */}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="user-type" className="block text-sm font-medium leading-6 text-gray-900">
                User Type
              </label>
              <div className="mt-2">
                <select
                  id="usertype"
                  name="usertype"
                  value={userdetails.usertype}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select</option>
                  <option value="vendor">Vendor</option>
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={userdetails.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={userdetails.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-4">
            <hr className="border-gray-300" />
          </div>

          <div className="mt-4">
            <a href="/register" onClick={(e) => { e.preventDefault(); navigate('/register'); }} className="text-white no-underline hover:no-underline">
              <button
                className="flex w-full justify-center rounded-md bg-orange-500 hover:bg-orange-400 font-semibold px-3 py-1.5 text-sm leading-6"
              >
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
