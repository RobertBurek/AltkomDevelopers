import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AltkomDevelopersSharedModule } from 'app/shared/shared.module';
import { AltkomDevelopersCoreModule } from 'app/core/core.module';
import { AltkomDevelopersAppRoutingModule } from './app-routing.module';
import { AltkomDevelopersHomeModule } from './home/home.module';
import { AltkomDevelopersEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AltkomDevelopersSharedModule,
    AltkomDevelopersCoreModule,
    AltkomDevelopersHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AltkomDevelopersEntityModule,
    AltkomDevelopersAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class AltkomDevelopersAppModule {}
