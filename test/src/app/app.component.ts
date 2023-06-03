import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  update: boolean = false

  dbPromise = window.indexedDB.open('test-db1', 1);

  constructor(
    private updates: SwUpdate
  ) {
    this.updates.available.subscribe(event => {
      console.log("event: ", event)
      // this.update = true                     
      updates.activateUpdate().then(() => {
        console.log("yes new  update is ready for the serve")

        window.location.reload();

      })
    })
  }

  ngOnInit(): void {
    this.checkdb()
  }

  checkdb() {
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB");
      return;
    } else {
      console.log("This browser  support IndexedDB");

    }
  }
}
