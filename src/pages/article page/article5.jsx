import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import AR5 from '../../assets/ar5.png';

const article5 = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold  mt-16 mb-14 ml-10">Hemat Energi “Potong 10%” Dorong Kesadaran Pemanfaatan Energi Bertanggung Jawab.</h1>
                <div className='flex items-center justify-center flex-col'>
                    <img
                        src={AR5}
                        alt="Gambar Ilustrasi"
                        className="w-3/4 h-auto object-cover mb-4"/>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Penyediaan listrik secara merata dengan harga yang terjangkau sangat penting.
                        Namun, melaksanakan penghematan energi juga tidak kalah penting. Di mulai tahun
                        2016 lalu, Kementerian Energi dan Sumber Daya Mineral (ESDM) menginisisasi
                        gerakan hemat energi “Potong 10%”. Gerakan ini merupakan aksi bersama melibatkan
                        Pemerintah, pelaku bisnis/industri, organisasi masyarakat sipil dan individu
                        untuk melakukan penghematan energi sebesar 10%. Gerakan ini dilatarbelakangi
                        pesatnya pertumbuhan konsumsi energi di tengah penurunan jumlah cadangan energi
                        fosil yang saat ini masih menjadi sumber utama energi listrik di Indonesia..
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Kebutuhan untuk melakukan konservasi energi sejalan dengan paradigma pengelolaan
                        energi global saat ini yang menempatkan penghematan energi sebagai sumber energi
                        pertama dan diikuti oleh energi sumber terbarukan, minyak bumi, gas bumi dan
                        batubara. Konservasi energi lebih mudah untuk dilakukan dibandingkan memproduksi
                        energi, dengan menghemat 1 kWh lebih mudah dibandingkan memproduksi 1kWh.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Pertumbuhan ekonomi Indonesia saat ini sekitar 5,1%, dengan pertumbuhan konsumsi
                        listrik yang terus meningkat rata-rata 7% per tahun. Total konsumsi listrik
                        tahun 2016 mencapai 216 Terra Watt Hour (TWh), dimana konsumsi sektor rumah
                        tangga sekitar 94 TWh. Pemenuhan konsumsi listrik tersebut tidak dapat dilakukan
                        dengan hanya membangun pembangkit listrik, tetapi dapat dilakukan melalui upaya
                        yang lebih murah dan mudah yaitu penghematan listrik.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Tahun ini, Kementerian ESDM kembali melakukan kampanye hemat energi potong 10%.
                        Gelaran aksi yang terdiri dari Fun Run dan Fun Bike akan diselenggarakan di 3
                        kota, yakni Denpasar, Balikpapan dan Makassar. Aksi ini akan dilakukan serentak
                        pada 21 Mei 2017 dan menyasar para pelanggan listrik rumah tangga. Penghematan
                        10% pada sektor rumah tangga saja, akan menghemat listrik setara dengan
                        pembangunan pembangkit listrik tenaga uap (PLTU) berkapasitas sekitar 900 MW.
                        Penghematan listrik lebih mudah dan murah dibanding membangun pembangkit
                        listrik.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Pada tahap ini program akan dilaksanakan di provinsi dengan tingkat konsumsi
                        energi tinggi, atau di atas 87 persen total konsumsi nasional, seperti di
                        Sumatera Utara, Riau, Sumatera Selatan, Lampung, Banten, Jawa Barat, DKI
                        Jakarta, Jawa Tengah, Jawa Timur, Bali, Kalimantan Timur dan Sulawesi Selatan.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6 mb-32">
                        Penghematan sebanyak 10% hingga tiga tahun kedepan sama dengan menghemat
                        pembangunan Pembangkit Listrik Tenaga Uap (PLTU) baru. Dengan menghemat 10% juga
                        dapat melistriki sekitar 2,5 juta kepala keluarga di seluruh desa di 6 provinsi
                        di Indonesia Timur, atau setara 10 juta jiwa akan mendapatkan akses listrik.
                        Ilustrasinya, dengan mematikan lampu dan peralatan elektronik di rumah anda
                        selama satu jam per hari akan menghemat konsumsi listrik setara 600 Watt.
                        Penghematan tersebut setara dengan pemberian akses listrik kepada satu rumah
                        tangga di daerah terpencil.
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default article5;