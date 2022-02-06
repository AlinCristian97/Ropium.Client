import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JokeModel } from "./joke.model";

@Injectable({providedIn: 'root'})
export class ChuckNorrisService {
    readonly baseURL: string = 'https://api.chucknorris.io/jokes/';
    readonly endpoints = Object.freeze({ 
        randomJoke:  "random", 
        listOfCategories:  "categories" 
    });  

    constructor(private http: HttpClient) { }
    
    getRandomJoke() {
        return this.http.get<JokeModel>(this.baseURL + `${this.endpoints.randomJoke}`);
    }

    getRandomJokeByCategory(category: string) {

        const params = new HttpParams().set('category', category);

        return this.http.get<JokeModel>(this.baseURL + `${this.endpoints.randomJoke}`, { params: params});
    }
}