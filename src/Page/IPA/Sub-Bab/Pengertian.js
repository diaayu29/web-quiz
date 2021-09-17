import {Link} from 'react-router-dom'

function Pengertian() {
  return(
    <div className = "bg-pinkLight h-screen p-3">
      <p>Pengertian</p>
      <p>Konsep: Pengukuran merupakan kegiatan membandingkan suatu besaran yang diukur dengan alat ukur yang digunakan sebagai satuan.</p>
      <p>Misalnya, kamu melakukan kegiatan pengukuran panjang meja dengan pensil. Dalam kegiatan tersebut artinya kamu membandingkan panjang meja dengan panjang pensil. Panjang pensil yang kamu gunakan adalah sebagai satuan. Sesuatu yang dapat diukur dan dapat dinyatakan dengan angka disebut besaran, sedangkan pembanding dalam suatu pengukuran disebut satuan. Satuan yang digunakan untuk melakukan pengukuran dengan hasil yang sama atau tetap untuk semua orang disebut satuan baku, sedangkan satuan yang digunakan untuk melakukan pengukuran dengan hasil yang tidak sama untuk orang yang berlainan disebut satuan tidak baku.</p>
      <Link to="/Materi1IPA"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
    </div>
  )
}

export default Pengertian;