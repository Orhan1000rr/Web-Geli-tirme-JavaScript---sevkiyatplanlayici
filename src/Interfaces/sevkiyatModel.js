// Formda kullanılan seçenekleri tek bir yerde tutuyoruz.
export const TASIMA_TURLERI = [
  'Komple TIR',
  'Konteyner',
  'Parsiyel yük',
  'Kamyon',
];

export const DURUMLAR = ['Planlandı', 'Yolda', 'Teslim Edildi'];

// Bir sevkiyat kaydında id, yukleme, teslim, tur, tarih, durum ve not alanları vardır.
export const BOS_FORM = {
  yukleme: '',
  teslim: '',
  tur: 'Komple TIR',
  tarih: '',
  durum: 'Planlandı',
  not: '',
};
