import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { GuardarInfoService } from 'src/app/services/guardar-info.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { Asistente } from 'src/app/interfaces/asistente.interface';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  user: User;
  title = 'Talleres';

  numeroRespuestas = 0;

  duracion= 2500;

  myOptions = {
    colors: ['#93d08e', '#93d08e', '#e4e35b', '#b87333']

  };
  public charts: Array<{
    title: string;
    type: string;
    data: Array<Array<string | number | {}>>;
    roles: Array<{ type: string; role: string; index?: number }>;
    columnNames?: Array<string>;
    options?: {};
  }> = [];
  type = 'BarChart';
  estadoImprimiendo = false;

  roles = [{ role: 'style', type: 'string' }];

  columnNames = ['Element', 'Density', '', ''];




  constructor(private http: GuardarInfoService,  private sessionS: SessionService, private router: Router ) {
   // this.cargarCliente();
    /*Grafica  1 */
   this.charts.push({
    title: '1. How do you rate Anders Sörman-Nilsson’s keynote in terms of content and relevance?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']],
       options: {
        animation: {
          duration: this.duracion,
          easing: 'ease-in-out',
          startup: true
        }
      }
  });
  /*Grafica 2 */
   this.charts.push({
    title: '2. How do you rate Our Future with Purpose section (Juan Pablo del Valle, Francisco del Valle, Antonio del Valle, Diego Echave and Blanca del Valle) in terms of content and relevance?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']],
       options: {
        animation: {
          duration: this.duracion,
          easing: 'linear',
          startup: true
        }
      }
  });
  /*Grafica 3 */
   this.charts.push({
    title: '3. How do you rate Our Future with Purpose section in terms of understanding what our purpose means?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']],
       options: {
        animation: {
          duration: this.duracion,
          easing: 'ease-in-out',
          startup: true
        }
      }
  });
  /*Grafica 4 */
   this.charts.push({
    // tslint:disable-next-line:max-line-length
    title: '4. How do you rate Our Future with Purpose section in terms of understanding how we plan and execute our social investment strategy?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']],
       options: {
        animation: {
          duration: this.duracion,
          easing: 'linear',
          startup: true
        }
      }
  });
  /*Grafica 5 */
   this.charts.push({
    title: '5. How do you rate the Using Design Thinking to Build Customer Centricity (IDEO) workshop in terms of content, structure and learning?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878'],
       ['Didnt attend', 0, 'color: gray']]
  });
  /*Grafica 6 */
   this.charts.push({
    title: '6. How do you rate the Learning from Innovative Business Model: eCommerce (Ignacio Caride) workshop in terms of content, structure and learning?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878'],
       ['Didnt attend ', 0, 'color: #gray']]
  });
  /*Grafica 7 */
   this.charts.push({
    title: '7. How do you rate the Activating Social Media to Connect with Customers and Future Talent workshop in terms of content, structure and learning?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878'],
       ['Didnt attend', 0, 'color: #gray']]
  });

  /*Grafica 9 */
  this.charts.push({
    title: '9. Did the Future-Fit Organizations section allow you to gain a better understanding of how Kaluz’s companies are leveraging their purpose and values to be truly Future-Fit?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Yes', 0, '#20b3d6'],
     ['Neutral', 0, '93d08e'],
      ['No', 0, 'e4e35b']
    ]
  });

  /*Grafica 10 */
  this.charts.push({
    title: '10. Did you gain a better insight into what Byline is doing to become truly Future-Fit?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Yes', 0, '#20b3d6'],
     ['Neutral', 0, '93d08e'],
      ['No', 0, 'e4e35b']
    ]
  });

  /*Grafica 11 */
  this.charts.push({
    title: '11. Did you gain a better insight into what BX+ is doing to become truly Future-Fit?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Yes', 0, '#20b3d6'],
     ['Neutral', 0, '93d08e'],
      ['No', 0, 'e4e35b']
    ]
  });

  /*Grafica 12 */
  this.charts.push({
    title: '12. Did you gain a better insight into what Elementia is doing to become truly Future-Fit?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Yes', 0, '#20b3d6'],
     ['Neutral', 0, '93d08e'],
      ['No', 0, 'e4e35b']
    ]
  });

  /*Grafica 13 */
  this.charts.push({
    title: '13. Did you gain a better insight into what Orbia is doing to become truly Future-Fit?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Yes', 0, '#20b3d6'],
     ['Neutral', 0, '93d08e'],
      ['No', 0, 'e4e35b']
    ]
  });

   /*Grafica 14 */
   this.charts.push({
    title: '14. How do you rate the CEOs’ Panel in terms of the companies’ ability to adapt to changing and challenging environments?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 15 */
   this.charts.push({
    title: '15. How do you rate the venue for Day 1 in terms of accessibility, comfort, and look and feel?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 16 */
   this.charts.push({
    title: '16. How do you rate Day 1’s visit to the Kaluz Museum and dinner?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 17 */
   this.charts.push({
    title: '17. How do you rate Fred Kofman’s keynote in terms of content and relevance?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 18 */
   this.charts.push({
    title: '18. How do you rate Tomás Espinosa’s presentation in terms of content and relevance?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 19 */
   this.charts.push({
    title: '19. How do you rate the Fireside Chat between Edward Breen and Adam Beshara, in terms of content and relevance?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 20 */
   this.charts.push({
    title: '20. How do you rate the venue for Day 2 in terms of accessibility, comfort, and look and feel?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 21 */
   this.charts.push({
    title: '21. How do you rate the Traction Experience Activities?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

    /*Grafica 23 */
    this.charts.push({
      title: '23. Do you consider the K-Forum a great opportunity to connect with peers and other companies?',
      type: 'ColumnChart',
      columnNames: ['', ''],
      roles: [{ role: 'style', type: 'string' }],
      data: [['Yes', 0, '#20b3d6'],
       ['Neutral', 0, '93d08e'],
        ['No', 0, 'e4e35b']
      ]
    });

     /*Grafica 24 */
   this.charts.push({
    title: '24. How many K-Forums have you attended?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['1', 0, '#20b3d6'],
     ['2', 0, '93d08e'],
      ['3', 0, 'e4e35b'],
       ['4', 0, 'color: #ff7878'],
       ['5 or more', 0, 'color: #gray']]
  });

   /*Grafica 25 */
   this.charts.push({
    title: '25. How do you rate the organization of the K-Forum 2020?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 26 */
   this.charts.push({
    title: '26. How do you rate Frans-Jan van Rongen as Master of Ceremonies?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });

   /*Grafica 27 */
   this.charts.push({
    title: '27. How do you rate the K-Forum 2020 App in terms of design and efficiency?',
    type: 'ColumnChart',
    columnNames: ['', ''],
    roles: [{ role: 'style', type: 'string' }],
    data: [['Very high', 0, '#20b3d6'],
     ['High', 0, '93d08e'],
      ['Medium', 0, 'e4e35b'],
       ['Low', 0, 'color: #ff7878']]
  });
   }// constructor

  ngOnInit() {
    this.cargarCliente();
  }



  getInfo() {
    this.obtenerP1();
    this.obtenerP2();
    this.obtenerP3();
    this.obtenerP4();
    this.obtenerP5();
    this.obtenerP6();
    this.obtenerP7();
    this.obtenerP9();
    this.obtenerP10();
    this.obtenerP11();
    this.obtenerP12();
    this.obtenerP13();
    this.obtenerP14();
    this.obtenerP15();
    this.obtenerP16();
    this.obtenerP17();
    this.obtenerP18();
    this.obtenerP19();
    this.obtenerP20();
    this.obtenerP21();
    this.obtenerP23();
    this.obtenerP24();
    this.obtenerP25();
    this.obtenerP26();
    this.obtenerP27();


  }

  cargarCliente() {
    console.log(this.sessionS.usuario);
    if (this.sessionS.usuario.name === undefined) {


      this.router.navigate(['login']);
    } else {
      console.log(this.sessionS.usuario.id);
      console.log('Entro a else');

      this.user = this.sessionS.usuario;
      this.getInfo();
    }
  }



  obtenerP1() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p1.php').subscribe((data: any) => {
      console.log(data);

      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);

      this.numeroRespuestas = op1+op2+op3+op4;

      


      this.charts[0].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

  obtenerP2() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p2.php').subscribe((data: any) => {
      console.log(data);

      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[1].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }
  obtenerP3() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p3.php').subscribe((data: any) => {
      console.log(data);

      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[2].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }
  obtenerP4() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p4.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[3].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

  obtenerP5() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p5.php').subscribe((data: any) => {

      console.log(data);
      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);

      const op5 = parseInt(data.op5);


      this.charts[4].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878'],
        ['Didnt attend ', op5, 'color: gray']
      ];
    });


  }
  
  obtenerP6() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p6.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);

      const op5 = parseInt(data.op5);

      this.charts[5].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878'],
        ['Didnt attend ', op5, 'color: gray']
      ];
    });
  }

  obtenerP7() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p7.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);

      const op5 = parseInt(data.op5);

      this.charts[6].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878'],
        ['Didnt attend ', op5, 'color: gray']
      ];
    });
  }

  obtenerP9() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p9.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);
      this.charts[7].data = [
        ['Yes', op1, '#20b3d6'],
        ['Neutral', op2, '#93d08e'],
        ['No', op3, '#e4e35b']
      ];
    });
  }
  obtenerP10() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p10.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);
      this.charts[8].data = [
        ['Yes', op1, '#20b3d6'],
        ['Neutral', op2, '#93d08e'],
        ['No', op3, '#e4e35b']
      ];
    });
  }

  obtenerP11() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p11.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);
      this.charts[9].data = [
        ['Yes', op1, '#20b3d6'],
        ['Neutral', op2, '#93d08e'],
        ['No', op3, '#e4e35b']
      ];
    });
  }

  obtenerP12() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p12.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);
      this.charts[10].data = [
        ['Yes', op1, '#20b3d6'],
        ['Neutral', op2, '#93d08e'],
        ['No', op3, '#e4e35b']
      ];
    });
  }

  obtenerP13() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p13.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);
      this.charts[11].data = [
        ['Yes', op1, '#20b3d6'],
        ['Neutral', op2, '#93d08e'],
        ['No', op3, '#e4e35b']
      ];
    });
  }
  
  obtenerP14() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p14.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[12].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

    
  obtenerP15() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p15.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[13].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

    
  obtenerP16() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p16.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[14].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

    
  obtenerP17() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p17.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[15].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

    
  obtenerP18() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p18.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[16].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

    
  obtenerP19() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p19.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[17].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

    
  obtenerP20() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p20.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[18].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

    
  obtenerP21() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p21.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[19].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }


  obtenerP23() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p23.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);
      this.charts[20].data = [
        ['Yes', op1, '#20b3d6'],
        ['Neutral', op2, '#93d08e'],
        ['No', op3, '#e4e35b']
      ];
    });
  }
  
  obtenerP24() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p24.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);

      const op5 = parseInt(data.op5);

      this.charts[21].data = [
        ['1', op1, '#20b3d6'],
        ['2', op2, '#93d08e'],
        ['3', op3, '#e4e35b'],
        ['4', op4, '#ff7878'],
        ['5 or more ', op5, 'color: gray']
      ];
    });
  }

  obtenerP25() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p25.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[22].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }
  obtenerP26() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p26.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[23].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }

  obtenerP27() {
    this.http.obtenerDatosEcuesta('obtener_estadisticas_p27.php').subscribe((data: any) => {


      // tslint:disable-next-line:radix
      const op1 = parseInt(data.op1);

      // tslint:disable-next-line:radix
      const op2 = parseInt(data.op2);

      // tslint:disable-next-line:radix
      const op3 = parseInt(data.op3);

      // tslint:disable-next-line:radix
      const op4 = parseInt(data.op4);


      this.charts[24].data = [
        ['Very high', op1, '#20b3d6'],
        ['High', op2, '#93d08e'],
        ['Medium', op3, '#e4e35b'],
        ['Low', op4, '#ff7878']
      ];
    });
  }
}
