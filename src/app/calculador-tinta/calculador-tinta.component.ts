import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaintCalculatorService } from './paint-calculator.service';
@Component({
  selector: 'app-calculador-tinta',
  templateUrl: './calculador-tinta.component.html',
  styleUrls: ['./calculador-tinta.component.css']
})
export class CalculadorTintaComponent implements OnInit {

  @ViewChild('widthInput') widInput!: ElementRef;
  @ViewChild('heightInput') heiInput!: ElementRef;
  @ViewChild('windNumber') winCount!: ElementRef;
  @ViewChild('doorNumber') doorCount!: ElementRef;
  @ViewChild('saveButton') saveWall!: ElementRef;
  walls: number[] = [];
  result!: string;

  constructor(private paintCalculatorService: PaintCalculatorService) { }

  allValidation(){
    this.paintCalculatorService.validWalls(this.widInput);
    this.paintCalculatorService.validWalls(this.heiInput);
    this.paintCalculatorService.doorValidation(this.heiInput, this.doorCount);

    const areaUtil = this.paintCalculatorService.wallToElements(this.widInput, this.heiInput,
      this.widInput, this.doorCount, this.winCount,this.doorCount);
      
      this.paintCalculatorService.wallList(areaUtil, this.walls, this.saveWall);
  }

  finalResult(){
    if(this.walls.length < 4){
      alert('Número de paredes incompleto!');
    } else{
      this.result = this.paintCalculatorService.painCount(this.walls)
    }
  }

  refreshAll(evento : MouseEvent){
    this.walls = [];
    this.result = '';
    this.paintCalculatorService.enableButton(this.saveWall);
  }

  ngOnInit(): void {
  }

}
