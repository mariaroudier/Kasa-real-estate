import './notFound.css'

function NotFound() {
      return (
            <main className="main-notfound">
                  <h1 className="number-error">404</h1>
                  <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                  <a className="getback-link" href="/">Retourner sur la page d’accueil</a>
            </main>
      )
    }
    
    export default NotFound;