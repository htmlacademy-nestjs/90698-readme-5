import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import { BlogTagRepository } from './blog-tag.repository';
import { BlogTagEntity } from './tags.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class BlogTagService {
  constructor(
    private readonly blogTagRepository: BlogTagRepository
  ) {}

  public async getTag(id: string): Promise<BlogTagEntity> {
    return this.blogTagRepository.findById(id);
  }

  public async getAllTags(): Promise<BlogTagEntity[]> {
    return await this.blogTagRepository.find();
  }

  public async createTag(dto: CreateTagDto): Promise<BlogTagEntity> {
    const existsTag = (await this.blogTagRepository.find({ title: dto.title })).at(0);
    if (existsTag) {
      throw new ConflictException('A tag with the title already exists');
    }

    const newTag = new BlogTagEntity(dto);
    await this.blogTagRepository.save(newTag);

    return newTag;
  }

  public async deleteTag(id: string): Promise<void> {
    try {
      await this.blogTagRepository.deleteById(id);
    } catch {
      // TODO. Обратите внимание. Ошибки могут быть разными
      // Вы должны реагировать на них по-разному.
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }
  }

  public async updateTag(id: string, dto: UpdateTagDto): Promise<BlogTagEntity> {
    const blogTagEntity = new BlogTagEntity(dto);

    try {
      const updatedTag = await this.blogTagRepository.update(id, blogTagEntity);
      return updatedTag;
    } catch {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }
  }

  public async getTagsByIds(tagIds: string[]): Promise<BlogTagEntity[]> {
    const tags = await this.blogTagRepository.findByIds(tagIds);

    if (tags.length !== tagIds.length) {
      const foundTagIds = tags.map((tag) => tag.id);
      const notFoundTagIds = tagIds.filter((tagId) => !foundTagIds.includes(tagId));

      if (notFoundTagIds.length > 0) {
        throw new NotFoundException(`Tags with ids ${notFoundTagIds.join(', ')} not found.`);
      }
    }

    return tags;
  }
}
