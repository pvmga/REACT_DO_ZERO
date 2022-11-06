import React from 'react';

function TabelaPessoa({dadosPessoa, selecionarPessoa}) {
    return(
        <table className="table text-center">
            <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    dadosPessoa.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{obj.codigo}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.sobre_nome}</td>
                            <td><button onClick={() => {selecionarPessoa(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TabelaPessoa;