import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppText, LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-bio',
  imports: [RouterLink],
  templateUrl: './bio.html',
  styleUrl: './bio.css',
})
export class Bio {
  text!: AppText;
  isThai = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // โหลดค่าครั้งแรก
    this.text = this.languageService.getText();
    this.isThai = this.languageService.currentLanguage === 'TH';

    // subscribe เพื่ออัปเดตเมื่อเปลี่ยนภาษา
    this.languageService.isThai$.subscribe((value) => {
      this.isThai = value;
      this.text = this.languageService.getText();
    });
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
