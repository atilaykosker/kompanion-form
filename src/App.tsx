import MainPage from './pages/Main';
import { useLanguage } from './context/LanguageContext';
import { LanguageProvider } from './context/LanguageContext';
import { FormProvider } from './context/FormContext';
import './assets/style/global.scss';

function App() {
  const { language } = useLanguage();
  document.getElementsByTagName('html')[0].setAttribute('dir', language === 'AR' ? 'rtl' : 'ltr');

  return (
    <div className="App">
      <header className="App-header" />
      <MainPage />
    </div>
  );
}

export default App;
