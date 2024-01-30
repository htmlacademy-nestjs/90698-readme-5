import { Injectable, NotFoundException } from '@nestjs/common';
import { Tag } from '@project/shared/app/types';

import { BasePostgresRepository } from '@project/shared/core';
import { BlogTagEntity } from './tags.entity';
import { PrismaClientService } from '@project/shared/blog/models';
import { MAX_TAG_LIMIT } from './blog-tag.constant';
import { TagFilter, tagFilterToPrismaFilter } from './blog-tag.filter';

@Injectable()
export class BlogTagRepository extends BasePostgresRepository<BlogTagEntity, Tag> {
  constructor(
    protected readonly client: PrismaClientService,
  ) {
    super(client, BlogTagEntity.fromObject);
  }

  public async save(entity: BlogTagEntity): Promise<BlogTagEntity> {
    const record = await this.client.tag.create({
      data: { ...entity.toPOJO() }
    });

    entity.id = record.id;
    return entity;
  }

  public async findById(id: string): Promise<BlogTagEntity> {
    const document = await this.client.tag.findFirst({
      where: {
        id,
      },
    });

    if (! document) {
      throw new NotFoundException(`Tag with id ${id} not found.`);
    }

    return this.createEntityFromDocument(document);
  }

  public async find(filter?: TagFilter): Promise<BlogTagEntity[]> {
    const where = filter ?? tagFilterToPrismaFilter(filter);

    const documents = await this.client.tag.findMany({
      where,
      take: MAX_TAG_LIMIT
    });

    return documents.map((document) => this.createEntityFromDocument(document));
  }

  public async deleteById(id: string): Promise<void> {
    await this.client.tag.delete({
      where: {
        id,
      }
    });
  }

  public async update(id: string, entity: BlogTagEntity): Promise<BlogTagEntity> {
    const updatedTag = await this.client.tag.update({
      where: { id },
      data: {
        title: entity.title,
      }
    });

    return this.createEntityFromDocument(updatedTag);
  }

  public async findByIds(ids: string[]): Promise<BlogTagEntity[]> {
    const records = await this.client.tag.findMany({
      where: {
        id: {
          in: ids,
        }
      }
    });

    return records.map((record) => this.createEntityFromDocument(record));
  }
}
