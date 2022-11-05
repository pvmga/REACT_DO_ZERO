import React from 'react';

function TabelaPessoa({dadosProdutos, selecionarProduto}) {
    return(
        <div>
            {/* <p>{JSON.stringify(dadosProdutos)}</p> */}
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Marca</th>
                        <th>Estoque</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dadosProdutos.map((obj, indice) =>(
                            <tr  key={indice}>
                                <td>{indice+1}</td>
                                <td>{obj.codigo}</td>
                                <td>{obj.descricao}</td>
                                <td>{obj.marca}</td>
                                <td>{obj.estoque}</td>
                                <td><button onClick={() => {selecionarProduto(indice)}} className="btn btn-success">Selecionar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TabelaPessoa;