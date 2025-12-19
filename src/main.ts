import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import {
  TranslateModule,
  TranslateLoader,
  provideTranslateService,
} from '@ngx-translate/core';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileRepository } from './app/domain/profile/profile.repository';
import { ProfileStorageRepository } from './app/infrastructure/profile/profile.storage.repository';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  provideTranslateHttpLoader,
  TranslateHttpLoader,
} from '@ngx-translate/http-loader';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: 'es',
    }),
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json',
    }),
    importProvidersFrom(IonicModule.forRoot(), IonicStorageModule.forRoot()),
    {
      provide: ProfileRepository,
      useClass: ProfileStorageRepository,
    },
  ],
});
