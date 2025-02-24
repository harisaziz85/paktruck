import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SparepartAdsService } from '../../core/services/sparepart-ads.service';
import { SparepartAds } from '../../core/models/sparepart-ads';

@Component({
  selector: 'app-sparepartsupload',
  templateUrl: './sparepartsupload.component.html',
  styleUrls: ['./sparepartsupload.component.css']
})
export class SparepartsuploadComponent implements OnInit {
  
  sparePartsForm: FormGroup;
  selectedFiles: File[] = [];

  locations: string[] = ['Islamabad', 'Karachi', 'Lahore', 'Rawalpindi', 'Multan','Faisalabad','Peshawar', 'Quetta','Sialkot','Gujranwala','Hyderabad','Sukkur','Bahawalpur', 'Mardan','Abbottabad','Gujrat', 'Dera Ghazi Khan','Sheikhupura', 'Sargodha','Mirpur Khas', 'Jhelum', 'Chiniot','Kasur','Rahim Yar Khan', 'Okara',  'Muzaffargarh', 'Turbat','Swat','Zhob', 'Kotli', 'Bannu', 'Chakwal','Khuzdar',  'Larkana',  'Sahiwal','Bhakkar',  'Pakpattan', 'Mianwali','Nawabshah','Chitral','Haripur','Mansehra','Jhang','Toba Tek Singh', 'Narowal', 'Nowshera','Dera Ismail Khan','Kohat','Fateh Jang', 'Ghotki','Khanewal','Shikarpur','Swabi','Chilas', 'Bajaur','Kohistan','Batagram','Hangu','Karak', 'Mingora', 'Skardu', 'Wazirabad', 'Layyah', 'Jampur', 'Bhalwal', 'Daska','Jauharabad', 'Pishin', 'Tank', 'Sadiqabad', 'Buner', 'Khairpur','Dadu','Badin', 'Muzaffarabad', 'Gulistan', 'Pishin','Jamalpur','Layyah','Bannu',];  // API provides locations instead of cities
  categories: string[] = ['Body Part', 'Trunion', 'Hydraulic Pump', 'Tire', 'Cabin','Chasis','Exavator Boom','Leaf Springs','Engine','Loader Bucket','Machinery','Crush Plant','Electric Generator','Tube','Compressor Engine','Hydraulic jack','Bucket Arm','Front Axle','Boozer Compressor','Rear Axle','Car Washer ','Tire','Helmets','Key Chains','Truck Battery ','Alloys Rims','Engine Oil','Micro Fiber Cloth','Gps Tracker','Engine For Sale'];
  conditions: string[] = ['New', 'Used'];

  constructor(
    private fb: FormBuilder,
    private sparepartAdsService: SparepartAdsService
  ) {
    this.sparePartsForm = this.fb.group({
      // title: ['', Validators.required],
      selectedLocation: ['', Validators.required],  // Replaced selectedCity with selectedLocation
      selectedCategory: ['', Validators.required],
      selectedCondition: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', Validators.required],
      images: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFiles = Array.from(files);
      this.sparePartsForm.patchValue({ images: this.selectedFiles });
    }
  }

  submitAd() {
    if (this.sparePartsForm.invalid) {
      alert('Please fill all required fields correctly.');
      return;
    }

    const adData: SparepartAds = {
      // title: this.sparePartsForm.value.title,
      category: this.sparePartsForm.value.selectedCategory,
      location: this.sparePartsForm.value.selectedLocation,  // Using location from API
      price: Number(this.sparePartsForm.value.price),
      condition: this.sparePartsForm.value.selectedCondition,
      description: this.sparePartsForm.value.description,
      images: this.selectedFiles,  // Handling file upload
      adType: 'Spare Part',
      postedBy: '67af4735ff341f6f1664044b'  // Replace with dynamic user ID
    };

    this.sparepartAdsService.createSparePartAd(adData).subscribe(
      response => {
        console.log('Ad created successfully:', response);
        alert('Spare part ad successfully created!');
      },
      error => {
        console.error('Error creating ad:', error);
        alert('Failed to create ad.');
      }
    );
  }
}
