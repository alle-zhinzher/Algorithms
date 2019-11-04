import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    title: string = "My Title"
    description: string = "my description"
    changeToDone() {
        this.title += "[Done]"
    }
}
