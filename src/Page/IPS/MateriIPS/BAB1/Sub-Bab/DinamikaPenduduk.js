import {Link} from 'react-router-dom'

function DinamikaKependudukanInd() {
  return(
    <div className = "bg-pinkLight h-screen p-3">
      <p className = "font-bold mb-3 text-lg">Dinamika Kependudukan Indonesia</p>
      <p>Komposisi penduduk adalah pengelompokan penduduk berdasarkan umur, jenis kelamin, mata pencaharian, agama, bahasa pendidikan, tempat tinggal, jenis pekerjaan, dan sebagainya.</p>
      <p>Pertumbuhan penduduk adalah keseimbangan dinamis antara kekuatan menambah dan kekuatan mengurangi jumlah penduduk.</p>
      <p>Pertumbuhan penduduk yang sangat cepat menyebabkan : persebaran penduduk tidak merata, banyaknya angka pengangguran, banyaknya penduduk kurang produktif sehingga angka ketergantungan tinggi, arus urbanisasi tinggi, menurunnya kualitas dan berkurangnya kesejahteraan penduduk. </p>
      <p>Dinamika penduduk adalah perubahan jumlah penduduk pada suatu wilayah yang disebabkan oleh tiga faktor yaitu kelahiran (natalitas), kematian (mortalitas), dan perpindahan (migrasi). Jumlah penduduk Indonesia sekiitar 256 juta jiwa dan menduduki peringkat ke 4 di dunia. </p>
      <p>Kondisi kependudukan di Indonesia adalah tingkat pertumbuhan termasuk ketegori sedang, sebarannya tidak merata, dan kualitasnya masih rendah. Mayoritas penduduk Indonesia merupakan masyarakat yang memiliki suku bangsa dan budaya yang beragam. Di indonesia terdapat 1128 suku bangsa. </p>
      <Link to="/Materi1IPS"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
    </div>
  )
}

export default DinamikaKependudukanInd;