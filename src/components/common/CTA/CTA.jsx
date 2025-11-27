import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import './CTA.css';

const CTA = ({
  translationKey,
  variant = 'default',
  buttonTo,
  buttonVariant = 'primary',
  buttonSize = 'large'
}) => {
  const { t } = useTranslation();

  return (
    <section className={`cta-section ${variant === 'bottom' ? 'cta-bottom' : ''}`}>
      <div className="cta-container">
        <h2 className="cta-title">
          {t(`${translationKey}.title`)}
        </h2>
        <p className="cta-subtitle">
          {t(`${translationKey}.subtitle`)}
        </p>
        <Button
          to={buttonTo}
          variant={buttonVariant}
          size={buttonSize}
        >
          {t(`${translationKey}.button`)}
        </Button>
      </div>
    </section>
  );
};

CTA.propTypes = {
  translationKey: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'bottom']),
  buttonTo: PropTypes.string,
  buttonVariant: PropTypes.string,
  buttonSize: PropTypes.string,
};

export default CTA;
