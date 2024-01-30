import { Expose, Type } from 'class-transformer';
import { TagRdo } from '../../tags/rdo/tag.rdo';

export class BasePostRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public createdAt: string;

  @Expose()
  public userId: string;

  @Expose()
  @Type(() => TagRdo)
  public tags: TagRdo[];

  @Expose()
  public comments: Comment[]
}
