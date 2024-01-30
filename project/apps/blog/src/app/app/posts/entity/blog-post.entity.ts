import { LinkPostEntity } from './link-post.entity';
import { PhotoPostEntity } from './photo-post.entity';
import { QuotePostEntity } from './quote-post.entity';
import { TextPostEntity } from './text-post.entity';
import { VideoPostEntity } from './video-post.entity';

export type BlogPostEntity = TextPostEntity | VideoPostEntity | LinkPostEntity | PhotoPostEntity | QuotePostEntity;
