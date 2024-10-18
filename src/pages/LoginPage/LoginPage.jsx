import {useState} from 'react';
import SaveButton from '../../Components/Button/DefaultButton'; 
import InputField from '@/Components/InputField/InputField';
import { FaRegUser } from "react-icons/fa";
import PasswordField from '@/Components/InputField/PasswordField';
import { ProductTable } from '../../Components/Product/ProductTable/ProductTable';
import ProductCard from '@/Components/Product/ProductCard/ProductCard';
import AddNewProductForm from '@/section/ProductForm/AddNewProductForm';



export default function LoginPage() {
  const handleSave = () => {
    console.log('Saved!');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <SaveButton handleSave={handleSave} btnLabel='Sign In' className='w-64' /> 
{/* 
      <InputField
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange }
          icon={<FaRegUser className="w-5 h-5" />}
        />


        <PasswordField
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange }
          icon={<FaRegUser className="w-5 h-5" />}
          /> */}

          {/* <ProductCard/> */}
          <ProductTable/>

          <AddNewProductForm/>

  

    </div>
  );
}
