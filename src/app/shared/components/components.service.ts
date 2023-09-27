import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ComponentsService {
  private headers;

  constructor(private http: HttpClient) {
      //this.headers = new HttpHeaders({ 'x-api-key': environment.apiKey });
      this.headers= new HttpHeaders({ 'Access-Control-Allow-Origin': "*",
                                      'Access-Control-Allow-Methods': "PUT, POST, DELETE, GET, OPTIONS",
                                      'Access-Control-Allow-Headers': "Accept, Authorization, Content-Type"
    });
  }

  public buscarExemplo(textoPesquisa: string): Observable<any>{
    var url =  environment.api + "chamada/funcao?textoPesquisa=" + textoPesquisa;
    return this.http.get(url);
  }
}
