import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import AR6 from '../../assets/ar6.png';

const article6 = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold  mt-16 mb-14 ml-10">Salah Satu Upaya Penghematan Energi Listrik adalah Gunakan Perangkat Hemat Daya.</h1>
                <div className='flex items-center justify-center flex-col'>
                    <img
                        src={AR6}
                        alt="Gambar Ilustrasi"
                        className="w-3/4 h-auto object-cover mb-4"/>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Laporan Nasional Pemadam Kebakaran tahun 2021, dari total 17.768 kasus kebakaran
                        yang terjadi di Indonesia, 45% atau setara dengan 5.274 kasus kebakaran
                        disebabkan oleh arus pendek/korsleting listrik. Salah satu faktor penyebabnya
                        adalah sifat konsumtif terhadap energi listrik yang dapat menyebabkan terjadinya
                        arus pendek/korsleting listrik.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Penghematan energi listrik adalah satu dari beberapa upaya yang dapat dilakukan
                        untuk mengurangi dampak negatif pada lingkungan. Universitas Diponegoro atau
                        UNDIP (2022) menegaskan bahwa melakukan penghematan energi maka penggunaan bahan
                        bakar fosil berkurang, polusi udara berkurang, dan juga pengeluaran untuk biaya
                        listrik juga berkurang.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Salah satu upaya penghematan energi listrik adalah dengan menggunakan perangkat
                        elektronik yang hemat daya. Pemilihan alat elektronik yang tepat dan hemat
                        energi dapat membantu menghemat biaya listrik dan juga membantu memperpanjang
                        masa pakai peralatan tersebut.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Dalam buku berjudul Tematik Terpadu Kurikulum 2013 Edisi Revisi 2017, dijelaskan
                        salah satu upaya penghematan energi listrik adalah menggunakan perangkat hemat
                        daya. Sebuah alat elektronik sebaiknya digunakan sesuai dengan kapasitas yang
                        dibutuhkan.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Banyak orang sering menggunakan alat yang memiliki kapasitas besar padahal tidak
                        dibutuhkan. Misalnya, memilih AC dengan kapasitas besar padahal ruangan yang
                        akan didinginkan tidak terlalu besar. Penggunaan alat tersebut akan membuat
                        konsumsi listrik menjadi lebih besar dan pemborosan energi akan terjadi.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Ditegaskan, salah satu upaya penghematan energi listrik adalah gunakan pula alat
                        elektronik hemat energi yang sekarang sudah banyak tersedia di pasaran.
                        Perangkat elektronik hemat energi dapat digunakan sebagai alternatif untuk
                        menghemat konsumsi listrik.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Pilihlah produk yang memiliki sertifikat dan standar yang sesuai. Kualitas yang
                        baik akan memastikan alat elektronik tersebut dapat digunakan dalam jangka waktu
                        yang lebih lama dan mengurangi pengeluaran untuk perawatan dan perbaikan.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Selain itu, penggunaan timer pada beberapa peralatan elektronik juga dapat
                        membantu menghemat energi. Misalnya, pada AC dan pemanas air. Timer ini dapat
                        diatur untuk menghidupkan dan mematikan alat secara otomatis. Dengan cara ini,
                        penggunaan listrik hanya dilakukan pada saat diperlukan saja.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Perawatan dan penggunaan alat elektronik yang benar juga dapat menjadi salah
                        satu upaya penghematan energi listrik. Bersihkanlah peralatan elektronik secara
                        rutin agar kinerjanya tetap maksimal dan terhindar dari kerusakan. Matikan alat
                        elektronik jika tidak digunakan, jangan hanya dalam mode standby, karena mode
                        ini tetap memakan daya listrik yang tidak sedikit.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6 mb-32">
                        Terakhir, edukasi dan kesadaran tentang penghematan energi juga penting untuk
                        dilakukan. Salah satu upaya penghematan energi listrik adalah juga mengajarkan
                        keluarga dan teman untuk menggunakan peralatan elektronik yang hemat energi dan
                        cara-cara menghemat energi di rumah akan membantu mengurangi dampak negatif pada
                        lingkungan dan membantu kita menjadi lebih hemat biaya.
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default article6;