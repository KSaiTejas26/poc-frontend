import React from "react";
import Header from "./Admin/Header";
import Image from "./ProfileImage";
const Profile = ()=>{
    return(
        <>
            <Header/>
            <h1 style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                PROFILE
            </h1>
            <Image/>
        </>
    )
};

export default Profile;