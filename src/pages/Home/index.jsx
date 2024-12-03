import { useRef, useState } from "react";
import { v4 } from "uuid";
import { AddButton } from "./styles";
import { Container } from "./styles";

//React Hooks
//useRef - colocar algo como referencia
//useState - estado - é uma variável que toda vez que troca de valor , a tela irá recarregar os valores

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueiNoBotao() {
    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value,
      },
      ...produtos,
    ]);
    inputRef.current.value = "";
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }

  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="Produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => deletarProduto(produto.id)}>Deletar</button>
        </div>
      ))}
    </Container>
  );
}

export default Home; //exportação do componente a ser usado na aplicação.
