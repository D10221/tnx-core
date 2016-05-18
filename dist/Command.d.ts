import { Command } from "./interfaces";
export declare class RelayCommand implements Command {
    private exec;
    private canExec;
    constructor(exec: (x) => void, canExec?: (x) => boolean);
    execute(x: any): void;
    canExecute(x: any): boolean;
}
export declare class RelayCommandExtended implements Command {
    private exec;
    private canExec;
    private onError;
    constructor(exec: (x) => void, canExec?: (x) => boolean, onError?: (e) => void);
    execute(x: any): void;
    canExecute(x: any): boolean;
    setCanExec(func: (x) => boolean): RelayCommandExtended;
    setonError(func: (e) => void): RelayCommandExtended;
}
