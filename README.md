# Sevkiyat Planlayıcı

React ve JavaScript ile geliştirilmiş basit bir sevkiyat takip uygulaması. Günlük taşımaları listelemek ve hangi aşamada olduklarını görmek için kullanılabilir.

## Özellikler

- Yeni sevkiyat ekleme
- Mevcut sevkiyatları listeleme
- Bir kaydın bilgilerini düzenleme
- Kayıt silme (öncesinde onay sorulur)
- Yükleme/teslim noktasına göre arama ve duruma göre filtreleme
- Planlandı, Yolda, Teslim Edildi sayıları
- Tarayıcıda LocalStorage ile kayıt tutma

> İlk açılışta uygulamanın nasıl göründüğünü göstermek için üç örnek kayıt bulunur. Bu kayıtlar da silinebilir veya düzenlenebilir. Veriler ayrı bir sunucuya gönderilmez; aynı tarayıcıda tutulur.

## Kullandığım teknolojiler

- React (bileşenler ve uygulama ekranı)
- JavaScript (ekleme, listeleme, güncelleme, silme işlemleri)
- CSS (arayüz ve mobil uyum)
- Vite (geliştirme sunucusu ve derleme)
- LocalStorage (verileri saklama)

## Bilgisayarda çalıştırma

Bilgisayarda **Node.js** kurulu olmalı (20.19+ veya 22.12+ önerilir).

1. Bu klasörü **Visual Studio Code** ile aç.
2. `Terminal > New Terminal` menüsünden terminal aç.
3. Şu komutları sırayla çalıştır:

   ```bash
   npm install
   npm run dev
   ```

4. Terminalde yazan adresi tarayıcıda aç. Normalde `http://127.0.0.1:5173/` olur.
5. Sunucuyu kapatmak için terminalde `Ctrl + C` tuşlarına bas.

## Test

```bash
npm test
```

Bu komut ekleme, güncelleme, silme, arama, filtreleme ve özet sayılarına ait basit otomatik testleri çalıştırır.

Tarayıcı üzerinde ayrıca şu adımları dene:

1. Formdaki alanları doldurup `Sevkiyat ekle` butonuna bas.
2. Yeni kaydın listede göründüğünü kontrol et.
3. Kaydın yanındaki `Düzenle` butonuna bas, durumunu değiştirip kaydet.
4. `Sil` butonunu kullan ve onay ver.
5. Bir kayıt daha ekle, sayfayı yenile (`F5`); kaydın kaldığını kontrol et.
6. Arama alanını ve durum filtresini dene.

## Proje klasörleri

```text
src/
├── Components/          # Form, liste, durum etiketi, özet kartları
├── Pages/               # Ana sayfa
├── Interfaces/          # Form alanları ve sabit seçenekler
├── data/                # İlk açılıştaki örnek kayıtlar
├── utils/               # Kayıt işlemleri ve LocalStorage
├── App.jsx
├── main.jsx
└── styles.css
```

## GitHub ve Netlify

GitHub'a bu klasördeki dosyaları yükle. `node_modules` ve `dist` klasörlerini yüklemene gerek yok (`.gitignore` içerisinde zaten dışlandılar).

Netlify'da GitHub deposunu bağlarken:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Netlify ayarları `netlify.toml` dosyasında da yer alıyor.

## Ekran görüntüsü

`docs/screenshots/ana-ekran.png` ve `mobil-onizleme.png` dosyaları arayüzün tasarım önizlemesidir. Uygulamayı kendi bilgisayarımda açtıktan sonra gerçek tarayıcı ekran görüntüsünü de bu klasöre ekleyebilirim.
