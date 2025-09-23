import { Component } from '@angular/core';
import { Utils } from '../utils';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
  standalone: true,
})
export class Banner {
  yoe = '';

  constructor(private utils: Utils) {}

  ngOnInit() {
    this.yoe = this.utils.getAngularExperience();
  }
}
