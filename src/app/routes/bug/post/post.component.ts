import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  post() {
    this.router.navigateByUrl('/bug/detail');
  }
}
