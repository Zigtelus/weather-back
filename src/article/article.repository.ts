import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model, RootQuerySelector } from "mongoose";
import { join } from "path";
import { UpdateArticle, UpdateStatisticsArticle } from "./article-objects";
import { ArticleDto } from "./dtos/article.dto";
import { StatisticsArticleDto } from "./dtos/statistics-article.dto";
import { UpdateArticleDto } from "./dtos/update-article.dto";
import { Article, ArticleDocument } from "./schemas/article.schema";
const fs = require("fs");




@Injectable()
export class ArticleRepository {


  constructor (@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  async find (statisticsArticleFilterQuery: FilterQuery<Article>): Promise<Article[]> {
    return this.articleModel.find({statisticsArticleFilterQuery})
  }

  async findArticle (articleId: string): Promise<Article> {
    return this.articleModel.findOne({articleId})
  }

  async create (article: Article): Promise<Article | boolean> {
    const newArticle = await new this.articleModel(article).save()
    return newArticle
  }

  async update (articleId: FilterQuery<string>, articleDto: ArticleDto): Promise<UpdateArticleDto> {
    
    const updateArticleq = new UpdateArticle(articleDto)
    const updateArticle = (await this.articleModel.findOneAndUpdate(articleId, {...updateArticleq}, {new: true}))
    const qqq = new UpdateArticleDto({...updateArticle})
    return qqq
  }

  async updateStatistics (statisticsArticleDto: StatisticsArticleDto, articleId: FilterQuery<string>): Promise<StatisticsArticleDto> {

    const findArticle = await this.articleModel.findOne({articleId})

    const newStatistics = new UpdateStatisticsArticle().addStatistics(findArticle.statistics, {...statisticsArticleDto})
    const newArticle = (await this.articleModel.findOneAndUpdate({articleId: articleId}, {statistics: {...newStatistics}}, {new: true}))

    return newArticle.statistics
  }

  async removeArticle(articleId: string, userId: string) {
    const findArticle = await this.articleModel.findOne({articleId})

    if (findArticle.auterId !== userId) return 'this user is not the author of the article'

    const pathToImage = join(__dirname, '../../uploads/' + findArticle.cover)
    fs.unlinkSync(pathToImage)
    return this.articleModel.findOneAndRemove({articleId})
  }
  

};