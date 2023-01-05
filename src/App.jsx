import NavBar from './Components/NavBar/NavBar';
import TrackForm from './Components/TrackForm';
import TrackResult from './Components/TrackResult';

const App = () => {
  document.title = 'Trackages';
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <TrackForm />
        <TrackResult />
      </div>
    </div>
  );
};

export default App;
