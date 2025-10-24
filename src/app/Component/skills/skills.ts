import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppText, LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-skills',
  imports: [RouterLink, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  technicalSkills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'Python',
    'C',
    'Java',
  ];

  softSkills: string[] = [
    'Effective Communication',
    'Team Collaboration',
    'Problem-Solving',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Leadership',
    'Attention to Detail',
  ];

  frameworks: string[] = ['Angular', 'React', 'Vue.js', 'jQuery', 'Node.js', 'Spring Boot'];

  databases: string[] = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'];

  tools: string[] = [
    'Git & GitHub',
    'Docker',
    'Visual Studio Code',
    'Postman',
    'Figma',
    'Bootstrap',
    'Tailwind CSS',
    'Jenkins',
    'Webpack',
  ];
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
