import {Subject} from 'rxjs';

export interface EventArgs {
    sender: {},
    args: KeyValue;
}

export interface KeyValue {
    key: string;
    value: any;
}

export interface IObservableThing {
    xEvents : Subject<EventArgs>;
}

export interface Command {
    execute(x:any);
    canExecute(x:any):boolean ;
}

export interface Disposable {
    dispose();
}

export interface IObservableController extends IObservableThing, Disposable {

}

export enum Visibility {
    visible, hidden
}

export enum SortDirection {
    desc, asc
}