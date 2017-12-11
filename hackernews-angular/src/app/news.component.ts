import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  news: any;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit() {
    this.news = this._route.snapshot.data['news'];
  }
}
