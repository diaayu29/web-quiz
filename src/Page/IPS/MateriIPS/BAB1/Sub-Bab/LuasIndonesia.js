import {Link} from 'react-router-dom'

function LetakIndonesia() {
  return (
     <div className = "bg-pinkLight h-screen p-3">
     <p className = "font-bold mb-3 text-lg">Letak dan Luas Indonesia</p>
       <p>Peta adalah gambaran permukaan bumi dari suatu bidang datar dan diperkecil dengan menggunakan skala. Peta terdiri dari 8 komponen yaitu judul peta, orientasi utara, simbol peta, garis astronomis, Insert, Legenda, Garis Koordinat, Sumber peta.</p>
       <p className = "font-bold">Judul Peta</p>
       <p>judul peta adalah bagian dari kelengkapan peta yang berada pada posisi atas pada peta yang menunjukkan keberadaan peta tersebut</p>
       <p className = "font-bold">Skala peta</p>
       <p>Skala peta adalah perbandingan jarak pada peta dengan jarak yang sesungguhnya</p>
       <p className = "font-bold">Orientasi</p>
       <p>orientasi adalah menyamakan kedudukan peta dengan medan sebenarnya(secara praktis menyamakan utara peta dengan utara magnetis)</p>
       <p className = "font-bold">Simbol peta</p>
       <p>simbol peta ialah gambar yang digunakan untuk mewakili objek objek dalam peta</p>
       <p className = "font-bold">Garis koordinat</p>
       <p>garis koordinat adalah suatu titik yang dihasilkan oleh dua garis yang berpotongan yaitu garis bujur dan garis lintang yang berguna untuk menunjukkan tempat,orang,dan lain lain.</p>
       <p className = "font-bold">Inset</p>
       <p>inset adalah peta yang lebih kecil dari peta utama yang disamping peta utama yang isinya menggambarkan sekitar peta</p>
       <p className = "font-bold">Legenda</p>
       <p>legenda adalah keterangan keterangan yang menjelaskan simbol simbol pada peta biasanya legenda terletak dibagian bawah sebelah kiri ataupun kanan</p>

       <p className = "font-bold">Letak Indonesia</p>
       <p>Secara geografis, Indonesia berada diantara dua benua, yaitu Benua Asia yang terletak di sebelah utara Indonesia dan Benua Australia yang terletak di sebelah selatan Indonesia. Indonesia memiliki iklim tropis, dengan ciri suhu udara yang tinggi sepanjang tahun</p>
       <p className = "font-bold">Luas Indonesia</p>
       <p>Indonesia terletak antara 9°BT – 141°BT dan 6°LU – 11°LS. Batas darat Indonesia yaitu Malaysia, Papua New Guinea dan Timor Leste. Batas lautnya yaitu India, Thailand, Malaysia, Singapura, Vietnam, Filiphina, Palau, Papua New Guinea dan Timor Leste</p>
       <Link to="/Materi1IPS"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
     </div>
  )
}

export default LetakIndonesia;