import { v4 as uuidv4 } from 'uuid';



export class UpdateArticle {

  title: string;
  article: string;
  description: string;
  cover: string;
  dateLastEdit = Date();
  statistics: {
    likes: number;
    dislikes: number;
    views: number;
  };


  constructor({title, article, description, cover, statistics: {likes, dislikes, views}}) {

    this.title = title;
    this.article = article;
    this.description = description;
    this.cover = cover;
    this.statistics = {likes, dislikes, views};

  }


}


export class NewArticle extends UpdateArticle {

  articleId = uuidv4();
  datePublication = Date();
  dateLastEdit = '0';

  constructor({title, article, description, cover, statistics: {likes, dislikes, views}}) {
    super({title, article, description, cover, statistics: {likes, dislikes, views}})
  }

}