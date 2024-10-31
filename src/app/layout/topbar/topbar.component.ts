import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/app.layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styles: ``
})
export class TopbarComponent implements OnInit{

  sidebarVisible: boolean = false;

  constructor(private layoutService: LayoutService){}

  ngOnInit(): void {
    // Suscribirse a los cambios de visibilidad del sidebar
    this.layoutService.sidebarVisible$.subscribe(visible => {
    this.sidebarVisible = visible;
    });
  }

  toggleMenu() {
    this.layoutService.toggleSidebar(); // llama al método para alterar el estado del sidebar
  }

}
