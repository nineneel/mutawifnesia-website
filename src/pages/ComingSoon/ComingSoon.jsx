import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/common';
import './ComingSoon.css';

const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <div className="coming-soon">
      <div className="coming-soon-content">
        <h1>{t('comingSoon.title')}</h1>
        <h2>{t('comingSoon.subtitle')}</h2>
        <p>{t('comingSoon.description')}</p>
        <Link to="/">
          <Button>{t('comingSoon.button')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
