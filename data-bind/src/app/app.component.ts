import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  heading = "Adding Servers and Blueprints!!";

  servers = [{type:'server',name:'Test',content:'A Test Server'}];

  serverCreated(serverData:{serverName:string,serverContent:string}){
    this.servers.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
    }
  
    blueprintCreated(blueprintdata:{serverName:string,serverContent:string}){
      this.servers.push({
        type:'content',
        name:blueprintdata.serverName,
        content:blueprintdata.serverContent
      })
    }

    OnDestroy(){
      this.servers.splice(0,1);
    }
    
    ngOnDestroy(){
      console.log("ngOnDestroy called!!!!");   
    }
  
}
