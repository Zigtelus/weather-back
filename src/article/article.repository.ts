import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { ArticleDto } from "./dtos/article.dto";
import { Article, ArticleDocument } from "./schemas/article.schema";




@Injectable()
export class ArticleRepository {


  constructor (@InjectModel(Article.name) private userModel: Model<ArticleDocument>) {}

  async find (statisticsArticleFilterQuery: FilterQuery<Article>): Promise<Article[]> {
    return this.userModel.find(statisticsArticleFilterQuery)
  }

  async create (article: Article): Promise<Article | boolean> {
    const newArticle = new this.userModel(article)
    return newArticle.save()
  }

  async update (articleFilterQuery: FilterQuery<Article>, article: Partial<Article>): Promise<Article> {
    return this.userModel.findOneAndUpdate(articleFilterQuery, article, {new: true})
  }
  

};