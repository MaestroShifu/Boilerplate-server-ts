import { EntitySchema } from "typeorm";

type IIndexdb = {
    readonly entities?: ((Function | string | EntitySchema<any>))[];
    readonly subscribers?: (Function | string)[];
    readonly migrations?: (Function | string)[];
}

export const indexdb: IIndexdb = {
    entities: [],
    migrations: [],
    subscribers: []
}