import React from 'react'
import AdminHeader from '../AdminHeader';
import ReqTable from './ReqTable';
const Req = () => {
  return (
    <div>
        <div>
            <AdminHeader/>
        </div>
      <h1 className='flex justify-center text-4xl mt-2' style={{fontWeight:'bold'}}>Vendor Requests</h1>
        <div>
            <ReqTable/>
        </div>
    </div>
  )
}
export default Req;