# Google Chat Care Reporting Bot

Bot ini dibuat untuk menangani laporan masalah pengguna yang dikirim melalui Google Chat. Bot akan membaca pesan laporan, mengklasifikasikan jenis masalah, memeriksa duplikasi, lalu mencatat data ke Google Sheet berdasarkan bulan aktif.

## Fitur Utama

- Menerima laporan langsung dari pesan yang disebutkan bot
- Memproses reply pesan lalu mengetik perintah `input`
- Menangkap dan membersihkan data seperti:
  - Source
  - MSISDN
  - User ID
  - Unique ID
  - Deskripsi singkat laporan
- Melakukan klasifikasi jenis masalah secara otomatis berdasarkan kata kunci
- Memeriksa duplikasi laporan dalam tab bulan berjalan
- Menyimpan data ke tab bulanan seperti `Jan`, `Feb`, `Mar`, dst.
- Menyediakan update status laporan dengan perintah seperti:
  - `checking`
  - `waiting`
  - `progress`
  - `done`
  - `closed`
  - `reopen`
- Menampilkan status balasan ke thread yang sesuai di Google Chat

## Alur Kerja

1. Pengguna mengirim laporan ke Google Chat dengan mention bot.
2. Bot membaca isi pesan dan membersihkan format teks.
3. Script mem-parsing data seperti source, user ID, MSISDN, dan unique ID.
4. Bot melakukan fuzzy matching untuk menentukan kategori issue.
5. Sistem mengecek apakah laporan yang sama sudah pernah masuk pada bulan yang sama.
6. Jika tidak duplikat, data ditulis ke sheet bulan aktif.
7. Bot membalas thread dengan konfirmasi pencatatan.
8. Jika status berubah, bot dapat mencari thread tersebut di semua tab bulan dan memperbarui status di row yang cocok.

## Struktur Sheet

Setiap tab bulan berisi kolom berikut:

1. Timestamp
2. Status
3. Issue Type
4. Source
5. Thread
6. Description
7. PIC
8. Note
9. Resolution
10. Closed At

Jika tab bulan belum ada, script akan otomatis membuat tab baru dan menambahkan header di baris pertama.

## Format Input yang Didukung

Bot mendukung dua cara utama untuk input laporan:

### 1. Laporan langsung

```text
@careresponder-app 29 Juni 2026 - Bundling Indosat
Ada kendala paket tidak aktif untuk user 081234567890.
Source: https://chat.google.com/...
MSISDN: 081234567890
User ID: 1234567
Unique ID: ABC-123
```

### 2. Reply pesan lalu ketik input

```text
Reply ke pesan laporan
@careresponder-app input
```

Bot akan membaca isi pesan yang direply dan langsung memprosesnya.

## Perintah Status

Perintah status dijalankan di thread yang sama dengan laporan yang sudah dicatat.

| Perintah | Status yang ditetapkan |
| --- | --- |
| `checking` | PIC Checking |
| `waiting` | Waiting User Reply |
| `progress` | In Progress Fixing |
| `done` | Solved |
| `closed` | Closed |
| `reopen` | Waiting PIC Reply |

## Logika Duplikasi

Bot memiliki pengecekan duplikasi yang diperhitungkan berdasarkan:

- Unique ID
- User ID
- MSISDN
- Deskripsi lama + source (fallback untuk data legacy)

Penting:

- Duplikasi dicek dalam tab bulan sekarang.
- Data dari bulan sebelumnya tidak dianggap duplikat untuk mencegah false positive antar bulan.
- Jika data lama tidak memiliki format ID yang konsisten, bot tetap mencoba mencocokkan dari deskripsi dan source.

## Konfigurasi yang Diperlukan

Pastikan project Apps Script sudah memiliki Script Property berikut:

- `SHEET_ID` = ID spreadsheet Google Sheet yang menjadi tempat data laporan

Caranya:

1. Buka Apps Script project.
2. Klik Project Settings.
3. Masuk ke Script Properties.
4. Tambahkan key `SHEET_ID` dengan value ID spreadsheet.

## Persyaratan Umum

- Google Apps Script
- Google Chat API aktif di project
- Google Sheets API terhubung ke spreadsheet tujuan
- Spreadsheet yang dapat diakses oleh service account / akun script yang dipakai

## Penanganan Error

Jika script gagal menjalankan, biasanya penyebabnya adalah:

- `SHEET_ID` belum di-set
- Spreadsheet tidak ditemukan atau akses ditolak
- Tab bulan belum dibuat dan belum dapat diakses
- Thread atau message tidak ada di Google Chat

Bot akan mengembalikan pesan user-friendly seperti:

> Maaf, terjadi kendala saat memproses pesan. Silakan coba lagi atau hubungi admin.

## Catatan Arsitektur

Script ini dibuat dengan pendekatan event-driven dan bersifat modular berdasarkan fungsi, yaitu:

- parsing pesan
- matching kategori
- validasi duplikasi
- append ke sheet
- update status
- komunikasi balik ke thread Google Chat

Pendekatan ini memudahkan pengelolaan logika dan meminimalkan duplikasi kode dalam satu project Apps Script.

## Contoh Kasus

- Pengguna mengirim laporan yang sama dua kali pada bulan yang sama → ditolak sebagai duplikasi
- Laporan yang sama muncul di bulan berikutnya → diperbolehkan karena tidak sama bulan
- Data lama dengan format tidak lengkap → masih dapat dibandingkan lewat fallback `Description + Source`

## Praktik Penggunaan

Untuk operasional harian, pastikan:

- Tab bulanan selalu tersedia
- Data status diperbarui dengan perintah yang benar
- Semua laporan yang berasal dari Chat mention bot harus dikirim dengan format yang jelas
- Jika diperlukan, lakukan pengecekan manual pada sheet jika kategori tidak terdeteksi otomatis

