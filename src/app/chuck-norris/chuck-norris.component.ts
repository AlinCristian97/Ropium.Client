import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
  joke: string;
  jokeByCategory: string;
  categories: string[] = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
  ];
  selectedCategory: string = "sport";
    
  constructor(private chuckNorrisService: ChuckNorrisService) { }

  ngOnInit(): void {
    this.onGetRandomJoke();
    this.onGetRandomJokeByCategory(this.selectedCategory);
  }

  onGetRandomJoke() {
    this.chuckNorrisService.getRandomJoke().subscribe(j => {
      this.joke = j.value;
    });
  }

  onGetRandomJokeByCategory(category: string) {
    this.chuckNorrisService.getRandomJokeByCategory(category).subscribe(j => {
      this.jokeByCategory = j.value;
    });
  }
}
