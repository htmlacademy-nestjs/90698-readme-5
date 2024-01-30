import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class TextPostRdo extends BasePostRdo {
  @Expose()
  public description: string;

  @Expose()
  public content: string;
}
