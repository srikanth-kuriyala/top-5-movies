import './App.css';
import MovieList from "./pages/movie-list";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <h1>Top 5 Movies</h1>
          <MovieList />
        </header>
      </div>
    </ReduxProvider>
  );
}

export default App;
