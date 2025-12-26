import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

export default function ContactBemFik() {
  // State untuk menangani input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Tambahkan logika kirim ke API/EmailJS di sini
    alert("Pesan terkirim! (Hanya simulasi)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      
      {/* Main Container Card */}
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* BAGIAN KIRI: FORMULIR */}
        <div className="w-full lg:w-3/5 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hubungi Kami</h2>
          <p className="text-gray-500 mb-8">
            Punya pertanyaan atau ide kolaborasi? Kirimkan pesan kepada BEM FIK UDINUS.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Anda.." 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white focus:outline-none transition duration-200"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white focus:outline-none transition duration-200"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subjek</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Judul pesan.." 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white focus:outline-none transition duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pesan</label>
              <textarea 
                rows="5" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda disini.." 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white focus:outline-none transition duration-200 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full md:w-auto flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* BAGIAN KANAN: INFORMASI & MAP */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            
            {/* Dekorasi Lingkaran Background */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5"></div>
            <div class="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-white opacity-5"></div>

            {/* Konten Info */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">BEM FIK UDINUS</h3>
                <p className="text-blue-100 leading-relaxed mb-8 text-sm">
                    Hadir sebagai wadah bagi mahasiswa untuk berinovasi dan berkarya. Bersama, kita wujudkan ide-ide cemerlang menjadi aksi nyata yang berdampak.<br />
                    <strong>Harmoni dalam Aksi.</strong>
                </p>

                <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                            <Phone size={24} className="text-blue-200" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-wide">Phone Number</p>
                            <p className="font-medium">+6282-0063-25524</p>
                        </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                             <Mail size={24} className="text-blue-200" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-wide">Email Address</p>
                            <p className="font-medium">bemfikudinus1@gmail.com</p>
                        </div>
                    </div>

                    {/* Whatsapp */}
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                            <MessageCircle size={24} className="text-blue-200" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-wide">Whatsapp (BEMO)</p>
                            <p className="font-medium">+6282-0063-25524</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                             <MapPin size={24} className="text-blue-200" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-wide">Our Office</p>
                            <p className="font-medium">Udinus, Gedung D1</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embed Map */}
            <div className="relative z-10 mt-8">
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20 h-48 w-full">
                    <iframe 
                        title="Map Udinus"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.226077698501!2d110.40701217499696!3d-6.982626393018116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ec52229d7%3A0xc791d6abc923677!2sUniversitas%20Dian%20Nuswantoro!5e0!3m2!1sid!2sid!4v1703610000000!5m2!1sid!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}