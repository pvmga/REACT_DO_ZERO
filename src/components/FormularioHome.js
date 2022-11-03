import HeaderApp from './HeaderApp';
import { Link } from 'react-router-dom';

function FormularioHome() {
   

    return(
        <div>
            <HeaderApp />
            <div className="container py-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
                    </ol>
                </nav>

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Tela inicial da nossa aplicação</h1>
                        <p className="col-md-8 fs-4">Nessa aplicação você irá conseguir cadastrar pessoa e produto.</p>
                        {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioHome;