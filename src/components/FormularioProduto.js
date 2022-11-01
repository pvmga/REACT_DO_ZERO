function FormularioProduto() {
    return(
        <form>
            <input type="text" name="codigoProduto" placeholder="Codigo produto" className="form-control" />
            <input type="text" name="descricaoProduto" placeholder="Descrição produto" className="form-control" />
            <input type="text" name="quantidadeEstoque" placeholder="Quantidade em estoque" className="form-control" />
            <input type="text" name="marcaProduto" placeholder="Marca produto" className="form-control" />

            <input type='button' value='Cadastrar' className="btn btn-primary" />          
            <input type='button' value='Alterar' className="btn btn-warning" />
            <input type='button' value='Remover' className="btn btn-danger" />
            <input type='button' value='Cancelar' className="btn btn-secondary" />

      
        </form>
    )
}

export default FormularioProduto;