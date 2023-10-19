import { Component } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.css']
})
export class LastFewTransactionsComponent {
  transactions = [
    {
      id: 1,
      title: "Risen 5 processor",
      price: "$299",
      shop: "Tech Pro",
      location: "East Hartfort",
      status: "pending",
      // imgSrc:
    },
    {
      id: 2,
      title: "Denver Blackhood",
      price: "$7.99",
      shop: "Pick The Best",
      location: "Miamiburg",
      status: "shipped",
      // imgSrc:
    },
    {
      id: 3,
      title: "Nike Shoes",
      price: "$1.99",
      shop: "Shoes Store",
      location: "Cherkasy",
      status: "confirmed",
      // imgSrc:
    }
  ]
}
