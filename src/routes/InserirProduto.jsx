import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProduto() {
    document.title = "Cadastrar";

    let novoId = ListaProdutos[ListaProdutos.length - 1]

    return (
        <div>
            <h1>Cadastro de Produtos</h1>
        </div>
    )
}
