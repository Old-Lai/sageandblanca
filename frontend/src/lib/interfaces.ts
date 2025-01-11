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
