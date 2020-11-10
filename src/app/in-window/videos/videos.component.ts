import { Component, AfterViewInit } from '@angular/core';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements AfterViewInit {

  title = 'app';
  domain:string = "meet.jit.si";
  options: any;
  api: any;

  ngAfterViewInit():void {
    
    this.options = {
      roomName: "Example",
      parentNode: document.querySelector('#meet')
    }

    this.api = new JitsiMeetExternalAPI(this.domain, this.options); 
  }

  constructor() { }

}
