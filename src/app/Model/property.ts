
//import { Photo } from './Photo';

import { IPropertyBase } from "./IPropertyBase";

export class Property implements IPropertyBase {
    id: any;
    sellRent: any;
    name: any;
    propertyTypeId: any;
    propertyType: any;
    bhk: any;
    furnishingTypeId: any;
    furnishingType: any;
    price: any;
    builtArea: any;
    carpetArea: any;
    address: any;
    address2?: any;
    CityId: any;
    city: any;
    floorNo?: any;
    totalFloors?: any;
    readyToMove: any;
    age?: any;
    mainEntrance?: any;
    security?: any;
    gated?: boolean;
    maintenance?: any;
    estPossessionOn?: any;
    Image?: any;
    description?: any;
    //photos?: Photo[];
}
