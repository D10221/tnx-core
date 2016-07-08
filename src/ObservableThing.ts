import {Disposable} from './interfaces';

import {Observable, Subject, Subscription} from 'rxjs';

import {IObservableThing, EventArgs} from "./interfaces";

export class ObservableThing implements IObservableThing, Disposable{

    xEvents = new Subject<EventArgs>();

    disposables:Subscription;

    dispose(){
        if(this.disposables)
        this.disposables.unsubscribe();
    }

    raiseEvent(key:string, value?: any){
        this.xEvents.next({
            sender: this,
            args: { key: key, value: value }
        })
    }
}