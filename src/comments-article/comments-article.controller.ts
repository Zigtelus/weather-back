import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { routes } from 'src/routes';
import { CommentsArticleService } from './comments-article.service';
import { TypeCommentArticleDto } from './dto/comment-article.dto';
import { CreateCommentsArticleDto, TypeCommentsArticleDto } from './dto/comments-article.dto';
import { TypeCreateCommentArticleDto } from './dto/comments-create-article.dto';
import { TypeUpdateCommentArticleDto } from './dto/comments-update-article.dto';
import { CommentArticle } from './schema/comment-article.schema';
import { CommentsArticle } from './schema/comments-article.schema';



@Controller(`${routes.comments}`)
export class CommentsArticleController {


  constructor(
    private readonly commentsArticleService: CommentsArticleService
  ) {}

  

  @Post('comments/:articleId')
  async addComments(@Param('articleId') articleId: string): Promise<CreateCommentsArticleDto | string> {
    return this.commentsArticleService.addComments(articleId)
  }

  @Post('comment/:articleId')
  async addComment(@Body() createCommentArticle: TypeCreateCommentArticleDto, @Param('articleId') articleId: string): Promise<CommentArticle | string> {
    const newComment = this.commentsArticleService.addComment(createCommentArticle, articleId);
    return newComment
  }


  @Get('comments')
  async getComments(): Promise<CommentsArticle[]> {

    const comments = await this.commentsArticleService.getComments()
    comments.forEach(item => {
      
      // this.removeComments(item.articleId)
    })

    return this.commentsArticleService.getComments()
  }

  @Get('comments/:articleId')
  async getComment(@Param('articleId') articleId: string): Promise<TypeCommentArticleDto> {
    return this.commentsArticleService.getComment(articleId)
  }

  

  @Patch('comment/:articleId')
  async changeComment(@Param('articleId') articleId: string, @Body() commentArticleDto: TypeUpdateCommentArticleDto): Promise<TypeCommentArticleDto | string> {
    // console.log(commentArticleDto)
    return this.commentsArticleService.changeComment(articleId, commentArticleDto)
  }


  @Delete('comments/:articleId')
  async removeComments(@Param('articleId') articleId: string): Promise <string> {
    return this.commentsArticleService.removeComments(articleId)
  }


  @Post('comment/:articleId/:commentId')
  async removeComment(@Param('articleId') articleId: string, @Param('commentId') commentId: string, @Body('userId') userId: string): Promise <string> {
    return this.commentsArticleService.removeComment(articleId, commentId, userId)
  } 
}
