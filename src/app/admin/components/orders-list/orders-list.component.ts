import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      image: 'assets/images/camiseta.png',
      price: 5000,
      description: 'Nueva Camiseta'
    },
    {
      id: '2',
      title: 'Buso',
      image: 'assets/images/hoodie.png.png',
      price: 15000,
      description: 'Nuevo Buso'
    }
  ]
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
