import { ornekKayitlar } from '../data/ornekKayitlar.js';

const DEPOLAMA_ANAHTARI = 'sevkiyat-planlayici-kayitlar';

export function kayitlariOku() {
  try {
    const veri = localStorage.getItem(DEPOLAMA_ANAHTARI);
    if (veri === null) return ornekKayitlar();
    const kayitlar = JSON.parse(veri);
    return Array.isArray(kayitlar) ? kayitlar : ornekKayitlar();
  } catch {
    return ornekKayitlar();
  }
}

export function kayitlariSakla(kayitlar) {
  try {
    localStorage.setItem(DEPOLAMA_ANAHTARI, JSON.stringify(kayitlar));
    return true;
  } catch {
    return false;
  }
}
