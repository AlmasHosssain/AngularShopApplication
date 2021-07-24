import { ProductOwnInfo } from './ProductOwnInfo';

export interface ProductDetailsInfo {
  id? : string,
  suppler: string,
  invoiceNo: number,
  paymentType: string,
  purchaseDate: any,
  details: string,
  productDetails: ProductOwnInfo[],
  mainTotal?: number,
  discount?: number,
  grandTotal?: number,
  paidAmount?: number,
  dueAmount? : number
}