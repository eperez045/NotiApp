import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RespuestaTopHeadlines } from '../interfaces/interfaces';

export const environment = {
  production: true,
  apikey: '87aa457d70984b7394bac5210594af51',
  apiUrl: 'http://newsapi.org/v2',
};

const apiKey = environment.apikey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headLinesPage = 0;

  constructor(private http: HttpClient) { }

    private ejecutarQuery<T>( query: string){
      query = apiUrl + query;
      return this.http.get<T>( query, {headers} );
    }

    getTopHeadLines(){
      this.headLinesPage ++;
      return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${this.headLinesPage}`);
    }

    getTopHeadLinesCategoria(categoria: string){
      return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}`);
    }

    searchByWord(word: string){
      return this.ejecutarQuery<RespuestaTopHeadlines>(`q=${word}&from=2020-10-24&sortBy=publishedAt`);
    }
}
