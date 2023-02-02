import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { ArticleRepository } from './article.repository';
import { ArticleDto } from './dtos/article.dto';
import { CreateArticleDto } from './dtos/create-article.dto';
import { StatisticsArticleDto } from './dtos/statistics-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';
import { Article } from './schemas/article.schema';




@Injectable()
export class ArticleService {


  constructor(private readonly articleRepository: ArticleRepository) {}


  async getArticles(): Promise<Article[]> {
    return this.articleRepository.find({})
  }

  async findArticle (articleId: string): Promise<Article> {
    return this.articleRepository.findArticle(articleId)
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article | boolean> {
    const newArticle = new CreateArticleDto(createArticleDto)
    console.log(newArticle)
    return this.articleRepository.create({
      ...newArticle,
      statistics: {
        likes: [],
        dislikes: [],
        views: []
      },
      articleId: uuidv4(),
      datePublication: Date(),
      dateLastEdit: {
        state: false,
        date: Date(),
      }
    })
  }

  async updateArticle(articleDto: ArticleDto, articleId: FilterQuery<string>): Promise<UpdateArticleDto> {

    return this.articleRepository.update(articleId, articleDto)
  }

  async updateStatisticsArticle(statisticsArticleDto: StatisticsArticleDto, articleId: FilterQuery<string> ): Promise<StatisticsArticleDto> {    
    return this.articleRepository.updateStatistics(statisticsArticleDto, articleId)
  }

  async removeArticle(articleId: string, userId: string) {
    return this.articleRepository.removeArticle(articleId, userId)
  }

}
