import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Style.css';
import { Header } from './components/Header';
import { SearchResults } from './containers/SearchResults';
import { Post } from './components/Post';
import { Search } from './containers/Search';
import { HomePage } from './containers/HomePage';

function App() {
  return (
    <Router>
      <header>
        <Header />
        <Search />
      </header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
