import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{

  items: MenuItem[] | undefined;
  model: any[] = [];


  isVisible = false;

  constructor(private layoutService:  LayoutService){}

  ngOnInit(): void {

    this.layoutService.sidebarVisible$.subscribe(visible => {
      this.isVisible = visible;
    })

    this.model = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-th-large',
            routerLink:['/dashboard']
          },

        ]
      },
      {
        label: 'Ganar',
        icon: 'pi pi-star',
        items: [
          {
            label: 'U Vida',
            icon: 'pi pi-pencil',
            routerLink:['/ganar/u-vida']
          },
          {
            label: 'Notas',
            icon: 'pi pi-book',
            routerLink:['/ganar/notas']
          }
        ]
      },
      {
        label: 'Consolidar',
        icon: 'pi pi-building-columns',
        items: [
          {
            label: 'C Destino',
            icon: 'pi pi-pencil',
            routerLink:['/dashboard']
          }
        ]
      },
      {
        label: 'Discipular',
        icon: 'pi pi-graduation-cap'
      },
      {
        separator: true,
      },
      {
        label: 'Enviar',
        icon: 'pi pi-verified',
        routerLink:['/dashboard']
      }
    ]

  }

  expandedMenus: number[] = []; // Variable que mantiene el submenú expandido

  toggleSubmenu(index: number): void {

    const isExpanded = this.expandedMenus.includes(index);

    if (isExpanded) {
      // Si el menú ya está expandido, lo removemos del array
      this.expandedMenus = this.expandedMenus.filter(i => i !== index);
    } else {
      // Si no está expandido, lo añadimos
      this.expandedMenus.push(index);
    }
  }


}

  


