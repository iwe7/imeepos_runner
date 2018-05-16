import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'bug-status',
  templateUrl: './bug-status.component.html',
  styleUrls: ['./bug-status.component.css'],
})
export class BugStatusComponent implements OnInit {
  constructor(public route: ActivatedRoute, public location: Location) {
    this.route.queryParams.subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {}

  back() {
    this.location.back();
  }

  close() {}

  cui() {}
}
