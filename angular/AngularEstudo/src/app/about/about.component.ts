import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  @Input() text?: string = "Alice";
  sobre = "Sobre";

  public nome?: string = this.text;

  ngOnInit(): void {
    this.nome = this.text;
  }

  

  add(){
    this.sobre = "Rishi";
    
  }
}
