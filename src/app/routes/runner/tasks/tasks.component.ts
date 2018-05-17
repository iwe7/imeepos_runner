import { Component, OnInit } from '@angular/core';
import { RunnerService } from '@core/runner.service';
import {
  SimpleTableColumn,
  SimpleTableChange,
  SimpleTableFilter,
} from '@delon/abc';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  users: any[] = [];
  columns: SimpleTableColumn[] = [
    {
      title: '编号',
      index: 'id',
      type: 'checkbox',
      width: '60px'
    },
    {
      title: '距离',
      index: 'distance',
      sorter: (a, b) => a.distance - b.distance,
      type: 'number',
      filters: [],
      width: '120px'
    },
    {
      title: '发布时间',
      index: 'add_time_title',
      sorter: (a, b) => a.add_time - b.add_time,
      width: '120px'
    },
    {
      title: '小费',
      index: 'addfee',
      type: 'currency',
      sorter: (a, b) => a.addfee - b.addfee,
      width: '120px'
    },
    {
      title: '重量计费',
      index: 'freight_money',
      type: 'number',
      sorter: (a, b) => a.freight_money - b.freight_money,
      width: '120px'
    },
    {
      title: '出发地',
      index: 'from_address',
      width: '120px'
    },
    {
      title: '发布头像',
      index: 'from_avatar',
      type: 'img',
      width: '60px'
    },
    {
      title: '城市',
      index: 'city_name',
      width: '120px'
    },
    {
      title: '优惠金额',
      index: 'coupon_amount',
      type: 'currency',
      sorter: (a, b) => a.coupon_amount - b.coupon_amount,
      width: '100px'
    },
    {
      title: '工号',
      index: 'driver_jobnum',
      width: '120px'
    },
    {
      title: '跑腿电话',
      index: 'driver_mobile',
      width: '120px'
    },
    {
      title: '跑腿姓名',
      index: 'driver_name',
      width: '120px'
    },
    {
      title: '过期时间',
      index: 'expires_in',
      sorter: (a, b) => a.expires_in - b.expires_in,
      width: '120px'
    },
    {
      title: '完成时间',
      index: 'finish_time',
      sorter: (a, b) => a.finish_time - b.finish_time,
      width: '120px'
    },
  ];
  constructor(public runner: RunnerService) {}

  ngOnInit() {
    this.runner
      .getTasks({
        opt: 'all',
        send_type: -1,
      })
      .subscribe(res => {
        this.users = res;
        console.log(res);
      });
  }

  checkboxChange(ret: any) {
    console.log('checkboxChange', ret);
  }
  sortChange(ret: any) {
    console.log('sortChange', ret);
  }
}
