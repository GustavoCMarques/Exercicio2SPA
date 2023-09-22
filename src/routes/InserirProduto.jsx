import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProduto() {
    document.title = "Cadastrar";

    const navigate = userNavigate();

    let novoId = ListaProdutos[ListaProdutos.length - 1]

    const [produto, setProduto] = useState({
        id:novoid,
        nome:"",
        desc:"",
        valor:""
    });

    const handleChange = (e)=>[
        e.preventDefault();
        const[name,value] = e.target;
        setProduto({...produto,[name]:value});
        }
    ]
    const handleSubmit = (e)=>[
        e.preventDefault();
        ListaProdutos.push(produto);
        navigate("/produtos");
    ]
    return (
        <div>
            <h1>CADASTRAR PRODUTOS</h1>
    
            <div>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>PRODUTO</legend>
                  <div>
                    <input type="hidden" name="id" value={produto.id} onChange={handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="idNome">Nome do Produto:</label>
                    <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="idDesc">Descrição do Produto:</label>
                    <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="idValor">Valor do Produto:</label>
                    <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handleChange}/>
                  </div>
                  <div>
                    <button>CADASTRAR</button>
                  </div>
                </fieldset>
              </form>
            </div>
        </div>
      )
