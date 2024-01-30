import { PostType, Post } from '@project/shared/app/types';

import { QuotePostEntity, LinkPostEntity, PhotoPostEntity, TextPostEntity, VideoPostEntity } from './index';
import { BlogPostEntity } from './blog-post.entity';

export const PostEntityAdapter = {
  [PostType.TEXT]: TextPostEntity,
  [PostType.VIDEO]: VideoPostEntity,
  [PostType.QUOTE]: QuotePostEntity,
  [PostType.PHOTO]: PhotoPostEntity,
  [PostType.LINK]: LinkPostEntity,
}

export function PostEntityFactory (post: Post): BlogPostEntity {
  return new PostEntityAdapter[post.type]();
}
