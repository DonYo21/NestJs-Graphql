import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AutoInput } from './model/auto.input';
import { Auto, AutoDocument } from './schema/auto.schema';

@Injectable()
export class AutoService {
    constructor(@InjectModel('Auto') private readonly autoModel:Model<AutoDocument>){

    }

    async getAutos():Promise<Auto[]>{
        return await this.autoModel.find();
    }

    async getAutoByID(id: string): Promise<Auto> {
        return await this.autoModel.findById(id);
      }
    
      async createAuto(autoDto: AutoInput): Promise<Auto> {
        const auto = new this.autoModel(autoDto);
        return auto.save();
      }
    
      async deleteAuto(id: string): Promise<any> {
        const autoDeleted = await this.autoModel.findByIdAndDelete(id);
        return autoDeleted;
      }
    
      async updateauto(id: string, autoDto: AutoInput): Promise<Auto> {
        const autoUpdate = await this.autoModel.findByIdAndUpdate(
          id,
          autoDto,
          { new: true },
        );
        autoUpdate.save();
        return autoUpdate;
      }
}
