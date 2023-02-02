import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TypeCommentArticleDto } from "./dto/comment-article.dto";
import { CreateCommentsArticleDto, TypeCommentsArticleDto } from "./dto/comments-article.dto";
import { CreateCommentArticleDto, TypeCreateCommentArticleDto } from "./dto/comments-create-article.dto";
import { CommentsArticle, CommentsArticleDocument } from "./schema/comments-article.schema";
import { TypeUpdateCommentArticleDto } from './dto/comments-update-article.dto';
import { CommentArticle } from "./schema/comment-article.schema";




@Injectable()
export class CommentsArticleRepository {


  constructor (
    @InjectModel(CommentsArticle.name) private commentsArticlModel: Model<CommentsArticleDocument>
  ) {}


  // CommentsArticle object - contains id article and all comments within the article
  // create new CommentsArticleDto object
  async addComments(articleId: string): Promise<CreateCommentsArticleDto | string> {


    try {
      const createComments: TypeCommentsArticleDto = new CreateCommentsArticleDto(articleId)
      const findComments = await this.commentsArticlModel.findOne({articleId})

      if (findComments !== null) return `object with articleId "${articleId}" already exists`

      return await new this.commentsArticlModel(createComments).save()
    } catch (error) {
      return 'error message: ' + error.message
    }

  }

  // CommentsArticle object - contains id article and all comments within the article
  // add new comment to array comments inside CommentsArticleDto object 
  async addComment(createCommentArticleDto: TypeCreateCommentArticleDto, articleId: string): Promise<CommentArticle | string> {

    try {
      let findArticle: TypeCommentsArticleDto = await this.commentsArticlModel.findOne({articleId})

      if (findArticle === null) {
        const createComments: TypeCommentsArticleDto = await new CreateCommentsArticleDto(articleId)
        await new this.commentsArticlModel(createComments).save()
      }

      findArticle = await this.commentsArticlModel.findOne({articleId})
      const newComment: TypeCommentArticleDto = new CreateCommentArticleDto(createCommentArticleDto)
      findArticle.comments.push(newComment)
      const updateComents: CommentArticle = await this.commentsArticlModel.findOneAndUpdate({articleId}, {comments: [...findArticle.comments]})
      return newComment

    } catch (error) {
      return 'error message: ' + error.message
    }

  }




  // CommentsArticle object - contains id article and all comments within the article
  // get all CommentsArticle objects of all articles on the cite
  async getComments(): Promise<CommentsArticle[]> {
    const getComments = await this.commentsArticlModel.find({})
    return getComments
  }

  // CommentsArticle object - contains id article and all comments within the article
  // get all comments on an article
  async getComment(articleId: string): Promise<TypeCommentArticleDto> {
    const getComments: TypeCommentArticleDto = await this.commentsArticlModel.findOne({articleId})
    return getComments
  }




  // comments object - this object contains all the comments for the article
  // changeComment - find the comment inside the "comments object" and chenge the comment
  async changeComment(articleId: string, commentArticleDto: TypeUpdateCommentArticleDto): Promise<TypeCommentArticleDto | string> {    
    
    let updateComments;

    try {
      const findComments: TypeCommentsArticleDto = (await this.commentsArticlModel.findOne({articleId}))
      const findComment = findComments.comments.map(item => {
        if (item.commentId === commentArticleDto.commentId) return commentArticleDto
        return item
      })
      updateComments = await this.commentsArticlModel.findOneAndUpdate({articleId}, {comments: findComment})
    } catch (error) {
      return 'error message: ' + error.message
    }
    
    return updateComments
  }




  // removeComments - remove "comments object" 
  async removeComments(articleId: string): Promise <string> {
    try {
      const findComments = await this.commentsArticlModel.findOne({articleId})
      if (findComments == null) return 'this object was not found';
      await this.commentsArticlModel.findOneAndRemove({articleId})
    } catch(error) {
      return 'error message: ' + error.message
    }

    return 'all the comments has been removed'
  } 

  // comments object - this object contains all the comments for the article
  // removeComment - find the "comments object" and remove the comment inside
  async removeComment(articleId: string, commentId: string, userId: string): Promise <any> {

    try {
      const findArticle = await this.commentsArticlModel.findOne({articleId})

      const findComment = findArticle.comments.find(item => item.commentId === commentId)
      if (findComment.auterId !== userId) return 'You are not the commenter'

      const removeComment = findArticle.comments.filter(item => item.commentId !== commentId)
      const remakeArticle = await this.commentsArticlModel.findOneAndUpdate({articleId}, {comments: [...removeComment]}) 
    } catch (error) {
      return 'error message: ' + error.message
    }

    return {articleId: articleId}
  }




  

};