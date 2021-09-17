import {Link} from 'react-router-dom'

function Besaran() {
  return(
    <div className = "bg-pinkLight h-screen p-3">
      <p>Besaran</p>
      <p>Besaran ada 2 macam yakni, Besaran pokok dan besaran turunan</p>
      <p>Konsep: Besaran Pokok adalah besaran yang satuannya telah didefinisikan terlebih dahulu. Besaran Turunan adalah besaran yang satuannya diperoleh dari besaran pokok.</p>
      <p>Pengertian Besaran Fisika, Besaran Pokok, dan Besaran Turunan</p>
      <p>Di dalam pembicaraan kita sehari-hari yang dimaksud dengan berat badan adalah massa, sedangkan dalam fisika pengertian berat dan massa berbeda. Berat badan dapat kita tentukan dengan menggunakan alat timbangan berat badan. Misalnya, setelah ditimbang berat badanmu 50 kg atau dalam fisika bermassa 50 kg. Tinggi atau panjang dan massa adalah sesuatu yang dapat kita ukur dan dapat kita nyatakan dengan angka dan satuan. Panjang dan massa merupakan besaran fisika. Jadi, besaran fisika adalah ukuran fisis suatu benda yang dinyatakan secara kuantitas.

      Selain besaran fisika juga terdapat besaran-besaran yang bukan besaran fisika, misalnya perasaan sedih, gembira, dan lelah. Karena perasaan tidak dapat diukur dan tidak dapat dinyatakan dengan angka dan satuan, maka perasaan bukan besaran fisika.</p>
      <p>Besaran fisika dikelompokkan menjadi dua, yaitu besaran pokok dan besaran turunan. Besaran pokok adalah besaran yang sudah ditetapkan terlebih dahulu. Adapun, besaran turunan merupakan besaran yang dijabarkan dari besaran-besaran pokok.

      Sistem satuan besaran fisika pada prinsipnya bersifat standar atau baku, yaitu bersifat tetap, berlaku universal, dan mudah digunakan setiap saat dengan tepat. Sistem satuan standar ditetapkan pada tahun 1960 melalui pertemuan para ilmuwan di Sevres, Paris. Sistem satuan yang digunakan dalam dunia pendidikan dan pengetahuan dinamakan sistem metrik, yang dikelompokkan menjadi sistem metrik besar atau MKS (Meter Kilogram Second) yang disebut sistem internasional atau disingkat SI dan sistem metrik kecil atau CGS (Centimeter Gram Second).</p>
      <Link to="/Materi1IPA"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
    </div>
  )
}

export default Besaran;