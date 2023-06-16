import { Header, Footer } from './components/layouts';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AllRoutes/>
      <Footer />
    </div>
  );
}


