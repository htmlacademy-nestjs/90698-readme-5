import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class QuotePostRdo extends BasePostRdo {
  @Expose()
  public quote: string;

  @Expose()
  public quoteAuthor: string;
}
