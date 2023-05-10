import './productsCard.css'
import { useEffect } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { getProdutos } from '../../store/products/action'


// eslint-disable-next-line react/prop-types
const ProductsCard = ({ produtos, loading, error, getProdutos }) => {

  useEffect(() => {
    getProdutos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='card'>
      { // eslint-disable-next-line react/prop-types
        produtos.map((produto) => (
          <div className='product' key={produto.id}>
            <h3>{produto.nome}</h3>
            <img className='productImg' width={300} src={produto.imgURL} alt="imagem do produto" />
            <p className='descricao'>{produto.descricao}</p>
            <p className='preco'>Preço: R$ {produto.preco}</p>
            <p className={`${produto.estoque > 5 ? 'full' : 'fewUnits'}`}>Estoque: {produto.estoque}</p>
          </div>
        ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  produtos: state.produtos,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  getProdutos,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCard)
