import { Subscriber } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class EmailSubscriberEntity implements Subscriber, Entity<string, Subscriber> {
  public id?: string;
  public email: string;
  public firstname: string;

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,

    }
  }

  public populate(data: Subscriber): EmailSubscriberEntity {
    this.id = data.id ?? undefined;
    this.email = data.email;
    this.firstname = data.firstname;


    return this;
  }

  static fromObject(data: Subscriber): EmailSubscriberEntity {
    return new EmailSubscriberEntity()
      .populate(data);
  }

}
