export interface SizeOption {
  value: string;
  description: string;
  dollar: number;
}

export interface Product {
  name: string;
  category: string;
  description: string;
  size_options: SizeOption[];
  additional_options: string[];
  dollar: number;
  cent: number;
  image: string;
}

export interface OrderDetail {
  allergies: string;
  allergiesText: string;
  colorTone: string;
  deliveryTime: string;
  estimatedCost: number;
  includeVase: boolean;
  premiumPackaging: boolean;
  size: string;
  specificRequest: string;
}

export interface OrderItem {
  name: string;
  unitCost: number;
  quantity: number;
  orderDetails: OrderDetail;
}
