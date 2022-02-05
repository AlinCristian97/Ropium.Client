import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
    
  constructor(private chuckNorrisService: ChuckNorrisService) { }

  ngOnInit(): void {
    this.onGetRandomJoke();
  }

  onGetRandomJoke(){
    this.chuckNorrisService.getRandomJoke();
  }
}
