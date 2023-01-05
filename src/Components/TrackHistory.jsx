import { IoClose } from 'react-icons/io5';

const TrackHistory = () => {
  return (
    <section id="history">
      <div className="container">
        <h2>History</h2>
        <div>
          <ul className="history-list">
            {Array(5)
              .fill('history')
              .map((index, id) => (
                <li className="history-list-item" key={id}>
                  <p>3241424221</p> <IoClose className="close-icon" size={18} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrackHistory;
