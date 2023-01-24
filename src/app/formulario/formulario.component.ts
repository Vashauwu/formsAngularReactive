import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import{FormQualityComponent} from './form-quality/form-quality.component';
import { FormRhComponent } from './form-rh/form-rh.component';
import { CommonModule } from '@angular/common';

export type  FormType= 'rh' | 'quality';
@Component({
  standalone: true,
  selector: 'app-formulario',
  imports: [CommonModule,MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule,FormQualityComponent,FormRhComponent],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  form: FormType = 'rh';

  get showRh() {
    return this.form === 'rh';
  }

  get showQuality() {
    return this.form === 'quality';
  }

  toggleEditor(type: FormType) {
    this.form = type;
  }
}
