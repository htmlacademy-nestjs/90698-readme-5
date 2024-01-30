import { QuotePost } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { BlogTagEntity } from '../../tags/tags.entity';
import { CreateQuotePostDto } from '../dto/create-quote-post.dto';
import { BasePostEntity } from './base-post.entity';

export class QuotePostEntity extends BasePostEntity implements QuotePost, Entity<string, QuotePost> {
  public quote: string;
  public quoteAuthor: string;

  public populate(data: QuotePost): QuotePostEntity {
    this.quote = data.quote;
    this.quoteAuthor = data.quoteAuthor;

    return this;
  }

  public toPOJO(): QuotePost {
    return {
      ...super.toPOJO(),
      quote: this.quote,
      quoteAuthor: this.quoteAuthor
    }
  }

  static fromObject(data: QuotePost): QuotePostEntity {
    return new QuotePostEntity()
      .populate(data);
  }

  static fromDto(dto: CreateQuotePostDto, tags: BlogTagEntity[]): QuotePostEntity {
    const entity = new QuotePostEntity();
    entity.title = dto.title;
    entity.userId = dto.userId;
    entity.tags = tags;
    entity.comments = [];
    entity.isRepost = dto.isRepost;
    entity.isDraft = dto.isDraft;
    entity.quote = dto.quote;
    entity.quoteAuthor = dto.quoteAuthor;

    return entity;
  }
}
