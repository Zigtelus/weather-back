import { Injectable } from '@nestjs/common';
import { NewArticle, UpdateArticle } from './article-objects';
import { ArticleRepository } from './article.repository';
import { ArticleDto } from './dtos/article.dto';
import { Article } from './schemas/article.schema';




@Injectable()
export class ArticleService {


  constructor(private readonly articleRepository: ArticleRepository) {}


  async getArticles(): Promise<Article[]> {
    return this.articleRepository.find({})
  }

  async createArticle(articleDto: ArticleDto): Promise<Article | boolean> {
    const newArticle = new NewArticle(articleDto)
    return this.articleRepository.create(newArticle)
  }

  async updateArticle(articleDto: ArticleDto, articleId: string): Promise<Article> {
    const updateArticle = new UpdateArticle(articleDto)
    return this.articleRepository.update({articleId}, updateArticle)
  }

  async removeArticle() {
    
  }

}
