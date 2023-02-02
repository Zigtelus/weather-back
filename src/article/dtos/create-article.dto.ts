

class TypeCreateArticleDto {
  public title: string;
  public auter: string;
  public auterId: string;
  public article: string;
  public description: string;
  public cover: string;
}


export class CreateArticleDto extends TypeCreateArticleDto {

  constructor(
    {title, auter, auterId, article, description, cover}: TypeCreateArticleDto
  ) {
    super()
    this.title = title;
    this.auter = auter;
    this.auterId = auterId;
    this.article = article;
    this.description = description;
    this.cover = cover;
  }
  
}



