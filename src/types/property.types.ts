export interface IPropertyItemType {
  id?: number;
  title?: string;
  address?: string;
  facility?: IPropertyFacility;
  status?: string;
  type?: string;
  price?: number;
  image?: string[];
  country?: string;
  description?: string;
  rating?: number;
  state?: string;
  agent?: IPropertyAgent;
}

export interface IPropertyFacility {
  beds?: number;
  baths?: number;
  area?: string;
  smoking?: boolean;
  kitchen?: boolean;
  balcony?: boolean;
  wifi?: boolean;
  parking?: boolean;
}

export interface IPropertyAgent {
  name?: string;
  phone?: string;
  address?: string;
  properties?: number;
  avatar?: string;
}
