

class TypeUpdateArticleDto {
  public title: string;
  public auter: string;
  public article: string;
  public description: string;
  public cover: string;
}



export class UpdateArticleDto extends TypeUpdateArticleDto {
  
  constructor(
    {title, auter, article, description, cover}: TypeUpdateArticleDto
  ) {
    super()
    this.title = title;
    this.auter = auter;
    this.article = article;
    this.description = description;
    this.cover = cover;
  }
}



