import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Canzoniere';
  loading!: boolean
  obs!: Observable<object>
  data!: object
  http!: HttpClient

  constructor(http: HttpClient){this.http = http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist')
    this.obs.subscribe(this.getData)
    
  }

  getData = (d: object) => {
    this.data = d
    console.log(this.data)

  }

  ngOnInit(): void {
    this.makeChiamata()
  }

}
