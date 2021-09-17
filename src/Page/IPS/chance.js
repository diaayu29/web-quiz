import { Link } from "react-router-dom";

function ChanceIPS() {
  return (
    <div>
      <div className = "bg-pinkLight h-screen text-center">
        <Link to="/Materi1IPS"><button className = "absolute top-1/2 left-72 md:left-1/3 bg-buttonLight px-4 py-2 rounded-lg text-white">Materi</button></Link>
        <Link to="/startQuizIPS"><button className = "absolute bg-buttonLight top-1/2 left-96 md:left-2/3 px-4 py-2 rounded-lg text-white">Latihan Soal</button></Link>
      </div>
    </div>
  )
}

export default ChanceIPS;