import { PhotoPostRdo } from './photo-post.rdo';
import { VideoPostRdo } from './video-post.rdo';
import { TextPostRdo } from './text-post.rdo';
import { LinkPostRdo } from './link-post.rdo';
import { QuotePostRdo } from './quote-post.rdo';

export type BlogPostRdo = TextPostRdo | VideoPostRdo | PhotoPostRdo | LinkPostRdo | QuotePostRdo;
