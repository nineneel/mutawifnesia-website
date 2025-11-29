import { Link } from 'react-router-dom';
import { Button } from '../../components/common';
import SEO from '../../components/SEO';
import { seoConfig } from '../../config/seo';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <SEO {...seoConfig.notFound} />
      <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
      </div>
    </>
  );
};

export default NotFound;
