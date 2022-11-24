import { StatisticsArticleDto } from "./statistics-article.dto";


export class ArticleDto {

  readonly title: string;
  readonly article: string;
  readonly description: string;
  readonly cover: string;
  readonly statistics: StatisticsArticleDto;
  readonly dateLastEdit: string;
  
}



