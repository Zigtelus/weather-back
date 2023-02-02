import { DateLastEditArticleDto } from "./date-last-edit-article.dto";
import { StatisticsArticleDto } from "./statistics-article.dto";



class TypeArticleDto {
  public title: string;
  public auter: string;
  public auterId: string;
  public article: string;
  public description: string;
  public cover: string;
  public dateLastEdit: DateLastEditArticleDto;
  public statistics: StatisticsArticleDto | null;
}



export class ArticleDto extends TypeArticleDto {
  
  constructor(
    {title, auter, auterId, article, description, cover, dateLastEdit, statistics}: TypeArticleDto
  ) {
    super()
    this.title = title;
    this.auter = auter;
    this.auterId = auterId;
    this.article = article;
    this.description = description;
    this.cover = cover;
    this.dateLastEdit = dateLastEdit;
    this.statistics = statistics;
  }

}



