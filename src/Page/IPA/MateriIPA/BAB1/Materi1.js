import {Link} from "react-router-dom";

function Materi1IPA() {
  return(
    <div className = "bg-pinkLight h-screen p-3">
        <p className = "font-bold">BAB 1 PENGUKURAN</p>
        <p className = "mt-3">Peta konsep</p>
        <Link to="/Pengertian"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Pengertian</button></Link>
        <Link to="/Besaran"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Besaran</button></Link>
        <Link to="/alat-ukur"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Sistem Internasional</button></Link>
        <Link to="/sistem-internasional"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Alat Ukur</button></Link>     
      </div>
  )
}

export default Materi1IPA;