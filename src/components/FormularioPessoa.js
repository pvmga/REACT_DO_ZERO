import React, {useState, useEffect} from 'react';
import HeaderApp from './HeaderApp';

import { Link } from 'react-router-dom';
import TabelaPessoa from './TabelaPessoa';


function FormularioPessoa() {

    const pessoa = {
        codigo: 0,
        nome: '',
        sobre_nome: ''
    }

    const urlPadrao = "http://localhost:8080";

    // valida botao
    const [validaBtn, setValidaBtn] = useState(true);

    // pessoas
    const [pessoas, setPessoas] = useState([]);

    // objeto da pessoa
    const [objPessoa, setObjPessoa] = useState(pessoa);

    // listagem das pessoas
    useEffect(() => {
        fetch(urlPadrao+"/listarPessoas")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setPessoas(retorno_convertido))
    }, []);

    const aoDigitar = (e) => {
        setObjPessoa({...objPessoa, [e.target.name]:e.target.value})
    }

    // Limpar formulário
    const limparFormulario = () => {
        setObjPessoa(pessoa);
        
        setValidaBtn(true);
    }

    const selecionarPessoa = (indice) => {
        // console.log(pessoas[indice]);
        setObjPessoa(pessoas[indice]);
        setValidaBtn(false);
    }

    // Remover produto
    const removerPessoa = () => {
        if (window.confirm("Do you really want to delete?. (Deseja realmente excluir?)") === true) {
            fetch(urlPadrao+"/deletarPessoa/" + objPessoa.codigo, {
            method: 'DELETE',
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
                // let vetorTemp = [...produtos];

                // Indice
                let indice = pessoas.findIndex((p) => {
                    return p.codigo === objPessoa.codigo;
                });

                // Remover produto do vetorTemp
                pessoas.splice(indice, 1);

                // Atualizar o vetor de produtos
                // setProdutos(produtos);

                limparFormulario();
            })
        } else {
            console.log('Did you want to review. (Você desejou revisar)');
        }
    }

    // cadastrar pessoa
    const cadastrarPessoa = () => {
        // console.log(objPessoa);
        if (window.confirm("Deseja realmente salvar?") === true) {
            fetch(urlPadrao+"/cadastrarPessoa", {
                method: 'POST',
                body: JSON.stringify(objPessoa),
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                    console.log(retorno_convertido)
                } else {
                    setPessoas([...pessoas, retorno_convertido]);
                    alert("Registration successfull. (Cadastro realizado com sucesso)");
                    limparFormulario();
                }
            })
        } else {
            console.log('Did you want to review. (Você desejou revisar)');
        }
    }

    // alterar pessoa
    const alterarPessoa = () => {
        // console.log(objPessoa);
                
        // console.log(indice);

        if (window.confirm("Deseja realmente alterar?") === true) {
            fetch(urlPadrao+"/alterarPessoa", {
            method: 'PUT',
            body:JSON.stringify(objPessoa),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
            })
            .then(retorno=> retorno.json())
            .then(retorno_convertido => {
                // console.log(retorno_convertido)
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem)
                    console.log(retorno_convertido.mensagem);
                } else {
                    alert("Product registration successfull. (Produto cadastrado com sucesso)");
                    
                    let indice = pessoas.findIndex((p) => {
                        return p.codigo === objPessoa.codigo;
                    });

                    pessoas[indice] = objPessoa;

                    setPessoas(pessoas);

                    limparFormulario();
                    
                }
            })
        } else {
            console.log('Did you want to review. (Você desejou revisar)');
        }
    }

    return(
        <div>
            <HeaderApp />
            {/* <p>{JSON.stringify(objProduto)}</p> */}
            <div className="container py-4">
                <form>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Pessoa</li>
                        </ol>
                    </nav>
                    
                    <input type="text" value={objPessoa.codigo} name="codigo" placeholder="Codigo produto" className="form-control" disabled />
                    <input type="text" value={objPessoa.nome} onChange={aoDigitar} name="nome" placeholder="Nome pessoa" className="form-control" />
                    <input type="text" value={objPessoa.sobre_nome} onChange={aoDigitar} name="sobre_nome" placeholder="Sobrenome pessoa" className="form-control" />
                  
                    {
                        validaBtn
                        ?
                        <input type='button' onClick={cadastrarPessoa} value='Cadastrar' className="btn btn-primary" />          
                        :
                        <div>
                            <input type='button' onClick={alterarPessoa} value='Alterar' className="btn btn-warning" />
                            <input type='button' onClick={removerPessoa} value='Remover' className="btn btn-danger" />
                            <input type='button' onClick={limparFormulario} value='Cancelar' className="btn btn-secondary" />
                        </div>
                    }

                </form>
            </div>

            <TabelaPessoa dadosPessoa={pessoas} selecionarPessoa={selecionarPessoa} />
        </div>
    )
}

export default FormularioPessoa;