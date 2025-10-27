import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppText {
  greeting: string;
  title: string;
  description: string;
  buttons: {
    home: string;
    bio: string;
    experience: string;
    skills: string;
    contact: string;
    download: string;
  };
  profile: string;
  aboutMe: string;
  dataMe: string;
  education: string;
  bachelor: string;
  university: string;
  graduated: string;
  gpa: string;
  projects: string;
  professionalExperience: string;
  extreme: string;
  positionExtreme: string;
  dutyExtreme1: string;
  dutyExtreme2: string;
  dutyExtreme3: string;
  dutyExtreme4: string;
  project: string;
  oras: string;
  dutyOras1: string;
  dutyOras2: string;
  dutyOras3: string;
  activities: string;
  tesa: string;
  dutyTesa1: string;
  dutyTesa2: string;
  skilltools: string;
  tachnical: string;
  frameworks: string;
  databases: string;
  tools: string;
  softskills: string;
  softskillList: {
    skill1: string;
    skill2: string;
    skill3: string;
    skill4: string;
    skill5: string;
    skill6: string;
    skill7: string;
    skill8: string;
  };
  contact: string;
  phone: string;
  email: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly isThaiSubject = new BehaviorSubject<boolean>(false);
  readonly isThai$ = this.isThaiSubject.asObservable();

  private english: AppText = {
    greeting: "Hi, I'm Nawin 👋",
    title: 'Frontend Developer | Computer Engineering Graduate',
    description: `Computer Engineering graduate with a strong passion for Frontend Development. 
      Experienced in building UI with Angular, collaborating via REST APIs, and working 
      in Agile environments. Participated in TESA Top Gun Rally 2024 & 2025, enhancing 
      problem-solving, teamwork, and real-time decision-making skills. Eager to contribute 
      and grow with the organization.`,
    buttons: {
      home: 'Home',
      bio: 'About Me',
      experience: 'Experienced',
      skills: 'Skills',
      contact: 'Contact Me',
      download: 'Download CV',
    },
    profile: 'My Profile',
    aboutMe: 'About Me',
    dataMe: 'My name is Nawin Phromrat, Computer Engineering graduate with a strong passion for Frontend Development. Experienced in building UI with Angular, collaborating via REST APIs, and working in Agile environments. Participated in TESA Top Gun Rally 2024 & 2025, enhancing problem-solving, teamwork, and real-time decision-making skills. Eager to contribute and grow with the organization.',
    education: 'Education',
    bachelor: 'Bachelor of Engineering',
    university: 'University: Nakhon Phanom University',
    graduated: 'Graduated: 2025',
    gpa: 'GPA: 3.25',
    projects: 'Experience & Projects',
    professionalExperience: 'Professional Experience',
    extreme: 'Extreme Software and Cinsulting Ltd., Partnership',
    positionExtreme: 'Frontend Developer (March 2024 - October 2024)',
    dutyExtreme1: 'Designed and implemented responsive user interfaces (UI/UX) with Angular, improving usability and reducing repetitive tasks by 25%.',
    dutyExtreme2: 'Collaborated with backend team to integrate REST APIs, enhancing data loading speed by 30%.',
    dutyExtreme3: 'Utilized GitLab for version control and Postman for API testing, improving development and testing efficiency.',
    project: 'Projects',
    oras: 'Online Request Approval System with Priority Queue Algorithm',
    dutyOras1: 'Developed a web application using Angular (Frontend) and Laravel (Backend).',
    dutyOras2: 'Implemented a Priority Queue Algorithm for efficient and fair request handling.',
    dutyOras3: 'Built a real-time chat system with Pusher to connect students with staff and instructors.',
    activities: 'Activities & Achievements',
    tesa: 'TESA Top Gun Rally 2024 & 2025',
    dutyTesa1: 'Developed solutions in Embedded Systems and IoT under time-constrained competition.',
    dutyTesa2: 'Gained experience in team collaboration, real-time problem solving, analytical thinking, and technical presentation to industry experts and judges.',
    skilltools: 'Skills & Tools',
    tachnical: 'Technical Skills',
    frameworks: 'Frameworks',
    databases: 'Databases',
    tools: 'Tools',
    softskills: 'Soft Skills',
    softskillList: {
      skill1: 'Effective Communication',
      skill2: 'Problem-Solving',
      skill3: 'Adaptability',
      skill4: 'Leadership',
      skill5: 'Team Collaboration',
      skill6: 'Time Management',
      skill7: 'Critical Thinking',
      skill8: 'Attention to Detail',
    },
    contact: 'Contact Me',
    phone: 'Phone: 097-1563677',
    email: 'nawinp19@gmail.com',
    address: '110/4 Moo 4, Khok Sung Subdistrict, Pla Pak District Nakhon Phanom, 48160 Thailand',
    dutyExtreme4: ''
  };

  private thai: AppText = {
    greeting: 'สวัสดีครับ, ผมชื่อ นาวิน พรมรัตน์ 👋',
    title: 'นักพัฒนาฝั่งหน้า | วิศวกรรมคอมพิวเตอร์',
    description: `จบวิศวกรรมคอมพิวเตอร์ มีความสนใจด้าน Frontend Development 
      มีประสบการณ์สร้าง UI ด้วย Angular ทำงานร่วมกับ REST APIs 
      และทำงานในสภาพแวดล้อม Agile เข้าร่วม TESA Top Gun Rally 2024 & 2025 
      พัฒนาทักษะการแก้ปัญหา การทำงานเป็นทีม และการตัดสินใจแบบเรียลไทม์
      พร้อมเติบโตและพัฒนาในองค์กร`,
    buttons: {
      home: 'หน้าแรก',
      bio: 'เกี่ยวกับผม',
      experience: 'ประสบการณ์',
      skills: 'ทักษะ',
      contact: 'ติดต่อ',
      download: 'ดาวน์โหลด CV',
    },
    profile: 'โปรไฟล์ของผม',
    aboutMe: 'เกี่ยวกับผม',
    dataMe: 'ผมชื่อ นาวิน พรหมรัตน์ จบการศึกษาสาขา วิศวกรรมคอมพิวเตอร์ มีความสนใจอย่างมากในด้าน Frontend Development มีประสบการณ์ในการ สร้าง UI แบบไดนามิกด้วย Angular, ทำงานร่วมกับ REST APIs, และทำงานได้อย่างมีประสิทธิภาพใน Agile Environment เข้าร่วมกิจกรรม TESA Top Gun Rally 2024 & 2025 ซึ่งช่วยพัฒนาทักษะ การแก้ปัญหา การทำงานเป็นทีม และการตัดสินใจแบบเรียลไทม์ พร้อมที่จะนำทักษะเหล่านี้มามีส่วนร่วมและเติบโตไปพร้อมกับองค์กร',
    education: 'การศึกษา',
    bachelor: 'คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์',
    university: 'มหาวิทยาลัยนครพนม',
    graduated: 'สำเร็จการศึกษา: 2025',
    gpa: 'เกรดเฉลี่ย: 3.25',
    projects: 'ประสบการณ์การทำงานและโปรเจกต์',
    professionalExperience: 'ประสบการณ์การทำงาน',
    extreme: 'หจก. เอ็กซ์ตรีม ซอฟต์แวร์ แอนด์ คอนซัลติ้ง',
    positionExtreme: 'Frontend Developer (มีนาคม 2024 – ตุลาคม 2024)',
    dutyExtreme1: 'ออกแบบและพัฒนา อินเทอร์เฟซผู้ใช้ (UI/UX) แบบตอบสนอง ด้วย Angular ช่วยเพิ่มความสะดวกในการใช้งานและลดงานซ้ำซ้อนลง 25%',
    dutyExtreme2: 'ร่วมมือกับทีม Backend เพื่อรวม REST APIs เข้ากับระบบ ช่วยเพิ่มความเร็วในการโหลดข้อมูลขึ้น 30%',
    dutyExtreme3: 'ใช้ GitLab สำหรับการควบคุมเวอร์ชัน และ Postman สำหรับการทดสอบ API ช่วยเพิ่มประสิทธิภาพในการพัฒนาและทดสอบ',
    project: 'โปรเจกต์',
    oras: 'ระบบอนุมัติคำร้องออนไลน์ด้วยอัลกอริทึมการจัดลำดับคิวตามความสำคัญ',
    dutyOras1: 'พัฒนาเว็บแอปพลิเคชันโดยใช้ Angular เป็นส่วนของ Frontend และ Laravel เป็นส่วนของ Backend',
    dutyOras2: 'นำอัลกอริทึมการจัดเรียงคิวตามลำดับความสำคัญ มาใช้เพื่อจัดการคำร้องอย่างมีประสิทธิภาพและเป็นธรรม',
    dutyOras3: 'สร้างระบบแชตแบบเรียลไทม์โดยใช้ Pusher เพื่อเชื่อมต่อระหว่างนักศึกษา เจ้าหน้าที่ และอาจารย์',
    activities: 'กิจกรรมและความสำเร็จ',
    tesa: 'TESA Top Gun Rally 2024 & 2025',
    dutyTesa1: 'พัฒนาโซลูชันด้านระบบสมองกลฝังตัว (Embedded Systems) และอินเทอร์เน็ตของสรรพสิ่ง (IoT) ภายใต้การแข่งขันที่จำกัดเวลา',
    dutyTesa2: 'ได้พัฒนาประสบการณ์ในด้านการทำงานร่วมกันเป็นทีม, การแก้ปัญหาแบบเรียลไทม์, การคิดเชิงวิเคราะห์, และการนำเสนอเชิงเทคนิคต่อผู้เชี่ยวชาญและคณะกรรมการในอุตสาหกรรม',
    skilltools: 'ทักษะ & เครื่องมือ',
    tachnical: 'ทักษะทางด้านเทคนิค',
    frameworks: 'เฟรมเวิร์ค',
    databases: 'ฐานข้อมูล',
    tools: 'เครื่องมือ',
    softskills: 'ทักษะด้านมนุษยสัมพันธ์',
    softskillList: {
      skill1: 'การสื่อสารอย่างมีประสิทธิภาพ',
      skill2: 'การแก้ปัญหา',
      skill3: 'ความสามารถในการปรับตัว',
      skill4: 'ภาวะผู้นำ',
      skill5: 'การทำงานร่วมกันเป็นทีม',
      skill6: 'การบริหารเวลา',
      skill7: 'การคิดเชิงวิพากษ์',
      skill8: 'ความละเอียดรอบคอบ',
    },
    contact: 'ติดต่อ',
    phone: '097-1563677',
    email: 'nawinp19@gmail.com',
    address: '110/4 หมู่ 4, ตำบลโคกสูง, อำเภอปลาปาก นครพนม, 48160 ประเทศไทย',
    dutyExtreme4: ''
  };

  constructor() {
    // อ่านค่าจาก localStorage ถ้ามี
    const savedLang = localStorage.getItem('isThai');
    if (savedLang) {
      this.isThaiSubject.next(savedLang === 'true');
    }

    // บันทึกทุกครั้งที่เปลี่ยนภาษา
    this.isThai$.subscribe((value) => {
      localStorage.setItem('isThai', value.toString());
    });
  }

  getText(): AppText {
    return this.isThaiSubject.value ? this.thai : this.english;
  }

  toggleLanguage() {
    const newLang = !this.isThaiSubject.value;
    this.isThaiSubject.next(newLang);
    localStorage.setItem('isThai', JSON.stringify(newLang));
  }

  setThai(value: boolean) {
    this.isThaiSubject.next(value);
  }

  get currentLanguage(): 'EN' | 'TH' {
    return this.isThaiSubject.value ? 'TH' : 'EN';
  }
}
