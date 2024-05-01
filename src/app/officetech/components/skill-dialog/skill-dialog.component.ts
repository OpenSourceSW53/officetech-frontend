import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-skill-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,

    MatDialogClose
  ],
  templateUrl: './skill-dialog.component.html',
  styleUrl: './skill-dialog.component.css'
})
export class SkillDialogComponent {
  public skill: string = '';
  constructor(
    public dialogRef: MatDialogRef<SkillDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
