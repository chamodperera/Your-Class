import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YourClass';
  public storedLang: string;

  constructor(public translateService: TranslateService){
    const browserLang = localStorage.getItem('lang');

    if(browserLang=="sn"){
      translateService.use('sn');
      this.storedLang = 'sn';
    }else if(browserLang=="tm"){
      translateService.use('tm');
      this.storedLang = 'tm';
    }else{
      translateService.use('en');
      this.storedLang = 'en';
    }
  }
}
