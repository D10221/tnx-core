export declare class TinytStore<T> {
    private key;
    prefix: string;
    private storage;
    constructor(key: string, storage?: Storage);
    getItem: () => T;
    setItem: (item: T) => void;
    deleteItem: (item: T) => void;
}
