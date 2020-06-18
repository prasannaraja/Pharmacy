import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  title = 'home';

  columnDefs = [
    { headerName: 'Full Name', field: 'name', editable: false, filter: 'agTextColumnFilter' },
    { headerName: 'Brand', field: 'brand', editable: false, filter: 'agTextColumnFilter' },
    { headerName: 'Price', field: 'price',  editable: false, filter: 'agTextColumnFilter' },
    { headerName: 'Quantity', field: 'qty', editable: false, filter: 'agTextColumnFilter' },
    { headerName: 'Expiry Date', field: 'expdate',  editable: false, filter: 'agTextColumnFilter' },

  ];

  rowData = [
    { name: 'Toyota1', brand: 'Celica', price: 35000, qty: 10, expdate: '01-01-2020', note: 'test message' },
    { name: 'Toyota2', brand: 'Celica', price: 35000, qty: 10, expdate: '01-01-2020', note: 'test message' },
    { name: 'Toyota3', brand: 'Celica', price: 35000, qty: 10, expdate: '01-01-2020', note: 'test message' },

  ];

 

  JsonLoad = function (callBack) {
    
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/data.json');

    xhr.responseType = 'json';

    xhr.onload = function () {
      if (this.status == 200) {
       
        //callBack(this.response);
        callBack([
          { name: 'Toyota1', brand: 'Celica', price: 35000, qty: 10, expdate: '01-01-2020', note: 'test message' },
          { name: 'Toyota2', brand: 'Celica', price: 35000, qty: 10, expdate: '01-01-2020', note: 'test message' },
          { name: 'Toyota3', brand: 'Celica', price: 35000, qty: 10, expdate: '01-01-2020', note: 'test message' },

        ]);
        debugger;
      }
      else
        debugger;
    };

    xhr.onerror = function () {
      debugger;
      console.log('load error');
    }

    xhr.send();
  };

  dataSource = this.JsonLoad(function (data) {
    //console.log(data);
    return data;
  });
  
}
