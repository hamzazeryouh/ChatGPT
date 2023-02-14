import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Configuration,OpenAIApi } from "openai";
import { Observable } from "rxjs";
import { Env } from './Env';
const configuration = new Configuration({
  apiKey:Env.Key,
});
const openai = new OpenAIApi(configuration);
@Injectable({
  providedIn: 'root'
})
export class ChatGPtService {
  constructor(private http: HttpClient) { }
  async Submit(Input:string):Promise<Observable<any>>{
     var data= await openai.createCompletion({
         model: "text-davinci-003",
         prompt: Input,
         temperature:0.6, 
         max_tokens: 7,
       });
     return this.http.post(`${Env.URL}/`, data, { headers: new HttpHeaders().append('Content-Type', 'application/json') });
  }
 
}

