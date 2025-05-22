import { Component, Input, input } from '@angular/core';
import { Song } from '../Models/song.model';

@Component({
  selector: 'app-song-list',
  imports: [],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() canz! : Song 

  dettagli(){
    console.log(" Data uscita: " + this.canz.data_uscita + " Durata: " + this.canz.durata)
  }

}
