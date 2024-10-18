import React, { useState } from 'react';
import DefaultButton from '../Button/DefaultButton';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

//Password Feild componet

const PasswordField = ({
  id,
  type = 'text', 
  placeholder,
  icon,
  value = '', 
  onChange,
  width = 'w-full',
  ariaLabel,
  ...rest 
}) => {
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative flex items-center">
     
      <input
        id={id}
        type={type === 'password' && isPasswordVisible ? 'text' : type}  
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`block ${width} py-2 pl-3 pr-10 text-sm  bg-gray-100 shadow-sm focus:bg-white f text-black border-2 rounded-md font-inter border-gray_text focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
        aria-label={ariaLabel || placeholder}
        {...rest} 
      />
      
     
      {type === 'password' && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <DefaultButton
            handleClick={togglePasswordVisibility}
            className="text-gray-500 border-none shadow-none pointer-events-auto bg-gradient-to-r from-gray-100 to-gray-100 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-100"
            Icon={isPasswordVisible? <GoEye />:<GoEyeClosed />}
          />
        </div>
      )}

     
      {icon && type !== 'password' && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default PasswordField;