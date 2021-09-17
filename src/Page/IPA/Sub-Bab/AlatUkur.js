import {Link} from 'react-router-dom'

function AlatUkur() {
  return(
    <div className = "bg-pinkLight h-screen p-3">
      <p>Alat Ukur</p>
      <p>Pengukuran Panjang</p>
      <p>Alat ukur yang digunakan untuk mengukur panjang benda haruslah sesuai dengan ukuran benda. Sebagai contoh, untuk mengukur lebar buku kita gunakan pengaris, sedangkan untuk mengukur lebar jalan raya lebih mudah menggunakan meteran kelos. Pengukuran panjang bisa menggunakan beberapa alat yakni :</p>
      <p>Pengukuran Panjang dengan Mistar</p>
      <p>Pengukuran Panjang dengan Jangka Sorong</p>
      <p>Pengukuran Panjang dengan Mikrometer Sekrup</p>
      <p>Pengukuran Massa Benda</p>
      <p>Timbangan digunakan untuk mengukur massa benda. Prinsip kerjanya adalah keseimbangan kedua lengan, yaitu keseimbangan antara massa benda yang diukur dengan anak timbangan yang digunakan. Dalam dunia pendidikan sering digunakan neraca O’Hauss tiga lengan atau dua lengan.</p>
      <p>Pengukuran Besaran Waktu</p>
      <p>Berbagai jenis alat ukur waktu misalnya: jam analog, jam digital, jam dinding, jam atom, jam matahari, dan stopwatch. Dari alat-alat tersebut, stopwatch termasuk alat ukur yang memiliki ketelitian cukup baik, yaitu sampai 0,1 s.</p>
      <Link to="/Materi1IPA"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
    </div>
  )
}

export default AlatUkur;