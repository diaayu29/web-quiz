import {Link} from 'react-router-dom'

function PotensiSDA() {
  return (
    <div className = "bg-pinkLight p-3">
      <p className = "font-bold mb-3 text-lg">Potensi SDA dan Kemaritiman Indonesia</p>
      <p>Sumber daya alam adalah semua bahan yang ditemukan manusia dalam alam yang dapat dipakai untuk kepentingan hidupnya. Bahan tersebut dapat berupa benda mati maupun benda hidup yang berada di bumi dan dapat dimanfaatkan untuk memenuhi kebutuhan hidup manusia.</p>
      <p className = "font-bold mt-3">Potensi Sumber daya Hutan</p>
      <p>Selain hutannya yang luas, hutan Indonesia juga menyimpan kekayaan flora dan fauna atau keanekaragaman hayati yang sangat besar. Bahkan, banyak diantaranya merupakan spesies endemik atau hanya ditemukan di Indonesia, tidak ditemukan di tempat lainnya.

      Hasil hutan sebenarnya tidak hanya sekadar kayu. Dari hutan tropis yang dimiliki Indonesia juga dihasilkan buah-buahan dan obat-obatan. Namun demikian, hasil hutan yang banyak dikenal penduduk adalah sebagai sumber kayu. Setidaknya terdapat 4000 jenis kayu yang 267 diantaranya merupakan kayu yang memiliki nilai ekonomi tinggi. Secara umum, jenis-jenis kayu dan sebarannya adalah sebagai berikut.</p>
      <ul className = "list-disc ml-4">
        <li>Kayu Keruing, Meranti, Agathis dihasilkan terutama di Papua, Sulawesi, dan Kalimantan.</li>
        <li>Kayu jati banyak dihasilkan di Jawa Tengah.</li>
        <li>Rotan banyak dihasilkan di Kalimantan, Sumatra Utara dan Sumatra Barat.</li>
        <li>Kayu Cendana banyak dihasilkan di Nusa Tenggara Timur.</li>
        <li>Kayu Rasamala dan Akasia banyak dihasilkan di Jawa Barat.</li>
      </ul>
      <p className = "font-bold mt-3">Potensi Sumber daya Tambang</p>
      <p>Indonesia merupakan salah satu negara di dunia yang kaya akan bahan tambang.  Beraneka bahan tambang tersedia untuk memenuhi kebutuhan dalam negeri maupun luar negeri. Aktivitas pertambangan telah menghasilkan banyak penghasilan atau devisa bagi Indonesia.</p>
      <ul className = "list-disc ml-4">
        <li>Minyak Bumi dan Gas</li>
        <li>Batu Bara</li>
        <li>Bauksit</li>
        <li>Pasir Besi</li>
        <li>Emas</li>
      </ul>
      <p className = "font-bold mt-3">Potensi Kemaritiman Indonesia</p>
      <p>Luas laut Indonesia mencakup 2/3 dari seluruh luas wilayah Indonesia, yaitu 5,8 juta km2. Di dalam laut tersebut, tersimpan kekayaan alam yang luar biasa besarnya.</p>
      <ul className = "list-disc ml-4">
        <li>Perikanan</li>
        <li>Hutan Mangrove</li>
        <li>Terumbu Karang</li>
      </ul>
      <Link to="/Materi1IPS"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
    </div>
  )
}

export default PotensiSDA;