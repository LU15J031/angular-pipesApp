import { LOCALE_ID, NgModule } from '@angular/core';
//import { PrimeNGModule } from './prime-ng/prime-ng.module';

import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { RouterAppModule } from './router-app.module';

// Cambiar el local de la app
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
 //     {provide: LOCALE_ID, useValue: 'es'} //cambiar el idioma
    ],
    bootstrap: [AppComponent],
    imports: [
        SharedModule,
        RouterAppModule,
        VentasModule
    ]
})
export class AppModule { }
