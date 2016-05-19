import { EventArgs, IObservableController } from "./interfaces";
export declare class BaseController implements IObservableController {
    xEvents: Rx.Subject<EventArgs>;
    constructor($scope: angular.IScope);
    disposables: Rx.CompositeDisposable;
    dispose(): void;
    raiseEvent(key: string, value?: any): void;
}
