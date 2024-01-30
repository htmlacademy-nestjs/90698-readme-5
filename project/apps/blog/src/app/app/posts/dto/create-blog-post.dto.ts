import { CreateLinkPostDto } from './create-link-post.dto';
import { CreatePhotoPostDto } from './create-photo-post.dto';
import { CreateVideoPostDto } from './create-video-post.dto';
import { CreateQuotePostDto } from './create-quote-post.dto';
import { CreateTextPostDto } from './create-text-post.dto';

export type CreateBlogPostDto = CreateTextPostDto | CreateVideoPostDto | CreateLinkPostDto | CreatePhotoPostDto | CreateQuotePostDto;
