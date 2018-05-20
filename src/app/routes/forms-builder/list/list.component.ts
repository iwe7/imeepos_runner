import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public router: Router, public modal: NzModalService) {}

  ngOnInit() {}

  createForm() {
    this.router.navigateByUrl('/formsBuilder/create');
  }
}
