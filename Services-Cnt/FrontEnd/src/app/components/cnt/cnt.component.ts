import { Component } from '@angular/core';
import { CntListComponent } from '../cnt-list/cnt-list.component';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CntService } from '../../services/cnt.service';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cnt',
  standalone: true,
  imports: [
    CntListComponent,
    ReactiveFormsModule,
    NzFormItemComponent,
    NzColDirective,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
    CommonModule,
  ],
  templateUrl: './cnt.component.html',
  styleUrls: ['./cnt.component.css'],
})
export class CntComponent {
  selectedCnt: any;

  validateForm: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
    price: FormControl<number>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: CntService,
    private notification: NzNotificationService
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
    });
  }

  submitFormCnt(): void {
    if (this.validateForm.valid) {
      this.apiService.createCnt(this.validateForm.value).subscribe(() => {
        this.createNotification(
          'success',
          `${this.validateForm.value.name} ${this.validateForm.value.description}`,
          'The Cnt has been created successfully!'
        );
        this.validateForm.reset();
        this.reloadCnts();
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }

  editCnt(cnt: any): void {
    this.selectedCnt = cnt;
  }

  reloadCnts(): void {
    const cntListComponent = new CntListComponent(this.apiService);
    cntListComponent.loadCnts();
  }
}
