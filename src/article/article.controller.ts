import { Body, Controller, Delete, Get, Ip, Param, Patch, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { FilterQuery, Model } from 'mongoose';
import path, { basename, dirname, extname, join } from 'path';
import { routes } from 'src/routes';
import { ArticleService } from './article.service';
import { ArticleDto } from './dtos/article.dto';
import { CreateArticleDto } from './dtos/create-article.dto';
import { StatisticsArticleDto } from './dtos/statistics-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { Article } from './schemas/article.schema';
import { StatisticsArticle } from './schemas/statistics-article.schema';
import { CommentsArticleService } from 'src/comments-article/comments-article.service';
import { IpAddress } from '../decorators/IpAddress';
const fs = require("fs");






@Controller(`${routes.article}`)
export class ArticleController {
  
  aa: Express.Multer.File

  constructor(
    private readonly articleService: ArticleService
  ) {}


  @Get()
  async getArticles(): Promise<Article[]>  {
    // this.articleService.updateArticle(articleDto, articleId)

    const q = this.articleService.getArticles();
    (await q).map(item => {
      // this.articleService.updateArticle({...item}, item.articleId)
      // this.articleService.removeArticle(item.articleId)
    })

    return this.articleService.getArticles()
  }


  @Get(':articleId')
  async getArticle(@Param('articleId') articleId: string): Promise<Article>  {
    
    // fs.unlinkSync()
    // const filename = '432106f1b3f5723d3807bbc7a0f8e9936.png'
    // fs.unlink(`../../uploads/${filename}`, (error)=> console.log(error))
    // const q = join(__dirname, '../../uploads/' + filename)
    // fs.unlinkSync(q)


    // fs.unlink(directoryPath + fileName, (err) => {
    //   if (err) {
    //     throw err;
    //   }
    // }
    
    return this.articleService.findArticle(articleId)
  }
  

  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto): Promise<Article | boolean> {
    return this.articleService.createArticle(createArticleDto)
  }


  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads'
        , filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`)
        }
      })
    })
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    const {title, article, auter, auterId, description } = body
    console.log(title, article, auter, auterId, description)

    const newArticle: CreateArticleDto = {title, article, auter, auterId, description, cover: file.filename}

    const createArticle = this.articleService.createArticle(newArticle)
    return newArticle
  }

  @Get('upload')
  seeUploadedFile(@Param('imgpath') image, @Res() res: Response) {
    // return res.sendFile(image, { root: './upload' });
    // return res.sendFile('image', this.aa)
    image = 'e922b734d106fd0f21c250ef5c3c8a6d'
    // return res.sendFile(image, { root: 'uploads' });

    // const path = process.cwd() + '/uploads/' + image;
    // const data = res.sendFile(image, { root: 'uploads' });
    // console.log(path)
    // return writeFile(path, JSON.stringify(data));
    return res.sendFile(image, { root: 'uploads' });

  }

  // @Get('qqw/myEndpoint')
  // async myEndpointFunc(@Req() request: any): Promise<UpdateArticleDto | string> {

  //   // console.log(request.ip)
  //   // return 'ipAddress.clientIp'
  // }

  @Patch(':articleId')
  async updateArticle(@Body() articleDto: ArticleDto,  @Param('articleId') articleId: FilterQuery<string>): Promise<UpdateArticleDto | string> {

    return this.articleService.updateArticle(articleDto, articleId)
  }

  @Patch(':articleId/statisctics')
  async updateStatisticsArticle(@Body() statisticsArticleDto: StatisticsArticleDto,  @Param('articleId') articleId: FilterQuery<string> ): Promise<StatisticsArticleDto | string> {
    return this.articleService.updateStatisticsArticle(statisticsArticleDto, articleId)
  }

  @Patch(':articleId/comments')
  async updateCommentsArticle(@Body() statisticsArticleDto: StatisticsArticleDto,  @Param('articleId') articleId: FilterQuery<string> ): Promise<StatisticsArticle> {
    return this.articleService.updateStatisticsArticle(statisticsArticleDto, articleId)
  }

  @Delete(':articleId/:userId')
  async removeArticle(
    @Param('articleId') articleId: string,
    @Param('userId') userId: string
  ) {
    return this.articleService.removeArticle(articleId, userId)
  }


}
