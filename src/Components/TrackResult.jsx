import useFetch from '../Hooks/useFetch';
import useStore from '../Hooks/useStore';

const TrackResult = () => {
  const queries = useStore((state) => state.queries);
  const { query } = queries;
  const { data: result, loading, error } = useFetch('/track', query?.ekspedisi, query?.awbNumber);

  return (
    <section id="results">
      <h2>Results :</h2>
      {error && error.response.status !== 400 && <div>{error.message}</div>}
      {error && error.response.status === 400 && <div></div>}
      {loading && <div>Loading...</div>}
      {result && (
        <div className="results-details">
          <div className="package-information">
            <h3>Informasi Paket</h3>
            <ul className="package-information-details">
              <li>AWB : {result.data.data.summary.awb}</li>
              <li>Nama Penerima : {result.data.data.detail.receiver}</li>
              <li>Status : {result.data.data.summary.status}</li>
            </ul>
          </div>
          <div className="package-trip-information">
            <h3>Informasi Perjalanan Paket</h3>
            <div>
              <ul className="trip-information-lists">
                {result.data.data.history.map((index, id) => (
                  <li key={id}>
                    <div className="trip-list-item">
                      <p>Tanggal : {index.date}</p>
                      <p>Ket : {index.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrackResult;
