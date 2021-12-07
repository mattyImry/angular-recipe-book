import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; //@viewchild used to fecth a local reference as attribute in html file.  use ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) { //server input is a local reference in cockpit.html
    
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value // use native element.value to display value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = 'Something' do not access the dome like this do not use en elkement use propery binding.
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value // use native element.value to display value
    });
  }
}

