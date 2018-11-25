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
            const make = await context.db.carMakes({where: {name: args.make}});
            const model = await context.db.carModels({where: {name: args.model, make:{name:args.make}}});
            const trim = await context.db.carTrims({where: {name: args.trim, model:{name:args.model, make:{name:args.make}}}})

            if(make.length == 1 && make[0] != null) {
                //const makeInsert = 
            }
            console.log(make);
            console.log(model);
            console.log(trim);
            return make[0];
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