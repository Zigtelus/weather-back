import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { routes } from 'src/routes';
import { ArticleService } from './article.service';
import { ArticleDto } from './dtos/article.dto';
import { Article } from './schemas/article.schema';




@Controller(`${routes.article}`)
export class ArticleController {
  

  constructor(private readonly articleService: ArticleService ) {}


  @Get()
  async getArticle(): Promise<Article[]>  {
    return this.articleService.getArticles()
  }

  @Post()
  async createArticle(@Body() articleDto: ArticleDto): Promise<Article | boolean> {
    return this.articleService.createArticle(articleDto)
  }

  @Patch(':articleId')
  async updateArticle(@Body() articleDto: ArticleDto,  @Param('articleId') articleId: string): Promise<Article> {
    return this.articleService.updateArticle(articleDto, articleId)
  }

  @Delete()
  async removeArticle() {
    
  }


}
