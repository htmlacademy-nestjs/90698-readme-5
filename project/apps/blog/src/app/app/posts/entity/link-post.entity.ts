import { LinkPost } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { BlogTagEntity } from '../../tags/tags.entity';
import { CreateLinkPostDto } from '../dto/create-link-post.dto';
import { BasePostEntity } from './base-post.entity';

export class LinkPostEntity extends BasePostEntity implements LinkPost, Entity<string, LinkPost> {
  public description: string;
  public linkUrl: string;

  public populate(data: LinkPost): LinkPostEntity {
    this.description = data.description;
    this.linkUrl = data.linkUrl;

    return this;
  }

  public toPOJO(): LinkPost {
    return {
      ...super.toPOJO(),
      description: this.description,
      linkUrl: this.linkUrl
    }
  }

  static fromObject(data: LinkPost): LinkPostEntity {
    return new LinkPostEntity()
      .populate(data);
  }

  static fromDto(dto: CreateLinkPostDto, tags: BlogTagEntity[]): LinkPostEntity {
    const entity = new LinkPostEntity();
    entity.title = dto.title;
    entity.userId = dto.userId;
    entity.tags = tags;
    entity.comments = [];
    entity.isRepost = dto.isRepost;
    entity.isDraft = dto.isDraft;
    entity.description = dto.description;
    entity.linkUrl = dto.linkUrl;

    return entity;
  }
}
