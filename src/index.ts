import {
  NgModule,
  Directive,
  Input,
  HostBinding
} from '@angular/core';

const selector = `
  [layout], [layout-xs], [layout-gt-xs], [layout-sm], [layout-gt-sm], [layout-md], [layout-gt-md], [layout-lg], [layout-gt-lg], [layout-xl],
  [flex], [flex-xs], [flex-gt-xs], [flex-sm], [flex-gt-sm], [flex-md], [flex-gt-md], [flex-lg], [flex-gt-lg], [flex-xl]
`;

@Directive({ selector: selector })
export class LayoutDirective {
  @Input() class: string;

  @Input() layout: string;
  @Input() layoutXs: string;
  @Input() layoutGtXs: string;
  @Input() layoutSm: string;
  @Input() layoutGtSm: string;
  @Input() layoutMd: string;
  @Input() layoutGtMd: string;
  @Input() layoutLg: string;
  @Input() layoutGtLg: string;
  @Input() layoutXl: string;

  @Input() flex: string;
  @Input() flexXs: string;
  @Input() flexGtXs: string;
  @Input() flexSm: string;
  @Input() flexGtSm: string;
  @Input() flexMd: string;
  @Input() flexGtMd: string;
  @Input() flexLg: string;
  @Input() flexGtLg: string;
  @Input() flexXl: string;

  @HostBinding('class')
  get classes() {
    let previousClass = '';
    if (this.class) {
      previousClass = this.class;
    }

    const layoutClasses = this._getLayoutClasses();
    const flexClasses = this._getFlexClasses();

    return `${previousClass} ${layoutClasses} ${flexClasses}`;
  }

  _getLayoutClasses() {
    let layoutClasses: string[] = [];
    if (this.layout) {
      layoutClasses.push(this.layout === 'column' ? 'layout-column' : 'layout-row');
    }
    if (this.layoutXs) {
      layoutClasses.push(this.layoutXs === 'column' ? 'layout-xs-column' : 'layout-xs-row');
    }
    if (this.layoutGtXs) {
      layoutClasses.push(this.layoutGtXs === 'column' ? 'layout-gt-xs-column' : 'layout-gt-xs-row');
    }
    if (this.layoutSm) {
      layoutClasses.push(this.layoutSm === 'column' ? 'layout-sm-column' : 'layout-sm-row');
    }
    if (this.layoutGtSm) {
      layoutClasses.push(this.layoutGtSm === 'column' ? 'layout-gt-sm-column' : 'layout-gt-sm-row');
    }
    if (this.layoutMd) {
      layoutClasses.push(this.layoutMd === 'column' ? 'layout-md-column' : 'layout-md-row');
    }
    if (this.layoutGtMd) {
      layoutClasses.push(this.layoutGtMd === 'column' ? 'layout-gt-md-column' : 'layout-gt-md-row');
    }
    if (this.layoutLg) {
      layoutClasses.push(this.layoutLg === 'column' ? 'layout-lg-column' : 'layout-lg-row');
    }
    if (this.layoutGtLg) {
      layoutClasses.push(this.layoutGtLg === 'column' ? 'layout-gt-lg-column' : 'layout-gt-lg-row');
    }
    if (this.layoutXl) {
      layoutClasses.push(this.layoutXl === 'column' ? 'layout-xl-column' : 'layout-xl-row');
    }
    return layoutClasses.join(' ');
  }

  _getFlexClasses() {
    let flexClasses: string[] = [];
    if (this.flex) {
      flexClasses.push(this.flex === 'column' ? 'flex-column' : 'flex-row');
    }
    if (this.flexXs) {
      flexClasses.push(this.flexXs === 'column' ? 'flex-xs-column' : 'flex-xs-row');
    }
    if (this.flexGtXs) {
      flexClasses.push(this.flexGtXs === 'column' ? 'flex-gt-xs-column' : 'flex-gt-xs-row');
    }
    if (this.flexSm) {
      flexClasses.push(this.flexSm === 'column' ? 'flex-sm-column' : 'flex-sm-row');
    }
    if (this.flexGtSm) {
      flexClasses.push(this.flexGtSm === 'column' ? 'flex-gt-sm-column' : 'flex-gt-sm-row');
    }
    if (this.flexMd) {
      flexClasses.push(this.flexMd === 'column' ? 'flex-md-column' : 'flex-md-row');
    }
    if (this.flexGtMd) {
      flexClasses.push(this.flexGtMd === 'column' ? 'flex-gt-md-column' : 'flex-gt-md-row');
    }
    if (this.flexLg) {
      flexClasses.push(this.flexLg === 'column' ? 'flex-lg-column' : 'flex-lg-row');
    }
    if (this.flexGtLg) {
      flexClasses.push(this.flexGtLg === 'column' ? 'flex-gt-lg-column' : 'flex-gt-lg-row');
    }
    if (this.flexXl) {
      flexClasses.push(this.flexXl === 'column' ? 'flex-xl-column' : 'flex-xl-row');
    }
    return flexClasses.join(' ');
  }
}
@NgModule({
  exports: [
    LayoutDirective
  ],
  declarations: [
    LayoutDirective
  ],
})
export class LayoutModule {}
