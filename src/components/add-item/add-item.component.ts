import { ComponentFactoryResolver, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  userDetail: any = {};
  cities = [];
  @ViewChild('clone') clone: ElementRef;
  @ViewChild('container', {read: ViewContainerRef}) container;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCities();
  }

  addRow(): void {
    this.container.createEmbeddedView(this.clone);
  }

  getCities(): void {
    this.userService.getCities().subscribe((cities: any[]) => {
      this.cities = cities;
  });
  }

  submitDetails(): void {
    localStorage.setItem('userInfo', this.userDetail);
    this.userService.addUser(this.userDetail).subscribe(data => {
      console.log('message::::', data);
      this.userDetail = {};
    });
  }
}
