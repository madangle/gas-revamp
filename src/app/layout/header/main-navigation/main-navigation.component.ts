import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gas-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    
  }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    console.log(language)
    this.translate.use(language);
  }
}
