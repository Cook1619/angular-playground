import { Component } from '@angular/core';

//This component decorator tells typescript what to do with this class,
//Think of it as configuration for the class
@Component({
    //the html tag you want to use it as, must be unique
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

}