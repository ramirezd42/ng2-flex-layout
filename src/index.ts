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
    if (typeof this.flex !== 'undefined') {
      flexClasses.push(this.flex.length ? `flex-${this.flex}` : 'flex');
    }
    if (typeof this.flexXs !== 'undefined') {
      flexClasses.push(this.flexXs.length ? `flex-xs-${this.flexXs}` : 'flex-xs');
    }
    if (typeof this.flexGtXs !== 'undefined') {
      flexClasses.push(this.flexGtXs.length ? `flex-gt-xs-${this.flexGtXs}` : 'flex-gt-xs');
    }
    if (typeof this.flexSm !== 'undefined') {
      flexClasses.push(this.flexSm ? `flex-sm-${this.flexSm}` : 'flex-sm');
    }
    if (typeof this.flexGtSm !== 'undefined') {
      flexClasses.push(this.flexGtSm ? `flex-gt-sm-${this.flexGtSm}` : 'flex-gt-sm');
    }
    if (typeof this.flexMd !== 'undefined') {
      flexClasses.push(this.flexMd ? `flex-md-${this.flexMd}` : 'flex-md');
    }
    if (typeof this.flexGtMd !== 'undefined') {
      flexClasses.push(this.flexGtMd ? `flex-gt-md-${this.flexGtMd}` : 'flex-gt-md');
    }
    if (typeof this.flexLg !== 'undefined') {
      flexClasses.push(this.flexLg ? `flex-lg-${this.flexLg}` : 'flex-lg');
    }
    if (typeof this.flexGtLg !== 'undefined') {
      flexClasses.push(this.flexGtLg ? `flex-gt-lg-${this.flexGtLg}` : 'flex-gt-lg');
    }
    if (typeof this.flexXl !== 'undefined') {
      flexClasses.push(this.flexXl ? `flex-xl-${this.flexXl}` : 'flex-xl');
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
