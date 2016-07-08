import { Disposable } from './interfaces';
import { Subject, Subscription } from 'rxjs';
import { IObservableThing, EventArgs } from "./interfaces";
export declare class ObservableThing implements IObservableThing, Disposable {
    xEvents: Subject<EventArgs>;
    disposables: Subscription;
    dispose(): void;
    raiseEvent(key: string, value?: any): void;
}
