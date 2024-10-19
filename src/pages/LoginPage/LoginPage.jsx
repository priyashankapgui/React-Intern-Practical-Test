
import ProductCard from '@/Components/Product/ProductCard/ProductCard';
import { ProductTable } from '@/Components/Product/ProductTable/ProductTable';
import LoginForm from '@/section/LoginForm/LoginForm';



export default function LoginPage() {
  

  return (
    <div>
      

          <div className='mx-36 my-9'>
          <LoginForm/>
          </div>

          <ProductTable/>


  

    </div>
  );
}