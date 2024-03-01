import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  @Output() themeToggled = new EventEmitter<void>();


  ngOnInit(): void {
  }
  toggleTheme() {
    this.themeToggled.emit();
  }
}
