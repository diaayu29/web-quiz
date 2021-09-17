import {Link} from 'react-router-dom'

function SI() {
  return(
    <div className = "bg-pinkLight h-screen p-3">
      <p>Sistem Internasional</p>
      <p>Dahulu orang biasa menggunakan jengkal, hasta, depa, langkah sebagai alat ukur panjang. Ternyata hasil pengukuran yang dilakukan menghasilkan data berbeda-beda yang berakibat menyulitkan dalam pengukuran, karena jengkal orang satu dengan lainnya tidak sama. Oleh karena itu, harus ditentukan dan ditetapkan satuan yang dapat berlaku secara umum. Usaha para ilmuwan melalui berbagai pertemuan membuahkan hasil sistem satuan yang berlaku di negara manapun dengan pertimbangan satuan yang baik harus memiliki syarat-syarat sebagai berikut:</p>
      <ul>
        <li>satuan selalu tetap, artinya tidak mengalami perubahan karena pengaruh apapun, misalnya suhu, tekanan dan kelembaban.</li>
        <li>bersifat internasional, artinya dapat dipakai di seluruh negara.</li>
        <li>mudah ditiru bagi setiap orang yang akan menggunakannya.</li>
      </ul>
      <p>Satuan Sistem Internasional (SI) digunakan di seluruh negara dan berguna untuk perkembangan ilmu pengetahuan dan perdagangan antarnegara. Kamu dapat membayangkan betapa kacaunya perdagangan apabila tidak ada satuan standar, misalnya satu kilogram dan satu meter kubik.</p>
      <Link to="/Materi1IPA"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
    </div>
  )
}

export default SI;