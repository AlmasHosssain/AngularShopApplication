import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from './model/Item';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddNewPurchaseService } from './../add-new-purchase/service/add-new-purchase.service';
import { ProductDetailsInfo } from './../add-new-purchase/model/ProductDetailsInfo';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.scss']
})
export class AllPurchasesComponent implements OnInit, AfterViewInit {

  dataSource!: MatTableDataSource<Item>;
  displayedColumns: string[] = ['sl', 'invoiceNo', 'supplierName', 'purchaseDate', 'totalAmount', 'action'];
  elementData : any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchController!: FormGroup
  
  constructor(
    private fb: FormBuilder,
    private addNewPurchaseService: AddNewPurchaseService,
    private router: Router,
    private location : Location
  ) { }

  ngOnInit(): void {
    this.searchController = this.fb.group({
      from: [''],
      to : ['']
    })

    this.addNewPurchaseService.getAllPurchase().subscribe((res : ProductDetailsInfo[]) => {
      if (res) {
        res.forEach((element: ProductDetailsInfo) => {
          let obj = {
            id : element.id,
            invoiceNo: element.invoiceNo,
            supplierName: element.suppler,
            purchaseDate : element.purchaseDate,
            totalAmount : element.grandTotal
          }
         this.elementData.push(obj)
        })
      }
    })
    this.dataSource = new MatTableDataSource(this.elementData);
  }

  search() {
    let selectedData : any[] = [];
    let { from, to } = this.searchController.value
    this.elementData.forEach(x => {
      if ( new Date(x.purchaseDate).setHours(23,59,59) >= new Date(from).setHours(23,59,59)
      && new Date(x.purchaseDate).setHours(23,59,59) <= new Date(to).setHours(23,59,59)) {
        selectedData.push(x);
     }
    })
    this.dataSource = new MatTableDataSource(selectedData)
    this.ngAfterViewInit()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  view(id: string) {
    this.router.navigate(['/purchase/single-purchase/view/',id])
  }

  update(id : string) {
    this.router.navigate(['/purchase/single-purchase/edit/',id])
  }

  backBtnClick() {
    this.location.back()
  }
}