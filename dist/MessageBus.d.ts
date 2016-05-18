import { EventArgs } from "./interfaces";
export declare class MessageBus {
    private bus;
    publish(args: EventArgs): void;
    listen: Rx.Observable<EventArgs>;
}
