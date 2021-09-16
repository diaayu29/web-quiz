import { Link } from "react-router-dom";

function Home() {
  return (
    <div className = "bg-pinkLight h-screen text-center">
        <div className =" absolute left-1/3 top-1/3">
        <p className = "font-bold">Selamat Datang di Quiz Web</p>
        <p>Temukan pelajaran yang anda inginkan disini !!</p>
        <p>Silahkan pilih pelajaran di bawah ini</p>
       
        <Link to="/IPA"><button className = "bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">IPA</button></Link>
        <Link to="/IPS"><button className = "bg-buttonLight px-4 py-2 rounded-lg text-white">IPS</button></Link>
       
        </div>
      </div>
  )
}

export default Home;