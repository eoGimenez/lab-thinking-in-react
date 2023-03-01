
import "../App.css"

function ProductRow({ item: { category, price, inStock, name } }) {


    return (
      <tbody>
        <tr>
          {inStock ? <td>{name}</td> : <td className="red">{name}</td>}
          <td>{price}</td>
        </tr>
      </tbody>
  );
}

export default ProductRow;
