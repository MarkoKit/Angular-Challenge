import {Component, OnInit} from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  sumCart;
  products: any = [
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 1',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'IgnEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 2',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Eclipse-P300-TG/P300_BK-1.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title3',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Eclipse-P300-TG/P300_BK-1.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 4',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title5',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'spId': '32e70cc6fa544fde966bc852116606f3',
      'campaignId': 'CN2017012431',
      'cardTitle': 'Titl6',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'cardTags': [],
      'mediaType': 'image',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'additionalMediaUrls': [],
      'callToAction': 'book',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'listOfAttributes': [],
      'cardQuestion': [],
      'isPhysicalProduct': false,
      'availableQuantity': 123,
      'returnPolicy': 'sdfdssdfsfsfsdf',
      'termsOfServices': 'sdfsdfsdffds',
      'likes': 0,
      'shares': 0,
      'views': 0,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'planType': 'oneTimeCharges',
          'planName': '',
          'planDescription': '',
          'price': {
            'amount': 21,
            'currency': 'USD',
            'currencySymbol': ''
          },
          'isShippingChargesRequired': true,
          'shippingCharges': {
            'amount': 0,
            'currency': '',
            'currencySymbol': ''
          },
          'startsOn': '',
          'endsOn': '',
          'displayPrice': {
            'amount': 0,
            'currency': '',
            'currencySymbol': ''
          },
          'displayPriceUnit': '',
          'displayPriceNotes': '',
          'invoicingCylcle': '',
          'subsciptionSchedule': {
            'startDateTime': '0001-01-01T00:00:00Z',
            'endDateTime': '0001-01-01T00:00:00Z'
          },
          'subscriptionPeriod': {
            'unitOfPeriod': '',
            'countOfPeriod': 0
          },
          'appliesTo': '',
          'noOfAllowedUsers': 0,
          'minSubPeriod': {
            'unitOfPeriod': '',
            'countOfPeriod': 0
          },
          'freeTrialPeriod': {
            'unitOfPeriod': '',
            'countOfPeriod': 0
          },
          'signupFee': {
            'amount': 0,
            'currency': '',
            'currencySymbol': ''
          },
          'id': '1b0f10ad11774e57b7d98061f0039e48'
        }
      ],
      'isLocalPriceViewEnabled': false,
      'segments': [],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJ2QeB5YMEGTkRYiR-zGy-OsI',
          'description': 'Lahore, Punjab, Pakistan'
        }
      ],
      'startAgeLimit': 2,
      'endAgeLimit': 6,
      'gender': 'men',
      'groups': [],
      'interests': [],
      'currentWorkflow': 'saved',
      'listOfWorkflowStatuses': [],
      'listOfReviews': [],
      'totalReviews': 0,
      'listOfSupportTags': [
        {
          'tagName': 'dfg',
          'supportContent': 'dfgdfgfgfd'
        }
      ],
      'comulativeRating': 0,
      'maxQuantityPerUser': 2,
      'campaignEndDate': '2017-02-11T18:59:59.999Z',
      'id': '80336072d14a43628e98d89d0f460a29',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T13:39:28.897Z',
      'updatedAt': '2017-02-06T13:39:28.897Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'title7',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {/**/
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'TITle8',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'title--9',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'title--2',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705374',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    }];

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem("sum") === null) {
      localStorage.setItem("sum", "0");
    }
    this.sumCart = localStorage.getItem("sum");
    //console.log(localStorage.getItem("cart"));
  }

  parseObject(object) {
    localStorage.setItem("parse", JSON.stringify(object));
  }

  clearOut() {
    if (parseInt(localStorage.getItem("sum")) != 0) {      
      let choice = window.confirm("Si res želiš izbrisati celotno košarico?");
      if (choice) {
        this.sumCart = 0;
        localStorage.setItem("sum", "0");
        localStorage.setItem("cart", JSON.stringify([]));
      }
    }
    else {
      window.alert("V košarici nimate ničesar za počistiti.");
    }
  }
  readLocalStorageValue(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
