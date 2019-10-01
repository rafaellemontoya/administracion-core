import { Component, OnInit } from '@angular/core';
import { GuardarInfoService } from '../../services/guardar-info.service';
import { Asistente } from '../../interfaces/asistente.interface';

@Component({
  selector: 'app-impresion-lotes',
  templateUrl: './impresion-lotes.component.html',
  styleUrls: ['./impresion-lotes.component.css']
})
export class ImpresionLotesComponent implements OnInit {

  constructor(private http: GuardarInfoService) { }

  ngOnInit() {
  }

  imprimir(id: number) {
    console.log(id);
    const as = new Asistente();
    as.id = id.toString();
    this.http.obtenerLote(as).subscribe((data)=>{
      const usersJson = Array.of(data);
      let c = 0;
      usersJson.forEach(element => {
        
        console.log(element);
        this.imprimir2(element[0].id);
        
      });
      
      // let cont = 0;
      // data.forEach(element => {
        
      // });
       
      // console.log(data);

    });

    
  }
  imprimir2(id: string) {
    console.log(id);
  }

}
