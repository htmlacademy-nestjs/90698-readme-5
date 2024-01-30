import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class LinkPostRdo extends BasePostRdo {
  @Expose()
  public description: string;

  @Expose()
  public linkUrl: string;
}
