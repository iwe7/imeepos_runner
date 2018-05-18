import { Component, OnInit } from '@angular/core';
import {
  SimpleTableColumn,
  SimpleTableChange,
  SimpleTableFilter,
  SimpleTableComponent,
  SimpleTableButton,
} from '@delon/abc';
import { RunnerService } from '@core/runner.service';
@Component({
  selector: 'runners',
  templateUrl: './runners.component.html',
  styleUrls: ['./runners.component.css'],
})
export class RunnersComponent implements OnInit {
  users: any[] = [];
  columns: SimpleTableColumn[] = [
    {
      title: '编号',
      index: 'uid',
      type: 'checkbox',
      sorter: (a, b) => a.uid - b.uid,
    },
    {
      title: '头像',
      index: 'avatar',
      type: 'img',
    },
    {
      title: '余额',
      index: 'credit1',
      sorter: (a, b) => a.credit1 - b.credit1,
    },
    {
      title: '积分',
      index: 'credit2',
      sorter: (a, b) => a.credit2 - b.credit2,
    },
    {
      title: '电话',
      index: 'telephone',
    },
    {
      title: 'vip',
      index: 'vip',
      type: 'yn',
    },
    {
      title: '身份证',
      index: 'idcard',
    },
    {
      title: '卡号',
      index: 'cardid',
    },
    {
      title: '卡名',
      index: 'cardname',
    },
    {
      title: '',
      index: 'cardfrom',
    },
    {
      title: '性别',
      index: 'bloodtype',
      type: 'yn',
    },
    {
      title: '出生年',
      index: 'birthday',
    },
    {
      title: '出生月',
      index: 'birthmonth',
    },
    {
      title: '出生日',
      index: 'birthday',
    },
    {
      title: '血型',
      index: 'bio',
    },
  ];
  constructor(public runner: RunnerService) {}
  ngOnInit() {
    this.runner.getRunners({}).subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }
}
