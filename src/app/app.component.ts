import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 
  constructor(public router: Router, public cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

  ePanServices(){
    this.router.navigate(['/login'])
  }

  ngOnDestroy() {
  }
}
