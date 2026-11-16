function tarihEkle(gunFarki) {
  const tarih = new Date();
  tarih.setDate(tarih.getDate() + gunFarki);
  const yil = tarih.getFullYear();
  const ay = String(tarih.getMonth() + 1).padStart(2, '0');
  const gun = String(tarih.getDate()).padStart(2, '0');
  return `${yil}-${ay}-${gun}`;
}

// Uygulama ilk açıldığında birkaç örnek kayıt görünür.
export function ornekKayitlar() {
  return [
    {
      id: 'ornek-1', yukleme: 'Evyap Limanı', teslim: 'Gebze Depo',
      tur: 'Konteyner', tarih: tarihEkle(1), durum: 'Planlandı',
      not: 'Liman çıkışı için araç planlanacak.',
    },
    {
      id: 'ornek-2', yukleme: 'Gebze Depo', teslim: 'Çankırı Fabrika',
      tur: 'Komple TIR', tarih: tarihEkle(0), durum: 'Yolda',
      not: 'Sabah yüklemesi tamamlandı.',
    },
    {
      id: 'ornek-3', yukleme: 'İzmir', teslim: 'Bursa',
      tur: 'Parsiyel yük', tarih: tarihEkle(-2), durum: 'Teslim Edildi',
      not: '',
    },
  ];
}
