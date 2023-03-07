import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import GetValues from './main/Get';
import Homepage from './main/Homepage';
import PostValues from './main/Post';
import UpdateValues from './main/Update';
function App() {
  return (
      <div>
      <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Get" element={<GetValues/>}/>
            <Route path="/Post" element={<PostValues/>}/>
            <Route path="/Update" element={<UpdateValues/>}/>
      </Routes>
      </div>
  );
}

export default App;
