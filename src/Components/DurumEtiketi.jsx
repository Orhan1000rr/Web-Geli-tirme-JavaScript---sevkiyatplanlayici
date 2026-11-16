export default function DurumEtiketi({ durum }) {
  const sinif = {
    Planlandı: 'status-planned',
    Yolda: 'status-road',
    'Teslim Edildi': 'status-delivered',
  }[durum] || 'status-planned';

  return <span className={`status ${sinif}`}>{durum}</span>;
}
