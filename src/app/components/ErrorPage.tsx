import { useNavigate, useRouteError } from 'react-router-dom';
import { RouterError } from '../redux/types';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as RouterError;

  return (
    <div className='error-page container'>
      <h1>
        <i className='bi bi-exclamation-triangle-fill' />
        {' '}
        Oops!
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={ () => navigate('/') }>Back</button>
    </div>
  );
};

export default ErrorPage;
