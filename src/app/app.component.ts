import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AnGuessAge';
  dataReceivedFromFetch: Object[] = [];
  

  constructor(private http: HttpClient) {}

  fetchData = (name : string) => {
    const url = 'https://api.agify.io/?name=' + name
    this.http.get(url).subscribe(data => {
      this.dataReceivedFromFetch.splice(0, 1)
      this.dataReceivedFromFetch.push(data);
      console.log(this.dataReceivedFromFetch)
    });
    
  }
}
