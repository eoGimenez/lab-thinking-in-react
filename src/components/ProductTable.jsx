import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <>
    
      <table className="table w-50   mx-auto">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
      {products.map((item) => (
        <ProductRow item={item} key={item.id} />
      ))}
      </table>
      </>
  );
}

export default ProductTable;
