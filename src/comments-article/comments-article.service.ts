import { Injectable } from '@nestjs/common';
import { CommentsArticleRepository } from './comments-article.repository';
import { TypeCommentArticleDto } from './dto/comment-article.dto';
import { CreateCommentsArticleDto, TypeCommentsArticleDto } from './dto/comments-article.dto';
import { CreateCommentArticleDto, TypeCreateCommentArticleDto } from './dto/comments-create-article.dto';
import { TypeUpdateCommentArticleDto } from './dto/comments-update-article.dto';
import { CommentArticle } from './schema/comment-article.schema';
import { CommentsArticle } from './schema/comments-article.schema';

@Injectable()
export class CommentsArticleService {

  constructor(readonly commentsArticleRepository: CommentsArticleRepository) {

  }


  
  async addComments(articleId: string): Promise<CreateCommentsArticleDto | string> {
    return this.commentsArticleRepository.addComments(articleId)
  }


  async addComment(createCommentArticleDto: TypeCreateCommentArticleDto, articleId: string): Promise<CommentArticle | string> {
    return this.commentsArticleRepository.addComment(createCommentArticleDto, articleId)
  }



  async getComments(): Promise<CommentsArticle[]> {
    return this.commentsArticleRepository.getComments()
  }

  async getComment(articleId: string): Promise<TypeCommentArticleDto> {
    return this.commentsArticleRepository.getComment(articleId)
  }


  async changeComment(articleId: string, commentArticleDto: TypeUpdateCommentArticleDto): Promise<TypeCommentArticleDto | string> {   
    return this.commentsArticleRepository.changeComment(articleId, commentArticleDto)
  }




  async removeComments(articleId: string): Promise <string> {
    return this.commentsArticleRepository.removeComments(articleId)
  } 


  async removeComment(articleId: string, commentId: string, userId: string): Promise <string> {
    const removeComment = this.commentsArticleRepository.removeComment(articleId, commentId, userId)
    return removeComment
  } 


}
