import { Fragment, useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import  axios from 'axios'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  const [vendor,setVendor] = useState([]);
  const [curr,setCurr] = useState('Vendors');
  useEffect(()=>{
    const getAllVendors = async ()=>{
      const data = await axios.get('http://localhost:3000/api/admin/vendors');
      console.log(data.data.data);
      setVendor(data.data.data);
    }
    getAllVendors();
  },[])

  const handleClick = (f,l)=>{
    setCurr(f+" "+l);
  }
  return (
    <Menu as="div" className="relative inline-block text-left mt-1">
      <div>
        <MenuButton className="inline-flex w-48 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {curr}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" style={{
          maxHeight: '200px', // adjust the height to show 5 items
          overflowY: 'auto', // make it scrollable
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', /* for IE and Edge */
          'scrollbar-width': 'none', /* for Firefox */
      
        }}>
            {vendor.map((vendor) => (
              <MenuItem key={vendor.id}>
                {({ focus }) => (
                  <div
                    onClick={()=>handleClick(vendor.vendor_first_name,vendor.vendor_last_name)}
                    className={classNames(
                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {vendor.vendor_first_name} {vendor.vendor_last_name}
                  </div>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

