import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className="language-switcher">
      <div className={`language-slider ${i18n.language === 'en' ? 'slide-right' : 'slide-left'}`} />
      <button
        className={`language-option ${i18n.language === 'id' ? 'active' : ''}`}
        onClick={() => changeLanguage('id')}
        aria-label="Switch to Indonesian"
        aria-pressed={i18n.language === 'id'}
      >
        ID
      </button>
      <button
        className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
        aria-pressed={i18n.language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
