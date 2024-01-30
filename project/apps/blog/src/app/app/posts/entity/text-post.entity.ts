import { TextPost } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { BlogTagEntity } from '../../tags/tags.entity';
import { CreateTextPostDto } from '../dto/create-text-post.dto';
import { BasePostEntity } from './base-post.entity';

export class TextPostEntity extends BasePostEntity implements TextPost, Entity<string, TextPost> {
  public description: string;
  public content: string;

  public populate(data: TextPost): TextPostEntity {
    this.description = data.description;
    this.content = data.content;

    return this;
  }

  public toPOJO(): TextPost {
    return {
      ...super.toPOJO(),
      description: this.description,
      content: this.content
    }
  }

  static fromObject(data: TextPost): TextPostEntity {
    return new TextPostEntity()
      .populate(data);
  }

  static fromDto(dto: CreateTextPostDto, tags: BlogTagEntity[]): TextPostEntity {
    const entity = new TextPostEntity();
    entity.title = dto.title;
    entity.userId = dto.userId;
    entity.tags = tags;
    entity.comments = [];
    entity.isRepost = dto.isRepost;
    entity.isDraft = dto.isDraft;
    entity.description = dto.description;
    entity.content = dto.content;

    return entity;
  }
}
