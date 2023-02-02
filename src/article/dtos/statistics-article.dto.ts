

class TypeStatisticsArticleDto {
  public likes: string[];
  public dislikes: string[];
  public views: string[];
}



export class StatisticsArticleDto extends TypeStatisticsArticleDto {

  constructor(
    {likes, dislikes, views}: TypeStatisticsArticleDto
  ) {
    super()
    this.likes = likes;
    this.dislikes = dislikes;
    this.views = views;
  }
  
}