<h1>Fantastic Four Team</h1>

Group Leader: SAMATHA MARHAENDRA PUTRA - 19/444071/TK/49267<br/>
Member 1: RIZKY ALIF RAMADHAN - 19/446785/TK/49890<br/>
Member 2: HANING JIHAN PERTIWI - 19/439813/TK/48543<br/>
Member 3: DASCHA ABHISTA WACHNATA - 19/444044/TK/49240<br/>

<h2>“Project Senior Project TI”</h2><br/>
Instansi: Departemen Teknologi Elektro dan Teknologi Informasi, Fakultas Teknik, Universitas Gadjah Mada<br/>



<h3>Jawaban dari Modul 1</h3>
<h4>Nama produk: </h4>
AI-based Car Recommender System<br/>

<h4>Jenis produk: </h4>
Aplikasi Web

<h4>Latar belakang & permasalahan: </h4>
Di era saat ini, di mana teknologi berkembang dengan sangat pesat, banyaknya temuan baru salah satunya pada industri otomotif. Hal itu membuat rentang harga dan spesifikasi mobil yang ada saat ini menjadi sangat beragam sehingga mengakibatkan kebingungan pada diri masyarakat saat ingin membeli sebuah mobil. Oleh karena itu, kami merancang sebuah aplikasi website yang dapat merekomendasikan kebutuhan masyarakat terkait dengan harga dan spesifikasi mobil.<br/>

<h4>Ide solusi: </h4>
Berdasarkan rumusan permasalahan yang telah dipaparkan sebelumnya, kami mengusulkan sebuah solusi berbentuk aplikasi website di mana masyarakat dapat melihat apa saja jenis mobil yang direkomendasikan di dalam website tersebut sehingga masyarakat tidak terjebak dengan tawaran harga mobil dari penjual yang tidak melihat rentang harga yang sebenarnya.<br/>

<h4>Analisis kompetitor: </h4>
Kompetitor 1<br/>
Nama: OLX<br/>
Jenis Kompetitor: Indirect Competitors<br/>
Jenis Produk: Marketplace<br/>
Target Customer: Masyarakat Umum<br/>
Kelebihan: Terdapat filter merk, harga, warna, kondisi, dan lokasi penjual; Datanya realtime dan banyak<br/>
Kekurangan: Informasi penjual kadang tidak valid; Aplikasi masih kurang stabil; Resiko permainan harga oleh penjual<br/>
Key Competitive Advantage & Unique Value: Produk yang dibuat menggunakan AI untuk menentukan harga mobil dan mencari mobil dengan kemiripan harga atau komponen lainnya<br/>

Kompetitor 2<br/>
Nama: Mobil123<br/>
Jenis Kompetitor: Indirect Competitors<br/>
Jenis Produk: Marketplace<br/>
Target Customer: Masyarakat Umum<br/>
Kelebihan: Datanya banyak; Terdapat filter merk, harga, warna, kondisi, dan lokasi penjual<br/>
Kekurangan: Informasi penjual kadang tidak valid; Aplikasi masih kurang stabil; Resiko permainan harga oleh penjual<br/>
Key Competitive Advantage & Unique Value: Produk yang dibuat menggunakan AI untuk menentukan harga mobil dan mencari mobil dengan kemiripan harga atau komponen lainnya<br/>

Kompetitor 3<br/>
Nama: Carmudi<br/>
Jenis Kompetitor: Indirect Competitors<br/>
Jenis Produk: Marketplace mobil/motor<br/>
Target Customer: Masyarakat Umum<br/>
Kelebihan: Sudah mempunyai pengguna; Data yang dikumpulkan banyak<br/>
Kekurangan: Informasi penjual kadang tidak valid; Aplikasi masih kurang stabil; Resiko permainan harga oleh penjual <br/>
Key Competitive Advantage & Unique Value: Produk yang dibuat menggunakan AI untuk menentukan harga mobil dan mencari mobil dengan kemiripan harga atau komponen lainnya<br/>



<h3>Jawaban dari Modul 2<h3>
<h4>Metode SDLC yang Digunakan:</h4>
Agile, karena metode ini merupakan metode yang fleksibel dimana pengembangan dilakukan dalam jangka pendek serta metode ini lebih beradaptasi terhadap perubahan dalam bentuk apapun.<br/>

<h4>Tujuan dari produk: </h4>
Untuk merekomendasikan kepada masyarakat terkait dengan harga mobil dan memprediksi harga mobil yang diinginkan sesuai kebutuhannya.<br/>

<h4>Pengguna potensial: </h4>
Pengguna potensial dari produk kami adalah masyarakat umum yang memiliki kepentingan dengan karakteristik :<br/>
-Ingin tahu range harga mobil saat ini<br/>
-Ingin tahu harga mobil sesuai kebutuhan yang diinginkan<br/> 
-Penjual yang ingin mengetahui harga mobil saat ini sebagai referensi harga saat menjual mobil bekas<br/>

<h4>Use Case Diagram</h4>
<img src="/AI-based-Car-Recommender-System/img/Use_Case.jpg" alt="Use Case Diagram">
  
<h4>Functional Requirements</h4>
<img src="/AI-based-Car-Recommender-System/img/FR.jpg" alt="Functional Requirements">
  
<h4>Entity Relationship Diagram</h4>
<img src="/AI-based-Car-Recommender-System/img/ERD.jpg" alt="ERD">
  
<h4>Low-Fidelity Design</h4>
<img src="/AI-based-Car-Recommender-System/img/Low_Fi1.jpg" alt="Low Fidelity (1)">
<img src="/AI-based-Car-Recommender-System/img/Low_Fi2.jpg" alt="Low Fidelity (2)">
<img src="/AI-based-Car-Recommender-System/img/Low_Fi3.jpg" alt="Low Fidelity (3)">

<h4>Gantt-Chart</h4>
<img src="/AI-based-Car-Recommender-System/img/GC_1.jpg" alt="Gantt Chart (1)">
<img src="/AI-based-Car-Recommender-System/img/GC_2.jpg" alt="Gantt Chart (2)">

<h4>Arsitektur Virtual Network dan Load Balancing</h4>
<img src="/AI-based-Car-Recommender-System/img/arch design.jpg" alt="Desain Arsitektur">
Data penjualan mobil disimpan dalam bentuk tabel pada Azure Table Storage, kemudian data tersebut diletakkan pada Virtual Machine yang digunakan untuk men-train model Machine Learning. Machine Learning di-train menggunakan Azure Machine Learning Services. Setelah di-train, model akan diregistrasikan dan di-deploy di Azure Container Instances. Pada Azure Container Instances, didapatkan endpoint dan key yang nantinya akan digunakan pada website yang kami buat. Kemudian, saat client memasukan data untuk diprediksi, function apps akan men-trigger Azure CosmosDB untuk menambahkan data. Data pada Azure CosmosDB digunakan untuk keperluan analitik, misalnya untuk melihat tren pencarian oleh user atau untuk melihat mobil yang paling banyak dicari oleh user. Visualisasi dapat dilakukan menggunakan Power BI atau Tableau.
