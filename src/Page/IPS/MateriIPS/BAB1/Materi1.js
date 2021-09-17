import {Link} from "react-router-dom";

function Materi1IPS() {
  return(
    
      <div className = "bg-pinkLight h-screen p-3">
        <p className = "font-bold">BAB 1 MANUSIA, TEMPAT DAN LINGKUNGAN</p>
        <p className = "mt-3">Peta konsep</p>
        <Link to="/RuangdanKeruangan"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Pengertian Ruang dan Interaksi Antar Ruang</button></Link>
        <Link to="/LetakIndonesia"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Letak dan Luas Indonesia</button></Link>
        <Link to="/PotensiSDA"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Potensi SDA dan Kemaritiman Indonesia</button></Link>
        <Link to="/DinamikaKependudukanIndonesia"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Dinamika Kependudukan Indonesia</button></Link>
        <Link to="/KondisiAlamIndonesia"><button className="underline bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Kondisi Alam Indonesia</button></Link>      
      </div>
  )
}

export default Materi1IPS;