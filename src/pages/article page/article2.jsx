import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import AR2 from '../../assets/ar2.png';

const article2 = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold  mt-16 mb-14 ml-10">Rumah Hemat Energi Demi Menuju Gaya Hidup yang Berkelanjutan.</h1>
                <div className='flex items-center justify-center flex-col'>
                    <img
                        src={AR2}
                        alt="Gambar Ilustrasi"
                        className="w-3/4 h-auto object-cover mb-4"/>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Dalam artikel ini, kita akan mengulas lebih lanjut beberapa kebiasaan tersebut
                        yang mungkin baru kita sadari sebagai bentuk pemborosan energi di lingkungan
                        rumah kita dan melangkah menjadi Rumah Hemat Energi untuk hidup yang
                        berkelanjutan.
                    </p>
                    <h4 className="w-3/4 text-gray-700 font-semibold text-justify mt-6">1. Mandi yang Terlalu Lama</h4>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Seringkali, kita merasa betah berlama-lama di dalam kamar mandi tanpa menyadari
                        bahwa kebiasaan ini sebenarnya dapat mengakibatkan pemborosan air dan energi
                        listrik yang tak terhitung. Terutama saat air panas mengalir tanpa henti, ini
                        memerlukan energi tambahan untuk terus memanaskannya. Oleh karena itu,
                        mengurangi waktu mandi dan secara bijak mematikan aliran air saat sedang tidak
                        digunakan adalah langkah sederhana yang dapat memberikan dampak besar dalam
                        penghematan energi dan air di rumah kita.
                    </p>
                    <h4 className="w-3/4 text-gray-700 font-semibold text-justify mt-6">2. Menyalakan Lampu di Siang Hari</h4>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Mengapa seringkali kita terjebak dalam kebiasaan menyalakan lampu ketika sinar
                        matahari sudah cukup terang di luar? Padahal, tindakan ini sebenarnya termasuk
                        salah satu bentuk pemborosan energi yang umum terjadi di banyak rumah. Agar
                        lebih bijaksana dalam penggunaan energi, sebaiknya kita memanfaatkan cahaya
                        alami yang ada dan secara rutin mematikan lampu ketika tidak diperlukan. Dengan
                        begitu, kita dapat mengurangi konsumsi listrik yang tidak perlu, serta ikut
                        berkontribusi dalam penghematan energi secara keseluruhan.
                    </p>
                    <h4 className="w-3/4 text-gray-700 font-semibold text-justify mt-6">3. Tidak tahu Elektronik dengan Teknologi Inverter dan Label Low Watt</h4>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Tidak hanya kebiasan sehari-hari yang mempengaruhi penghematan energi, tetapi
                        pilihan peralatan elektronik rumah tangga juga memainkan peran penting dalam
                        upaya ini. Saat kita mulai mempertimbangkan penggantian peralatan rumah kita,
                        perhatikanlah teknologi inverter dan label low watt pada peralatan tersebut.
                        Peralatan inverter memiliki kemampuan untuk mengoptimalkan penggunaan energi,
                        yang berarti konsumsi daya menjadi lebih efisien, sedangkan peralatan dengan
                        label low watt, umumnya cenderung lebih hemat dalam penggunaan daya listrik.
                        Dengan memilih peralatan rumah yang berbasis teknologi ini, kita dapat
                        memberikan kontribusi berarti dalam upaya penghematan energi di rumah tangga
                        kita.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        RumahHemat Energi Demi Menuju Gaya Hidup yang Berkelanjutan | tiyarmangulo.com
                        Perkembangan teknologi telah membuka pintu bagi salah satu cara mutakhir dalam
                        penghematan energi di rumah, yaitu melalui penerapan sistem smart home. Sistem
                        ini memberikan fleksibilitas kepada pengguna untuk mengontrol penggunaan daya
                        listrik dengan lebih efisien dan pintar. Sebagai contoh, Anda dapat dengan mudah
                        mengatur jadwal otomatis untuk peralatan elektronik, seperti pemanas air atau
                        pendingin udara, sehingga beroperasi hanya saat diperlukan. Selain itu, Anda
                        dapat mengontrol pencahayaan dari jarak jauh melalui perangkat pintar Anda,
                        sehingga tidak perlu lagi khawatir terlupakan mematikan lampu saat meninggalkan
                        rumah. Dengan sistem smart home, pengguna memiliki kontrol yang lebih baik dalam
                        mengelola penggunaan daya listrik, yang pada akhirnya berkontribusi dalam
                        penghematan energi dan mengurangi dampak lingkungan.</p>
                    <p className="w-3/4 text-gray-700 text-base font-bold text-justify mt-6 mb-32">
                        Menyelamatkan Energi dengan Rumah Hemat Energi</p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default article2;