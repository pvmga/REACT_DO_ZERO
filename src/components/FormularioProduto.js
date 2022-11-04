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

    // Array com todos produtos da listagem
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

    // cadastrar produto
    const cadastrarProduto = () => {
        fetch("http://localhost:8090/cadastrar", {
            method:'POST',
            body: JSON.stringify(objProduto),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(retorno => retorno.json())
        .then(retorno_convertido => {
            if (retorno_convertido.mensagem !== undefined) {
                alert(retorno_convertido.mensagem);
                console.log(retorno_convertido);
            } else {
                setProdutos([...produtos, retorno_convertido]);
                alert('Cadastro realizado com sucesso!');
                limparFormulario();
            }
        })
    }

    // Limpar formulário
    const limparFormulario = () => {
        setObjProduto(produto);
        
        // setValidaBtn(true);
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
                    <input type="text" value={objProduto.descricao} onChange={aoDigitar} name="descricao" placeholder="Descrição produto" className="form-control" />
                    <input type="number" value={objProduto.estoque} onChange={aoDigitar} name="estoque" placeholder="Quantidade em estoque" className="form-control" />
                    <input type="text" value={objProduto.marca} onChange={aoDigitar} name="marca" placeholder="Marca produto" className="form-control" />
                    {
                        validaBtn
                        ?
                        <input type='button' onClick={cadastrarProduto} value='Cadastrar' className="btn btn-primary" />          
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