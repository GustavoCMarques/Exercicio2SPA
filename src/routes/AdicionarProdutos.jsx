import React, { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useNavigate } from "react-router-dom";

export default function AdicionarProdutos() {
  document.title = "Adicionar Produtos";

  const navigate = useNavigate();

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    desc: "",
    valor: "",
  });

  function onChange(evt) {
    const { name, value } = evt.target;

    setNovoProduto({ ...novoProduto, [name]: value });
  }

  function onSubmit(evt) {
    evt.preventDefault();

    if (!novoProduto.nome || !novoProduto.desc || !novoProduto.valor) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

 
    ListaProdutos.push({
      id: ListaProdutos.length + 1, 
      ...novoProduto,
    });

    
    setNovoProduto({
      nome: "",
      desc: "",
      valor: "",
    });
    navigate("/produtos");
  }

  return (
    <div>
      <h1>CADASTRAR PRODUTOS</h1>

      <div>
        <form onSubmit={onSubmit}>
          <fieldset>
            <legend>PRODUTO</legend>
            <div>
              <label htmlFor="idNome">Nome do Produto:</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                value={novoProduto.nome}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição do Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={novoProduto.desc}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="idValor">Valor do Produto:</label>
              <input
                type="number"
                name="valor"
                id="idValor"
                value={novoProduto.valor}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <button type="submit">CADASTRAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
