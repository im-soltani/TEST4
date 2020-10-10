import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getprofilebyid} from "../../js/action/profileactions"


const Profilefiche = (props) => {
 
    const dispatch=useDispatch()

    const getprofilefiche=()=>{
        dispatch(getprofilebyid (props.match.params.id))       
    }

  useEffect(() => {
    getprofilefiche()}, []);

    const profile= useSelector(state => state.profileReducer.profile)
    const isloading= useSelector(state => state.profileReducer.isloading)

    
  // if the component still loading
  if (isloading) {
    return (
     <h1>spinner....</h1>
    );
    //if there is no profile in the response
  } else if (!profile) {
    return <h1>Oups !!!! 404 Not Fount :( </h1>;
  }
  // if evrything is OK show the component
  else
    return (
      <div>
        <p className="text-pr">{profile.profileName}</p>
        <p className="text-pr">{profile.avatar}</p>
        <p className="text-pr">{profile.speciality}</p>
        <p className="text-pr">{profile.category}</p>
        <p className="text-pr">{ profile.desciption}</p>
        <p className="text-pr">{profile.adress}</p>
        <p className="text-pr">{profile.codePostal}</p>
        <p className="text-pr">{profile.phoneNumber}</p>
        <p className="text-pr">{profile.Diploma}</p>
        <p className="text-pr">{profile.Rating}</p>
        </div>
    );
};

export default Profilefiche;
