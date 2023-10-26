import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/Model/property';
import { HousingService } from 'src/app/Services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent {
  public propertyId: any;
  //public mainPhotoUrl: string = null;
  property = new Property();
    constructor(private route: ActivatedRoute,
      private router: Router,
      private housingService: HousingService){}

    ngOnInit(){
      this.propertyId = +this.route.snapshot.params['id'];
      this.housingService.getProperty(this.propertyId).subscribe(data => {
        this.property = data;
        // this.route.data.subscribe(
        //     (data: Property) => {
        //         this.property = data['prp'];
        //         console.log(this.property.photos);
        //     }
      
    });
    this.property.age = this.housingService.getPropertyAge(this.property.estPossessionOn);
  }

    onSelectNext(){
      this.propertyId +=1;

      this.router.navigate(['property-detail'+this.propertyId])
    }
}
