angular.module('gooeyApp.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Isyana Saraswati',
    status: 'Mahasiswi, 21th',
    url: '/media/kor.mp3', 
    face: 'img/m1.jpg',
    np: 'Keep Being You'
  }, {
    id: 1,
    name: 'Mnek & Zarra Larsson', 
    lastText: 'Barakallah untuk umur yang semakin berkurang. Diberi kemudahan disetiap langkahnya, kesehatan, diberikan yang terbaik u tuk segala pilihannya. Tambah rajin ibadahnya .',
    status: 'Mahasiswi, 21th',
    face: 'img/m2.jpg',
    np: 'Never Forget You',
  }, {
    id: 2,
    name: 'Rachel Plattern',
    lastText: 'Selamat ulang tahun eki, semoga panjang umur sehat selalu jadi cowok setia. dan semoga langgeng same kakek nenek.. grin emotikon',
    status: 'Mahasiswa, 21th',
    face: 'img/m3.jpg',
    np: 'Fight Song',
 
  }, {
    id: 3,
    name: 'Rihanna',
    lastText: 'Hai Ekky, Yaumul Milad semoga dengan bertambahnya usia semakin membuka pikiran, wawasan kmu untuk menjadi mausia yang lebih baik lagi, yang mampu memberikan kesejukan kepada semua orang, yang mampu memposisikan diri untuk selalu menjadi sosok yang dibutuhan orang dalam situasi apapun dan yang paling penting jaga dan tingkatkan amal ibadah',
    status: 'Mahasiswa, 21th',
    face: 'img/m4.jpg',
    np: 'Diamonds',

  }, {
    id: 4,
    name: 'Justin Beiber',
    lastText: '"Selamat mengulang hari lahir ki, umur nya berkurng semoga semakin berkah,  segala sesuatu dipermudah sama Allah,semoga semakin dewasa,semakin dekat sama Allah,  rajin ibadahnya,  sayang keluarga, dan bahagiain orng orang yg sayang sama eki, selalu sayang himatif jugaa yee ki. Doa yg terbaiklah buat eki mah, all the best for you"',
    status: 'Mahasiswi, 19th',
    face: 'img/m5.jpg',
    np: 'Love yourself',
  }, {
    id: 5,
    name: 'Little Miz',
    lastText: 'Happy birthday eki semoga panjang umur, sehat selalu, semoga lebih baik kedepannya dan semoga langgeng juga sama teh tya nya jangan berantem2 mulu yahh rukun2 .. amiinn 😇🎉🎁',
    status: 'Mahasiswi, 20th',
    face: 'img/m6.jpg',
    np: 'Love me Like You Do',

  }, {
    id: 6,
    name: 'Last Child',
    lastText: 'Eki selamat ulang tahun, semoga di umur yang ke 20 jangan sampe yang macem", jagain pacarnya, jangan selingkuh, inget lebih mementingkan kepentingan kelompok (organisasi) ketimbang pribadi hehehe,urusin himpunan jangan main mulu hehehe semoga semuanya kecapai AMIN YA RABBAL ALAMIN',
    status: 'Mahasiswa, 21th',
    face: 'img/m7.jpg',
    np: 'Surat Cinta Untuk Starla',

  },{
    id: 7,
    name: 'Geisha',
    lastText: 'Hallo eki. Sanah helwah. Barakallahu fii umrik ya🎂🎁🎉 Eciee 20 taun ya. Kita seumuran skrg haha. Semoga umur nya berkah, jadi pribadi yang lebih baik lagi, semangat dan sukses ya. Rajin2 ya ki, titip himatif, temen2, sama adik2 nya. Eh satu lagi semoga jodoh sama teh thiya nya, jgn sering2 berantem, apalagi perang di timeline line ✌',
    status: 'Mahasiswi, 20th',
    face: 'img/m7.jpg',
    np: 'Lagu Cinta',

  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('days', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var days = [{
    id: 0,
    name: 'Hari 1',
    day: 'Senin',
    date: '29 Februari 2016',
    lastText: 'ini salah satu line yang paling aku suka dan aku tunggu setiap malam,banyak orang bilang tidur nyenyak atau tidur gelisah saat tidur terjadi akibat bagaimana suasana hati kita sebelum tidur. contoh kecil yang mungkin kamu rasain juga hampir setiap hari kita berantem hanya karena masalah kecil tapi kita berdua selalu berusaha menyelesaikan masalah tersebut karena kita berdua tidak bisa tidur bila ada masalah sehingag membuat hati kita ga akan tenang. sehingga setelah masalah kita selesai barulah kita berdua bisa tidur dengan perasaan tenang dan bahagia. mungkin terlihat tindakan kecil yang tak seberapa tapi bagi aku ini adalah hal penting dalam sebuah masalah yaitu pantang tidur sebelum baikan, cukup hanya dengan line seperti ini aku bahagia. iloveyou dan terima kasih',
    face: 'img/project/29feb.png'
  },{
    id: 1,
    name: 'Hari 2',
    day: 'Selasa',
    date: '1 Maret 2016',
    lastText: 'Berantem kita mungkin tak kenal subuh, pagi, siang , sore, malem dan tengah malam, bisa dibilang everytime is problem, HAHA ya ga yang ? berantem terus, tapi aku suka berantem kecil tapi banyak dibanding sekali berantem besar. Tapi masalah dihubungan kita tidak pernah jadi beban tapi sebagai pengenalan diri pasangan yang lebih dalam itu menurut kau yang,  kalau kamu gimana ? aku tau dan aku sangat sadar kalau komunikasi aku sanagt buruk kalau dibanding kamu yang bagus banget. Sehingga isi kepala kamu isinya semua KECURIGAAN aja , padahal aku lama bales karena ada hal yang sedang aku lakukan  untuk hidup aku yang tentu tidak ada kaitan dengan orang lain. Tapi aku coba buat terus berusaha memahai karakter kamu itu dengan baik sampai akhirnya aku tau, meskipun berantem makanna kita sehari hari tapi bukan berrti komunikasi juga berantem, melainkan komunikasi yang agak lebih baik yang saya lakuin,heheh aku ngelakuin itu ada sebab bukan ada nya orang lain kok, sampai hari ini kamu masih yang terbaik yang aku punya, iloveyou dan terima kasih :)',
    face: 'img/project/1mar.png'
  }, {
    id: 2,
    name: 'Hari 3',
    day: 'Rabu',
    date: '2 Maret 2016',
    lastText: 'Maksud dari kata “ Kalau akulagi kumpul aku jarang megang handphone dan males di cengin sama anak anak” itu adalah aku kalau udah kumpul bareng temen aku ataupun lagi ngebantuin orang ga bisa focus ke banyak karena kalau aku focus ke lebih dari satu hal yang deadline eaku takut ga bsa aku selesain. Kalau lagi kumpul terkadang aku sama temen temen aku terlalu asik , itu karena kami menggunakan waktu pertemuan yang singkat ini yang kami pun gatau kapan bisa ngeakukin atau kumpul kayak hari ini, toh aku kadang ngabarin kan ? meskipun ga seinstens itu, ya aku minta pengertian kamu tapi ujung ujungnya malah kamu curigaan terus sama aku. Bukan kamu ga penting cuman aku gamau bales line kamu dengan pikiran yang ga kekamu jadi jadinya balesnya singkat dan berujung berantem , dan aku pasti ga bisa menikmati kumpul karena satu sisi aku bahaga kumpul bareng temen aku tapi satu sisi kamu marah sama aku , heheh tapi insya allah aku yakin suatu hari nanati km akan mengeti yang, iloveyou dan terima kasih',
    face: 'img/project/2mar.png'
  }, {
    id: 3,
    name: 'Hari 4',
    day: 'Kamis',
    date: '3 Maret 2016',
    lastText: 'Seperti yang aku bilang everytime is problem but everysecond is care   hari ini kamu nyebelin banget tau ga yang ? cuman gara gara pendapat aku yang selalu terlihat salah terus sih jadi kamu anggap apa yang aku kasih saran ke orang pasti salah. Maksud aku ngasih solusi itu lewat agia supaya agia menyampaikan ke kamu dan SELURUH PEGURUS HIMPUNAN  bukan kekamu dan bukan setumpuk pemikiran negative kamu tentang komentar aku yang kamu sendiri ga pernah mau mencerna tapi langsung aja ngejudge salah,. Aku ngasih solusi itu karena itu salah satu solusi yang bisa kalian pakai kalau kalian gamau ngmbil solusi yang kalaian tau tapi kalaian gamau ambil padahal itu juga sah sah aja. Hari ini itu rasanya aku marah banget banget kekamu yang marah banget hari ini itu aku lagi butuh SUPPORT bukan di SEMPROT. Tapi yasudahlah, semoga kamubisa lebih dewasa sebelum bertindak dan bicara yang. Mungkin maaf kalau hari ini aku cukup lama diemin kamu karena aku kesel dan amarah sama kamu dan aku harap ini hanya sekali yaa, iloveyou dan terima kasih',
    face: 'img/project/3mar.png'
  }, {
    id: 4,
    name: 'Hari 5',
    day: 'Jumat',
    date: '4 Maret 2016',
    lastText: 'ini salah satu usaha kamu yang aku paling suka, meskipun aku diemnin kamu seharian tapi kamu ga pernah nyerah dan akhirnya kita bisa menyelesaikan dengan baik meskipun lewat telponana. Sehari kita bisa telponan berjam – jam meskipun hasil obrolan itu kebanyakan dengan kata ‘kenapa diem’ terus ‘kamu juga diem’ dan biasanya ujung ujungnya jadi maslaah tapi Alhamdulillah selalu kita selesain sebeum tidur yaaa, terima kasih kamu yang berbeda kamu yang special kamu yang aku punya. Iloveyou dan terima kasih',
    face: 'img/project/4mar.png'
  }, {
    id: 5,
    name: 'Hari 6',
    day: 'Sabtu',
    date: '5 Maret 2016',
    lastText: 'ini salah satu bukti kalau kamu CEMBURU, padahal hari ini kita ketemu seharian bercanda, ketawa, marah lengkap dah pokoknya. Hal yang aku paling gasuka dang a ngerti sampe hari ini kenapa kamu kalau ada masalah selalu diem. Dan kamu bisa bisanya lagi ngobrol asik terus diem seakan sibuk main gadjet kamu sendiri dan nyuekin aku seenak kamu, meskipun ujung ujungnya kamu juga yang ganggu aku lagi, dan masalah itu selalu dibahas nanti malamnya kalau kita udh ga ketemu dan bahas via line yang kadang aku kebingunan sendiri kalau kamu udh diem. Mungkin emang aku terlalu ramah ke orang, aku terlalu baik ke orang dan aku punya banyak temen cowo yang semua peduli banget sama aku. Padahal kamu tau sendiri kita satu lingkungan aku anak TI yang hampir setiap orang tau anak TI itu dominan adalah COWOK, dan cewek yang ada dibidang tersebut bisa dihitung dan kamu tau sendri dikeas itu ceweknya cuman 7 orang dan wajar dong aku lebih banyak punya temen cowo dibanding cewe? Dikelas kamupun kana da anak ceweknya apa mereka ga main sama cowo ? apa mereka ga akrab sama temen cowo kelasnya ? aku baik ke orang karena aku percaya menolong orang itu perbuatan yang baik, begitupun dengan ramah, bukan berarti aku kecentilan atau apa karena bagi aku satau temen berjuta kebahagiaan. Dan 1 kebaikan bisa menolong aku dari banyak masalahiloveyou dan terima kasih',
     face: 'img/project/5mar.png'
  }, {
    id: 6,
    name: 'Hari 7',
    day: 'Minggu',
    date: '6 Maret 2016',
    lastText: 'Hari ini kamu masih curiga dan cemburu sama orang yang sama , dan masih memperpanjang  masalah yang udah kelar dibahas kemaren. Ga ngertilah aku harus ngejelasin bagaimana? Tapi aku juga emang salah ga bilang sama kamu karena semua serba deadline kamu kan tau aku rusuh ahahah. Dia cuman temen ga lebih, jangan cemburu ke dia lagi yah. Cemburu itu ke laptop aku yang sealalu setia sama aku yang hehhe iloveyou dan terima kasih ',
    face: 'img/project/6mar.png'
  },{
    id: 7,
    name: 'Hari 8',
    day: 'Senin',
    date: '7 Maret 2016',
    lastText: 'Kita bisa dalam persekian detik berantem terus baik lagi berantem lagi baiakan lagi heehe, aku bukannya ingin ikut campur masalah himpunan, tapi aku ingin membangun himpunna yang kmren sempet jatuh, aku kayak gini karena aku teralu cinta sama himatif, karena himatif banyak ngajarin aku banyak hal yang sangat berpengaruh dalam hidup aku. Membangun kepercayaan mahasiswa untuk selalu ikut acara itu ga mudah tapi dengan mudah nya kalian menjauhkan himatif dari mahasiswa itu yang sangat buat aku kecewa. Dan aku ingin memperbaiki itu dari jauh, maaf jika aku sellau ikut campur tapi itu karena mereka yang meminta pendapat aku, mungkin kamu ga mau aku terlalu kut campur tapi akan aku batasin ruang gerak aku untuk himpunan, iloveyu dan terima kasih',
     face: 'img/project/7mar.png'
  }, {
    id: 8,
    name: 'Hari 9',
    day: 'Selasa',
    date: '8 Maret 2016',
    lastText: 'Hari ini juga bukti hubungan kita yang unik dalam persekian detik bisa marah, berantem dan persekian detik juga baikan. Masih masalah himpunna juga kita bahas, andai kamu menjelaskan alasann kamu kan jadi aku ga perlu harus bersikukuh seperti ini, iya insya allah aku akan belajar membatasi ruang gerak aku untuk ikut campur masalh himpunan. Terima kasih kamu hadir dengan penuh warna. Iloveyou dan terima kasih',
    face: 'img/project/8mar.png'
  }, {
    id: 9,
    name: 'Hari 10',
    day: 'Rabu',
    date: '9 Maret 2016',
    lastText: 'Mungkin terkadang aku sering merasa ragu sama hubungan ini ? entah kenapa aku juga tidak tau. Kadang aku ngerasa kamu saying ga sih ke aku ? kamu serius ga sih ke aku ? kamu ada niat gasih ngegoal hubungan ini kearah itu kalau kita jodoh ? kamu sayang ga sih? Sering banget tapi aku selalu yakin akrena kamuselaluhubungin aku tiap waktu dan kalau aku ga bales atau lama kamu bisa ngomel marah kayak ibu ibu yang lagi ngegosip seru gitu.wkwkwkwkwk terima kasih selallu sabar dan setia disamping aku yaaa iloveyou dan terima kasih ',
    face: 'img/project/9mar.png'
  },{
    id: 10,
    name: 'Hari 11',
    day: 'Kamis',
    date: '10 Maret 2016',
    lastText: 'Aku seneng kalau kamu udah curhat ke aku tapi aku juga kadang suka kesel, aku ngasih solusi dikira ngejatuhin kamu ujung ujungnya berantem yang ga  jelas. Tapi ya itu masalah cuman lewat begitu saja setelah telponan baik lagi dan bisa tidur dengan nyenyak hehehehe makasi ssayang, iloveyou dan terima kasih ',
    face: 'img/project/10mar.png'
  },{
    id: 11,
    name: 'Hari 12',
    day: 'Jumat',
    date: '11 Maret 2016',
    lastText: 'Hari ini aku kesel tapi bahagia, dimulai dari pagi kita janjian ketemu terus aku udah siap siap udha cepet cepet eh taunya sampe kosan kamu nya ga ada pas bua hp baru ngabarin aseli lah itu nyebelin banget tapi gpp karena alasan kamu masuk akal yaitu bantu orang lain. Kamu yang nyuruh aku ke agia kamu juga yang marah kan kan kan s** gitulah hehe iloveyou dan terima kasih',
    face: 'img/project/11mar.png'
  },{
    id: 12,
    name: 'Hari 13',
    day: 'Sabtu',
    date: '12 Maret 2016',
    lastText: 'Aku suka carenya kamu, aku suka bawelnya kamu, tapi aku gasuka tiba tiba suka asik sendiri. Apa yang kamu takuti ? roh aku ga chat sama cowo lain ? toh kalau kamu ga ada aku ga kemna mana aplagi week end apalagi kegiatan kamu weekday yaa pastilah aku cuman dikantor aja ga akan kemana mana .. kamu mah suka lucu. Kalau telpon mati itu bukan aku yang matiin tapi mungkin sinyal yang mati, ga sopan banget lah aku kalau aku yang sengaja matiin itutelpon kamu mah suka aneh aneh aja cepet banget marahnyaaaaaaaaa, iloveyou dan terima kasih',
    face: 'img/project/12mar.png'
  }, {
    id: 13,
    name: 'Hari 14',
    day: 'Minggu',
    date: '13 Maret 2016',
    lastText: 'Maafkan aku kalau aku masih belum bisa menempatkan diri aku saat lagi ada di dua keadaan yaa sayng, tapi meskipun aku terlihat cuek dan sibuk tapi aku tetep memperhatikan kamu dari jauh kok saying, tenang saying aku cuman buat kamu syang , iloveyou dan terim kasih saying ',
    face: 'img/project/13mar.png'
  },{
    id: 14,
    name: 'Hari 15',
    day: 'Senin',
    date: '14 Maret 2016',
    lastText: 'Ga ngerti sama kamu yang, selalu dan paling seneng kalau buat aku ngambek, tapi kalau aku udah ngambek kamu sendiri yang minta maaf  kamu mah suka aneh tapi aku sayang sama kamu aja ',
    face: 'img/project/14mar.png'
  }, {
    id: 15,
    name: 'Hari 16',
    day: 'Selasa',
    date: '15 Maret 2016',
    lastText: 'Kamu mah suka ngomong gitu tapi nyebelin terus buat aku bete terus tapi banyak nya sih bikin aku senyum bikin aku bahagia terus sayang, aku paling sebel kalau aku udah serba salah itu yang asli sayang aku paling ga bisa kesel tapi aku sayang jadi gmana ya a?',
    face: 'img/project/15mar.png'
  }, {
    id: 16,
    name: 'Hari 17',
    day: 'Rabu',
    date: '16 Maret 2016',
    lastText: 'Selamat Ulang Tahun Eki, Semoga makin baik makin baik, Selamat Ulang Tahun Eki, Semoga makin baik makin baik, Selamat Ulang Tahun Eki',
    face: 'img/project/16mar.png'
  },{
    id: 17,
    name: 'Hari 18',
    day: 'Kamis',
    date: '17 Maret 2016',
    lastText: 'Kalau sayng ke kamu tanpa kamu minta juga pasti aku lakuin , kamu ga perlu takut apalagi ragu sama aku. Meskipun aku punya banyak temen cowo yang baik, peduli, perhatian ke aku tapi cumna kamu saying yang aku saying ehehe, jangan godain aku mulu dong sayng mentang mentang aku lola kamu mah jahat banget, kamu nyebelin tapi aku saying gimna dong syang ?',
    face: 'img/project/17mar.png'
  }, {
    id: 18,
    name: 'Hari 19',
    day: 'Jumat',
    date: '18 Maret 2016',
    lastText: 'Maaf kalau aku sering kali suka ga perhatiin kanan kiri aku sayang , tapi bukan berrti aku sengaja buat cuekin kamu saying kan kamu tau sendiri kalau mata aku minus jadi mana bisa ngeliat jauh sayng, jangan cemburu terus dong saying,',
    face: 'img/project/18mar.png'
  }, {
    id: 19,
    name: 'Hari 20',
    day: 'Sabtu',
    date: '19 Maret 2016',
    lastText: 'Iya aku harap juga kayak gitu, sayang kamu , protektif kamu , perhatian kamu sampe kapan pun ga pernah berubah sayang, maafin yaa kalau sampe saat ini aku masih belom bisa jadi yang terbaik buat kamu sayang  tapi aku akan terus belajar dan belajar sayang , iloveyou dan terim kasih untuk sayang dan waktu kamu ke aku dan untuk buat aku terus bahagia dsampingkamu sayang , iloveyou dan terima kasih',
    face: 'img/project/19mar.png'
  },{
    id: 20,
    name: 'Hari 21',
    day: 'Minggu',
    date: '20 Maret 2016',
    lastText: 'Kamu selalu nuduh kalau aku yang matiin telpon, padahal yang matiin telpon itu kadang sinyal bukan aku ataupun kamu, tapi kamu slalu nuduh aku-,- padahal kan operator yang mutusin sayang , semoga nanti kamu bisa lebih sadar yaaa wwkkw iloveyou',
    face: 'img/project/20mar.png'
  },{
    id: 21,
    name: '22',
    day: 'Senin',
    date: '21 Maret 2016',
    lastText: 'Aku paling gak suka kalau kamu udah ngeluarin kata kata kayak gini, kamu itu ga pernah ganggu aku yang dalam kondisi appun , ya aku tau aku memang salah aku selalu lama bales, sekalinya bales lama dan sekalinya bales singkat, maafin sayang Karena aku ga bisa focus kebanyak hal, sama kayak sayang aku yang cuman sayangnya sama kamu aja sayang hehehe ga ngegombal inimah cuman sedikit da heheh, iloveyou sayang and terima kasih sayang ku ',
    face: 'img/project/21mar.png'
  }, {
    id: 22,
    name: 'Hari 23',
    day: 'Selasa',
    date: '22 Maret 2016',
    lastText: 'Kadang aku suka ga abis pikir sama kamu ini sayang, bisa banget kepikiran buat bales sendiri chat yang kamu kirim ke aku yaaa mentang kamu bisa akses line kamu hahah, sampe aku hampir nuduh orang parah lah kamu sayng , tapi aku suka kelakuan kecil kamu yang aneh yang bikin aku semakin hari semakin sayng banget sama kamu sayang, tetep bareng aku, terima kasih selalu buat aku sedih dan bahagia dengan cara kamu sendiri yaa sayang, iloveyou and thank you sayng ',
    face: 'img/project/22mar.png'
  }, {
    id: 23,
    name: 'Hari 24',
    day: 'Rabu',
    date: '23 Maret 2016',
    lastText: 'Gini nih kamu sebentar bentar buat aku melting, sebentar bentar buat aku sedih terus sebentar bentar buat aku nangis  ga ngerti saa jalan piker kamu sayang tapi aku suka, tapi aku sayang, tapi aku cinta tapi akum akin sayng tapi itu yang buat aku selalu rindu dan pengen selalu weekend sayang  iloveyou and imissyou ',
    face: 'img/project/23mar.png'
  },{
    id: 24,
    name: 'Hari 25',
    day: 'Kamis',
    date: '24 Maret 2016',
    lastText: 'Lagi dan lagi aku minta maaf yaa sayang kalau aku masih dan sering ngilang ngilang , maafin kalau komunikasi aku sangat buruk kalu dibandingin kamu, tapi sayang aku kalau mau dibanding kan aku gatakut sayng hahaha',
    face: 'img/project/24mar.png'
  }, {
    id: 25,
    name: 'Hari 26',
    day: 'Jumat',
    date: '25 Maret 2016',
    lastText: 'Ini nih bangun bangun tibatiba buka line dikirimin kayak gini gimana ga melting langsung dan makin jatung cnta coba <3 , secara biasanya aku yang buatin buat orang lain tapi kali ini aku yang dibuatin dan itu rasanya bahagia, terima kasih sayang kamu selalu beljar ngerti sifat sifat buruk aku yaaaa  ',
    face: 'img/project/25mar.png'
  }, {
    id: 26,
    name: 'Hari 27',
    day: 'Sabtu',
    date: '26 Maret 2016',
    lastText: 'Kamu itu suka marah marah ke aku, suka tiba tiba pundung malah kadang pundungnya lebih parah dari aku, kalau kamu marah aku peka kalau aku marah kamu mah lama pekanyaaa  kenapa sih sayang ?',
    face: 'img/project/26mar.png'
  },{
    id: 27,
    name: '28',
    day: 'Minggu',
    date: '27 Maret 2016',
    lastText: 'Nyamannya sama yang cowok yaa sayang, jangan sama cewe yaaa biar aku ga ngomel ngomel sampe kamu bising banget heheeee, INGET aku ngasih kamu kepercyaaan sok aja mau deket sama sapa juga, mau main sama siapa juga silahkan aku ga akan ngelarang tapi jangan sampe ada sesuatu yang berlebih yaa sayang hehhee kayak masakan kebannyakan garem pasti asin , kebnayakan gula pasti manis tapi yang biasa aja biar pas pas aja sayang, iloveyou ',
    face: 'img/project/27mar.png'
  },{
    id: 28,
    name: '29',
    day: 'Senin',
    date: '28 Maret 2016',
    lastText: 'Aku mungkin punya rencana untuk kerja di daerah aku, bukan berrati kita ga bisa ketemu? Temen temen aku aja bisa kok LDR bertahun tahun yang, berantem kan udah biasa dihubungan kita sayang heheh tapi semoga dikurangin yaa sayng, aku ga bisa lam lama berantem sm kamu sayang … sekarang mah doain aja aku skripsi selesai nnti teenin aku cari kera dibandung sayang siapa tau rejeki aku masih dibandung kan siapa tau , manusia bisa berkhayal tapi tetep allah yang menentukan sayang  iloveyou and terima kasih ',
     face: 'img/project/28mar.png'
  }, {
    id: 29,
    name: 'Hari 30',
    day: 'Selasa',
    date: '29 Maret 2016',
    lastText: 'Hari ini aku gatau ngerasa bahagia banget, tapi kamu tau ga kalau kamu udah ngerusak rencana aku, buat aku kelabakan hahaha, tapi ga apapap semua untuk kamu special buat kamu, mungkin aku ga bisa ngasih sesuatu yang kamu harapin tapi semoga aplikasi bisa membuat kamu percaya kalau saying aku ke kamu itu lebih dari yang kamu tau sayng, selamat ulang tahun, iloveyou',
    face: 'img/project/29mar.png'
  }];

  return {
    all: function() {
      return days;
    },
    remove: function(day) {
      days.splice(days.indexOf(day), 1);
    },
    get: function(dayId) {
      for (var i = 0; i < days.length; i++) {
        if (days[i].id === parseInt(dayId)) {
          return days[i];
        }
      }
      return null;
    }
  };
})
.factory('plays', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var plays = [{
    id: 1,
    name: 'Isyana Saraswati - Keep Being You',
    url: '/media/IS.mp3', 
    time: '3:19',
    face: 'img/project/29mar.png'
  },{
    id: 2,
    name: 'Mnek & Zara Larsson - Never Forget You',
     url: '/media/mnek.mp3',
     time: '3:22',
     face: 'img/project/1mar.png'
  },{
     id: 3,
     name: 'Rachel Plattern - Fight Song',
     url: '/media/rp.mp3',
     time: '3:22',
     face: 'img/project/1mar.png'
  },{
    id: 4,
    name: 'Rihanna - Diamonds',
    url: '/media/rihn.mp3', 
    time: '3:45',
    face: 'img/project/29mar.png'
  },{
    id: 5,
    name: 'Justin Beiber - Love Youself',
    url: '/media/jb.mp3', 
    time: '4:13',
    face: 'img/project/29mar.png'
  },{
    id: 6,
    name: 'Last Child - Surat Cinta Untuk Starla',
    url: '/media/lc.mp3', 
    time: '5:08',
    face: 'img/project/29mar.png'
  },{
    id: 7 ,
    name: 'Geisha - Lagu Cinta',
    url: '/media/geisha.mp3',
    time: '4:00',
    face: 'img/project/29feb.png'
  }];

  return {
    all: function() {
      return plays;
    },
    remove: function(play) {
      plays.splice(plays.indexOf(play), 1);
    },
    get: function(playId) {
      for (var i = 0; i < plays.length; i++) {
        if (plays[i].id === parseInt(playId)) {
          return plays[i];
        }
      }
      return null;
    }
  };
});
