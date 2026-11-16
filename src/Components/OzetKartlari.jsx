import { durumSayilari } from '../utils/sevkiyatIslemleri.js';

export default function OzetKartlari({ kayitlar }) {
  const sayilar = durumSayilari(kayitlar);

  return (
    <div className="stats-grid" aria-label="Sevkiyat özeti">
      <div className="stat-card">
        <div className="stat-head"><span>Toplam kayıt</span><span className="stat-icon blue">▦</span></div>
        <strong>{sayilar.toplam}</strong>
        <span className="stat-detail">Tüm sevkiyatlar</span>
      </div>
      <div className="stat-card">
        <div className="stat-head"><span>Planlanan</span><span className="stat-icon violet">◷</span></div>
        <strong>{sayilar.planlandi}</strong>
        <span className="stat-detail">Henüz yola çıkmadı</span>
      </div>
      <div className="stat-card">
        <div className="stat-head"><span>Yolda</span><span className="stat-icon amber">➜</span></div>
        <strong>{sayilar.yolda}</strong>
        <span className="stat-detail">Devam eden işler</span>
      </div>
      <div className="stat-card">
        <div className="stat-head"><span>Teslim edilen</span><span className="stat-icon green">✓</span></div>
        <strong>{sayilar.teslim}</strong>
        <span className="stat-detail">Tamamlanan işler</span>
      </div>
    </div>
  );
}
