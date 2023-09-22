import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./ExcluirProdutos.modules.css"

export default function ExcluirProduto() {
  document.title = "Excluir Produto";

  const { id } = useParams();
  const navigate = useNavigate()

  const produtoRecuperadoDaListaById = ListaProdutos.filter(
    (item) => item.id == id
  );

  const [produto] = useState({
    id: produtoRecuperadoDaListaById[0].id,
    nome: produtoRecuperadoDaListaById[0].nome,
    desc: produtoRecuperadoDaListaById[0].desc,
    valor: produtoRecuperadoDaListaById[0].valor,
  });

  //Função para lidar com a exclusão do produto
  const handleExclude = (event) => {
    event.preventDefault();
//Encontra o índice do produto a ser excluído na lista de produtos
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });

    ListaProdutos.splice(indice, 1);
    navigate("/produtos");
  };

  return (
    
      <div className={classes.container}>
        <h1>Excluir Produto</h1>
        <div>
            <p>Nome : {produto.nome}</p>
            <p>Desc : {produto.desc}</p>
            <p>valor : {produto.valor}</p>
            <div>
                <button onClick={handleExclude}>EXCLUIR</button>
                <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
            </div>
        </div>
      </div>
      );
}
