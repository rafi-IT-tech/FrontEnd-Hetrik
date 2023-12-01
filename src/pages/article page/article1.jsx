import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import AR1 from '../../assets/ar1.png';

const article1 = () => {
    return (
        <div>
            <Navbar/>
            <div
                className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold  mt-16 mb-14 ml-10">Hemat Listrik Gaya Hidup Baru untuk Energi Terbarukan</h1>
                <div className='flex items-center justify-center flex-col'>
                <img
                    src={AR1}
                    alt="Gambar Ilustrasi"
                    className="w-3/4 h-auto object-cover mb-4"/>
                <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                    Penghematan listrik merupakan salah satu hal yang perlu dilakukan oleh kita
                    sebagai pengguna listrik. Tidak hanya bermanfaat untuk menghemat biaya pemakaian
                    listrik, dengan berhemat kita juga dapat menghemat energi yang kita gunakan.
                    Penghematan listrik perlu dilakukan tidak semata-mata untuk mengurangi biaya,
                    ayo kita lihat hasil dari dampak kita dalam penghematan listrik.
                </p>
                <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                    Saat ini, di Indonesia pasokan listrik menyebabkan belum meratanya ketersediaan
                    listrik. Permintaan listrik akan terus meningkat baik untuk kegiatan rumah
                    tangga, perkantoran, maupun industri namun peningkatan permintaan tidak sejalan
                    dengan ketersediaan listrik. Sehingga, apabila kita menggunakan listrik secara
                    berlebihan atau boros, pemadaman listrik kerap kali terjadi.
                </p>
                <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                    Penghematan listrik perlu dilakukan dengan alasan pemerataan. Tidak semua
                    masyarakat Indonesia dapat memanfaatkan listrik karena tidak semua daerah
                    dijangkau oleh listrik dikarenakan beberapa alasan. Sedangkan masyarakat yang
                    dapat menikmati listrik cenderung menggunakan listrik secara boros tanpa
                    menyadari bahwa listrik yang mereka gunakan seharusnya dapat juga dinikmati oleh
                    masyarakat yang belum terjangkau oleh listrik. Pemakaian listrik yang berlebihan
                    juga berimplikasi ada emisi yang dihasilkan, semakin banyak listrik yang
                    digunakan semakin banyak juga karbon yang dihasilkan dan tentunya berdampak pada
                    pemanasan global karena listrik sebagian besar dihasilkan dari energi fosil.
                </p>
                <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6 mb-32">
                    Penghematan energi dapat dilakukan dari beberapa aksi secara individu. Pertama,
                    kami bisa mengurangi penerapan alat-alat listrik seperti lampu dan AC, mencabut
                    sambungan listrik yang sudah tidak dipakai termasuk charger hp dan laptop.
                    Penggunaan laptop juga lebih disarankan karena laptop menggunakan daya baterai
                    sehingga tidak perlu selalu terhubung dengan aliran listrik jadi lebih hemat
                    listrik.
                </p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default article1;