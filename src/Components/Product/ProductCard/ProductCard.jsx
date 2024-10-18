import DefaultButton from "@/Components/Button/DefaultButton";
import { Label } from "@/Components/ui/label";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import DeleteConfirm from "@/Components/Popup/Delete Popup";

// product data
const PRODUCT_DATA = {
  name: "Essence Mascara Lash Princess",
  price: "Rs. 99.00",
  discount: "10%", 
  stockStatus: "Low Stock",
  rate:"4.56",
  description: `The Essence Mascara Lash Princess is a popular mascara known for 
    its volumizing and lengthening effects. Achieve dramatic lashes with this 
    long-lasting and cruelty-free formula.`,
  details: {
    warranty: "1 month warranty",
    shipping: "Ships in 1 month",
    minimumOrderQuantity: "24",
    category: "Beauty",
    brand: "Essence",
  },
};

const ProductCard = () => {
  const [rating, setRating] = useState(4.5);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="relative max-w-xl p-6 mx-auto mt-20 bg-white rounded-lg shadow-lg">
      {/* Product Name */}
      <div className="mb-6">
        <Label className="text-3xl font-semibold text-black font-inter">
          {PRODUCT_DATA.name}
        </Label>
      </div>

      {/* Product Rating */}
      <div className="flex items-center mb-5">
        <Label className="mt-2 mr-2 text-xl font-medium text-black font-inter">
          {rating}
        </Label>
        <StarRatings
          rating={rating}
          starRatedColor="red"
          starHoverColor="red"
          numberOfStars={5}
          name="rating"
          starDimension="1.3vw"
          starSpacing="0.1vw"
        />
      </div>

      {/* Product Price and Discount */}
      <div className="flex items-center justify-between mb-5">
        <Label className="text-2xl font-semibold text-black font-inter">
          {PRODUCT_DATA.price}
        </Label>
        <div className="text-right">
          <Label className="text-xl font-semibold text-gray-500 font-inter">
            Discount: {PRODUCT_DATA.discount}
          </Label>
        </div>
      </div>

      {/* Product Stock */}
      <div className="mb-5">
        <Label className="text-xl font-medium text-red-600 font-inter">
          {PRODUCT_DATA.stockStatus}
        </Label>
      </div>

      {/* Product Description */}
      <div className="mb-5">
        <Label className="leading-relaxed text-gray-700 font-inter">
          {PRODUCT_DATA.description}
        </Label>
      </div>

      {/* Product Details */}
      <ul className="pl-5 mb-6 text-gray-700 list-disc font-inter">
        <li>
          Warranty: <span className="font-medium">{PRODUCT_DATA.details.warranty}</span>
        </li>
        <li>
          Shipping: <span className="font-medium">{PRODUCT_DATA.details.shipping}</span>
        </li>
        <li>
          Minimum Order Quantity:  <span className="font-medium">{PRODUCT_DATA.details.minimumOrderQuantity}</span>
        </li>
        <li>
          Category: <span className="font-medium">{PRODUCT_DATA.details.category}</span>
        </li>
        <li>
          Brand: <span className="font-medium">{PRODUCT_DATA.details.brand}</span>
        </li>
      </ul>

      {/* Delete Button */}
      <div className="text-right">
        <DefaultButton btnLabel="Delete"  handleClick={() => setShowDeleteModal(true)} className="px-4 py-2 font-semibold text-white rounded w-44 from-red_btn to-red_btn font-inter hover:bg-gradient-to-r hover:from-red-400 hover:to-red-400" />
        {showDeleteModal && (
        <DeleteConfirm 
         
          onDelete={() => {
            console.log("Product deleted");
            setShowDeleteModal(false);  
          }} 
          onCancel={() => setShowDeleteModal(false)}  
        />
      )}
      </div>
    </div>
  );
};

export default ProductCard;
