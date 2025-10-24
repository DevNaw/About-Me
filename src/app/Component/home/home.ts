import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppText, LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  isThai = false;
  text!: AppText;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    // โหลดค่าครั้งแรก
    this.text = this.languageService.getText();
    this.isThai = this.languageService.currentLanguage === 'TH';

    // subscribe เพื่ออัปเดตข้อความเมื่อเปลี่ยนภาษา
    this.languageService.isThai$.subscribe((value) => {
      this.isThai = value;
      this.text = this.languageService.getText();
    });
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
