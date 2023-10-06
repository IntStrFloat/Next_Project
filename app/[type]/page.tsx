import { Button } from '../_components';
import { SearchSvg } from '../_components/SearchSvg';
interface ProductPageProps {
  params: { type: string };
}
const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  return <p>{params.type}</p>;
};

export default ProductPage;
