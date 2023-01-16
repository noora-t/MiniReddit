import logo from './logo.svg';
import './App.css';
import { Header } from './containers/Header';
import { Post } from './containers/Post';
import './Style.css';

function App() {
  return (
    <div>
      <Header />
      <div className='flex-container'>
      <Post />
      </div>
      
    </div>
    
  );
}

export default App;
