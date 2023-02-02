import { v4 as uuidv4 } from 'uuid';
import { StatisticsArticle } from './schemas/statistics-article.schema';


type StatisticsInArticl = StatisticsArticle;
type StatisticsFromUser = StatisticsArticle;


// this class contains the types object that we take from the user to chenge the "statistics" object in the article

export class UpdateStatisticsArticle {

  statistics: StatisticsArticle | null;

  constructor(statistics?: {likes, dislikes, views}) {
    this.statistics = this.addStatistics(statistics)
  }


  // ths mothod 'addStatistics' take two params.
  // 1) statisticsInArticl - this is an array of all article statistics 
  // 2) statisticsFromUser - this is new data which need contain in statisticsInArticl

  addStatistics(
    statisticsInArticl: StatisticsInArticl, 
    statisticsFromUser?: StatisticsFromUser
  ) {

 

    if (statisticsInArticl === undefined) {
      return null
    }

    if(statisticsFromUser || !!statisticsFromUser.views[0]) {

      const newLike = statisticsFromUser.likes[0]
      const newDislikes = statisticsFromUser.dislikes[0]
      const newViews = statisticsFromUser.views[0]

      if (statisticsInArticl === null) {
        statisticsInArticl = {
          likes: [],
          dislikes: [],
          views: []
        }
      }

      const findLike = statisticsInArticl.likes.find(item=> item === newLike)
      const findDislike = statisticsInArticl.dislikes.find(item=> item === newDislikes)
      const findViews = statisticsInArticl.views.find(item=> item === newViews)

      if (!!newLike && !!newDislikes) {
        (!findLike && statisticsInArticl.likes.push(newLike))
        statisticsInArticl.dislikes = statisticsInArticl.dislikes.filter(item => item !== newViews)
        return statisticsInArticl
      }

      !!newLike ? 
      (!findLike && statisticsInArticl.likes.push(newLike)) :
      statisticsInArticl.likes = statisticsInArticl.likes.filter(item => item !== newViews)

      !!newDislikes ? 
      (!findDislike && statisticsInArticl.dislikes.push(newDislikes)) :
      statisticsInArticl.dislikes = statisticsInArticl.dislikes.filter(item => item !== newViews)


      !!newViews && !findViews && statisticsInArticl.views.push(newViews)

    }


    

    return statisticsInArticl;
  }


}


export class UpdateArticle extends UpdateStatisticsArticle {

  title: string;
  auter: string;
  article: string;
  description: string;
  cover: string;
  dateLastEdit = {
    state: true,
    date: Date()
  };
  // comments: NewCommentsArticle[] | null;


  constructor({title, auter, article, description, cover, statistics}) {
    super(statistics)
    this.title = title;
    this.auter = auter;
    this.article = article;
    this.description = description;
    this.cover = cover;
    // this.comments = this.addComment(comments);
  }

  addComment(comments) {

    if (comments) {

    } else {
      return null
    }
  }


}


export class NewArticle extends UpdateArticle {

  articleId = uuidv4();
  datePublication = Date();
  dateLastEdit = {
    state: false,
    date: Date(),
  };

  constructor({title, auter, article, description, cover, statistics}) {
    super({title, auter, article, description, cover, statistics})
  }

}




// export class NewArticle1 {

//   articleId = uuidv4();
//   datePublication = Date();
//   dateLastEdit = {
//     state: false,
//     date: Date(),
//   };
//   statistics: StatisticsArticleDto;
//   comments: NewCommentsArticle[];

//   title: string;
//   auter: string;
//   article: string;
//   description: string;
//   cover: string;

//   constructor({title, auter, article, description, cover}) {
//     this.title = title;
//     this.auter = auter;
//     this.article = article;
//     this.description = description;
//     this.cover = cover;
//     this.statistics = {
//       likes: [],
//       dislikes: [],
//       views: []
//     };
//     this.comments = [];
//   }
// }