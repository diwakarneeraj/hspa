import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPropertyBase } from '../Model/IPropertyBase';
import { Property } from '../Model/property';
import { environment } from '../environments/environment';
import { Ikeyvaluepair } from '../Model/Ikeyvaluepair';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<string[]>{
    return this.http.get<string[]>('https://localhost:7093/api/City/GetCities');
  }

  getPropertyTypes(): Observable<Ikeyvaluepair[]> {
    return this.http.get<Ikeyvaluepair[]>(this.baseUrl + '/PropertyType/GetPropertyTypes/list');
}

getFurnishingTypes(): Observable<Ikeyvaluepair[]> {
    return this.http.get<Ikeyvaluepair[]>(this.baseUrl + '/FurnishingType/GetFurnishingTypes/list');
}
  getProperty(id: number): Observable<Property> {
    return this.http.get<Property>(this.baseUrl + '/Property/GetPropertyDetail/detail/'+id.toString());
}

  getAllProperties(SellRent:number): Observable<Property[]>{
    return this.http.get<Property[]>(this.baseUrl+ '/Property/GetPropertyList/list/'+SellRent)
  }

  addProperty(property: Property) {
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('token')
        })
    };
    return this.http.post(this.baseUrl + '/Property/AddProperty/add', property, httpOptions);
}

newPropID() {
  const PID = localStorage.getItem('PID');
  if (PID) {
    const updatedPID = String(+PID + 1);

    localStorage.setItem('PID', updatedPID);
    return updatedPID;
  } else {
    localStorage.setItem('PID', '101');
    return 101;
  }
}

  getPropertyAge(dateofEstablishment: string): string
    {
        const today = new Date();
        const estDate = new Date(dateofEstablishment);
        let age = today.getFullYear() - estDate.getFullYear();
        const m = today.getMonth() - estDate.getMonth();

        // Current month smaller than establishment month or
        // Same month but current date smaller than establishment date
        if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
            age --;
        }

        // Establshment date is future date
        if(today < estDate) {
            return '0';
        }

        // Age is less than a year
        if(age === 0) {
            return 'Less than a year';
        }

        return age.toString();
    }
  
}
