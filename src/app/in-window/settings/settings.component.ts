import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  

  changelang(lang){
    this.translate.use(lang);
    localStorage.setItem('lang',lang);
    }

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
    
}
