import { Component, OnInit, Input } from '@angular/core';
import { SVGCacheService } from 'ng-inline-svg';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
})
export class SvgIconComponent implements OnInit {
  @Input() id: string;
  constructor(public svg: SVGCacheService) {}

  ngOnInit() {
    const svg = document.getElementById(this.id);
  }
}
