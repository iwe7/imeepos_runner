import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public http: _HttpClient) {}

  ngOnInit() {
    this.http.get('tasks/dashboard').subscribe(res => {
      console.log(res);
    });
  }
}
