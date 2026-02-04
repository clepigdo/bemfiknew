# 🏛️ BEM FIK UDINUS - Official Insight Platform

Platform manajemen konten (CMS) resmi untuk **Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer (BEM FIK) Universitas Dian Nuswantoro**. Aplikasi ini dirancang untuk memudahkan pengurus dalam mengelola berita, inovasi, dan kegiatan kampus secara modern dan responsif.

---

## ✨ Fitur Utama

### 🛠️ Manajemen Konten (Admin)

- **Modular Article Builder**: Membuat konten artikel secara dinamis menggunakan blok teks (Rich Text Editor) dan blok gambar.
- **Smart Image Cropping**: Fitur pemotongan gambar otomatis dengan aspek rasio 16:9 menggunakan `react-easy-crop` untuk memastikan estetika visual yang konsisten.
- **Secure Dashboard**: Area admin dilindungi oleh sistem otentikasi dan middleware Laravel untuk mencegah akses tidak sah.

### 📖 Antarmuka Publik (User)

- **Insight Search**: Fitur pencarian artikel berbasis _debounce_ untuk efisiensi performa server.
- **Modern Detail Page**: Layout artikel yang dioptimalkan untuk keterbacaan (_readability_) dengan desain tipografi premium.
- **Responsive Design**: Tampilan yang menyesuaikan secara sempurna di perangkat mobile maupun desktop menggunakan Tailwind CSS.

---

## 🚀 Teknologi yang Digunakan

- **Framework**: Laravel 11 (PHP)
- **Frontend**: React.js dengan Inertia.js (Modern Monolith)
- **Styling**: Tailwind CSS & Framer Motion (Animations)
- **State Management**: Inertia `useForm`
- **Library Lain**: Lucide React (Icons), SweetAlert2, React-Easy-Crop, React-Quill.

---

## ⚙️ Cara Instalasi (Lokal)

1. **Clone Repository**
    ```bash
    git clone [https://github.com/username-kamu/website-bemfik-udinus.git](https://github.com/username-kamu/website-bemfik-udinus.git)
    cd website-bemfik-udinus
    ```
2. **Instal Dependensi PHP**
    ```bash
    composer install
    ```
3. **Instal Dependensi JavaScript**
    ```bash
    npm install
    ```
4. **Konfigurasi Environment**
    ```bash
    cp .env.example .env
    # Buka file .env dan sesuaikan DB_DATABASE, DB_USERNAME, dan DB_PASSWORD sesuai database lokalmu.
    ```
5. **Setup Database & Storage**
    ```bash
    php artisan key:generate
    php artisan migrate --seed
    php artisan storage:link
    ```
6. **Jalankan Aplikasi**
    ```bash
    # Jalankan di dua terminal berbeda:
    php artisan serve
    npm run dev
    ```

👨‍💻 Kontributor
Igdo Ragil Manuel - Lead Developer - [Universitas Dian Nuswantoro]

Made with ❤️ by P3 BEM FIK UDINUS
