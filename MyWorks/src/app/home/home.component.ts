import { Component, Input, Inject, HostListener } from '@angular/core';
import { MatBadgePosition, MatBadgeSize} from '@angular/material/badge';
import { ThemePalette } from '@angular/material';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';

export class Todo {
  desc: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  navIsFixed: boolean;

  /* SNACK BAR*/
  message: string = 'Não esqueça de curtir';
  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  addExtraClass: boolean = false;
  /* FIM SNACK BAR */

  todo: Todo = new Todo();
  todos: Todo[] = [];

  //constructor(public snackBar: MatSnackBar) { }
  constructor(@Inject(DOCUMENT) private document: Document,public snackBar: MatSnackBar){

  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.navIsFixed = true;
      } else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { this.navIsFixed = false; } } scrollToTop() { (function smoothscroll() { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 5));
          }
      })();
  }  
  @Input('matBadgeColor')
  color: ThemePalette
  @Input('matBadge')
  content: string
  @Input('matBadgeDescription')
  description: string
  @Input('matBadgeDisabled')
  disabled: boolean
  @Input('matBadgeHidden')
  hidden: boolean
  @Input('matBadgeOverlap')
  overlap: boolean
  @Input('matBadgePosition')
  position: MatBadgePosition
  @Input('matBadgeSize')
  size: MatBadgeSize
  
  /*ABRE O SNACK BAR */
  open($event) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    //config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);  
  }
  save(todo: Todo) {
    this.todos.push(todo);
    this.todo = new Todo();
    this.todos = Object.assign([], this.todos);
  }

  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
