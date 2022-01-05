import { Component, OnInit, Input, ElementRef, ViewChild, ViewChildren, QueryList } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }

faq:any = [
    {'question': 'one', 'answer': 'Sentence 1'},
    {'question': 'two', 'answer': 'Sentence 1'},
  {'question': 'three', 'answer': 'Sentence 1'},
];

    @Input() icon = "arrow";
  @ViewChildren("el", { read: ElementRef })
  el!: QueryList<ElementRef>;


    constructor() {}


    ngOnInit(): void {
       
    }

   
toggleHelper(i: number) {
    this.el.toArray()[i].nativeElement.classList.toggle("active");
    const panel = this.el.toArray()[i].nativeElement.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
}
