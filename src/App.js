import './App.css';
import Header from '../src/components/Header'
import Hero from './components/Hero';
import Experience from './components/Experience';
import Search from './components/Search';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {

  // const requestData = [
  //   {
  //     id: '#92345729',
  //     date: 'October 21, 2022 at 3:57 PM ET ',
  //     status: 'Processing request',
  //     expire: 'expires October 19, 2023',
  //   },
  //   {
  //     id: '#92345729',
  //     date: 'October 21, 2022 at 3:57 PM ET ',
  //     status: 'Processing request',
  //     expire: 'expires October 19, 2023',
  //   },
  //   {
  //     id: '#92345729',
  //     date: 'October 21, 2022 at 3:57 PM ET ',
  //     status: 'Processing request',
  //     expire: null,
  //   },
  //   {
  //     id: '#92345729',
  //     date: 'October 21, 2022 at 3:57 PM ET ',
  //     status: 'Processed',
  //     expire: 'expires October 19, 2023',
  //   },
  //   {
  //     id: '#92345729',
  //     date: 'October 21, 2022 at 3:57 PM ET ',
  //     status: 'Processed',
  //     expire: 'expires October 19, 2023',
  //   },
  //   {
  //     id: '#92345729',
  //     date: 'October 21, 2022 at 3:57 PM ET ',
  //     status: 'Processed',
  //     expire: 'expires October 19, 2023',
  //   },
  //   {
  //     id: '#92345729',
  //     date: 'October 21, 2022 at 3:57 PM ET ',
  //     status: 'Processed',
  //     expire: 'expires October 19, 2023',
  //   },
  // ];

  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
