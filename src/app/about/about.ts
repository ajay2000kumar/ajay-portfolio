import { Component } from '@angular/core';
import { Utils } from '../utils';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
})
export class About {
  yoe = '';

  constructor(private utils: Utils) {}

  ngOnInit() {
    this.yoe = this.utils.getAngularExperience();
  }
}
