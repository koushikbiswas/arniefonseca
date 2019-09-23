import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BkLeftdivComponent } from '../../app/layout/bk-leftdiv/bk-leftdiv.component';

@Injectable()
export class SidenavService {
	private sidenav: MatSidenav;

	public setSidenav(sidenav: MatSidenav) {
		this.sidenav = sidenav;
	}
	
	// public open() {
	// 	return this.sidenav.open();
	// }


	// public close() {
	// 	return this.sidenav.close();
	// }

	public toggle(): void {
		this.sidenav.toggle();
	}
}