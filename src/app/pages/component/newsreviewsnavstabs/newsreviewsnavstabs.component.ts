import { Component } from '@angular/core';

@Component({
  selector: 'app-newsreviewsnavstabs',
  templateUrl: './newsreviewsnavstabs.component.html',
  styleUrl: './newsreviewsnavstabs.component.css'
})
export class NewsreviewsnavstabsComponent {
 
  categories = [
    { image: 'images/truck1.png', title: 'Cargo Landing Truck' },
    { image: 'images/truck2.png', title: 'Dumper Truck',  },
    { image: 'images/truck3.png', title: 'Flatbed Truck',  },
    { image: 'images/truck4.png', title: 'Trailer Truck',  },
    { image: 'images/truck5.png', title: 'Tanker Truck',  },
    { image: 'images/truck6.png', title: 'Container Carrier Truck',  },
    { image: 'images/truck7.png', title: 'Container Carrier Truck', },
    { image: 'images/truck8.png', title: 'Freezer Truck',  },
    { image: 'images/truck9.png', title: 'Box truck', },
    { image: 'images/truck10.png', title: 'Dump truck',  },
  ];

  cities = [
    ['Karachi', 'Multan'],
    ['Lahore', 'Gujranwala',],
    ['Islamabad', 'Sialkot'],
    ['Rawalpindi', 'Sargodha'],
    [' Peshawar', 'Kohat'],
  ];
  brands = [
    { id: 1, name: 'Hino Pakistan', logo: 'images/hino.png' },
    { id: 2, name: 'Isuzu Pakistan', logo: 'images/isuzu.png' },
    { id: 3, name: 'Volvo pakistan', logo: 'images/volvo.png' },
    { id: 4, name: 'Sinotruck pakistan', logo: 'images/image (4).png' },

    { id: 5, name: 'Kamaz pakistan', logo: 'images/kamaz.png' },
    { id: 6, name: 'Mercedes-Beoz pakistan', logo: 'images/mercedes.png' },
    { id: 7, name: 'Scania pakistan', logo: 'images/scania.png' },
    { id: 8, name: 'FAW Nishat Motors', logo: 'images/faw.png' },

    { id: 9, name: 'Hyundai NIshat Motors', logo: 'images/hyundai.png' },
    { id: 10, name: 'Master Motors', logo: 'images/master.png' },
    { id: 11, name: 'JAC pakistan', logo: 'images/jack0.png' },
    { id: 12, name: 'TATA pakistan', logo: 'images/tata.png' },
    { id: 13, name: 'JAC', logo: 'images/jac.png' },
    { id: 14, name: 'JW Forland Fuso', logo: 'images/jw.png' }
  ];

  columns: any[][] = [];

  ngOnInit() {
    this.columns = this.createColumns(this.brands, 3);
  }

  createColumns(array: any[], numberOfColumns: number) {
    const result = [];
    const itemsPerColumn = Math.ceil(array.length / numberOfColumns);

    for (let i = 0; i < numberOfColumns; i++) {
      result.push(array.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }

    return result;
  }

  budgets = [
    ['under 5 lakh', '30-40 lakh', '80 lakh-1 crore'],
    ['5 - 1.5 crore', '40 - 50 lakh','1 - 1.5 crore',],
    ['10 - 20 lakh', '50 - 60 crore','1.5 2 crore',],


  ];
}
