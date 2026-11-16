# Projeyi anlatırken işine yarayacak kısa notlar

## Proje fikri

Bir sevkiyat için yükleme yeri, teslim yeri, taşıma türü, tarih ve durum bilgilerini kaydetmeye yarayan basit bir uygulama. Sevkiyatın planlanıp planlanmadığı, yolda olup olmadığı veya teslim edilip edilmediği tek ekrandan görülebiliyor.

## Uygulama nasıl çalışıyor?

1. Kullanıcı soldaki formdan yeni kayıt giriyor.
2. `AnaSayfa.jsx` dosyası bu bilgileri alıp `kayitEkle` fonksiyonuyla listeye ekliyor.
3. Liste `SevkiyatListesi.jsx` bileşeninde gösteriliyor.
4. Düzenle seçilince bilgiler forma doluyor. Kaydet dediğinde `kayitGuncelle` çalışıyor.
5. Sil seçilince kullanıcıdan onay isteniyor ve `kayitSil` çalışıyor.
6. Liste değiştiğinde `useEffect` kayıtları LocalStorage'a yazıyor. Sayfa yenilendiğinde tekrar okunuyor.

## Dosyaların görevi

- `src/Pages/AnaSayfa.jsx`: Uygulama durumu ve butonların yaptığı işlemler.
- `src/Components/SevkiyatFormu.jsx`: Ekleme ve güncelleme formu.
- `src/Components/SevkiyatListesi.jsx`: Tablo, arama, filtre ve işlem butonları.
- `src/Components/OzetKartlari.jsx`: Üstteki sayısal kutucuklar.
- `src/Components/DurumEtiketi.jsx`: Duruma göre değişen etiket.
- `src/Interfaces/sevkiyatModel.js`: Alanların başlangıç değerleri ve seçenekler.
- `src/utils/sevkiyatIslemleri.js`: Ekleme, güncelleme, silme, filtreleme fonksiyonları.
- `src/utils/yerelKayit.js`: LocalStorage okuma ve yazma.
- `src/styles.css`: Renkler, boyutlar, telefon ekranındaki görünüm.

## Karşılaşabileceğin sorular

**Neden React?** Sayfanın form, tablo ve özet bölümlerini ayrı bileşenlerde oluşturmak için kullandım.

**CRUD nedir?** Create (ekle), Read (listele), Update (güncelle), Delete (sil) işlemlerinin kısaltması.

**Veriler nerede tutuluyor?** Aynı tarayıcının LocalStorage alanında; veritabanı veya giriş sistemi yok.

**Sayfa yenilenince neden kayıtlar silinmiyor?** LocalStorage verileri sayfa yenilense de saklar. React sayfa açılırken onları yeniden okuyor.

**İnternet olmadan çalışır mı?** `npm install` ilk kez bağımlılıkları indirmek için internet ister. Kurulumdan sonra yerel geliştirme sunucusu internet olmadan açılabilir.

**Kayıtlar başka bilgisayarda görünür mü?** Hayır. Bunun için ayrıca sunucu ve ortak veritabanı gerekir.

## Küçük kişiselleştirmeler

- Üst başlığı `AnaSayfa.jsx` içinde değiştirebilirsin.
- Başlangıçtaki örnek güzergâhlar `src/data/ornekKayitlar.js` dosyasında.
- Mavi ana rengi `src/styles.css` içerisinde `#164b84` aratarak bulabilirsin.
- Taşıma türlerini `src/Interfaces/sevkiyatModel.js` dosyasındaki listeye ekleyebilirsin.

Projeyi teslim etmeden önce kendi bilgisayarında açıp her işlemi kendin denemen ve ne yaptığını açıklayabilecek kadar incelemen iyi olur.
