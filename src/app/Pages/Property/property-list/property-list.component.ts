import { Component } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/Model/IPropertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent=1;
  properties!:IPropertyBase[];

  constructor(private route: ActivatedRoute,private housingService: HousingService){}

  ngOnInit(){
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
  }
  this.getAllProperties();
}

  
getAllProperties()
    {
      this.housingService.getAllProperties(this.SellRent).subscribe(data => {
        this.properties = data;
        console.log(this.route.snapshot.url.toString())
      })
    }

    
    
}
