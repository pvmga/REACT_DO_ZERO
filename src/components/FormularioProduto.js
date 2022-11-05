import HeaderApp from './HeaderApp';
import TabelaProduto from './TabelaProduto';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FormularioProduto() {
    const produto = {
        codigo: 0,
        descricao: '',
        marca: '',
        estoque: ''
    }

    const urlPadrao = "http://localhost:8080";

    const [validaBtn, setValidaBtn] = useState(true);

    // Array com todos produtos da listagem
    const [produtos, setProdutos] = useState([]);
    const [objProduto, setObjProduto] = useState(produto);

    // Limpar formulário
    const limparFormulario = () => {
        setObjProduto(produto);
        
        setValidaBtn(true);
    }

    const selecionarProduto = (indice) => {
        console.log(produtos);
        console.log(produtos[indice]);
        setObjProduto(produtos[indice]);
        setValidaBtn(false);
    }

    // useEffect
    useEffect(()=>{
        fetch(urlPadrao+"/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setProdutos(retorno_convertido));
    }, []);

    const aoDigitar = (e) => {
        // console.log(e.target.value);
        setObjProduto({...objProduto, [e.target.name]:e.target.value});
    }

    // cadastrar produto
    const cadastrarProduto = () => {
        fetch(urlPadrao+"/cadastrar", {
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

    // Remover produto
    const removerProduto = () => {
        fetch(urlPadrao+"/deletar/" + objProduto.codigo, {
        method:'delete',
        headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
        })
        .then(retorno=> retorno.json())
        .then(retorno_convertido => {
            // console.log(retorno_convertido)
            // Mensagem
            alert(retorno_convertido.mensagem);
            let vetorTemp = [...produtos];

            // Indice
            let indice = vetorTemp.findIndex((p) => {
                return p.codigo === objProduto.codigo;
            });

            // Remover produto do vetorTemp
            vetorTemp.splice(indice, 1);

            // Atualizar o vetor de produtos
            setProdutos(vetorTemp);

            limparFormulario();
        })
    }

    // Alterar produto
    const alterarProduto = () => {
        fetch(urlPadrao+"/alterar", {
        method:'put',
        body:JSON.stringify(objProduto),
        headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
        })
        .then(retorno=> retorno.json())
        .then(retorno_convertido => {
        // console.log(retorno_convertido)
        if (retorno_convertido.mensagem !== undefined) {
            alert(retorno_convertido.mensagem);
            console.log(retorno_convertido);
        } else {
            
            // Mensagem
            alert('Produto alterado com sucesso!');

            let vetorTemp = [...produtos];

            // Indice
            let indice = vetorTemp.findIndex((p) => {
                return p.codigo === objProduto.codigo;
            });
    
            // Alterar produto do vetorTemp
            vetorTemp[indice] = objProduto;
    
            // Atualizar o vetor de produtos
            setProdutos(vetorTemp);

            // Limpar o formulário
            limparFormulario();
        }
        })
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
                            <input type='button' value='Alterar' onClick={alterarProduto} className="btn btn-warning" />
                            <input type='button' value='Remover' onClick={removerProduto} className="btn btn-danger" />
                            <input type='button' value='Cancelar' onClick={limparFormulario} className="btn btn-secondary" />
                        </div>
                    }

                </form>
            </div>
            <TabelaProduto dadosProdutos={produtos} selecionarProduto={selecionarProduto} />
        </div>
    )
}

export default FormularioProduto;