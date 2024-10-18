import { z } from 'zod';

export const AddNewItemSchema = z.object({
  productTitle: z.string().nonempty("Product title is required"),
  description: z.string().nonempty("Description is required"),
  price: z.string().nonempty("Price is required"),  
  discount: z.string().optional(),  
  stockQty: z.string().nonempty("Stock quantity is required"),
  availabilityStatus: z.string().nonempty("Availability status is required"), 
  category: z.string().nonempty("Category is required"),
  brandName: z.string().optional(),
  warrantyInformation: z.string().optional(),
  shippingInformation: z.string().optional(),
});

