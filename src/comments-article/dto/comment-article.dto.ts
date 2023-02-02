import { DateLastEditCommentDto } from "./date-last-edit-comment.dto";


export class TypeCommentArticleDto {
  readonly commentId: string;
  readonly auterId: string;

  readonly name: string;
  readonly family: string;

  readonly text: string;

  readonly likes: string[];
  readonly dislikes: string[];
  
  readonly dateCreation: string;
  readonly dateLastEdit: DateLastEditCommentDto;
  
}