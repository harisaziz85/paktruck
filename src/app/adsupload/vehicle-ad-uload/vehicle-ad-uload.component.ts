import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleAdsService } from '../../core/services/vehicle-ads.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-vehicle-ad-uload',
  templateUrl: './vehicle-ad-uload.component.html',
  styleUrls: ['./vehicle-ad-uload.component.css']
})
export class VehicleAdUloadComponent implements OnInit {
  createAdForm!: FormGroup;
  isSubmitting = false;
  successMessage = '';
  userId: string | null = null;
  selectedCategory: string = '';
  subcategories: string[] = [];
  selectedFiles: File[] = [];
  selectedFilesPreview: string[] = [];

  provinces = ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Gilgit Baltistan', 'Azad Kashmir'];
  categories = ['Used Truck', 'Used Buses', 'Mini Truck', 'Earth Moving Machinery', 'Agriculture Machine'];
  registeredStatuses = ['Registered', 'Unregistered'];
  engineTypes = [
    'Diesel Engine', 'Petrol Engine', 'CNG Engine', 'LPG Engine', 'Electric Engine',
    'Hybrid Engine', 'Turbocharged Diesel Engine', 'Natural Gas Engine', 'Biofuel Engine'
  ];
  engineCapacities = ['1000cc', '1500cc', '2000cc', '2500cc', '3000cc+'];
  truckYears: string[] = Array.from({ length: 78 }, (_, i) => (1947 + i).toString());
  truckKmOptions = ['0-10,000 Km', '10,000-50,000 Km', '50,000-100,000 Km', '100,000+ Km'];
  localOrImportedOptions = ['Local', 'Imported'];

  categorySubcategories: any = {
    'Used Truck': ['Cargo Landing Truck', 'Concrete Mixer Truck', 'Flat Bed Truck', 'Trailer Truck', 'Tanker Truck', 'Container Carrier Truck', 'Freezer Truck', 'Box Truck', 'Dump Truck'],
    'Used Buses': ['Buses'],
    'Mini Truck': ['Mazda Body Truck', 'Container Mini Truck', 'Oil Tanker Mini Truck', 'Poultry Truck', 'Mini Dumper Truck'],
    'Earth Moving Machinery': ['Excavator Operator', 'Loader Operator', 'Roller Machine', 'Grader Truck', 'Mini Crane Machine', 'Wheel Tractor', 'Road Cutter', 'Drilling Machine', 'Compactor Machine', 'Forklift Operator', 'Bulldozer', 'Screening Machine', 'Crusher'],
    'Agriculture Machine': ['Tractor', 'Threshers', 'Harvesters', 'Seeders', 'Plows']
  };

  constructor(
    private fb: FormBuilder,
    private adService: VehicleAdsService,
    private authService: AuthService
  ) {
    this.createAdForm = this.fb.group({
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      location: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      modelYear: [null, [Validators.required, Validators.min(1900)]],
      registeredIn: ['', Validators.required],
      make: ['', Validators.required],
      engineType: ['', Validators.required],
      description: ['', Validators.required],
      localOrImported: ['', Validators.required],
      images: [[]],
    });
  }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
  }

  // Update subcategories when category is changed
  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    this.subcategories = this.categorySubcategories[this.selectedCategory] || [];
    this.createAdForm.patchValue({ subCategory: '' });
  }

  // Handle file selection and generate image preview
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
      this.selectedFilesPreview = this.selectedFiles.map(file => URL.createObjectURL(file));
    }
  }

  // Remove an image from the selection
  removeImage(index: number) {
    this.selectedFiles.splice(index, 1);
    this.selectedFilesPreview.splice(index, 1);
  }

  // Form Submission
  onSubmit(): void {
    if (this.createAdForm.invalid || !this.userId) {
      console.log("Form invalid or user not logged in");
      return;
    }

    this.isSubmitting = true;

    const formData = new FormData();
    Object.keys(this.createAdForm.value).forEach(key => {
      formData.append(key, this.createAdForm.value[key]);
    });
    formData.append('postedBy', this.userId);

    this.selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    this.adService.createAd(formData).subscribe(
      (response) => {
        this.successMessage = response.message;
        this.createAdForm.reset();
        this.selectedFiles = [];
        this.selectedFilesPreview = [];
        this.isSubmitting = false;
      },
      (error) => {
        console.error("API Error:", error);
        this.isSubmitting = false;
      }
    );
  }
}
