import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@project/shared/blog/models';
import { BlogTagRepository } from './blog-tag.repository';
import { BlogTagService } from './blog-tag.service';
import { BlogTagController } from './blog-tag.controller';

@Module({
  imports: [PrismaClientModule],
  providers: [BlogTagRepository, BlogTagService],
  controllers: [BlogTagController],
  exports: [BlogTagService],
})
export class BlogTagModule { }
