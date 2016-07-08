import {Subject, Subscription} from 'rxjs';

import { EventArgs, IObservableController } from "./interfaces";

export class BaseController implements  IObservableController {

    xEvents = new Subject<EventArgs>();

    constructor($scope: angular.IScope) {

        $scope.$on('$destroy', () => {
            console.log('Table Ctrl disposing');
            // watcherDispose();
            this.dispose();
        });
    }

    disposables : Subscription ; 

    dispose(){
        if(this.disposables){
            this.disposables.unsubscribe();
        }        
    }

    raiseEvent(key:string, value?: any){
        this.xEvents.next({
            sender: this,
            args: { key: key, value: value || true  }
        })
    }
}
