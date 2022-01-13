import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // by using  relative path ['servers'] instead of ['/servers'], and adding the {relativeTo: this.route}) and in the constructor
    // you tell angular that the route path  is relative to this path 'servers'.
    //this.router.navigate(['servers'], {relativeTo: this.route})
  }
}
