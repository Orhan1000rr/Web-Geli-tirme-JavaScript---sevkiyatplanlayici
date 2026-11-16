import test from 'node:test';
import assert from 'node:assert/strict';
import {
  kayitEkle, kayitGuncelle, kayitSil, kayitlariFiltrele, durumSayilari, turkceTarih,
} from '../src/utils/sevkiyatIslemleri.js';

const birinci = {
  id: '1', yukleme: 'Gebze', teslim: 'Çankırı', tur: 'Komple TIR',
  tarih: '2026-11-12', durum: 'Planlandı', not: 'Deneme',
};
const ikinci = {
  id: '2', yukleme: 'İzmir', teslim: 'Bursa', tur: 'Konteyner',
  tarih: '2026-11-11', durum: 'Teslim Edildi', not: '',
};

test('yeni kayıt listeye eklenir', () => {
  const sonuc = kayitEkle([birinci], ikinci);
  assert.equal(sonuc.length, 2);
  assert.equal(sonuc[0].id, '2');
});

test('kayıt düzenleme doğru kaydı değiştirir', () => {
  const sonuc = kayitGuncelle([birinci, ikinci], '1', { durum: 'Yolda' });
  assert.equal(sonuc[0].durum, 'Yolda');
  assert.equal(sonuc[1].durum, 'Teslim Edildi');
});

test('silinen kayıt listeden çıkar', () => {
  const sonuc = kayitSil([birinci, ikinci], '1');
  assert.deepEqual(sonuc.map((kayit) => kayit.id), ['2']);
});

test('yükleme noktasına göre arama yapılır', () => {
  assert.equal(kayitlariFiltrele([birinci, ikinci], 'gebze', 'Tümü').length, 1);
});

test('Türkçe karakterler aramada doğru çalışır', () => {
  assert.equal(kayitlariFiltrele([birinci, ikinci], 'İZMİR', 'Tümü')[0].id, '2');
});

test('duruma göre filtreleme çalışır', () => {
  const sonuc = kayitlariFiltrele([birinci, ikinci], '', 'Teslim Edildi');
  assert.equal(sonuc.length, 1);
  assert.equal(sonuc[0].id, '2');
});

test('liste tarih sırasına göre gösterilir', () => {
  const sonuc = kayitlariFiltrele([ikinci, birinci], '', 'Tümü');
  assert.equal(sonuc[0].id, '1');
});

test('özet sayıları hesaplanır', () => {
  assert.deepEqual(durumSayilari([birinci, ikinci]), {
    toplam: 2, planlandi: 1, yolda: 0, teslim: 1,
  });
});

test('tarih kullanıcıya okunabilir görünür', () => {
  assert.match(turkceTarih('2026-11-12'), /12/);
  assert.equal(turkceTarih(''), '-');
});

test('LocalStorage içine yazılan kayıtlar yeniden okunabilir', async () => {
  const veri = new Map();
  globalThis.localStorage = {
    getItem: (anahtar) => veri.has(anahtar) ? veri.get(anahtar) : null,
    setItem: (anahtar, deger) => veri.set(anahtar, deger),
  };
  const { kayitlariOku, kayitlariSakla } = await import('../src/utils/yerelKayit.js');
  assert.equal(kayitlariSakla([birinci]), true);
  assert.deepEqual(kayitlariOku(), [birinci]);
  delete globalThis.localStorage;
});

test('bütün kayıtlar silinirse boş liste kalır', async () => {
  const veri = new Map();
  globalThis.localStorage = {
    getItem: (anahtar) => veri.has(anahtar) ? veri.get(anahtar) : null,
    setItem: (anahtar, deger) => veri.set(anahtar, deger),
  };
  const { kayitlariOku, kayitlariSakla } = await import('../src/utils/yerelKayit.js');
  kayitlariSakla([]);
  assert.deepEqual(kayitlariOku(), []);
  delete globalThis.localStorage;
});
