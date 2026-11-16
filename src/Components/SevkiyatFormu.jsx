import { useEffect, useState } from 'react';
import { BOS_FORM, DURUMLAR, TASIMA_TURLERI } from '../Interfaces/sevkiyatModel.js';

export default function SevkiyatFormu({ duzenlenenKayit, kaydet, duzenlemeyiIptal }) {
  const [form, setForm] = useState({ ...BOS_FORM });

  useEffect(() => {
    setForm(duzenlenenKayit ? {
      yukleme: duzenlenenKayit.yukleme,
      teslim: duzenlenenKayit.teslim,
      tur: duzenlenenKayit.tur,
      tarih: duzenlenenKayit.tarih,
      durum: duzenlenenKayit.durum,
      not: duzenlenenKayit.not || '',
    } : { ...BOS_FORM });
  }, [duzenlenenKayit]);

  function alanDegistir(olay) {
    const { name, value } = olay.target;
    setForm((eski) => ({ ...eski, [name]: value }));
  }

  function formuGonder(olay) {
    olay.preventDefault();
    if (!form.yukleme.trim() || !form.teslim.trim() || !form.tarih) return;

    kaydet({
      ...form,
      yukleme: form.yukleme.trim(),
      teslim: form.teslim.trim(),
      not: form.not.trim(),
    });

    if (!duzenlenenKayit) setForm({ ...BOS_FORM });
  }

  return (
    <section className="panel form-panel" id="kayit-formu" aria-labelledby="form-basligi">
      <div className="panel-heading">
        <span className="eyebrow">SEVKİYAT FORMU</span>
        <h2 id="form-basligi">{duzenlenenKayit ? 'Kaydı düzenle' : 'Yeni sevkiyat ekle'}</h2>
        <p>{duzenlenenKayit ? 'Bilgileri değiştirip güncelleyebilirsin.' : 'Yeni bir taşıma planı oluştur.'}</p>
      </div>

      <form onSubmit={formuGonder} className="shipment-form">
        <label htmlFor="yukleme">Yükleme noktası <span className="required">*</span></label>
        <input id="yukleme" name="yukleme" type="text" value={form.yukleme}
          placeholder="Örn. Gebze Depo" maxLength="80" onChange={alanDegistir} required />

        <label htmlFor="teslim">Teslim noktası <span className="required">*</span></label>
        <input id="teslim" name="teslim" type="text" value={form.teslim}
          placeholder="Örn. Çankırı Fabrika" maxLength="80" onChange={alanDegistir} required />

        <div className="form-row">
          <div>
            <label htmlFor="tur">Taşıma türü</label>
            <select id="tur" name="tur" value={form.tur} onChange={alanDegistir}>
              {TASIMA_TURLERI.map((tur) => <option key={tur} value={tur}>{tur}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="tarih">Sevkiyat tarihi <span className="required">*</span></label>
            <input id="tarih" name="tarih" type="date" value={form.tarih}
              onChange={alanDegistir} required />
          </div>
        </div>

        <label htmlFor="durum">Durum</label>
        <select id="durum" name="durum" value={form.durum} onChange={alanDegistir}>
          {DURUMLAR.map((durum) => <option key={durum} value={durum}>{durum}</option>)}
        </select>

        <label htmlFor="not">Not <span className="optional">(isteğe bağlı)</span></label>
        <textarea id="not" name="not" rows="3" value={form.not}
          placeholder="Araç, yükleme saati veya diğer detaylar..." maxLength="300"
          onChange={alanDegistir} />

        <button className="primary-button" type="submit">
          {duzenlenenKayit ? 'Değişiklikleri kaydet' : '+ Sevkiyat ekle'}
        </button>
        {duzenlenenKayit && (
          <button className="secondary-button" type="button" onClick={duzenlemeyiIptal}>
            Düzenlemeyi iptal et
          </button>
        )}
      </form>
    </section>
  );
}
