import { Component, OnInit } from '@angular/core';
import { sanpham } from './sanpham';

@Component({
  selector: 'app-quanly-sp',
  templateUrl: './quanly-sp.component.html',
  styleUrls: ['./quanly-sp.component.scss']
})

export class QuanlySpComponent implements OnInit {
  sp = new sanpham();
  arr: sanpham[] = [];
  name: string = 'dat';
  // arr1: Array<sanpham> = [];

  constructor() { }

  ngOnInit() {
    let mang = JSON.parse(localStorage.getItem('dat'));
    if (mang !== null) {
      this.arr = mang;
    }
  }

  getInfo(a, b, c){
    this.sp.ma = a;
    this.sp.ten = b;
    this.sp.gia = c;
    this.arr.push(this.sp);
    localStorage.setItem('dat', JSON.stringify(this.arr));
  }



}
