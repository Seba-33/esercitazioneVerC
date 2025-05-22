import { Component, Input } from '@angular/core';
import { Song } from '../Models/song.model';

@Component({
  selector: 'app-dettagli-album',
  imports: [],
  templateUrl: './dettagli-album.component.html',
  styleUrl: './dettagli-album.component.css'
})
export class DettagliAlbumComponent {
  @Input() detag!: Song

  
}
