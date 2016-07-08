import { Subject } from 'rxjs';
export interface EventArgs {
    sender: {};
    args: KeyValue;
}
export interface KeyValue {
    key: string;
    value: any;
}
export interface IObservableThing {
    xEvents: Subject<EventArgs>;
}
export interface Command {
    execute(x: any): any;
    canExecute(x: any): boolean;
}
export interface Disposable {
    dispose(): any;
}
export interface IObservableController extends IObservableThing, Disposable {
}
export declare enum Visibility {
    visible = 0,
    hidden = 1,
}
export declare enum SortDirection {
    desc = 0,
    asc = 1,
}
