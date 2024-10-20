import React, { useEffect, useState } from "react";
import DefaultButton from "@/Components/Button/DefaultButton";
import { Label } from "@/Components/ui/label";
import StarRatings from "react-star-ratings";
import DeleteConfirm from "@/Components/Popup/Delete Popup";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "@/apis/ProductApis/Apis";
import { deleteProduct } from "@/apis/ProductApis/Apis";
import Spinner from "@/Components/Spinner/Spinner";

const ProductCard = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  // Fetch all products and filter by ID
  useEffect(() => {
    getAllProduct()
      .then((products) => {
        const foundProduct = products.find((item) => item.productId === id);
        if (foundProduct) {
          setProduct(foundProduct);
          setRating(parseFloat(foundProduct.rating || 0));
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);

  if (!product) return <Spinner />;

  return (
    <div className="flex h-full ">
      <div className="w-3/5 h-full mt-20 ">
        <img
          src={product.images}
          alt="Product Item"
          className="w-3/5 h-auto ml-6"
        />
      </div>

      <div className="relative max-w-xl p-6 mx-auto mt-20 mr-32 bg-white rounded-lg shadow-lg">
        {/* Product Name */}
        <div className="mb-6">
          <Label className="text-3xl font-semibold text-black font-inter">
            {product.title}
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
            numberOfStars={5}
            name="rating"
            starDimension="1.3vw"
            starSpacing="0.1vw"
          />
        </div>

        {/* Product Price and Discount */}
        <div className="flex items-center justify-between mb-5">
          <Label className="text-2xl font-semibold text-black font-inter">
            Rs: {product.price}
          </Label>
          <div className="text-right">
            <Label className="text-xl font-semibold text-gray-500 font-inter">
              Discount: {product.discountPercentage}%
            </Label>
          </div>
        </div>

        {/* Product Stock */}
        <div className="mb-5">
          <Label
            className={`text-2xl font-semibold font-inter ${
              product.availabilityStatus === "Low Stock"
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {product.availabilityStatus === "Low Stock"
              ? "Low Stock"
              : "In Stock"}
          </Label>
        </div>

        {/* Product Description */}
        <div className="mb-5">
          <Label className="leading-relaxed text-gray-700 font-inter">
            {product.description}
          </Label>
        </div>

        {/* Product Details */}
        <ul className="pl-5 mb-6 text-gray-700 list-disc font-inter">
          <li>
            Warranty:{" "}
            <span className="font-medium">
              {product.warrantyInformation || "N/A"}
            </span>
          </li>
          <li>
            Shipping:{" "}
            <span className="font-medium">
              {product.shippingInformation || "N/A"}
            </span>
          </li>
          <li>
            Minimum Order Quantity:{" "}
            <span className="font-medium">
              {product.minimumOrderQuantity || "N/A"}
            </span>
          </li>
          <li>
            Category: <span className="font-medium">{product.category}</span>
          </li>
          <li>
            Brand: <span className="font-medium">{product.brand}</span>
          </li>
        </ul>

        {/* Delete Button */}
        <div className="text-right">
          <DefaultButton
            btnLabel="Delete"
            handleClick={() => setShowDeleteModal(true)}
            className="px-4 py-2 font-semibold text-white rounded w-44 from-red_btn to-red_btn font-inter hover:bg-gradient-to-r hover:from-red-400 hover:to-red-400"
          />
          {showDeleteModal && (
            <DeleteConfirm
              onDelete={() => {
                deleteProduct(product.productId)
                  .then(() => {
                    console.log("Product deleted");
                    setShowDeleteModal(false);
                    navigate("/product-list");
                  })
                  .catch((error) => {
                    console.error("Error deleting product:", error);
                  });
              }}
              onCancel={() => setShowDeleteModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
