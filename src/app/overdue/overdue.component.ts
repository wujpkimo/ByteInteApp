import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.css']
})
export class OverdueComponent implements OnInit {

  public nav: Nav[] = [{ name: 'ALL', condition: 0 }, { name: 'Over15', condition: 15 }, { name: 'Over30', condition: 30 }]
  list: List[] = [
    { day: 15, customer: '智邦', cost: 1350000 },
    { day: 10, customer: '百威宇智', cost: 10000 },
    { day: 5, customer: '智邦', cost: 240000 }
  ];

  public condition: Nav = this.nav[0];

  public display: List[] = this.list;

  constructor() { }

  ngOnInit() {
  }

  getsummary(): number {
    let total = 0;
    for (let i = 0; i <= this.display.length - 1; i++) {
      total += this.display[i].cost;
    }
    return total;
  }

  onSelect(nav: Nav) {
    this.display = this.list.filter(p => p.day >= nav.condition);
    this.condition = nav;
  }
}

export interface Nav {
  name: string;
  condition: number;
}

export interface List {
  day: number;
  customer: string;
  cost: number;
}
