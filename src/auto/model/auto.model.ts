import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Auto{

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