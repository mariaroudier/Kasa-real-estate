/* eslint-disable react/react-in-jsx-scope */
import './notFound.css';

function NotFound() {
  return (
    <main className="main-notfound">
      <h1 className="number-error">404</h1>
      <h2 className="error-message">Oups! La page que vous demandez n&apos;existe pas.</h2>
      <a className="getback-link" href="/">Retourner sur la page d&apos;accueil</a>
    </main>
  );
}

export default NotFound;
