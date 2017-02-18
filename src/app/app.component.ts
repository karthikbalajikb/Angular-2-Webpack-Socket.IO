import { Component } from '@angular/core';
import { UIChart } from 'primeng/primeng';
import { SocketService } from './app.socket.service';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

    providers: [SocketService]
})
export class AppComponent {
    data: any;
    tiles: any;
    socketService: SocketService;
    connection: any;
    fullBuildData: any[];
    buildDataCount: any;
    cols: any;
    constructor(socketService: SocketService) {
        this.socketService = socketService;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }

    update(chart: UIChart) {
        this.data = //reload
            chart.refresh();
    }

    ngOnInit() {
        this.connection = this.socketService.getBuildData().subscribe((data: any[]) => {
            console.log(data);
            this.fullBuildData = data;
            this.buildDataCount = data.length;
        });

        this.cols = [
            {field: 'buildId', header: 'Build Id'},
            {field: 'buildStatus', header: 'Status'}
        ];
    }

}
