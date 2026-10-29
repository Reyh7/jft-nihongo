# JFT Basic Nihongo - akun nyata dengan login Google (Firebase)

Belum diuji oleh pembuatnya. Ikuti langkah ini dan periksa sendiri.

1. Buat proyek di console.firebase.google.com. Aktifkan Authentication > Google, dan Firestore Database.
2. Tambahkan Web app, salin konfigurasinya ke `firebase-config.js`.
3. Di Firestore > Rules, tempel `firestore.rules`. Ganti `EMAIL_ADMIN_ANDA@gmail.com` dengan email admin Anda.
4. Letakkan file aplikasi belajar Anda sebagai `app.html` di folder yang sama.
5. Deploy: `firebase init hosting` lalu `firebase deploy`. Tambahkan domain hosting ke Authentication > Settings > Authorized domains.
6. Buka `/admin.html`, masuk dengan email admin, lihat daftar pengguna.

## Belum termasuk (perlu dibangun berikutnya)
- Pembayaran QRIS: buat order lewat Cloud Function, lalu webhook Midtrans/Xendit mengubah `plan` menjadi `premium` memakai Admin SDK. Jangan pernah dari browser.
- AI Sensei: panggil model lewat Cloud Function agar kunci API tidak bocor, dengan batas harian per pengguna.
- `app.html` masih menyimpan status paket di browser. Sambungkan ke dokumen `users/{uid}` agar Premium tidak bisa diakali.
- Syarat layanan, kebijakan privasi, dan aturan refund.
