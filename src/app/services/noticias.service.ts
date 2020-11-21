import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';



const apiKey = environment.apikey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

    private ejecutarQuery<T>( query: string){
      query = apiUrl + query;
      return this.http.get<T>( query, {headers} );
    }

    getTopHeadLines(){
      return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=mx`);
    }

    getTopHeadLinesCategoria(categoria: string){
      return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=mx&category=${categoria}`);
    }
}
