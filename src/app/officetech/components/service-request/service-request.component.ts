import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import './service-request.component.css';
import {MatCard} from "@angular/material/card";
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from "@angular/common";

Directive({
  selector: '[appAutoResize]'
})

@Component({
  selector: 'app-service-request',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCard,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './service-request.component.html',
  styleUrl: './service-request.component.css'
})
export class ServiceRequestComponent implements OnInit{
  myForm: FormGroup;
  subject: string = '';
  description: string = '';
  pricing: number = 0;
  myFormControl = new FormControl('', [Validators.required]);
  private maxHeight = '300px';
  constructor(private elementRef: ElementRef) {
    this.myForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      pricing: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.resize();
  }

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement) {
    this.resize(textArea);
  }

  resize(textArea?: HTMLTextAreaElement) {
    const textarea = textArea || this.elementRef.nativeElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, parseInt(this.maxHeight, 10))}px`;
  }

  onPublish() {
    this.subject = this.myForm.get('subject')?.value ?? '';
    this.description = this.myForm.get('description')?.value ?? '';
    this.pricing = this.myForm.get('pricing')?.value ?? null;

    console.log(this.subject)
    console.log(this.description)
    console.log(this.pricing)
  }
}
