import { v4 as uuidv4 } from 'uuid';
import { TypeCommentArticleDto } from "./comment-article.dto";


export class TypeCommentsArticleDto {
  articleId: string;
  commentsId: string;
  comments: TypeCommentArticleDto[];
}


export class CreateCommentsArticleDto extends TypeCommentsArticleDto {
  commentsId: string;
  constructor(articleId) {
    super()
    this.articleId = articleId;
    this.comments = [];
    this.commentsId = uuidv4()
  }
  
}


