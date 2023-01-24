import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-quality',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-quality.component.html',
  styleUrls: ['./form-quality.component.css']
})
export class FormQualityComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}
