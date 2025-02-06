import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  //export class RolesComponent implements OnInit{
  /* rolelist:IRole [] =[];
    http = inject(HttpClient);

  ngOnInit(): void {
    
  }

  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
     .subscribe((res:any)=>{
        
     })
  }*/

  firstName: string = 'angular tutorial';
  angularversion = 'version19';

  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = 'button';
  selectedState: string = '';

  showWelcomeAlert() {
    alert('welcome to angular tutorial');
  }

  showMessage(message: string) {
    alert(message);
  }
}
