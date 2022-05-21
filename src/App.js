import './App.css';
// import Navbar from './components/navbar/Navbar';
import Layout from './layout/Layout';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Layout>
        <Landing/>
      </Layout>
    </div>
  );
}

export default App;
