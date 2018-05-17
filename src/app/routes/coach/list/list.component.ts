import { Component, OnInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, tap, switchMap, takeUntil, filter } from 'rxjs/operators';
import {
  NzModalService,
  ModalOptionsForService,
  NzModalRef,
} from 'ng-zorro-antd';

export interface CoachItemInter {
  // 开始时间
  start: number;
  // 结束时间
  end: number;
  // 长度
  colspan: number;
  // 数据
  list: any[];
}

export interface CoachTableInter {
  name: string;
  list: CoachItemInter[];
}
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
  tables: CoachTableInter[] = [];

  constructor(public modalControl: NzModalService) {
    for (let j = 0; j < this.dataWeek.length; j++) {
      this.tables.push({
        name: this.dataWeek[j],
        list: [],
      });
      for (let i = 0; i < 48; i++) {
        this.tables[j].list.push({
          start: i * 30,
          end: (i + 1) * 30,
          colspan: 1,
          list: [],
        });
      }
    }
    for (let i = 0; i < 24; i++) {
      this.dataSet = [...this.dataSet, ...this.getNumber(i)];
    }
  }

  ngOnInit() {
    console.log(this.tables);
  }

  getNumber(i: number) {
    const num1 = i < 10 ? '0' + i + ':00' : i + ':00';
    const num2 = i < 10 ? '0' + i + ':30' : i + ':30';
    return [num1, num2];
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

  deleteLesson(e: MouseEvent, item: any, x: number, y: number) {
    e.preventDefault();
    e.stopPropagation();
    const { colspan, name } = item;
    const names = name.split(':');
    const items: any[] = [];
    this.tables[x].list.splice(y, 1, ...items);
  }

  manageLesson(e: MouseEvent, item: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log(item);
  }
}
