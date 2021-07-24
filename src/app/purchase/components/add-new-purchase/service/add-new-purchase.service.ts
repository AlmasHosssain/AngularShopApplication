import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductDetailsInfo } from './../model/ProductDetailsInfo';

@Injectable({
  providedIn: 'root'
})
export class AddNewPurchaseService {

  constructor() { }

  addNewPurchase(purchase: ProductDetailsInfo): Observable<ProductDetailsInfo[]> {
    let purchaseArray = [];
    if (localStorage.getItem('Purchases')) {
      purchaseArray = JSON.parse(localStorage.getItem('Purchases')!)
      purchaseArray = [purchase, ...purchaseArray]
    } else {
      purchaseArray.unshift(purchase)
    }

    localStorage.setItem('Purchases', JSON.stringify(purchaseArray))

    return of(
      purchaseArray
    )
  }

  getAllPurchase(): Observable<ProductDetailsInfo[]> {
    return of(JSON.parse(localStorage.getItem('Purchases')!))
  }

  getSinglePurchase(id: string): Observable<ProductDetailsInfo> {
    let purchaseArray = []
    purchaseArray = JSON.parse(localStorage.getItem('Purchases')!)
    return of(purchaseArray.find((singlePurchases: ProductDetailsInfo) => {
      return singlePurchases.id == id;
    }))
  }

  updateSinglePurchase(purchases: ProductDetailsInfo): Observable<ProductDetailsInfo[]> {
    const purchaseArray = JSON.parse(localStorage.getItem('Purchases')!)
    purchaseArray.forEach((singlePurchases: ProductDetailsInfo) => {
      if (singlePurchases.id == purchases.id) {
        singlePurchases.suppler = purchases.suppler;
        singlePurchases.invoiceNo = purchases.invoiceNo,
        singlePurchases.paymentType = purchases.paymentType;
        singlePurchases.purchaseDate = purchases.purchaseDate;
        singlePurchases.details = purchases.details;
        singlePurchases.productDetails = purchases.productDetails
        singlePurchases.mainTotal = purchases.mainTotal;
        singlePurchases.discount = purchases.discount;
        singlePurchases.grandTotal = purchases.grandTotal;
        singlePurchases.paidAmount = purchases.paidAmount;
        singlePurchases.dueAmount = purchases.dueAmount
      } else {
        singlePurchases
      }
    })
    localStorage.setItem('Purchases', JSON.stringify(purchaseArray))

    return of(JSON.parse(localStorage.getItem('Purchases')!))
  }

  removerPurchase(purchases: ProductDetailsInfo): Observable<ProductDetailsInfo[]> {
    const purchaseArray = JSON.parse(localStorage.getItem('Purchases')!);
    let newTaskArray = purchaseArray.filter((singlePurchases: ProductDetailsInfo) => {
      return singlePurchases.id != purchases.id
    })
    localStorage.setItem('Purchases', JSON.stringify(newTaskArray))
    return of(JSON.parse(localStorage.getItem('Purchases')!));
  }
}
