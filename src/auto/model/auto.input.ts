import { Field, Float, ID, InputType } from "@nestjs/graphql";

@InputType()

export class AutoInput {

    @Field(()=>ID,{nullable:true})
    id?:string

    @Field({nullable:true})
    modelo?:string

    @Field({nullable:true})
    marca?:string
    
    @Field({nullable:true})
    tipo?:string

    @Field(type => Float, {nullable:true})
    precio?:number
}