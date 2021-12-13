import { 
    Component, 
    Output, 
    EventEmitter 
} from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent {
    collapsed = true;
    @Output() featureSelected = new EventEmitter<string>(); //event emitter to emit property to app.html


    onSelect(feature: string) {
        // methods to emit feature when link is clicked
        this.featureSelected.emit(feature);
    }
}