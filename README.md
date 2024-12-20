# Clone Netflix

Clone Netflix adalah proyek yang dibuat menggunakan **React** + **Vite** untuk menduplikasi tampilan dan beberapa fitur dasar dari Netflix. Proyek ini juga memanfaatkan **Firebase** untuk autentikasi pengguna serta API untuk mengambil database film.

## Fitur

- **Tampilan Halaman Utama**: Mirip dengan Netflix, termasuk slider film dan kategori.
- **Autentikasi Pengguna**: Login dan registrasi dengan Firebase Authentication.
- **Streaming Data Film**: Mengambil data film dari API eksternal.
- **Responsif**: Optimal untuk berbagai ukuran layar.

## Teknologi yang Digunakan

- **React**: Library utama untuk membangun antarmuka pengguna.
- **Vite**: Alat pengembangan modern yang cepat untuk React.
- **Firebase**:
  - Authentication: Untuk login dan registrasi pengguna.
- **API Film**: Untuk mengambil data film menggunakan api dari TMDB.

## Cara Menjalankan Proyek

1. Clone repository:
   ```bash
   git clone https://github.com/username-mu/clone-netflix.git
   cd clone-netflix

2. Install dependencies:
    ```bash
    npm install

3. Konfigurasi Firebase:
    Buat proyek di Firebase Console.
    Salin konfigurasi Firebase dan tambahkan ke file firebase.js 

4. Konfigurasi API Film:
    Dapatkan API Key dari penyedia API film, disini saya menggunakan api dari TMDB.

5. Jalankan proyek:
    ```bash
    npm run dev