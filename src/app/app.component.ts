import { Component, VERSION } from '@angular/core';
import { FriendsService } from './friends.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  usserdata: any = [];
  findInfos: boolean = false;
  hidetextbox: boolean = true;
  formattext: boolean = false;
  constructor(private frindsservice: FriendsService) {}

  ngOnInit() {}

  findInfo() {
    this.frindsservice.getJSON().subscribe((data) => {
      console.log(data);
      this.usserdata = data;
      this.findInfos = true;
      this.hidetextbox = false;
    });
  }

  formatTextBox() {
    this.formattext = true;
  }
}
