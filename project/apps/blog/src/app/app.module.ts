import { Module } from '@nestjs/common';
import { BlogCommentModule } from './app/comments/blog-comment.module';
import { LikesModule } from './app/likes/likes.module';
import { BlogPostModule } from './app/posts/blog-post.module';
import { TagsModule } from './app/tags/tags.module';

@Module({
  imports: [BlogCommentModule, LikesModule, BlogPostModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
