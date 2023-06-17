import { Header, Footer } from './components/layouts';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';

export const App = () => {
  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <AllRoutes/>
      <Footer />
    </div>
  );
}


