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
            let bodyType = await context.db.carBodyTypes({where: {name: args.body_type}});
            let fuelType = await context.db.carFuelTypes({where: {name: args.fuel_type}});

            // TODO need to consider if year to is empty
            let carSpec = await context.db.carSpecs({
                where:{
                    no_of_doors: args.no_of_doors,
                    year_from: args.year_from,
                    body_type: {
                        name: args.body_type
                    },
                    fuel_type: {
                        name: args.fuel_type
                    },
                    trim: {
                        name: args.trim
                    },
                    power_ps: args.power_ps
                }
            });

            if(make.length > 1 || model.length > 1 || trim.length > 1
                || bodyType.length > 1 || fuelType.length > 1 || carSpec.length > 1){
                throw new Error(`Make/Model/Trim/BodyType/FuelType/car returned more than 1 result ${make}, ${model}, ${trim}, ${bodyType}, ${fuelType}, ${carSpec}`);
            }

            make = make[0];
            model = model[0];
            trim = trim[0];
            bodyType = bodyType[0];
            fuelType = fuelType[0];
            carSpec = carSpec[0]

            if(make == null) {
                make = await context.db.createCarMake({name: args.make});
            }

            if(model == null) {
                model = await context.db.createCarModel({name: args.model, make: {connect: {id: make.id}}});
            }

            if(trim == null) {
                trim = await context.db.createCarTrim({name: args.trim, model: {connect: {id: model.id}}})
            }

            if(bodyType == null) {
                bodyType = await context.db.createCarBodyType({name: args.body_type});
            }

            if(fuelType == null) {
                fuelType = await context.db.createCarFuelType({name: args.fuel_type});
            }

            if(carSpec==null) {
                carSpec = await context.db.createCarSpec({
                    trim: {
                        connect: {id: trim.id}
                    },
                    body_type:{
                        connect: {id: bodyType.id}
                    },
                    fuel_type:{
                        connect: {id: fuelType.id}
                    },
                    year_from: args.year_from,
                    year_to: args.year_to,
                    zero_to_sixty: args.zero_to_sixty,
                    no_of_doors: args.no_of_doors,
                    no_of_seats: args.no_of_seats,
                    power_ps: args.power_ps,
                })
            }

            console.log(make);
            console.log(model);
            console.log(trim);
            console.log(bodyType);
            console.log(fuelType);
            console.log(carSpec);
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