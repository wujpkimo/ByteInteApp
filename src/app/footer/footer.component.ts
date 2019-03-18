import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public navlist = [
    { url: '/home', name: '最新訊息' },
    { url: '/revenue', name: '盈收' },
    { url: '/overdue', name: '逾期' },
    { url: '/capacity', name: '產能' },
    { url: '/overtat', name: '超期' }];

  constructor() { }

  ngOnInit() {
  }

}
