// Data dokumentasi RuangTI — disesuaikan dengan arsitektur aktif:
// Go single binary + Svelte 5, login Google, riwayat percakapan, RAG FTS5 4.595 modul.

export interface DocSubSection {
  id: string;
  title: string;
}

export interface DocCallout {
  type: 'info' | 'tip' | 'warning' | 'success';
  title: string;
  message: string;
}

export interface DocTable {
  headers: string[];
  rows: string[][];
}

export interface DocCodeSnippet {
  language: string;
  caption?: string;
  code: string;
}

export interface DocSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  callout?: DocCallout;
  table?: DocTable;
  codeSnippet?: DocCodeSnippet;
  formula?: { math: string; explanation: string };
}

export interface DocArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  badge?: string;
  readTime: string;
  subsections: DocSubSection[];
  content: {
    lead: string;
    sections: DocSection[];
  };
}

export interface DocCategory {
  id: string;
  title: string;
  description: string;
  articles: DocArticle[];
}

export const REPO_URL = 'https://github.com/rapoii/RuangTI';

export const DOCS_CATEGORIES: DocCategory[] = [
  {
    id: 'getting-started',
    title: 'Memulai',
    description: 'Dasar-dasar penggunaan RuangTI untuk riset Teknik Industri.',
    articles: [
      {
        id: 'overview',
        title: 'Pengenalan RuangTI',
        description: 'Apa itu RuangTI, untuk siapa, dan bagaimana ia menjawab dengan rujukan nyata.',
        category: 'getting-started',
        badge: 'Pondasi',
        readTime: '3 min',
        subsections: [
          { id: 'apa-itu-ruangti', title: 'Apa itu RuangTI?' },
          { id: 'cara-menjawab', title: 'Bagaimana RuangTI Menjawab' },
          { id: 'untuk-siapa', title: 'Untuk Siapa RuangTI Dirancang' },
        ],
        content: {
          lead: 'RuangTI adalah asisten riset Teknik Industri yang menjawab pertanyaan konsep, rumus, dan studi kasus dengan rujukan dari 4.595 modul keilmuan. Seluruh jawaban dapat ditelusuri kembali ke sumbernya.',
          sections: [
            {
              id: 'apa-itu-ruangti',
              title: 'Apa itu RuangTI?',
              paragraphs: [
                'RuangTI menggabungkan mesin pencari pengetahuan (*Retrieval-Augmented Generation*) dengan basis 4.595 modul Teknik Industri yang diurai menjadi 32.413 seksi keilmuan. Saat kamu bertanya, sistem mengambil seksi paling relevan lalu menyusun jawaban bertahap berdasarkan potongan sumber tersebut.',
                'Fokus utamanya adalah **jawaban berujung rujukan**: bukan sekadar teks yang terdengar meyakinkan, tetapi penjelasan yang bisa kamu lacak kembali ke modul asalnya.',
              ],
            },
            {
              id: 'cara-menjawab',
              title: 'Bagaimana RuangTI Menjawab',
              paragraphs: [
                'Setiap pertanyaan melewati tiga tahap berikut:',
              ],
              list: [
                '**Pengambilan sumber** — pertanyaan dicocokkan ke indeks pencarian teks penuh (SQLite FTS5) untuk menemukan seksi modul yang paling relevan.',
                '**Penyusunan jawaban** — model AI menyusun langkah penjelasan dengan konteks seksi yang ditemukan.',
                '**Penyajian** — rumus matematis dirender rapi, tabel diformat, dan rujukan ditampilkan agar bisa diverifikasi.',
              ],
              callout: {
                type: 'info',
                title: 'Catatan',
                message: 'Kualitas jawaban bergantung pada seberapa spesifik pertanyaanmu. Sebutkan konteks industri atau standar yang kamu pakai bila ada.',
              },
            },
            {
              id: 'untuk-siapa',
              title: 'Untuk Siapa RuangTI Dirancang',
              paragraphs: [
                'RuangTI ditujukan untuk mahasiswa, dosen, dan praktisi yang butuh penjelasan teknis cepat namun tetap bisa dipertanggungjawabkan sumbernya.',
              ],
              table: {
                headers: ['Pengguna', 'Kebutuhan Utama', 'Manfaat'],
                rows: [
                  ['Mahasiswa TI', 'Memahami konsep & menurunkan rumus', 'Langkah penjelasan runtut dengan rujukan modul'],
                  ['Dosen & Asisten', 'Menyiapkan bahan ajar', 'Contoh kasus dan formulasi standar yang siap dipakai'],
                  ['Praktisi Industri', 'Menjawab masalah operasional', 'Rujukan ke standar dan metode yang relevan'],
                ],
              },
            },
          ],
        },
      },
      {
        id: 'quickstart',
        title: 'Panduan Cepat',
        description: 'Langkah pertama memakai RuangTI, dari membuka halaman sampai menyimpan riwayat.',
        category: 'getting-started',
        badge: 'Panduan',
        readTime: '3 min',
        subsections: [
          { id: 'langkah-masuk', title: '1. Masuk dengan Google' },
          { id: 'langkah-bertanya', title: '2. Ajukan Pertanyaan' },
          { id: 'langkah-riwayat', title: '3. Riwayat Tersimpan' },
        ],
        content: {
          lead: 'RuangTI dapat dipakai langsung dari peramban tanpa instalasi. Untuk menyimpan riwayat percakapan, kamu perlu masuk dengan akun Google terlebih dahulu.',
          sections: [
            {
              id: 'langkah-masuk',
              title: '1. Masuk dengan Google',
              paragraphs: [
                'Buka halaman utama dan tekan tombol **Mulai Chat**. Sebuah dialog masuk akan muncul di atas halaman. Tekan **Masuk dengan Google** lalu pilih akunmu.',
                'Setelah masuk, kamu akan diarahkan kembali ke RuangTI dengan sesi aktif. RuangTI hanya memakai data dasar akun (nama, email, dan foto profil) untuk menampilkan identitasmu.',
              ],
              callout: {
                type: 'tip',
                title: 'Tanpa daftar manual',
                message: 'Tidak ada formulir pendaftaran atau kata sandi baru. Identitas diverifikasi sepenuhnya oleh Google.',
              },
            },
            {
              id: 'langkah-bertanya',
              title: '2. Ajukan Pertanyaan',
              paragraphs: [
                'Tulis pertanyaanmu di kolom pesan. Kamu bisa memakai chip topik populer di halaman depan (EOQ, OPC, CPM, Lean, dan lainnya) untuk memulai lebih cepat.',
                'Untuk hasil terbaik, sebutkan apa yang kamu inginkan secara eksplisit — misalnya "turunkan rumus EOQ dan jelaskan tiap variabelnya" alih-alih hanya "EOQ".',
              ],
              list: [
                'Minta **penurunan rumus** bila kamu butuh langkah matematis, bukan hanya hasil akhir.',
                'Sebutkan **standar** yang relevan (ISO, ASME, APICS) bila konteksnya industri nyata.',
                'Minta **contoh perhitungan** agar jawaban lebih mudah diverifikasi.',
              ],
            },
            {
              id: 'langkah-riwayat',
              title: '3. Riwayat Tersimpan',
              paragraphs: [
                'Setiap percakapan otomatis tersimpan di akunmu. Kamu bisa membukanya kembali kapan saja melalui menu navigasi di kiri atas, lalu memilih judul percakapan yang ingin dilanjutkan.',
                'Riwayat bersifat pribadi: percakapan satu akun tidak dapat diakses oleh akun lain.',
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'architecture',
    title: 'Arsitektur & Fitur',
    description: 'Bagaimana RuangTI dibangun dan apa yang berjalan di baliknya.',
    articles: [
      {
        id: 'single-binary',
        title: 'Arsitektur Single Binary',
        description: 'Satu berkas Go berisi seluruh backend, basis data, dan antarmuka web.',
        category: 'architecture',
        badge: 'Arsitektur',
        readTime: '4 min',
        subsections: [
          { id: 'konsep-single-binary', title: 'Konsep Single Binary' },
          { id: 'komponen', title: 'Komponen di Dalamnya' },
          { id: 'keunggulan', title: 'Keunggulan Pendekatan Ini' },
        ],
        content: {
          lead: 'RuangTI dikemas sebagai satu berkas eksekutif Go berukuran sekitar 14 MB. Seluruh logika server, basis data, dan antarmuka web Svelte ter-embed di dalamnya — cukup dijalankan tanpa memasang runtime tambahan.',
          sections: [
            {
              id: 'konsep-single-binary',
              title: 'Konsep Single Binary',
              paragraphs: [
                'Pendekatan ini berbeda dari aplikasi web pada umumnya yang memerlukan server aplikasi terpisah, proses build antarmuka, dan paket dependensi. Di RuangTI, hasil build antarmuka Svelte disematkan langsung ke dalam berkas Go memakai mekanisme *embed*, sehingga server dapat menyajikan halaman web dan API dari satu proses yang sama.',
                'Konsekuensinya: satu perintah untuk menjalankan, satu berkas untuk didistribusikan, dan tidak ada ketergantungan versi antar komponen.',
              ],
              codeSnippet: {
                language: 'bash',
                caption: 'Menjalankan RuangTI',
                code: `./ruangti.exe \\
  --host 0.0.0.0 \\
  --port 3005 \\
  --rag-db backend/data/ruangti_rag.db \\
  --app-db backend/data/ruangti_app.db`,
              },
            },
            {
              id: 'komponen',
              title: 'Komponen di Dalamnya',
              paragraphs: [
                'Meski berbentuk satu berkas, di dalamnya terdapat beberapa lapisan yang bekerja bersama:',
              ],
              table: {
                headers: ['Lapisan', 'Teknologi', 'Tanggung Jawab'],
                rows: [
                  ['Antarmuka', 'Svelte 5 + Tailwind CSS', 'Halaman landing, chat, dokumentasi, dan profil'],
                  ['API & Rute', 'Go (net/http)', 'Endpoint chat, autentikasi, riwayat, dan pencarian modul'],
                  ['Basis Data RAG', 'SQLite FTS5', 'Indeks 4.595 modul / 32.413 seksi keilmuan'],
                  ['Basis Data Aplikasi', 'SQLite', 'Akun, sesi, percakapan, dan pesan'],
                  ['Render Matematis', 'KaTeX', 'Menampilkan rumus dan persamaan'],
                ],
              },
            },
            {
              id: 'keunggulan',
              title: 'Keunggulan Pendekatan Ini',
              paragraphs: [
                'Ukuran berkas yang kecil dan konsumsi memori yang rendah membuat RuangTI dapat berjalan di perangkat dengan sumber daya terbatas, termasuk server kecil atau komputer lokal.',
              ],
              list: [
                '**Ringan** — jejak memori saat berjalan berkisar belasan hingga puluhan megabita.',
                '**Portabel** — cukup salin satu berkas untuk memindahkan seluruh aplikasi.',
                '**Tanpa dependensi eksternal** — tidak memerlukan Node.js maupun Python saat dijalankan.',
                '**Konsisten** — antarmuka dan backend selalu berasal dari versi build yang sama.',
              ],
            },
          ],
        },
      },
      {
        id: 'rag-engine',
        title: 'Basis Pengetahuan RAG',
        description: 'Cara 4.595 modul Teknik Industri diindeks dan diambil sebagai rujukan jawaban.',
        category: 'architecture',
        badge: 'RAG',
        readTime: '5 min',
        subsections: [
          { id: 'struktur-indeks', title: 'Struktur Indeks' },
          { id: 'alur-pengambilan', title: 'Alur Pengambilan Sumber' },
          { id: 'statistik', title: 'Statistik Basis Pengetahuan' },
        ],
        content: {
          lead: 'Jantung RuangTI adalah basis pengetahuan berisi 4.595 modul Teknik Industri yang diurai menjadi 32.413 seksi dan diindeks memakai SQLite FTS5 untuk pencarian teks penuh yang cepat.',
          sections: [
            {
              id: 'struktur-indeks',
              title: 'Struktur Indeks',
              paragraphs: [
                'Setiap modul dipecah menjadi seksi-seksi bermakna — bukan sekadar dipotong berdasarkan jumlah karakter. Pemecahan ini menjaga agar satu seksi tetap utuh secara makna, sehingga potongan yang diambil sebagai rujukan tidak kehilangan konteks.',
                'Indeks dibangun memakai ekstensi **FTS5** pada SQLite. Pencarian teks penuh memakai peringkat **BM25**, yaitu skoring yang memberi bobot lebih besar pada seksi yang paling relevan terhadap kata kunci pertanyaan.',
              ],
            },
            {
              id: 'alur-pengambilan',
              title: 'Alur Pengambilan Sumber',
              paragraphs: [
                'Saat pertanyaan dikirim, sistem menjalankan proses berikut sebelum model AI menyusun jawaban:',
              ],
              list: [
                'Pertanyaan dibersihkan dan kata kuncinya diekstraksi.',
                'Indeks FTS5 dicari untuk menemukan seksi dengan skor relevansi tertinggi.',
                'Seksi terbaik dipilih dan disusun sebagai konteks rujukan.',
                'Model AI menyusun jawaban dengan berpijak pada konteks tersebut.',
              ],
              callout: {
                type: 'warning',
                title: 'Batas Pengetahuan',
                message: 'Jawaban hanya sekuat isi basis pengetahuan. Bila topikmu tidak tercakup dalam 4.595 modul, RuangTI akan menyampaikannya secara terbuka alih-alih mengarang rujukan.',
              },
            },
            {
              id: 'statistik',
              title: 'Statistik Basis Pengetahuan',
              paragraphs: [
                'Angka-angka berikut menggambarkan skala basis pengetahuan yang tersedia saat ini:',
              ],
              table: {
                headers: ['Metrik', 'Nilai', 'Keterangan'],
                rows: [
                  ['Total modul', '4.595', 'Modul keilmuan Teknik Industri'],
                  ['Total seksi', '32.413', 'Potongan semantik yang dapat dirujuk'],
                  ['Ukuran runtime', '~13 MB', 'Berkas basis data yang diindeks'],
                  ['Mesin pencarian', 'SQLite FTS5', 'Pencarian teks penuh dengan peringkat BM25'],
                ],
              },
            },
          ],
        },
      },
      {
        id: 'auth-privacy',
        title: 'Login Google & Privasi',
        description: 'Bagaimana autentikasi bekerja dan bagaimana data percakapanmu dilindungi.',
        category: 'architecture',
        badge: 'Keamanan',
        readTime: '4 min',
        subsections: [
          { id: 'alur-login', title: 'Alur Login Google' },
          { id: 'sesi-cookie', title: 'Sesi & Cookie' },
          { id: 'isolasi-data', title: 'Isolasi Data Percakapan' },
        ],
        content: {
          lead: 'Autentikasi RuangTI dibangun langsung di atas protokol OAuth 2.0 Google. Tidak ada kata sandi yang disimpan, dan setiap percakapan terikat pada akun pemiliknya.',
          sections: [
            {
              id: 'alur-login',
              title: 'Alur Login Google',
              paragraphs: [
                'Saat menekan **Masuk dengan Google**, kamu diarahkan ke halaman resmi Google untuk memilih akun. Setelah menyetujui, Google mengirim kode otorisasi kembali ke RuangTI, yang kemudian ditukar menjadi identitas akun.',
                'RuangTI tidak pernah melihat atau menyimpan kata sandi Google-mu. Verifikasi sepenuhnya dilakukan di sisi Google.',
              ],
            },
            {
              id: 'sesi-cookie',
              title: 'Sesi & Cookie',
              paragraphs: [
                'Setelah login berhasil, RuangTI menerbitkan token sesi acak. Token ini tidak disimpan apa adanya di server — yang tersimpan hanyalah **hash SHA-256**-nya, sehingga bocornya basis data tidak langsung mengungkap token yang bisa dipakai.',
                'Token dikirim ke peramban melalui cookie bernama `rti_session` dengan atribut **HttpOnly**, artinya skrip di halaman tidak dapat membacanya. Atribut tambahan mencegah cookie ikut terkirim pada permintaan lintas situs.',
              ],
              table: {
                headers: ['Aspek', 'Penerapan'],
                rows: [
                  ['Penyimpanan token', 'Hanya hash SHA-256 yang tersimpan di server'],
                  ['Cookie sesi', '`rti_session`, HttpOnly, SameSite ketat'],
                  ['Masa berlaku', 'Sesi dibatasi waktu dan dapat diakhiri dengan keluar'],
                  ['Data dari Google', 'Nama, email, dan foto profil saja'],
                ],
              },
            },
            {
              id: 'isolasi-data',
              title: 'Isolasi Data Percakapan',
              paragraphs: [
                'Setiap permintaan ke percakapan diperiksa kepemilikannya di sisi server. Walaupun seseorang menebak identitas percakapan milik orang lain, permintaan tetap ditolak karena kepemilikan diverifikasi pada setiap akses — bukan hanya saat menampilkan daftar.',
              ],
              callout: {
                type: 'success',
                title: 'Privasi by design',
                message: 'Riwayat percakapanmu hanya dapat dibaca oleh akunmu sendiri. Tidak ada halaman publik yang membuka isi percakapan.',
              },
            },
          ],
        },
      },
      {
        id: 'conversation-history',
        title: 'Riwayat Percakapan',
        description: 'Menyimpan, melanjutkan, dan mengelola percakapan di akunmu.',
        category: 'architecture',
        badge: 'Fitur',
        readTime: '2 min',
        subsections: [
          { id: 'cara-kerja-riwayat', title: 'Cara Kerja Riwayat' },
          { id: 'mengelola', title: 'Mengelola Percakapan' },
        ],
        content: {
          lead: 'Percakapan di RuangTI tidak hilang saat kamu menutup peramban. Semuanya tersimpan di akunmu dan dapat dilanjutkan kapan saja.',
          sections: [
            {
              id: 'cara-kerja-riwayat',
              title: 'Cara Kerja Riwayat',
              paragraphs: [
                'Setiap percakapan baru dibuat sebagai satu ruang terpisah dengan judul yang diambil dari pertanyaan pertamamu. Pesan-pesan berikutnya tersimpan berurutan di dalam percakapan tersebut.',
                'Bila kamu mengirim pertanyaan sebelum sempat masuk, RuangTI akan menyimpan pertanyaan itu terlebih dahulu lalu melanjutkannya begitu proses masuk selesai.',
              ],
            },
            {
              id: 'mengelola',
              title: 'Mengelola Percakapan',
              paragraphs: [
                'Menu navigasi di kiri atas menampilkan daftar seluruh percakapanmu. Dari sana kamu dapat membuka percakapan lama atau menghapusnya.',
              ],
              list: [
                '**Buka** — tekan judul percakapan untuk melanjutkan dari pesan terakhir.',
                '**Percakapan baru** — tekan tombol **Percakapan Baru** untuk memulai topik yang berbeda.',
                '**Hapus** — tekan ikon silang di samping judul untuk membuang percakapan yang tidak diperlukan.',
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'industrial-knowledge',
    title: 'Keilmuan Teknik Industri',
    description: 'Cakupan bidang dan format penyajian rumus.',
    articles: [
      {
        id: 'cakupan-keilmuan',
        title: 'Cakupan Bidang Keilmuan',
        description: 'Delapan rumpun utama Teknik Industri yang tercakup dalam basis pengetahuan.',
        category: 'industrial-knowledge',
        badge: 'Keilmuan',
        readTime: '3 min',
        subsections: [
          { id: 'delapan-rumpun', title: 'Delapan Rumpun Utama' },
          { id: 'kedalaman-topik', title: 'Kedalaman Topik' },
        ],
        content: {
          lead: 'Basis pengetahuan RuangTI mencakup rumpun-rumpun inti Teknik Industri, mulai dari optimasi kuantitatif hingga perancangan sistem kerja manusia.',
          sections: [
            {
              id: 'delapan-rumpun',
              title: 'Delapan Rumpun Utama',
              paragraphs: [
                'Berikut rumpun keilmuan yang paling sering ditanyakan beserta fokus masing-masing:',
              ],
              table: {
                headers: ['Rumpun', 'Fokus Kajian', 'Contoh Topik'],
                rows: [
                  ['Riset Operasi', 'Optimasi & pemodelan matematis', 'Linear programming, penjadwalan, teori antrian'],
                  ['Lean Six Sigma', 'Perbaikan proses & kualitas', 'DMAIC, value stream mapping, kaizen, 5S'],
                  ['Ergonomi & K3', 'Keselamatan & faktor manusia', 'REBA/RULA, analisis risiko, standar K3'],
                  ['Tata Letak Fasilitas', 'Perancangan & pemindahan bahan', 'Systematic layout planning, from-to chart'],
                  ['Supply Chain', 'Logistik & rantai pasok', 'EOQ, safety stock, perencanaan distribusi'],
                  ['PPIC', 'Perencanaan & pengendalian produksi', 'Peramalan, agregat planning, penjadwalan produksi'],
                  ['Pemeliharaan', 'Keandalan mesin & TPM', 'Preventive maintenance, keandalan, RCM'],
                  ['Simulasi & Otomasi', 'Sistem industri & smart manufacturing', 'Simulasi diskrit, otomasi lini produksi'],
                ],
              },
            },
            {
              id: 'kedalaman-topik',
              title: 'Kedalaman Topik',
              paragraphs: [
                'Untuk setiap rumpun, basis pengetahuan menyimpan penjelasan konsep, formulasi matematis, asumsi yang berlaku, serta penerapan praktis. Kamu dapat meminta penjelasan bertingkat — dari definisi singkat hingga penurunan lengkap.',
              ],
              callout: {
                type: 'tip',
                title: 'Cara bertanya yang efektif',
                message: 'Sebutkan rumpun dan tujuannya, misalnya "jelaskan metode Shifting Bottleneck untuk penjadwalan job shop beserta batasannya".',
              },
            },
          ],
        },
      },
      {
        id: 'formula-katex',
        title: 'Rumus & Format Matematis',
        description: 'Bagaimana persamaan matematis ditampilkan dan cara memintanya.',
        category: 'industrial-knowledge',
        badge: 'Matematis',
        readTime: '3 min',
        subsections: [
          { id: 'render-rumus', title: 'Render Rumus dengan KaTeX' },
          { id: 'contoh-formula', title: 'Contoh: Economic Order Quantity' },
        ],
        content: {
          lead: 'Persamaan matematis di RuangTI dirender memakai KaTeX sehingga tampil rapi dan mudah dibaca, bukan sekadar teks mentah.',
          sections: [
            {
              id: 'render-rumus',
              title: 'Render Rumus dengan KaTeX',
              paragraphs: [
                'KaTeX adalah mesin render matematika yang menampilkan notasi LaTeX secara langsung di halaman web. Pecahan, akar, matriks, dan operator lanjutan tampil dalam bentuk yang benar tanpa memuat gambar.',
                'Kamu cukup menulis pertanyaan dengan bahasa biasa. Bila jawabannya mengandung persamaan, RuangTI akan menyajikannya dalam format matematis yang terbaca.',
              ],
            },
            {
              id: 'contoh-formula',
              title: 'Contoh: Economic Order Quantity',
              paragraphs: [
                'Salah satu rumus yang paling sering diminta adalah EOQ, yaitu kuantitas pemesanan yang meminimalkan total biaya persediaan:',
              ],
              formula: {
                math: 'Q^* = \\sqrt{\\frac{2DS}{H}}',
                explanation: 'Q* adalah kuantitas pesanan optimal, D adalah permintaan tahunan, S adalah biaya per pemesanan, dan H adalah biaya simpan per unit per tahun.',
              },
              callout: {
                type: 'info',
                title: 'Ingin penurunan lengkap?',
                message: 'Minta "turunkan rumus EOQ dari fungsi biaya total" agar RuangTI menampilkan langkah matematis, bukan hanya hasil akhirnya.',
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: 'faq',
    title: 'FAQ & Sumber',
    description: 'Pertanyaan umum dan tautan ke kode sumber.',
    articles: [
      {
        id: 'faq',
        title: 'Pertanyaan Umum',
        description: 'Jawaban atas pertanyaan yang paling sering diajukan pengguna.',
        category: 'faq',
        badge: 'FAQ',
        readTime: '3 min',
        subsections: [
          { id: 'akun-akses', title: 'Akun & Akses' },
          { id: 'jawaban-akurasi', title: 'Jawaban & Akurasi' },
        ],
        content: {
          lead: 'Berikut jawaban atas pertanyaan yang paling sering muncul seputar penggunaan RuangTI.',
          sections: [
            {
              id: 'akun-akses',
              title: 'Akun & Akses',
              paragraphs: [
                'Pertanyaan seputar akun dan cara mengakses RuangTI:',
              ],
              table: {
                headers: ['Pertanyaan', 'Jawaban'],
                rows: [
                  ['Apakah RuangTI berbayar?', 'Tidak. RuangTI dapat dipakai tanpa biaya.'],
                  ['Apakah saya perlu membuat akun?', 'Cukup masuk dengan Google, tanpa formulir pendaftaran.'],
                  ['Bisakah dipakai tanpa masuk?', 'Bisa menjelajah, tetapi masuk diperlukan untuk menyimpan riwayat percakapan.'],
                  ['Bagaimana keluar dari akun?', 'Buka halaman profil lalu pilih keluar.'],
                ],
              },
            },
            {
              id: 'jawaban-akurasi',
              title: 'Jawaban & Akurasi',
              paragraphs: [
                'Pertanyaan seputar isi dan keterandalan jawaban:',
              ],
              table: {
                headers: ['Pertanyaan', 'Jawaban'],
                rows: [
                  ['Dari mana jawaban diambil?', 'Dari 4.595 modul keilmuan yang diindeks menjadi 32.413 seksi rujukan.'],
                  ['Bisakah rujukan diverifikasi?', 'Ya, jawaban disusun dari seksi modul yang dapat ditelusuri.'],
                  ['Bagaimana bila topik tidak tersedia?', 'RuangTI akan menyampaikannya secara terbuka, bukan mengarang rujukan.'],
                  ['Apakah riwayat saya pribadi?', 'Ya, riwayat hanya dapat diakses oleh akunmu sendiri.'],
                ],
              },
              callout: {
                type: 'warning',
                title: 'Selalu verifikasi',
                message: 'Gunakan jawaban RuangTI sebagai titik awal riset. Untuk keputusan teknis atau keselamatan, tetap rujuk standar resmi yang berlaku.',
              },
            },
          ],
        },
      },
      {
        id: 'open-source',
        title: 'Repositori & Kontribusi',
        description: 'Kode sumber RuangTI dan cara ikut berkontribusi.',
        category: 'faq',
        badge: 'GitHub',
        readTime: '2 min',
        subsections: [
          { id: 'repositori', title: 'Repositori Kode Sumber' },
          { id: 'kontribusi', title: 'Cara Berkontribusi' },
        ],
        content: {
          lead: 'Kode sumber RuangTI terbuka dan dapat dipelajari, dijalankan sendiri, atau dikembangkan lebih lanjut.',
          sections: [
            {
              id: 'repositori',
              title: 'Repositori Kode Sumber',
              paragraphs: [
                'Seluruh kode RuangTI tersedia di GitHub. Di sana kamu dapat menemukan kode backend Go, antarmuka Svelte, serta skrip build yang menghasilkan berkas eksekutif tunggal.',
                `Tautan repositori: [${REPO_URL}](${REPO_URL})`,
              ],
              callout: {
                type: 'info',
                title: 'Teknologi yang dipakai',
                message: 'Go untuk backend dan API, Svelte 5 untuk antarmuka, SQLite FTS5 untuk basis pengetahuan, serta KaTeX untuk render matematis.',
              },
            },
            {
              id: 'kontribusi',
              title: 'Cara Berkontribusi',
              paragraphs: [
                'Kontribusi dapat berupa perbaikan dokumentasi, laporan masalah, maupun pengembangan fitur. Beberapa hal yang membantu:',
              ],
              list: [
                'Sertakan **langkah reproduksi** yang jelas saat melaporkan masalah.',
                'Jelaskan **konteks Teknik Industri** bila usulanmu berkaitan dengan isi keilmuan.',
                'Untuk perubahan kode, ikuti gaya dan struktur yang sudah ada di repositori.',
              ],
            },
          ],
        },
      },
    ],
  },
];

export const ALL_ARTICLES: DocArticle[] = DOCS_CATEGORIES.flatMap((c) => c.articles);

export function findArticle(id: string): DocArticle {
  return ALL_ARTICLES.find((a) => a.id === id) ?? ALL_ARTICLES[0];
}

export function articleNeighbors(id: string): { prev: DocArticle | null; next: DocArticle | null } {
  const i = ALL_ARTICLES.findIndex((a) => a.id === id);
  return {
    prev: i > 0 ? ALL_ARTICLES[i - 1] : null,
    next: i >= 0 && i < ALL_ARTICLES.length - 1 ? ALL_ARTICLES[i + 1] : null,
  };
}
