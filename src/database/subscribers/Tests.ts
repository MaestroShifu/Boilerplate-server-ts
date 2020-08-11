import {EventSubscriber, EntitySubscriberInterface} from "typeorm";

@EventSubscriber()
export class TestsSub implements EntitySubscriberInterface<any> {

}
