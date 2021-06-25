import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AutoService } from './auto.service';
import { AutoInput } from './model/auto.input';
import { Auto } from './model/auto.model';

@Resolver(of => Auto)
export class AutoResolver {

    constructor(private autoService:AutoService){}

    @Query(returns=>[Auto])
    async autos(){
        return await this.autoService.getAutos();
    }

    @Query((returns) => Auto)
    async product(@Args('id') id: string) {
        return await this.autoService.getAutoByID(id);
    }

    @Mutation((returns) => Auto)
    async createAuto(@Args('auto') auto: AutoInput) {
        return await this.autoService.createAuto(auto);
    }

    @Mutation((returns) => Auto)
    async editauto(
    @Args('id') id: string,
    @Args('auto') auto: AutoInput,
    ) {
        return await this.autoService.updateauto(id, auto);
    }

    @Mutation((returns) => Auto)
    async deleteProduct(@Args('id') id: string) {
        return await this.autoService.deleteAuto(id);
    }

}
