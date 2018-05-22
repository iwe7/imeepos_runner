import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list: any[] = [];
  constructor(public router: Router) {}

  ngOnInit() {}

  createTable() {
    this.router.navigate(['/tableBuilder/create']);
  }
}
