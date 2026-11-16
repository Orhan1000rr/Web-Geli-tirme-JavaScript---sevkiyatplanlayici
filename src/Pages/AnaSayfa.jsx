import { useEffect, useRef, useState } from 'react';
import OzetKartlari from '../Components/OzetKartlari.jsx';
import SevkiyatFormu from '../Components/SevkiyatFormu.jsx';
import SevkiyatListesi from '../Components/SevkiyatListesi.jsx';
import { kayitlariOku, kayitlariSakla } from '../utils/yerelKayit.js';
import { kayitEkle, kayitGuncelle, kayitSil, kayitlariFiltrele } from '../utils/sevkiyatIslemleri.js';

export default function AnaSayfa() {
  const [kayitlar, kayitlariDegistir] = useState(kayitlariOku);
  const [duzenlenenId, duzenlenenIdDegistir] = useState(null);
  const [arama, aramayiDegistir] = useState('');
  const [durumFiltresi, filtreDegistir] = useState('Tümü');
  const [mesaj, mesajDegistir] = useState('');
  const formAlani = useRef(null);

  useEffect(() => {
    if (!kayitlariSakla(kayitlar)) {
      mesajDegistir('Tarayıcı depolaması kapalı. Kayıtların kalıcı olmayabilir.');
    }
  }, [kayitlar]);

  const duzenlenenKayit = kayitlar.find((kayit) => kayit.id === duzenlenenId) || null;
  const gorunenKayitlar = kayitlariFiltrele(kayitlar, arama, durumFiltresi);

  function kaydet(bilgiler) {
    if (duzenlenenId) {
      kayitlariDegistir((eski) => kayitGuncelle(eski, duzenlenenId, bilgiler));
      mesajDegistir('Sevkiyat kaydı güncellendi.');
      duzenlenenIdDegistir(null);
      return;
    }

    const yeniKayit = {
      ...bilgiler,
      id: `svk-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    };
    kayitlariDegistir((eski) => kayitEkle(eski, yeniKayit));
    mesajDegistir('Yeni sevkiyat kaydı eklendi.');
  }

  function duzenle(kayit) {
    duzenlenenIdDegistir(kayit.id);
    mesajDegistir('');
    formAlani.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function sil(kayit) {
    const onay = window.confirm(`${kayit.yukleme} → ${kayit.teslim} kaydı silinsin mi?`);
    if (!onay) return;

    kayitlariDegistir((eski) => kayitSil(eski, kayit.id));
    if (duzenlenenId === kayit.id) duzenlenenIdDegistir(null);
    mesajDegistir('Sevkiyat kaydı silindi.');
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">SP</span>
          <div><strong>Sevkiyat Planlayıcı</strong><span>Basit taşıma takip uygulaması</span></div>
        </div>
        <span className="header-chip"><span className="live-dot" /> Yerel kayıt sistemi</span>
      </header>

      <main className="container">
        <section className="intro">
          <div>
            <span className="intro-label">GÜNLÜK İŞ TAKİBİ</span>
            <h1>Sevkiyatlarını kolayca yönet.</h1>
            <p>Planlanan, yolda olan ve teslim edilen taşımaları tek yerden görüntüle.</p>
          </div>
          <div className="intro-decoration" aria-hidden="true"><span>↗</span><small>DÜZENLİ PLAN, KOLAY TAKİP</small></div>
        </section>

        <OzetKartlari kayitlar={kayitlar} />

        {mesaj && <p role="status" className="notification">{mesaj}</p>}

        <div className="content-grid">
          <div ref={formAlani} className="form-anchor">
            <SevkiyatFormu duzenlenenKayit={duzenlenenKayit} kaydet={kaydet}
              duzenlemeyiIptal={() => duzenlenenIdDegistir(null)} />
          </div>
          <SevkiyatListesi kayitlar={gorunenKayitlar} arama={arama}
            aramayiDegistir={aramayiDegistir} durumFiltresi={durumFiltresi}
            filtreDegistir={filtreDegistir} duzenle={duzenle} sil={sil} />
        </div>
      </main>

      <footer className="footer">Sevkiyat Planlayıcı · React, JavaScript ve CSS ile hazırlandı.</footer>
    </div>
  );
}
