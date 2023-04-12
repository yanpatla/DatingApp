import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get('https://localhost:5001/api/users').subscribe({
      next: (res) => (this.users = res),
      error: (e) => console.log(e),
      complete: () => console.log('Request Completed'),
    });
  }
}
