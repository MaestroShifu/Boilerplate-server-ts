import { EntitySchema } from "typeorm";
import { Tests } from "./entities/Tests";
import { Tests1597123014468 } from "./migrations/1597123014468-Tests";
import { TestsSub } from "./subscribers/Tests";

type IIndexdb = {
    readonly entities?: ((Function | string | EntitySchema<any>))[];
    readonly subscribers?: (Function | string)[];
    readonly migrations?: (Function | string)[];
}

export const indexdb: IIndexdb = {
    entities: [
        Tests
    ],
    migrations: [
        Tests1597123014468
    ],
    subscribers: [
        TestsSub
    ]
}