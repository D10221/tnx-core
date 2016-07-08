import { Subject, Subscription } from 'rxjs';
import { EventArgs, IObservableController } from "./interfaces";
export declare class BaseController implements IObservableController {
    xEvents: Subject<EventArgs>;
    constructor($scope: angular.IScope);
    disposables: Subscription;
    dispose(): void;
    raiseEvent(key: string, value?: any): void;
}
