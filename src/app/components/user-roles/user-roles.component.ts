import { Component, EventEmitter, input, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommontableComponent, TableAction, TableColumn } from '../shared/commontable/commontable.component';
import { MessageService } from 'primeng/api';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ReusablemodulesComponent } from '../shared/reusablemodules/reusablemodules.component';
import { PaginatorModule } from 'primeng/paginator';
import { Table, TableModule } from 'primeng/table'; 
import { Title } from '@angular/platform-browser';


interface User {
  id: number;
  name: string;
  zoneId: string;
  emailId: string;
  role: string;
  department: string;
  designation: string;
}


@Component({
  selector: 'app-user-roles',
  standalone: true,
  imports:  [CommonModule,DropdownModule,TableModule,DialogModule,ReactiveFormsModule,ReusablemodulesComponent,PaginatorModule],
  providers: [MessageService],
  templateUrl: './user-roles.component.html',
  styleUrl: './user-roles.component.css'
})
export class UserRolesComponent implements OnInit {

  @ViewChild('dt') table!: Table;
  registerForm!: FormGroup
  visible: boolean = false;
  leadId: string = '12345';  // Example Lead ID
  creationDate: string = new Date().toLocaleDateString();
  
  users: User[] = [];
  selectedUsers: User[] = [];
  Math = Math; // Make Math available in the template
  
  constructor(private messageService: MessageService,private fb: FormBuilder) {}
  
  ngOnInit() {
   
    this.initForm()
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      title:[],

      firstName: ["", Validators.required],
      middleName:[],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      companyName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      confirmEmail: ["", [Validators.required, Validators.email]],
      productCategory: ["", Validators.required],
      organization:[],
      department:[],
      designation:[],
      reportingManager:[],
      rating: [""],
      quantity: [""],
      notes: [""],
    })
  }
  


  titles = [
    { name: 'Mr', value: 'Mr' },
    { name: 'Ms', value: 'Ms' },
    { name: 'Dr', value: 'Dr' }
  ];

  organizations = [
    { name: 'Company A', value: 'companyA' },
    { name: 'Company B', value: 'companyB' }
  ];

  departments = [
    { name: 'HR', value: 'hr' },
    { name: 'Finance', value: 'finance' },
    { name: 'Engineering', value: 'engineering' }
  ];

  designations = [
    { name: 'Manager', value: 'manager' },
    { name: 'Developer', value: 'developer' },
    { name: 'Analyst', value: 'analyst' }
  ];


  productCategories = [{ name: 'Category 1', value: 'cat1' }, { name: 'Category 2', value: 'cat2' }];
  ratings = [{ name: '5 Stars', value: 5 }, { name: '4 Stars', value: 4 }];
  quantities = [{ name: '1 Unit', value: 1 }, { name: '2 Units', value: 2 }];

 
  
  applyFilterGlobal(event: any, stringVal: string) {
    this.table.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }
  
  createNewUser() {
    this.visible = true; // Opens the popup
  }
  
  editUser(user: User) {
    this.messageService.add({
      severity: 'info',
      summary: 'Edit User',
      detail: `Edit User ${user.name} functionality will be implemented with API integration`
    });
  }
  
  deleteUser(user: User) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete User',
      detail: `Delete User ${user.name} functionality will be implemented with API integration`
    });
  }
  
  isSelected(user: User): boolean {
    return this.selectedUsers.some(selectedUser => selectedUser.id === user.id);
  }

  closeDialog() {
    this.visible = false; // Closes the popup
  }

  submitForm() {
    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value);
      this.closeDialog(); // Close dialog on successful submission
    }
  }
}