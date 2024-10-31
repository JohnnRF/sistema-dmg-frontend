import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  sidebarVisible: boolean = false;

  constructor(private layoutService: LayoutService){}

  ngOnInit(): void {
    // Suscribirse a los cambios de visibilidad del sidebar
    this.layoutService.sidebarVisible$.subscribe(visible => {
    this.sidebarVisible = visible;
    });
  }

}
