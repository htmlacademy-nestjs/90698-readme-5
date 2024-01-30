import { VideoPost } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { BlogTagEntity } from '../../tags/tags.entity';
import { CreateVideoPostDto } from '../dto/create-video-post.dto';
import { BasePostEntity } from './base-post.entity';

export class VideoPostEntity extends BasePostEntity implements VideoPost, Entity<string, VideoPost> {
  public videoUrl: string;

  public populate(data: VideoPost): VideoPostEntity {
    this.videoUrl = data.videoUrl;

    return this;
  }

  public toPOJO(): VideoPost {
    return {
      ...super.toPOJO(),
      videoUrl: this.videoUrl
    }
  }

  static fromObject(data: VideoPost): VideoPostEntity {
    return new VideoPostEntity()
      .populate(data);
  }

  static fromDto(dto: CreateVideoPostDto, tags: BlogTagEntity[]): VideoPostEntity {
    const entity = new VideoPostEntity();
    entity.title = dto.title;
    entity.userId = dto.userId;
    entity.tags = tags;
    entity.comments = [];
    entity.isRepost = dto.isRepost;
    entity.isDraft = dto.isDraft;
    entity.videoUrl = dto.videoUrl;

    return entity;
  }
}
