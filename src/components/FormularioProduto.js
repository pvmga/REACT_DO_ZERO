import HeaderApp from './HeaderApp';
import TabelaProduto from './TabelaProduto';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FormularioProduto() {
    const produto = {
        codigo: 0,
        descricao: '',
        marca: '',
        estoque: ''
    }

    const [validaBtn, setValidaBtn] = useState(true);
    const [produtos, setProdutos] = useState([]);
    const [objProduto, setObjProduto] = useState(produto);


    // useEffect
    useEffect(()=>{
        fetch("http://localhost:8090/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setProdutos(retorno_convertido));
    }, []);

    const aoDigitar = (e) => {
        // console.log(e.target.value);
        setObjProduto({...objProduto, [e.target.name]:e.target.value});
    }

    return(
        <div>
            <HeaderApp />
            <p>{JSON.stringify(objProduto)}</p>
            <div className="container py-4">
                <form>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Produto</li>
                        </ol>
                    </nav>
                    
                    <input type="text" name="codigoProduto" placeholder="Codigo produto" className="form-control" disabled />
                    <input type="text" onChange={aoDigitar} name="descricao" placeholder="Descrição produto" className="form-control" />
                    <input type="number" onChange={aoDigitar} name="estoque" placeholder="Quantidade em estoque" className="form-control" />
                    <input type="text" onChange={aoDigitar} name="marca" placeholder="Marca produto" className="form-control" />
                    {
                        validaBtn
                        ?
                        <input type='button' value='Cadastrar' className="btn btn-primary" />          
                        :
                        <div>
                            <input type='button' value='Alterar' className="btn btn-warning" />
                            <input type='button' value='Remover' className="btn btn-danger" />
                            <input type='button' value='Cancelar' className="btn btn-secondary" />
                        </div>
                    }

                </form>
            </div>
            <TabelaProduto dadosProdutos={produtos} />
        </div>
    )
}

export default FormularioProduto;