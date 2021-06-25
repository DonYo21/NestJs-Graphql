import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoSchema } from './schema/auto.schema';
import { AutoService } from './auto.service';
import { AutoResolver } from './auto.resolver';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: 'Auto', schema: AutoSchema }]),
      ],
    providers: [AutoService, AutoResolver],
})
export class AutoModule {}
