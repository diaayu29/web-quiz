import {Link} from 'react-router-dom'

function KondisiAlamInd() {
  return(
    <div className = "bg-pinkLight h-screen p-3">
      <p className = "font-bold mb-3 text-lg">Kondisi Alam Indonesia</p>
      <p className = "font-bold">Jenis Iklim di Indonesia</p>
      <ul className = "list-disc ml-4">
        <li>Iklim musim</li>
        <li>Iklim tropis</li>
        <li>Iklim laut</li>
      </ul>
      <p>Bentuk muka bumi Indonesia dapat dibedakan menjadi dataran rendah, dataran tinggi, bukit, gunung dan pegunungan.</p>
      <p>Secara geologi, Indonesia terletak pada pertemuan 3 lempeng tektonik yaitu lempeng Indo-Australia, Eurasia dan Pasifik. <span className = "font-bold">Lempeng Indo-Australia</span> bertumbukan dengan lempeng Eurasia di pantai Sumatra, Jawa dan Nusa Tenggara. <span className = "font-bold">Lempeng Pasifik</span> bertumbukan dengan lempeng Eurasia di utara Papua dan Maluku Utara. Tumbukan antar lempeng tersebut membentuk pegunungan, gunung api di sepanjang Pulau Sumatera, Jawa, Nusa Tenggara dan membentuk gempa bumi. Gunung berapi adalah lubang kepundan atau rekahan dalam kerak bumi tempat keluarnya cairan magma atau gas atau cairan lainnya ke permukaan bumi. Indonesia memiliki keragaman flora sekitar 8000 spesies dan fauna sekitar 2215 spesies. Spesies fauna terdiri atas 515 mamalia, 60 reptil, 1519 burung dan 121 kupu – kupu.</p>
      <p>Flora di Indonesia dibedakan menjadi 2 kelompok yaitu Indo-Malayan (Indonesia Barat) dan Indo-Australian (Indonesia Timur).</p>
      <p>Fauna di Indonesia dibedakan menjadi 3 kelompok yaitu fauna bagian barat (Asiatis), tengah (peralihan) dan timur (Australis). Fauna barat dan tengah dipisahkan oleh garis Wallace, fauna timur dan tengah dipisahkan oleh garis Weber. </p>
      <p><span className = "font-bold">Fauna asiatis</span> mencakup Sumatera, Jawa, Bali dan Kalimantan. Contohnya gajah, macan, badak bercula satu, kerbau, buaya, tokek, biawak, trenggiling, burung hantu, gagak, elang, merak, dan sebagainya. </p>
      <p><span className = "font-bold">Fauna peralihan</span> mencakup Sulawesi, Maluku, Timor, Nusa Tenggara, dan pulau kecil di sekitar pulau tersebut. Contohnya, anoa, babi rusa, ikan duyung, kuskus, sapi, komodo, burung dewata, maleo, dan sebagainya.</p>
      <p><span className = "font-bold">Fauna australis</span> mencakup Papua, Halmahera dan Kepulauan Aru. Contohnya walabi, kanguru, beruang, landak irian, kelelawar, kadal, cenderawasih, kasuari, namudur dan sebagainya. </p>
      <Link to="/Materi1IPS"><button className="bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white">Back</button></Link>
    </div>
  )
}

export default KondisiAlamInd;

