import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarVisible = true;
  @Input() navTab = 'menu';
  //@Input() currentActiveMenu;
  //@Input() currentActiveSubMenu;
  @Output() changeNavTabEvent = new EventEmitter();
  @Output() activeInactiveMenuEvent = new EventEmitter();
  public themeClass = 'theme-cyan';
  test : string = "TTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZTTTTTTTTTTTTZZZZZZZZZZZZZZZZZZZ"
  constructor(
    //private data: CommonService
    ) { }

  ngOnInit() : void {
    //this.data.getCommonData().subscribe(
      //data => {
    //  this.cost = data.cost;
    //  this.conversion = data.conversion;
    //  this.costPerConversion = data.costPerConversion;
    //});
  }
  changeNavTab(tab: string) {
    this.navTab = tab;
  }

  activeInactiveMenu(menuItem: string) {
    this.activeInactiveMenuEvent.emit({ item: menuItem });
  }

  changeTheme(theme: string) {
   // this.themeService.themeChange(theme);
  }

}
