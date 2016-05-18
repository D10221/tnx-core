import * as Rx from 'rx';

export interface EventArgs {
    sender: {},
    args: KeyValue;
}

export interface KeyValue {
    key: string;
    value: any;
}

export interface IObservableThing {
    xEvents : Rx.Subject<EventArgs>;
}

export interface Command {
    execute(x:any);
    canExecute(x:any):boolean ;
}

export interface IObservableController extends IObservableThing, Rx.Disposable {

}

export enum Visibility {
    visible, hidden
}

export enum SortDirection {
    desc, asc
}