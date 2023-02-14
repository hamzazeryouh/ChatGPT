import { Component } from '@angular/core';
import { ChatGPtService } from './chat-gpt.service';

export class Model{
  name?:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatGPT';
  Input:string="";
  Data:any=null;
public constructor(private service:ChatGPtService){}


  async Post(){
  console.log("-----------------------"+this.Input);
  
    await (await this.service.Submit(this.Input)).subscribe(completion=>{
      debugger;
console.log(Object.values(completion.data) );
  this.Data= completion.data.choices[0].text ;

 })
}

}
