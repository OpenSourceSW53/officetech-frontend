import {Component, Input} from '@angular/core';
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContainer,
  MatDialogContent, MatDialogModule,
  MatDialogRef
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-skill-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatDialogClose,
    MatDialogContainer,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    ReactiveFormsModule,
    MatButtonToggle,
  ],
  templateUrl: './skill-dialog.component.html',
  styleUrl: './skill-dialog.component.css'
})
export class SkillDialogComponent {
  @Input() userId: string = "";

  public skill: string = '';
  constructor(public userService: UserService, private dialogRef: MatDialogRef<SkillDialogComponent>){
    console.log(this.userId)
  }

  saveSkill() {
    const body = {
      userId: this.userId,
      skillDescription: this.skill
    }
    console.log(this.userId)
    this.userService.saveSkillByUserId(body).subscribe(data => {
      this.cancelSkill();
    });
  }

  cancelSkill() {
    this.skill = '';
    this.dialogRef.close();
  }

}
