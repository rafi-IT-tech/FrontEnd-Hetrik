import {Link} from 'react-router-dom';
import React from 'react';
import AR1 from '../../assets/ar1.png';
import AR2 from '../../assets/ar2.png';
import AR3 from '../../assets/ar3.png';
import AR4 from '../../assets/ar4.png';
import AR5 from '../../assets/ar5.png';
import AR6 from '../../assets/ar6.png';

const Card = () => {
    const onClickReadMore = () => {
        // Your logic here
    };

    return (
        <div className="container mx-auto mt-8 mb-40">
            <h2 className="text-4xl font-bold text-blue-500 mb-16">Article</h2>
            <div className="flex justify-center space-x-4">
                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={AR1} alt="Card"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Hemat Listrik Gaya Hidup Baru untuk Energi Terbarukan</div>
                        <p className="text-gray-700 text-base text-justify mt-10">
                            Penghematan listrik merupakan salah satu hal yang perlu dilakukan oleh kita
                            sebagai pengguna listrik. Tidak hanya bermanfaat untuk menghemat biaya pemakaian
                            listrik, dengan berhemat kita juga dapat menghemat energi yang kita gunakan.
                        </p>

                    </div>
                    <div className="px-6 py-4">
                        <Link to="/Article1">
                            <button
                                onClick={onClickReadMore}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={AR2} alt="Card"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Rumah Hemat Energi Demi Menuju Gaya Hidup yang Berkelanjutan</div>
                        <p className="text-gray-700 text-base text-justify mt-10">
                            Dalam artikel ini, kita akan mengulas lebih lanjut beberapa kebiasaan tersebut
                            yang mungkin baru kita sadari sebagai bentuk pemborosan energi di lingkungan
                            rumah kita dan melangkah menjadi Rumah Hemat Energi untuk hidup yang
                            berkelanjutan.</p>
                    </div>
                    <div className="px-6 py-4">
                        <Link to="/Article2">
                            <button
                                onClick={onClickReadMore}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={AR3} alt="Card"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Pentingnya Hemat Listrik untuk Hidup Lebih Baik</div>
                        <p className="text-gray-700 text-base text-justify mt-10">
                            KESDM menyatakan bahwa rasio elektrifikasi, atau persentasi jumlah rumah tangga
                            yang memiliki akses listrik, di tahun 2017 telah mencapai 95.35%. Rasio ini
                            mengambarkan jumlah rumah tangga yang sudah berlistrik dibanding dengan jumlah
                            rumah tangga nasional.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <Link to="/Article3">
                            <button
                                onClick={onClickReadMore}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-20">
                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={AR4} alt="Card"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Cara Menghemat Listrik</div>
                        <p className="text-gray-700 text-base text-justify mt-10">
                            Cara menghemat energi listrik sangat penting untuk dilakukan demi menjaga
                            keberlangsungan dan keberlanjutan lingkungan serta untuk mengurangi biaya
                            tagihan listrik yang tinggi. Berikut ini adalah beberapa cara menghemat energi
                            listrik yang bisa diterapkan...
                        </p>

                    </div>
                    <div className="px-6 py-4">
                        <Link to="/Article4">
                            <button
                                onClick={onClickReadMore}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={AR5} alt="Card"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Hemat Energi “Potong 10%” Dorong Kesadaran Pemanfaatan Energi Bertanggung Jawab</div>
                        <p className="text-gray-700 text-base text-justify mt-10">
                            Penyediaan listrik secara merata dengan harga yang terjangkau sangat penting.
                            Namun, melaksanakan penghematan energi juga tidak kalah penting. Di mulai tahun
                            2016 lalu, Kementerian Energi dan Sumber Daya Mineral (ESDM) menginisisasi
                            gerakan hemat energi “Potong 10%”.</p>
                    </div>
                    <div className="px-6 py-4">
                        <Link to="/Article5">
                            <button
                                onClick={onClickReadMore}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={AR6} alt="Card"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Salah Satu Upaya Penghematan Energi Listrik adalah Gunakan Perangkat Hemat Daya</div>
                        <p className="text-gray-700 text-base text-justify mt-10">
                            Laporan Nasional Pemadam Kebakaran tahun 2021, dari total 17.768 kasus kebakaran
                            yang terjadi di Indonesia, 45% atau setara dengan 5.274 kasus kebakaran
                            disebabkan oleh arus pendek/korsleting listrik. Salah satu faktor penyebabnya
                            adalah sifat konsumtif terhadap energi listrik yang dapat menyebabkan terjadinya
                            arus pendek/korsleting listrik.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <Link to="/Article6">
                            <button
                                onClick={onClickReadMore}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
