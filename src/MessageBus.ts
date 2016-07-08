import {Observable, Subject} from 'rxjs';

import {EventArgs} from "./interfaces";

export class MessageBus {

    private bus = new Subject<EventArgs>();

    publish(args: EventArgs){

        this.bus.next(args);
    }

    get listen () : Observable<EventArgs> {

        return  this.bus.asObservable();
    }

}
