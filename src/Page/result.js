import React from 'react';
import { Link } from "react-router-dom";

function Result(props) {
  return (
    <div className = "PageResult bg-purpleLight md:flex h-screen">
      <div className = "ShowResult md:w-2/4 text-center my-auto">
           <p className = "font-bold text-2xl">{props.Greetings}</p>
           <p>Nilai anda adalah {props.ShowResult}
           </p>
         </div>
         <div className = "HomeButton bg-pinkLight md:w-2/4 md:relative">
           <Link to="/"><button className = "absolute top-1/2 bg-buttonLight rounded-md text-xl md:py-4 md:px-6 px-2 py-1 text-white left-16 tablet:left-44 tablet-sm:left-32 sm:left-56 md:left-1/4" type="button">Home</button></Link>
         </div>
    </div>
  )
}

export default Result;