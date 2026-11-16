import { DURUMLAR } from '../Interfaces/sevkiyatModel.js';
import { turkceTarih } from '../utils/sevkiyatIslemleri.js';
import DurumEtiketi from './DurumEtiketi.jsx';

export default function SevkiyatListesi({ kayitlar, arama, aramayiDegistir, durumFiltresi, filtreDegistir, duzenle, sil }) {
  return (
    <section className="panel list-panel" aria-labelledby="liste-basligi">
      <div className="list-header">
        <div>
          <span className="eyebrow">KAYIT LİSTESİ</span>
          <h2 id="liste-basligi">Sevkiyatlar <span className="count-pill">{kayitlar.length}</span></h2>
          <p>Mevcut taşıma planlarını buradan takip edebilirsin.</p>
        </div>
      </div>

      <div className="toolbar">
        <div className="search-wrap">
          <span aria-hidden="true" className="search-icon">⌕</span>
          <input aria-label="Sevkiyat ara" type="search" value={arama}
            onChange={(olay) => aramayiDegistir(olay.target.value)}
            placeholder="Yükleme veya teslim noktası ara..." />
        </div>
        <select aria-label="Duruma göre filtrele" value={durumFiltresi}
          onChange={(olay) => filtreDegistir(olay.target.value)}>
          <option value="Tümü">Tüm durumlar</option>
          {DURUMLAR.map((durum) => <option key={durum} value={durum}>{durum}</option>)}
        </select>
      </div>

      {kayitlar.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">▤</div>
          <h3>Kayıt bulunamadı</h3>
          <p>Arama veya filtre seçimini değiştirebilir ya da yeni sevkiyat ekleyebilirsin.</p>
        </div>
      ) : (
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th scope="col">GÜZERGÂH</th><th scope="col">TAŞIMA</th><th scope="col">TARİH</th><th scope="col">DURUM</th><th scope="col" className="actions-header">İŞLEMLER</th></tr>
            </thead>
            <tbody>
              {kayitlar.map((kayit) => (
                <tr key={kayit.id}>
                  <td>
                    <div className="route-start">{kayit.yukleme}</div>
                    <div className="route-end"><span aria-hidden="true">↳</span> {kayit.teslim}</div>
                    {kayit.not && <div className="route-note" title={kayit.not}>{kayit.not}</div>}
                  </td>
                  <td className="muted-cell">{kayit.tur}</td>
                  <td className="date-cell">{turkceTarih(kayit.tarih)}</td>
                  <td><DurumEtiketi durum={kayit.durum} /></td>
                  <td>
                    <div className="row-actions">
                      <button className="text-button edit-button" type="button" onClick={() => duzenle(kayit)} aria-label={`${kayit.yukleme} - ${kayit.teslim} kaydını düzenle`}>Düzenle</button>
                      <button className="text-button delete-button" type="button" onClick={() => sil(kayit)} aria-label={`${kayit.yukleme} - ${kayit.teslim} kaydını sil`}>Sil</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="list-footer"><span className="small-dot" /> Kayıtlar bu cihazdaki tarayıcıda tutulur.</div>
    </section>
  );
}
