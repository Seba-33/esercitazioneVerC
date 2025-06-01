import { Component, Input, input } from '@angular/core';
import { Song } from '../Models/song.model';
import { DettagliAlbumComponent } from '../dettagli-album/dettagli-album.component';

@Component({
  selector: 'app-song-list',
  imports: [DettagliAlbumComponent],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() canz! : Song 
  @Input() det! : Song[]

  dettagli(){
    this.det.push(new Song(this.canz.data_uscita, this.canz.durata, this.canz.title))
    console.log(" Data uscita: " + this.canz.data_uscita + " Durata: " + this.canz.durata)
  }

}
