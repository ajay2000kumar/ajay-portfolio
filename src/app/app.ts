import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Banner } from './banner/banner';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Education } from './education/education';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [Navbar, Banner, About, Skills, Experience, Contact, Footer, Education, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-portfolio');
}
