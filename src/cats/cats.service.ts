import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
// import { Cat } from './interfaces/cat.interface';
import {Model} from "mongoose";
import {Cat} from '../schemas/cat.schema';
import {CreateCatDto} from "./dto";


@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  // private cats: Cat[] = [];
  //
  // findAll(): Cat[] {
  //   return this.cats;
  // }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
