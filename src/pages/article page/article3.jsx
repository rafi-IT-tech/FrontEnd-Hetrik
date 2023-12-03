import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import AR3 from '../../assets/ar3.png';

const article3 = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold  mt-16 mb-14 ml-10">Pentingnya Hemat Listrik untuk Hidup Lebih Baik</h1>
                <div className='flex items-center justify-center flex-col'>
                    <img
                        src={AR3}
                        alt="Gambar Ilustrasi"
                        className="w-3/4 h-auto object-cover mb-4"/>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        KESDM menyatakan bahwa rasio elektrifikasi, atau persentasi jumlah rumah tangga
                        yang memiliki akses listrik, di tahun 2017 telah mencapai 95.35%. Rasio ini
                        mengambarkan jumlah rumah tangga yang sudah berlistrik dibanding dengan jumlah
                        rumah tangga nasional. Sebanyak 62.5 juta rumah tangga (93.03%) dialiri listrik
                        dari PLN, sementara 1.5 juta rumah tangga lain (2.32%) mendapat listrik off-grid
                        non PLN yang dibangun oleh PEMDA atau Swasta [1]. Memang angka ini terkesan
                        besar, tapi yuk kita lihat lagi lebih dalam bagaimana PLN dan ESDM memenuhi
                        kebutuhan listrik nasional dan target rasio elektifikasi yang ditargetkan
                        mencapai 99% pada tahun 2019.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Berdasarkan evaluasi sumber pembangkit listrik semester I tahun 2018, Indonesia
                        menggunakan bahan bakar fosil sebanyak 87,3% untuk memenuhi kebutuhan listrik
                        nasional yang mencapai 35,000 Mega Watt (MW). Dengan batu bara yang mendominasi
                        sebsesar 58,64%, disusul kemudian gas 22,48% dan BBM sekitar 6,18% atau mencapai
                        1,77 juta kilo liter. Energi baru dan terbarukan hanya menyumbang sebesar 12,71%
                        dalam pemenuhan kebutuhan listrik nasional.
                    </p>
                    <p className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6">
                        Penggunaan bahan bakar fosil sebagai pembangkit listrik sudah pasti mempengaruhi
                        ketersediaan bahan bakar fosil yang merupakan sumber daya habis dan tidak dapat
                        diperbarui dalam waktu singkat. Pemakaian listrik berbahan bakar fosil juga
                        menghasilkan emisi karbon yang memiliki peran pada efek rumah kaca dan perubahan
                        iklim. Sudah semestinya kita menggunakan listrik dengan bijak dan tidak
                        berlebihan karena listrik di Indonesia masih belum diproduksi dari bahan baku
                        yang ramah lingkungan dan tidak semua rakyat di Indonesia bisa menikmati listrik
                        lho!
                    </p>
                    <p
                        className="w-3/4 text-gray-700 text-base font-medium text-justify mt-6 mb-32">
                        Faktanya, dengan hanya mematikan listrik di Jawa-Bali selama 1 jam, sebanyak
                        hampir 2,6 juta rumah di timur Indonesia terlistriki selama 1 hari [3].
                        Penggunaan listrik yang bijak tentunya akan berdampak lebih baik pada lingkungan
                        dan juga pada kondisi finansial keluarga kita, karena pasti akan mengurangi
                        jumlah tagihan listrik yang harus dibayar!
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default article3;