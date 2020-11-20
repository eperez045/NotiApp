import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

    getTopHeadLines(){
      return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=87aa457d70984b7394bac5210594af51`);
    }
}
