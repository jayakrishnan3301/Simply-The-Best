import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SoundService {
  
  playClickSound() {
    let audio = new Audio();
    audio.src = "./assets/audio/mouse-click.mp3";
    audio.load();
    audio.play();
  }
}