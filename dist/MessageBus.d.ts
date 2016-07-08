import { Observable } from 'rxjs';
import { EventArgs } from "./interfaces";
export declare class MessageBus {
    private bus;
    publish(args: EventArgs): void;
    listen: Observable<EventArgs>;
}
