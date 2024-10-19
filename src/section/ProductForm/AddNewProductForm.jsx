import React, { useState } from "react";
import InputField from "@/Components/InputField/InputField";
import { Textarea } from "@/Components/ui/textarea";
import { AddNewItemSchema } from "@/schema/productsSchema/productSchema";
import DefaultButton from "@/Components/Button/DefaultButton";

const AddNewProductForm = () => {
  const [formData, setFormData] = useState({
    productTitle: "",
    description: "",
    price: "",
    discount: "",
    stockQty: "",
    availabilityStatus: "",
    category: "",
    brandName: "",
    warrantyInformation: "",
    shippingInformation: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data using zod
    const result = AddNewItemSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
    } else {
      console.log("Form submitted with data:", formData);
    }
  };

  const handleClear = () => {
    setFormData({
      productTitle: "",
      description: "",
      price: "",
      discount: "",
      stockQty: "",
      availabilityStatus: "",
      category: "",
      brandName: "",
      warrantyInformation: "",
      shippingInformation: "",
    });
    setErrors({});
  };

  return (
    <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold text-black">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/*Product Titel */}
          <InputField
            id="title"
            type="text"
            placeholder="Product Title"
            value={formData.productTitle}
            onChange={handleInputChange}
            name="productTitle"
            className="w-full px-3 text-sm text-black border-2 border-purple-400 rounded-lg focus:outline-purple-600 h-11 "
          />
          {errors.productTitle && (
            <p className="text-sm text-red-500">
              {errors.productTitle._errors[0]}
            </p>
          )}
        </div>

        <div>
          {/*Product description*/}
          <Textarea
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            name="description"
            className="w-full h-24 px-3 text-black border-2 border-purple-400 rounded-lg focus:outline-purple-600 "
          />
          {errors.description && (
            <p className="text-sm text-red-500">
              {errors.description._errors[0]}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            {/*Price*/}
            <InputField
              id="price"
              type="text"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              name="price"
              className="w-full px-3 text-sm text-black border-2 border-purple-400 rounded-lg focus:outline-purple-600 h-11"
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price._errors[0]}</p>
            )}
          </div>
          <div>
            {/*Discount*/}
            <InputField
              id="discount"
              type="text"
              placeholder="Discount"
              value={formData.discount}
              onChange={handleInputChange}
              name="discount"
              className="w-full px-3 text-black border-2 border-purple-400 rounded-lg h-11 focus:outline-purple-600"
            />
            {errors.discount && (
              <p className="text-sm text-red-500">
                {errors.discount._errors[0]}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            {/*Stock Qty*/}
            <InputField
              id="stockQty"
              type="text"
              placeholder="Stock Qty"
              value={formData.stockQty}
              onChange={handleInputChange}
              name="stockQty"
              className="w-full px-3 text-black border-2 border-purple-400 rounded-lg h-11 focus:outline-purple-600"
            />
            {errors.stockQty && (
              <p className="text-sm text-red-500">
                {errors.stockQty._errors[0]}
              </p>
            )}
          </div>
          <div>
            {/*Availability Status*/}
            <InputField
              id="availabilityStatus"
              type="text"
              placeholder="Availability Status"
              value={formData.availabilityStatus}
              onChange={handleInputChange}
              name="availabilityStatus"
              className="w-full px-3 text-black border-2 border-purple-400 rounded-lg h-11 focus:outline-purple-600"
            />
            {errors.availabilityStatus && (
              <p className="text-sm text-red-500">
                {errors.availabilityStatus._errors[0]}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            {/*Category*/}
            <InputField
              id="category"
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
              name="category"
              className="w-full px-3 text-black border-2 border-purple-400 rounded-lg h-11 focus:outline-purple-600"
            />
            {errors.category && (
              <p className="text-sm text-red-500">
                {errors.category._errors[0]}
              </p>
            )}
          </div>

          <div>
            {/*Brand Name*/}
            <InputField
              id="brandName"
              type="text"
              placeholder="Brand Name"
              value={formData.brandName}
              onChange={handleInputChange}
              name="brandName"
              className="w-full px-3 text-black border-2 border-purple-400 rounded-lg h-11 focus:outline-purple-600"
            />
            {errors.brandName && (
              <p className="text-sm text-red-500">
                {errors.brandName._errors[0]}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            {/*Warranty Information*/}
            <InputField
              id="warrantyInformation"
              type="text"
              placeholder="Warranty Information"
              value={formData.warrantyInformation}
              onChange={handleInputChange}
              name="warrantyInformation"
              className="w-full px-3 text-black border-2 border-purple-400 rounded-lg h-11 focus:outline-purple-600"
            />
            {errors.warrantyInformation && (
              <p className="text-sm text-red-500">
                {errors.warrantyInformation._errors[0]}
              </p>
            )}
          </div>

          <div>
            {/*Shipping Infomation*/}
            <InputField
              id="shippingInformation"
              type="text"
              placeholder="Shipping Information"
              value={formData.shippingInformation}
              onChange={handleInputChange}
              name="shippingInformation"
              className="w-full px-3 text-sm text-black border-2 border-purple-400 rounded-lg focus:outline-purple-600 h-11"
            />
            {errors.shippingInformation && (
              <p className="text-sm text-red-500">
                {errors.shippingInformation._errors[0]}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-10 ">
          <div>
            {/*Clear Button*/}
            <DefaultButton
              handleClick={handleClear}
              btnLabel="Clear"
              className="w-24 text-red-500 from-white to-white hover:from-red-200 hover:to-red-200"
            />
          </div>

          <div>
            {/*Add Button*/}
            <DefaultButton
              btnLabel="Add"
              handleClick={handleSubmit}
              className="w-28"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewProductForm;
