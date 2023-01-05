import { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import useStore from '../Hooks/useStore';

const TrackForm = () => {
  const [ekspedisi, setEkspedisi] = useState('default');
  const [awbNumber, setAwbNumber] = useState('');
  const { data: result, loading, error } = useFetch('/list_courier');
  const addQueries = useStore((state) => state.addQuery);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const queries = {
      ekspedisi,
      awbNumber,
    };
    addQueries(queries);
  };

  return (
    <section id="form">
      <form onSubmit={handleOnSubmit}>
        <div className="container">
          <h2>Lacak Posisi Paketmu</h2>
          <div className="form-control">
            <select value={ekspedisi} onChange={(e) => setEkspedisi(e.target.value)}>
              <option value="default">Pilih Ekspedisi : </option>
              {loading && <option value="loading">Loading...</option>}
              {result &&
                result.data.map((index, id) => (
                  <option key={id} value={index.code}>
                    {index.description}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Masukkan No Resi/ Awb" value={awbNumber} onChange={(e) => setAwbNumber(e.target.value)} />
            <button>Track</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default TrackForm;
