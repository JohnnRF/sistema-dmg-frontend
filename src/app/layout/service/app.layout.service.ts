import { Injectable, effect, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface AppConfig {
    inputStyle: string;
    colorScheme: string;
    theme: string;
    ripple: boolean;
    menuMode: string;
    scale: number;
}

interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private sidebarVisible = new BehaviorSubject<boolean>(false);
    sidebarVisible$ = this.sidebarVisible.asObservable();

    toggleSidebar(){
        this.sidebarVisible.next(!this.sidebarVisible.value);
    }
}
