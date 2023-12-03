import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import AR4 from '../../assets/ar4.png';

const article4 = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold  mt-16 mb-14 ml-10">Cara Menghemat Listrik</h1>
                <div className='flex items-center justify-center flex-col'>
                    <img
                        src={AR4}
                        alt="Gambar Ilustrasi"
                        className="w-3/4 h-auto object-cover mb-4"/>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Cara menghemat energi listrik sangat penting untuk dilakukan demi menjaga
                        keberlangsungan dan keberlanjutan lingkungan serta untuk mengurangi biaya
                        tagihan listrik yang tinggi. Berikut ini adalah beberapa cara menghemat energi
                        listrik yang bisa diterapkan di rumah, kantor, atau tempat tinggal:
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        1.Matikan peralatan listrik yang tidak digunakan Peralatan listrik seperti TV,
                        komputer, dan lampu harus dimatikan saat tidak digunakan untuk menghemat energi
                        listrik. Kebiasaan ini dapat membantu mengurangi tagihan listrik dan menjaga
                        lingkungan.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-2">
                        2.Ganti lampu pijar dengan lampu LED Lampu LED lebih hemat energi daripada lampu
                        pijar dan lampu neon. Selain itu, lampu LED juga lebih tahan lama dan dapat
                        menghasilkan cahaya yang lebih terang.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-2">
                        3.Gunakan alat-alat listrik yang hemat energi Pilihlah alat-alat listrik yang
                        memiliki rating energi yang rendah. Rating energi biasanya ditunjukkan pada
                        label produk dan dapat membantu Anda memilih produk yang lebih hemat energi.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-2">
                        4.Matikan AC saat tidak ada orang di ruangan Matikan AC saat tidak ada orang di
                        ruangan atau saat tidur. Hal ini akan membantu menghemat energi dan mengurangi
                        biaya tagihan listrik.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-2">
                        5.Gunakan pengatur waktu untuk AC dan lampu Pengatur waktu dapat membantu
                        menghemat energi dengan mengatur waktu kapan AC dan lampu harus dihidupkan dan
                        dimatikan. Anda dapat memprogram pengatur waktu untuk menghidupkan AC dan lampu
                        sebelum Anda tiba di rumah atau kantor.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-2">
                        6.Hindari penggunaan listrik pada jam-jam puncak Penggunaan listrik pada jam-jam
                        puncak seperti sore hari dan malam hari dapat meningkatkan biaya tagihan
                        listrik. Cobalah untuk menghindari penggunaan listrik pada jam-jam tersebut atau
                        kurangi penggunaan listrik.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-2">
                        7.Gunakan panel surya Panel surya dapat membantu menghemat energi listrik dengan
                        mengubah sinar matahari menjadi energi listrik. Panel surya dapat digunakan
                        untuk menghasilkan listrik untuk rumah atau kantor.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-2">
                        8.Periksa dan perbaiki peralatan listrik yang rusak Peralatan listrik yang rusak
                        dapat menghasilkan konsumsi energi yang lebih tinggi dari yang seharusnya.
                        Periksa dan perbaiki peralatan listrik yang rusak segera untuk menghemat energi
                        listrik.
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6 mb-32">
                        Dalam menghemat energi listrik, setiap langkah kecil sangat berarti dan
                        bermanfaat. Selain itu, penghematan energi listrik juga dapat membantu
                        mengurangi emisi karbon dioksida dan gas rumah kaca yang merusak lingkungan.
                        Semoga informasi di atas dapat membantu Anda untuk lebih hemat energi listrik
                        dan memperbaiki kualitas lingkungan hidup.
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default article4;