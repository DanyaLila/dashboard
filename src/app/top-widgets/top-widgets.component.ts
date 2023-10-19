import { Component } from '@angular/core';
import {faBox, faLocation, faMoneyBill, faShop} from "@fortawesome/free-solid-svg-icons";
import {faUserTie} from "@fortawesome/free-solid-svg-icons/faUserTie";
import {faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import {faBuilding} from "@fortawesome/free-solid-svg-icons/faBuilding";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  protected readonly faUserTie = faUserTie;

  protected readonly faCircleDollarToSlot = faCircleDollarToSlot;
  protected readonly faBuilding = faBuilding;
  protected readonly faUserPlus = faUserPlus;
}
