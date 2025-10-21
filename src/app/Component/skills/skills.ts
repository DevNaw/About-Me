import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-skills',
  imports: [RouterLink, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
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
    'Java'
  ];

  softSkills: string[] = [
    'Effective Communication',
    'Team Collaboration',
    'Problem-Solving',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Leadership',
    'Attention to Detail'
  ];

  frameworks: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'jQuery',
    'Node.js',
    'Spring Boot'
  ];

  databases: string[] = [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'SQLite',
    'Firebase'
  ];

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
}
