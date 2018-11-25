const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')

const resolvers = {
    Query: {
        carMakes: (parent, args, context) => {
            return context.db.carMakes()
        }
    },
    Mutation: {
        addCar: async (parent, args, context, info) => {
            console.log(args.make);
            let make = await context.db.carMakes({where: {name: args.make}});
            let model = await context.db.carModels({where: {name: args.model, make:{name:args.make}}});
            let trim = await context.db.carTrims({where: {name: args.trim, model:{name:args.model, make:{name:args.make}}}})

            if(make.length > 1 || model.length > 1 || trim.length > 1){
                throw new Error(`Make/Model/Trim returned more than 1 result ${make}, ${model}, ${trim}`);
            }

            make = make[0];
            model = model[0];
            trim = trim[0];

            if(make == null) {
                make = await context.db.createCarMake({name: args.make});
            }

            if(model == null) {
                model = await context.db.createCarModel({name: args.model, make: {connect: {id: make.id}}});
            }

            if(trim == null) {
                trim = await context.db.createCarTrim({name: args.trim, model: {connect: {id: model.id}}})
            }
            console.log(make);
            console.log(model);
            console.log(trim);
            return make;
        }
    }
}
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db: prisma,
    },
});

server.start(() => console.log('Server is running on http://localhost:4000'))