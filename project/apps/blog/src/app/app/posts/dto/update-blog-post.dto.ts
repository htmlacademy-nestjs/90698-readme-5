import { UpdateLinkPostDto } from './update-link-post.dto';
import { UpdatePhotoPostDto } from './update-photo-post.dto';
import { UpdateVideoPostDto } from './update-video-post.dto';
import { UpdateQuotePostDto } from './update-quote-post.dto';
import { UpdateTextPostDto } from './update-text-post.dto';

export type UpdateBlogPostDto = UpdateTextPostDto | UpdateVideoPostDto | UpdateLinkPostDto | UpdatePhotoPostDto | UpdateQuotePostDto;
