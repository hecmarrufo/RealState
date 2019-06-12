import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RealStateSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RealStateSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [RealStateSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RealStateSharedModule {
  static forRoot() {
    return {
      ngModule: RealStateSharedModule
    };
  }
}
