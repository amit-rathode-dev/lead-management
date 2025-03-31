import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  // isCollapsed = false;
  // activeRoute = '/dashboard';

  // @Output() sidebarStateChange = new EventEmitter<boolean>();


  // constructor(private router: Router) {
  //   this.activeRoute = this.router.url;
  // }



  // menuItems = [
  //   { label: "Dashboard", icon: "pi pi-home", routerLink: ["/dashboard"] },
  //   { label: "Users", icon: "pi pi-users", routerLink: ["/users"] },
  //   { label: "Reports", icon: "pi pi-chart-bar", routerLink: ["/reports"] },
  //   { label: "Settings", icon: "pi pi-cog", routerLink: ["/settings"] },
  // ]


  // toggleSidebar() {
  //   this.isCollapsed = !this.isCollapsed;
  //   this.sidebarStateChange.emit(this.isCollapsed);
  // }

  // setActive(route: string) {
  //   this.activeRoute = route;
  // }





  isCollapsed = false; // 🔥 Default: Sidebar open
  activeRoute = '';

  @Output() sidebarStateChange = new EventEmitter<boolean>();

  constructor(private router: Router) {
   
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    })
  }

  menuItems = [
    { label: "Dashboard", icon: "pi pi-home", routerLink: ["/dashboard"] },
    { label: "Users", icon: "pi pi-users", routerLink: "/user-roles" },
    { label: "Reports", icon: "pi pi-chart-bar", routerLink: ["/reports"] },
    { label: "Settings", icon: "pi pi-cog", routerLink: ["/settings"] },
  ];

 
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    setTimeout(() => {
      this.sidebarStateChange.emit(!this.isCollapsed);
    }, 0);
  }

  setActive(route: string) {
    this.activeRoute = route;
  }
}
