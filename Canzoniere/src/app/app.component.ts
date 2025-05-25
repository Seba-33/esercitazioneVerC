import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from './Models/song.model';
import { SongListComponent } from './song-list/song-list.component';
import { DettagliAlbumComponent } from './dettagli-album/dettagli-album.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,SongListComponent,DettagliAlbumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Canzoniere';
  loading!: boolean
  obs!: Observable<Song[]>
  data!: object
  http!: HttpClient
  vettSong: Song[] = []
  vettDet: Song[] = []

  constructor(http: HttpClient){this.http = http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Song[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist')
    this.obs.subscribe(this.getData)
    
    
  }

  getData = (d: Song[]) => {
    this.vettSong = d
    this.loading = false
    console.log(this.vettSong)

  }

  ngOnInit(): void {
    this.makeChiamata()
  }

}
