import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viacom18';
  profileInfo: any = {};
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getProfileInfo();
  }

  getProfileInfo(): void {
    this.userService.getProfileInfo().subscribe((profileInfo: any[]) => {
        this.profileInfo = profileInfo;
    });
  }
}
