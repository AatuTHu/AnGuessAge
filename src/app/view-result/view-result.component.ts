import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent{
  @Input() receivedData : any;
}
