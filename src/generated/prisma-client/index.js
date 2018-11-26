"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Car",
    embedded: false
  },
  {
    name: "CarBodyType",
    embedded: false
  },
  {
    name: "CarFuelType",
    embedded: false
  },
  {
    name: "CarMake",
    embedded: false
  },
  {
    name: "CarModel",
    embedded: false
  },
  {
    name: "CarTrim",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/nabeel-amir/database/prisma-cars`
});
exports.prisma = new exports.Prisma();
