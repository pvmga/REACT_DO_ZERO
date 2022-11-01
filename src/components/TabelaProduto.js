function TabelaPessoa() {
    return(
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
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className="btn btn-success">Selecionar</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TabelaPessoa;