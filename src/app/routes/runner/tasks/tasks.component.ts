import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RunnerService } from '@core/runner.service';
import {
  SimpleTableColumn,
  SimpleTableChange,
  SimpleTableFilter,
  SimpleTableComponent,
  SimpleTableButton,
} from '@delon/abc';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class TasksComponent implements OnInit {
  users: any[] = [];
  columns: SimpleTableColumn[] = [
    {
      title: '编号',
      index: 'id',
      type: 'checkbox',
      width: '60px',
    },
    {
      title: '距离',
      index: 'distance',
      sorter: (a, b) => a.distance - b.distance,
      type: 'number',
      filters: [],
      width: '120px',
    },
    {
      title: '发布时间',
      index: 'add_time_title',
      sorter: (a, b) => a.add_time - b.add_time,
      width: '120px',
    },
    {
      title: '小费',
      index: 'addfee',
      type: 'currency',
      sorter: (a, b) => a.addfee - b.addfee,
      width: '120px',
    },
    {
      title: '重量计费',
      index: 'freight_money',
      type: 'number',
      sorter: (a, b) => a.freight_money - b.freight_money,
      width: '120px',
    },
    {
      title: '出发地',
      index: 'from_address',
      width: '120px',
    },
    {
      title: '发布头像',
      index: 'from_avatar',
      type: 'img',
      width: '60px',
    },
    {
      title: '订单留言',
      index: 'from_usernote',
      width: '150px',
    },
    {
      title: '保价',
      index: 'goods_insurance_money',
      width: '100px',
    },
    {
      title: '保价金额',
      index: 'goods_insurance',
      width: '100px',
    },
    {
      title: '货物名称',
      index: 'goods_name',
      width: '100px',
    },
    {
      title: '需要垫付',
      index: 'goods_needpay',
      width: '60px',
      type: 'yn',
    },
    {
      title: '货物类型',
      index: 'goods_type',
      width: '120px',
    },
    {
      title: '货物重量',
      index: 'goods_weight',
      width: '120px',
    },
    {
      title: '配送工具',
      index: 'goods_tool',
      width: '120px',
    },
    {
      title: '货物金额',
      index: 'goods_price',
      width: '100px',
    },
    {
      title: '订单总额',
      index: 'need_paymoney',
      width: '100px',
      type: 'currency',
    },
    {
      title: '备注',
      index: 'note',
      width: '100px',
    },
    {
      title: '其他费用',
      index: 'other_fee',
      width: '100px',
      type: 'currency',
    },
    {
      title: '其他费用备注',
      index: 'other_fee_desc',
      width: '150px',
    },
    {
      title: '发布人电话',
      index: 'pubusermobile',
      width: '120px',
    },
    {
      title: '是否发送短信',
      index: 'push_type',
      width: '120px',
      type: 'yn',
    },
    {
      title: '接单者',
      index: 'receiver',
      width: '120px',
    },
    {
      title: '接单电话',
      index: 'receiver_phone',
      width: '120px',
    },
    {
      title: '赏金',
      index: 'runner_money',
      width: '120px',
      type: 'currency',
    },
    {
      title: '类型',
      index: 'send_type',
      width: '120px',
    },
    {
      title: '小类',
      index: 'special_type',
      width: '120px',
    },
    {
      title: '状态',
      index: 'status',
      width: '120px',
    },
    {
      title: '预约',
      index: 'subscribe_type',
      width: '120px',
      type: 'yn',
    },
    {
      title: '时长',
      index: 'subscribe_time_long',
      width: '120px',
    },
    {
      title: '预约',
      index: 'subscribe_type',
      width: '120px',
      type: 'yn',
    },
    {
      title: '预约时间',
      index: 'subscribe_time',
      width: '120px',
    },
    {
      title: '目的地',
      index: 'to_address',
      width: '120px',
    },
    {
      title: '目的地备注',
      index: 'to_usernote',
      width: '120px',
    },
    {
      title: '优惠金额',
      index: 'total_priceoff',
      width: '120px',
      type: 'currency',
    },
    {
      title: '优惠金额',
      index: 'coupon_amount',
      type: 'currency',
      sorter: (a, b) => a.coupon_amount - b.coupon_amount,
      width: '100px',
    },
    {
      title: '工号',
      index: 'driver_jobnum',
      width: '120px',
    },
    {
      title: '跑腿电话',
      index: 'driver_mobile',
      width: '120px',
    },
    {
      title: '跑腿姓名',
      index: 'driver_name',
      width: '120px',
    },
    {
      title: '过期时间',
      index: 'expires_in',
      sorter: (a, b) => a.expires_in - b.expires_in,
      width: '120px',
    },
    {
      title: '完成时间',
      index: 'finish_time',
      sorter: (a, b) => a.finish_time - b.finish_time,
      width: '120px',
    },
    {
      title: '操作',
      width: '240px',
      buttons: [
        {
          text: '详情',
          type: 'modal',
          click: (record: any) => {},
        },

        {
          text: '删除',
          type: 'del',
          pop: true,
          click: (record: any) => {},
        },
        {
          text: '其他',
          children: [
            {
              text: '派单',
              type: 'modal',
              click: (record: any) => {},
            },
            {
              text: '改派',
              type: 'modal',
              click: (record: any) => {},
            },
            {
              text: '退款',
              type: 'del',
              click: (record: any) => {},
              pop: true,
              popTitle: '您确定要将款项退换给任务主，并删除任务么？',
            },
          ],
        },
      ],
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
      });
  }

  checkboxChange(ret: any) {
    console.log('checkboxChange', ret);
  }
  sortChange(ret: any) {
    console.log('sortChange', ret);
  }
}
