import { IObservableThing, EventArgs } from "./interfaces";
export declare class ObservableThing implements IObservableThing, Rx.Disposable {
    xEvents: Rx.Subject<EventArgs>;
    disposables: Rx.CompositeDisposable;
    dispose(): void;
    raiseEvent(key: string, value?: any): void;
}
