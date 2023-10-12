import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../api/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'name', 'phone', 'actions'];
  dataSource: any[] = [];

  constructor(private userService: UserServiceService, private router: Router) {}

  ngOnInit(): void {
    console.log("ngOnInit");
    this.userService.getUserList().subscribe((data: any) => {
      console.log(data);
      this.dataSource=data;
    })


  }

  handleAdd() {
    console.log("handleAdd");
    this.router.navigate(['/user-form'], {queryParams: {action: 'new'}});
  }

  handleSelected(element: any) {
    console.log(element);
    this.router.navigate(['/user-form'], {queryParams: {action: 'show', data: JSON.stringify(element)}});
  }

  handleEdit(element: any) {
    console.log(element);
    this.router.navigate(['/user-form'], {queryParams: {action: 'edit', data: JSON.stringify(element)}});
  }

  handleDelete(element: any) {
    console.log(element);
    //this.router.navigate(['/user-form'], {queryParams: {action: 'show', data: JSON.stringify(element)}});
  }
}
