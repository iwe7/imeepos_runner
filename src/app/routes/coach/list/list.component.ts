import { Component, OnInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, tap, switchMap, takeUntil, filter } from 'rxjs/operators';
import {
  NzModalService,
  ModalOptionsForService,
  NzModalRef,
} from 'ng-zorro-antd';
import { max, min, remove, toInteger, add } from 'lodash';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  dataSet = [];
  dataWeek = ['日', '一', '二', '三', '四', '五', '六'];
  nzLeft: string = '0px';
  tables: any[] = [];
  constructor(public modalControl: NzModalService) {
    for (let i = 0; i < this.dataWeek.length; i++) {
      this.tables[i] = {
        week: this.dataWeek[i],
        list: [],
      };
    }
    for (let i = 0; i < 24; i++) {
      this.getNumber(i);
    }
  }

  ngOnInit() {
    console.log(this.tables);
  }

  getNumber(i: number) {
    const num1 = i < 10 ? '0' + i + ':00' : i + ':00';
    const num2 = i < 10 ? '0' + i + ':30' : i + ':30';
    for (let j = 0; j < this.dataWeek.length; j++) {
      this.tables[j].list.push({
        name: num1,
        colspan: 1,
        list: [],
      });
      this.tables[j].list.push({
        name: num2,
        colspan: 1,
        list: [],
      });
    }
    this.dataSet.push(num1);
    this.dataSet.push(num2);
  }
  modal: NzModalRef<any>;

  // start
  isStart: boolean = false;
  start: any = { x: 0, y: 0 };
  end: any = { x: 0, y: 0 };

  selectStartOrEnd(i, j) {
    if (!this.isStart) {
      this.start.x = i;
      this.start.y = j;
      this.isStart = true;
    } else {
      this.end.x = i;
      this.end.y = j;
      let colspan = 1;
      for (let i = this.start.y; i < this.end.y; i++) {
        colspan += this.tables[this.start.x].list[i].colspan;
        if (i !== this.start.x) {
          this.tables[this.start.x].list.splice(i, 1);
        }
        this.tables[this.start.x].list[this.start.y].colspan = colspan;
      }
      this.isStart = false;
      this.udpateTable(this.start.x);
    }
  }

  addLesson(e: MouseEvent, item: any) {
    e.preventDefault();
    e.stopPropagation();
    const options: ModalOptionsForService = {
      nzOnOk: () => {
        this.modalControl.closeAll();
      },
      nzOnCancel: () => {
        this.modalControl.closeAll();
      },
    };
    this.modal = this.modalControl.create(options);
  }

  udpateTable(x: number) {
    const list = this.tables[x].list;
    this.startTableNumber = 0;
    for (const key in list) {
      const item = list[key];
      this.getName(item);
    }
    console.log(this.tables[x].list);
  }
  startTableNumber = 0;
  getName(item: any) {
    const start = this.startTableNumber;
    const time = 30 * item.colspan / 60 + '';
    const times = time.split('.');
    if (times.length === 1) {
      times.push('0');
    }
    this.startTableNumber = add(toInteger(start), toInteger(times[0]));
    if (this.startTableNumber < 10) {
      item.name = `0${this.startTableNumber}:${
        times[1] + '' === '0' ? '00' : '30'
      }`;
    } else {
      item.name = `${this.startTableNumber}:${
        times[1] + '' === '0' ? '00' : '30'
      }`;
    }
  }

  deleteLesson(e: MouseEvent, item: any, x: number, y: number) {
    e.preventDefault();
    e.stopPropagation();
    const { colspan, name } = item;
    const names = name.split(':');
    const items: any[] = [];
    for (let i = y + 1; i < colspan + y; i++) {
      items.push({
        name: this.getNextName(names),
        list: [],
        colspan: 1,
      });
    }
    this.tables[x].list.splice(y, 1, ...items);
    this.udpateTable(x);
  }

  getNextName(names: any[]) {
    const n0 = names[0];
    const n1 = names[1];
    if (n1 + '' === '30') {
      const n2 = toInteger(n0) + 1;
      return n2 + ':00';
    } else {
      return n0 + ':30';
    }
  }

  manageLesson(e: MouseEvent, item: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log(item);
  }
}
