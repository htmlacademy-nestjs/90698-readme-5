import { Module } from "@nestjs/common";
import { BlogTagModule } from "../tags/blog-tag.module";
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService }    from './blog-post.service';
import { PrismaClientModule } from '@project/shared/blog/models';

@Module({
  imports: [BlogTagModule, PrismaClientModule],
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogPostRepository],
  exports: [BlogPostService],
})
export class BlogPostModule {}
