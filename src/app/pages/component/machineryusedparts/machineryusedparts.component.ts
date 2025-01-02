import { Component } from '@angular/core';

@Component({
  selector: 'app-machineryusedparts',
  templateUrl: './machineryusedparts.component.html',
  styleUrl: './machineryusedparts.component.css'
})
export class MachineryusedpartsComponent {
  data = [
    ['Body Part', 'Cabin', 'Engine', ],
    ['Trunion', 'Chasiss', 'Tube', ],
    ['Hydraulic Pump', 'Excavator Boom', 'Loader Bucket '],
    ['Tire', 'Leaf springs', 'Agriculture Machinery'],
    [' Crush Plant', 'Hydraulie Jack', 'Boozer compressor'],
    ['Electric Generator', 'Bucket Arm', 'Rear axle'],
    ['Compressor Engine ', 'Front axle'],


  ];
}
