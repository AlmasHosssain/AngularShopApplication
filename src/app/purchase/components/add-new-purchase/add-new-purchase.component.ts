import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs'
import { MediaChange, MediaObserver } from '@angular/flex-layout'
import { nanoid } from 'nanoid'
import { ProductDetailsInfo } from './model/ProductDetailsInfo';
import { ProductOwnInfo } from './model/ProductOwnInfo';
import { AddNewPurchaseService } from './service/add-new-purchase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-new-purchase',
  templateUrl: './add-new-purchase.component.html',
  styleUrls: ['./add-new-purchase.component.scss']
})
export class AddNewPurchaseComponent implements OnInit, OnDestroy {

  purchaseDetails!: FormGroup;

  supplerNames: string[] = ["Nelson", "Hudson", "Anderson", "Mark", "Michel"];
  paymentTypes: string[] = ["Cash Payment", "Card Payment", "Due"];
  showClear: boolean = false;

  mediaSub!: Subscription;
  deviceMd!: boolean

  singlePurchase!: ProductDetailsInfo;
  action: any = '';
  headingTitle: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private mediaObserver: MediaObserver,
    private addNewPurchaseService: AddNewPurchaseService,
    private toaster : ToastrService
  ) { }

  ngOnInit(): void {
    this.purchaseDetails = this.fb.group({
      suppler: ['', [Validators.required]],
      invoiceNo: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      purchaseDate: ['', [Validators.required]],
      details: [''],
      productDetails: this.fb.array([
        this.addProductInfo()
      ]),
      mainTotal: [0],
      discount: [0],
      grandTotal: [0],
      paidAmount: [0],
      dueAmount: [0]
    })

    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      this.deviceMd = res.mqAlias === "sm" || res.mqAlias === "xs" ? true : false
    })
  
    this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
      let id = params.get('id');
      if (id) {
        this.getSinglePurchase(id);
      } else {
        this.initialForm()
      }
    })
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.action = params.get('action')
      this.headingTitle = this.action == "create" ? "Add New Purchase" : this.action == "view" ? "View Purchase" : "Update Purchase"
    })
  }

  addProductInfo(): FormGroup {
    return this.fb.group({
      productName: ['', [Validators.required]],
      stock: [0],
      qnty: [0, [Validators.required]],
      rate: [0, [Validators.required]],
      total: [0]
    })
  }

  getProductIntoList() {
    return (this.purchaseDetails.get('productDetails') as FormArray).controls
  }

  addProductInfoBtn() {
    (<FormArray>this.purchaseDetails.get('productDetails')).push(this.addProductInfo())
  }

  removeProductInfoBtn(index: number) {
    let tempProductList = (<FormArray>this.purchaseDetails.get('productDetails'));
    tempProductList.removeAt(index)
  }

  setExistingPurchaseToForm(purchase: ProductDetailsInfo) {
    this.purchaseDetails.patchValue({
      suppler: purchase.suppler,
      invoiceNo: purchase.invoiceNo,
      paymentType: purchase.paymentType,
      purchaseDate: purchase.purchaseDate,
      details: purchase.details,
      mainTotal: purchase.mainTotal,
      discount: purchase.discount,
      grandTotal: purchase.grandTotal,
      paidAmount: purchase.paidAmount,
      dueAmount: purchase.dueAmount
    })

    this.purchaseDetails.setControl('productDetails', this.setExistingPurchase(purchase.productDetails))
  }

  setExistingPurchase(purchases: ProductOwnInfo[]): FormArray {
    let formArray = new FormArray([])
    purchases.forEach(singlePurchase => {
      formArray.push(this.fb.group({
        productName: singlePurchase.productName,
        stock: singlePurchase.stock,
        qnty: singlePurchase.qnty,
        rate: singlePurchase.rate,
        total: singlePurchase.total
      }))
    })

    return formArray
  }

  getSinglePurchase(id : string) {
    this.addNewPurchaseService.getSinglePurchase(id).subscribe(purchase => {
      this.singlePurchase = purchase;
      this.setExistingPurchaseToForm(purchase);
    })
  }

  submit() {
    this.mapFormValueToSinglePurchase();
    let { suppler, details, discount, dueAmount, grandTotal, invoiceNo, mainTotal, paidAmount, paymentType, purchaseDate, productDetails } = this.purchaseDetails.value
    if (this.singlePurchase.id) {
      this.addNewPurchaseService.updateSinglePurchase(this.singlePurchase)
        .subscribe(res => {
          this.toaster.success('Purchase Updated Successfully');
          this.router.navigate(['/purchase/all-purchase']);
        })
    } else {
      let submittedData : ProductDetailsInfo = {
        id: nanoid(),
        suppler, details, discount, dueAmount, grandTotal, invoiceNo, mainTotal, paidAmount, paymentType, purchaseDate, productDetails
      }

      this.addNewPurchaseService.addNewPurchase(submittedData)
        .subscribe(res => {
          this.toaster.success('Purchase Added Successfully');
          this.router.navigate(['/purchase/all-purchase']);
        })
    }
  }

  mapFormValueToSinglePurchase() {
    let { details, discount, dueAmount, grandTotal, invoiceNo, mainTotal, paidAmount, paymentType, purchaseDate, productDetails } = this.purchaseDetails.value;
    this.singlePurchase.details = details;
    this.singlePurchase.discount = discount;
    this.singlePurchase.dueAmount = dueAmount;
    this.singlePurchase.grandTotal = grandTotal;
    this.singlePurchase.invoiceNo = invoiceNo;
    this.singlePurchase.mainTotal = mainTotal;
    this.singlePurchase.paidAmount = paidAmount;
    this.singlePurchase.paymentType = paymentType;
    this.singlePurchase.purchaseDate = purchaseDate;
    this.singlePurchase.productDetails = productDetails;
  }
  
  initialForm() {
    this.singlePurchase = {
      suppler: '',
      invoiceNo: 0,
      paymentType: '',
      purchaseDate: '',
      details: '',
      productDetails: [],
      mainTotal: 0,
      discount: 0,
      grandTotal: 0,
      paidAmount: 0,
      dueAmount: 0
    }
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
