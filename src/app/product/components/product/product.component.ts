import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  /* DoCheck,
  OnDestroy,
  SimpleChange */
} from '@angular/core';

import { Product } from '../../../core/models/product.model';

import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit/* , DoCheck, OnDestroy */ {
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChange) {
  //   console.log('2. ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  // ngDoCheck(): void {
  //   console.log('4. ngDoCheck');
  // }

  // ngOnDestroy(): void {
  //   console.log('5. ngOnDestroy');
  // }

  addCart(): void {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
  }
}
