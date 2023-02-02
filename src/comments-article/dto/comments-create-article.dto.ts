import { v4 as uuidv4 } from 'uuid';

export class TypeCreateCommentArticleDto {
  public auterId: string;
  public text: string;
  public name: string;
  public family: string;
  
}

export class CreateCommentArticleDto extends TypeCreateCommentArticleDto {
  commentId = uuidv4();
  likes = [];
  dislikes = [];

  dateCreation = Date();
  dateLastEdit = {
    state: false,
    date: Date(),
  }

  constructor({auterId, name, family, text}: TypeCreateCommentArticleDto) {
    super()

    this.auterId = auterId,
    this.name = name,
    this.family = family,
    this.text = text
  }
}