export function kayitEkle(kayitlar, yeniKayit) {
  return [yeniKayit, ...kayitlar];
}

export function kayitGuncelle(kayitlar, id, bilgiler) {
  return kayitlar.map((kayit) =>
    kayit.id === id ? { ...kayit, ...bilgiler } : kayit
  );
}

export function kayitSil(kayitlar, id) {
  return kayitlar.filter((kayit) => kayit.id !== id);
}

export function kayitlariFiltrele(kayitlar, arama, secilenDurum) {
  const kelime = arama.trim().toLocaleLowerCase('tr-TR');

  return kayitlar
    .filter((kayit) => {
      const durumUygun = secilenDurum === 'Tümü' || kayit.durum === secilenDurum;
      const metin = [kayit.yukleme, kayit.teslim, kayit.tur, kayit.not]
        .join(' ')
        .toLocaleLowerCase('tr-TR');
      return durumUygun && metin.includes(kelime);
    })
    .sort((a, b) => b.tarih.localeCompare(a.tarih));
}

export function durumSayilari(kayitlar) {
  return {
    toplam: kayitlar.length,
    planlandi: kayitlar.filter((kayit) => kayit.durum === 'Planlandı').length,
    yolda: kayitlar.filter((kayit) => kayit.durum === 'Yolda').length,
    teslim: kayitlar.filter((kayit) => kayit.durum === 'Teslim Edildi').length,
  };
}

export function turkceTarih(tarih) {
  if (!tarih) return '-';
  const deger = new Date(`${tarih}T12:00:00`);
  return Number.isNaN(deger.getTime())
    ? tarih
    : deger.toLocaleDateString('tr-TR', {
        day: 'numeric', month: 'short', year: 'numeric',
      });
}
