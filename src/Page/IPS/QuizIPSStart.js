import React from 'react';
import { Link } from "react-router-dom";

function ShowIPS(props) {
  return (
    <div className = "StartPage bg-purpleLight h-screen md:flex">
        <div className = "ShowRules md:w-2/4 text-center my-auto pt-16 md:pt-0">
          <p className = "font-extrabold">Aturan :</p>
          <p>Jumlah soal : 20</p>
          <p>Waktu : 2menit / soal</p>
          <p>Kelulusan minimal 80%</p>
        </div>
        <div className = "StartQuiz bg-pinkLight md:relative md:w-2/4">
          <Link to="/questionIPS"><button className = "bg-buttonLight absolute top-2/4 md:top-1/2 left-1/3 md:left-1/2 px-4 py-2 md:px-8 md:py-4 rounded-lg text-white" type = "button">Mulai</button></Link>
        </div>
    </div>
  )
}

export default ShowIPS;