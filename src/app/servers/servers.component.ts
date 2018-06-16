import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatonstatus = `No server was created!!!`;
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreatedServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreatonstatus = `Server is created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    // casting
    // this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;
  }

}
