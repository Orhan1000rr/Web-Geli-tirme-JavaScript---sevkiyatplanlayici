# Kurulum, kontrol ve teslim adımları

## 1. Başlamadan önce

- [Node.js](https://nodejs.org/) (LTS sürümü) kurulu olsun. Kurarken varsayılan seçenekleri kullan.
- [Visual Studio Code](https://code.visualstudio.com/) kurulu olsun.
- Bu projenin ZIP dosyasını açıp klasörü örneğin `Masaüstü/sevkiyat-planlayici` konumuna çıkar.

## 2. Çalıştırma (Windows)

1. Visual Studio Code'u aç.
2. **File > Open Folder** seç, `sevkiyat-planlayici` klasörünü aç.
3. **Terminal > New Terminal** seç.
4. Terminale `npm --version` yaz. Sürüm görünüyorsa devam et.
5. Terminale `npm install` yaz ve tamamlanmasını bekle.
6. Terminale `npm run dev` yaz.
7. Terminalde görünen `Local` adresine tıkla. Genelde `http://127.0.0.1:5173/` olur.
8. İşin bitince terminalde `Ctrl + C` ile durdurabilirsin.

**Not:** PowerShell `npm.ps1 cannot be loaded` derse VS Code terminalinin sağ üst menüsünden **Command Prompt** seç ve aynı komutları yeniden çalıştır. Alternatif olarak `npm.cmd install` / `npm.cmd run dev` kullanabilirsin.

## 3. Gerçekten çalıştığını kontrol et

- [ ] Örnek üç sevkiyat kaydı görünüyor.
- [ ] Yükleme, teslim ve tarih alanlarını doldurarak yeni kayıt ekledim.
- [ ] Yeni kayıt listede göründü ve üstteki toplam sayı arttı.
- [ ] `Düzenle` ile bir kaydın durumunu `Teslim Edildi` yaptım.
- [ ] Durum etiketi ve üstteki özet güncellendi.
- [ ] `Sil` butonunda onay soruldu ve onaylayınca kayıt kaldırıldı.
- [ ] Arama ve durum filtresi çalışıyor.
- [ ] Sayfayı F5 ile yenileyince kaydettiğim kayıtlar duruyor.
- [ ] `npm test` komutu hatasız tamamlanıyor.
- [ ] `npm run build` komutu sonunda `dist` klasörü oluşuyor.
- [ ] Çalışan uygulamadan ekran görüntüsü aldım ve `docs/screenshots/gercek-ekran.png` olarak kaydettim.

## 4. GitHub'a yükle

**En kolay yol (Git kullanmadan):**

1. [github.com](https://github.com/) adresine giriş yap.
2. **New repository** ile `sevkiyat-planlayici` isimli bir depo aç, görünürlüğü **Public** seç.
3. Depoyu oluşturunca **uploading an existing file** veya **Add file > Upload files** menüsüne gir.
4. Proje klasöründeki dosya/klasörleri seçip yükle. `node_modules` ve `dist` klasörlerini yükleme. Dosya yapısı, özellikle `src`, bozulmamalı. GitHub tarayıcısı klasör sürükle-bırak işlemini destekleyebilir; olmazsa Git yöntemi kullan.
5. **Commit changes** yap. Depo sayfasının bağlantısını kopyala.

**Git komutlarıyla alternatif:** GitHub'da boş bir Public repo oluşturduktan sonra proje terminalinde:

```bash
git init
git add .
git commit -m "Sevkiyat planlayici ilk surum"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/sevkiyat-planlayici.git
git push -u origin main
```

`KULLANICI_ADIN` kısmını kendi GitHub kullanıcı adınla değiştir. Git giriş ekranı çıkabilir.

## 5. Netlify'da yayımla

1. [app.netlify.com](https://app.netlify.com/) adresine giriş yap.
2. **Add new project > Import an existing project** seç.
3. GitHub'ı bağla ve `sevkiyat-planlayici` deposunu seç.
4. **Build command** için `npm run build`, **Publish directory** için `dist` yaz.
5. **Deploy** butonuyla yayımla. Site açılınca sevkiyat ekleme/düzenleme/silmeyi orada da kontrol et.
6. Netlify site bağlantısını kopyala.

**Alternatif:** GitHub bağlantısı yapmak istemiyorsan `npm run build` komutundan sonra oluşan `dist` klasörünü Netlify Drop ile site olarak yayımlayabilirsin. Ancak yönergedeki GitHub teslim şartı yine ayrıca geçerlidir.

## 6. Proje tesliminde paylaşacakların

- **GitHub Public depo URL'si:** `https://github.com/KULLANICI_ADIN/sevkiyat-planlayici`
- **Netlify site URL'si:** Netlify'ın sana verdiği `https://...netlify.app` adresi
- **Ekran görüntüsü:** Çalışan uygulamanın ekran görüntüsünü `docs/screenshots/gercek-ekran.png` olarak kaydet. ZIP içindeki `ana-ekran.png` dosyası tasarım önizlemesidir.

Not: Bağlantılar ancak sen kendi hesaplarında depoyu oluşturup uygulamayı yayımladığında aktif olur.
