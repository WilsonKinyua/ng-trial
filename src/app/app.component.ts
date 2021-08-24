import { HttpClient } from '@angular/common/http';
import { AccountService } from './acounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  //   h1 {
  //     color: green;
  //     font-size: 100px
  //   }
  // `]
})
export class AppComponent implements OnInit {
  title = 'goals';

  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  // posts: any;
  // udemy classes
  accounts: { name: string; status: string }[] = [];

  constructor(
    private accountService: AccountService,
    // private http: HttpClient
  ) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  // getPosts() {
  //   this.http.get(this.ROOT_URL + '/posts').subscribe((data) => {
  //     this.posts = data;
  //   });
  // }
}
