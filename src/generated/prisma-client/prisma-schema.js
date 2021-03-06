module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCarBodyType {
  count: Int!
}

type AggregateCarFuelType {
  count: Int!
}

type AggregateCarMake {
  count: Int!
}

type AggregateCarModel {
  count: Int!
}

type AggregateCarSpec {
  count: Int!
}

type AggregateCarTrim {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CarBodyType {
  id: ID!
  name: String
  carSpecs(where: CarSpecWhereInput, orderBy: CarSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarSpec!]
}

type CarBodyTypeConnection {
  pageInfo: PageInfo!
  edges: [CarBodyTypeEdge]!
  aggregate: AggregateCarBodyType!
}

input CarBodyTypeCreateInput {
  name: String
  carSpecs: CarSpecCreateManyWithoutBody_typeInput
}

input CarBodyTypeCreateOneWithoutCarSpecsInput {
  create: CarBodyTypeCreateWithoutCarSpecsInput
  connect: CarBodyTypeWhereUniqueInput
}

input CarBodyTypeCreateWithoutCarSpecsInput {
  name: String
}

type CarBodyTypeEdge {
  node: CarBodyType!
  cursor: String!
}

enum CarBodyTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarBodyTypePreviousValues {
  id: ID!
  name: String
}

type CarBodyTypeSubscriptionPayload {
  mutation: MutationType!
  node: CarBodyType
  updatedFields: [String!]
  previousValues: CarBodyTypePreviousValues
}

input CarBodyTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarBodyTypeWhereInput
  AND: [CarBodyTypeSubscriptionWhereInput!]
  OR: [CarBodyTypeSubscriptionWhereInput!]
  NOT: [CarBodyTypeSubscriptionWhereInput!]
}

input CarBodyTypeUpdateInput {
  name: String
  carSpecs: CarSpecUpdateManyWithoutBody_typeInput
}

input CarBodyTypeUpdateManyMutationInput {
  name: String
}

input CarBodyTypeUpdateOneWithoutCarSpecsInput {
  create: CarBodyTypeCreateWithoutCarSpecsInput
  update: CarBodyTypeUpdateWithoutCarSpecsDataInput
  upsert: CarBodyTypeUpsertWithoutCarSpecsInput
  delete: Boolean
  disconnect: Boolean
  connect: CarBodyTypeWhereUniqueInput
}

input CarBodyTypeUpdateWithoutCarSpecsDataInput {
  name: String
}

input CarBodyTypeUpsertWithoutCarSpecsInput {
  update: CarBodyTypeUpdateWithoutCarSpecsDataInput!
  create: CarBodyTypeCreateWithoutCarSpecsInput!
}

input CarBodyTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  carSpecs_every: CarSpecWhereInput
  carSpecs_some: CarSpecWhereInput
  carSpecs_none: CarSpecWhereInput
  AND: [CarBodyTypeWhereInput!]
  OR: [CarBodyTypeWhereInput!]
  NOT: [CarBodyTypeWhereInput!]
}

input CarBodyTypeWhereUniqueInput {
  id: ID
}

type CarFuelType {
  id: ID!
  name: String
  carSpecs(where: CarSpecWhereInput, orderBy: CarSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarSpec!]
}

type CarFuelTypeConnection {
  pageInfo: PageInfo!
  edges: [CarFuelTypeEdge]!
  aggregate: AggregateCarFuelType!
}

input CarFuelTypeCreateInput {
  name: String
  carSpecs: CarSpecCreateManyWithoutFuel_typeInput
}

input CarFuelTypeCreateOneWithoutCarSpecsInput {
  create: CarFuelTypeCreateWithoutCarSpecsInput
  connect: CarFuelTypeWhereUniqueInput
}

input CarFuelTypeCreateWithoutCarSpecsInput {
  name: String
}

type CarFuelTypeEdge {
  node: CarFuelType!
  cursor: String!
}

enum CarFuelTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarFuelTypePreviousValues {
  id: ID!
  name: String
}

type CarFuelTypeSubscriptionPayload {
  mutation: MutationType!
  node: CarFuelType
  updatedFields: [String!]
  previousValues: CarFuelTypePreviousValues
}

input CarFuelTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarFuelTypeWhereInput
  AND: [CarFuelTypeSubscriptionWhereInput!]
  OR: [CarFuelTypeSubscriptionWhereInput!]
  NOT: [CarFuelTypeSubscriptionWhereInput!]
}

input CarFuelTypeUpdateInput {
  name: String
  carSpecs: CarSpecUpdateManyWithoutFuel_typeInput
}

input CarFuelTypeUpdateManyMutationInput {
  name: String
}

input CarFuelTypeUpdateOneWithoutCarSpecsInput {
  create: CarFuelTypeCreateWithoutCarSpecsInput
  update: CarFuelTypeUpdateWithoutCarSpecsDataInput
  upsert: CarFuelTypeUpsertWithoutCarSpecsInput
  delete: Boolean
  disconnect: Boolean
  connect: CarFuelTypeWhereUniqueInput
}

input CarFuelTypeUpdateWithoutCarSpecsDataInput {
  name: String
}

input CarFuelTypeUpsertWithoutCarSpecsInput {
  update: CarFuelTypeUpdateWithoutCarSpecsDataInput!
  create: CarFuelTypeCreateWithoutCarSpecsInput!
}

input CarFuelTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  carSpecs_every: CarSpecWhereInput
  carSpecs_some: CarSpecWhereInput
  carSpecs_none: CarSpecWhereInput
  AND: [CarFuelTypeWhereInput!]
  OR: [CarFuelTypeWhereInput!]
  NOT: [CarFuelTypeWhereInput!]
}

input CarFuelTypeWhereUniqueInput {
  id: ID
}

type CarMake {
  id: ID!
  name: String!
  models(where: CarModelWhereInput, orderBy: CarModelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarModel!]
}

type CarMakeConnection {
  pageInfo: PageInfo!
  edges: [CarMakeEdge]!
  aggregate: AggregateCarMake!
}

input CarMakeCreateInput {
  name: String!
  models: CarModelCreateManyWithoutMakeInput
}

input CarMakeCreateOneWithoutModelsInput {
  create: CarMakeCreateWithoutModelsInput
  connect: CarMakeWhereUniqueInput
}

input CarMakeCreateWithoutModelsInput {
  name: String!
}

type CarMakeEdge {
  node: CarMake!
  cursor: String!
}

enum CarMakeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarMakePreviousValues {
  id: ID!
  name: String!
}

type CarMakeSubscriptionPayload {
  mutation: MutationType!
  node: CarMake
  updatedFields: [String!]
  previousValues: CarMakePreviousValues
}

input CarMakeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarMakeWhereInput
  AND: [CarMakeSubscriptionWhereInput!]
  OR: [CarMakeSubscriptionWhereInput!]
  NOT: [CarMakeSubscriptionWhereInput!]
}

input CarMakeUpdateInput {
  name: String
  models: CarModelUpdateManyWithoutMakeInput
}

input CarMakeUpdateManyMutationInput {
  name: String
}

input CarMakeUpdateOneRequiredWithoutModelsInput {
  create: CarMakeCreateWithoutModelsInput
  update: CarMakeUpdateWithoutModelsDataInput
  upsert: CarMakeUpsertWithoutModelsInput
  connect: CarMakeWhereUniqueInput
}

input CarMakeUpdateWithoutModelsDataInput {
  name: String
}

input CarMakeUpsertWithoutModelsInput {
  update: CarMakeUpdateWithoutModelsDataInput!
  create: CarMakeCreateWithoutModelsInput!
}

input CarMakeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  models_every: CarModelWhereInput
  models_some: CarModelWhereInput
  models_none: CarModelWhereInput
  AND: [CarMakeWhereInput!]
  OR: [CarMakeWhereInput!]
  NOT: [CarMakeWhereInput!]
}

input CarMakeWhereUniqueInput {
  id: ID
  name: String
}

type CarModel {
  id: ID!
  name: String!
  make: CarMake!
  trims(where: CarTrimWhereInput, orderBy: CarTrimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarTrim!]
}

type CarModelConnection {
  pageInfo: PageInfo!
  edges: [CarModelEdge]!
  aggregate: AggregateCarModel!
}

input CarModelCreateInput {
  name: String!
  make: CarMakeCreateOneWithoutModelsInput!
  trims: CarTrimCreateManyWithoutModelInput
}

input CarModelCreateManyWithoutMakeInput {
  create: [CarModelCreateWithoutMakeInput!]
  connect: [CarModelWhereUniqueInput!]
}

input CarModelCreateOneWithoutTrimsInput {
  create: CarModelCreateWithoutTrimsInput
  connect: CarModelWhereUniqueInput
}

input CarModelCreateWithoutMakeInput {
  name: String!
  trims: CarTrimCreateManyWithoutModelInput
}

input CarModelCreateWithoutTrimsInput {
  name: String!
  make: CarMakeCreateOneWithoutModelsInput!
}

type CarModelEdge {
  node: CarModel!
  cursor: String!
}

enum CarModelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarModelPreviousValues {
  id: ID!
  name: String!
}

type CarModelSubscriptionPayload {
  mutation: MutationType!
  node: CarModel
  updatedFields: [String!]
  previousValues: CarModelPreviousValues
}

input CarModelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarModelWhereInput
  AND: [CarModelSubscriptionWhereInput!]
  OR: [CarModelSubscriptionWhereInput!]
  NOT: [CarModelSubscriptionWhereInput!]
}

input CarModelUpdateInput {
  name: String
  make: CarMakeUpdateOneRequiredWithoutModelsInput
  trims: CarTrimUpdateManyWithoutModelInput
}

input CarModelUpdateManyMutationInput {
  name: String
}

input CarModelUpdateManyWithoutMakeInput {
  create: [CarModelCreateWithoutMakeInput!]
  delete: [CarModelWhereUniqueInput!]
  connect: [CarModelWhereUniqueInput!]
  disconnect: [CarModelWhereUniqueInput!]
  update: [CarModelUpdateWithWhereUniqueWithoutMakeInput!]
  upsert: [CarModelUpsertWithWhereUniqueWithoutMakeInput!]
}

input CarModelUpdateOneRequiredWithoutTrimsInput {
  create: CarModelCreateWithoutTrimsInput
  update: CarModelUpdateWithoutTrimsDataInput
  upsert: CarModelUpsertWithoutTrimsInput
  connect: CarModelWhereUniqueInput
}

input CarModelUpdateWithoutMakeDataInput {
  name: String
  trims: CarTrimUpdateManyWithoutModelInput
}

input CarModelUpdateWithoutTrimsDataInput {
  name: String
  make: CarMakeUpdateOneRequiredWithoutModelsInput
}

input CarModelUpdateWithWhereUniqueWithoutMakeInput {
  where: CarModelWhereUniqueInput!
  data: CarModelUpdateWithoutMakeDataInput!
}

input CarModelUpsertWithoutTrimsInput {
  update: CarModelUpdateWithoutTrimsDataInput!
  create: CarModelCreateWithoutTrimsInput!
}

input CarModelUpsertWithWhereUniqueWithoutMakeInput {
  where: CarModelWhereUniqueInput!
  update: CarModelUpdateWithoutMakeDataInput!
  create: CarModelCreateWithoutMakeInput!
}

input CarModelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  make: CarMakeWhereInput
  trims_every: CarTrimWhereInput
  trims_some: CarTrimWhereInput
  trims_none: CarTrimWhereInput
  AND: [CarModelWhereInput!]
  OR: [CarModelWhereInput!]
  NOT: [CarModelWhereInput!]
}

input CarModelWhereUniqueInput {
  id: ID
}

type CarSpec {
  id: ID!
  trim: CarTrim
  body_type: CarBodyType
  fuel_type: CarFuelType
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

type CarSpecConnection {
  pageInfo: PageInfo!
  edges: [CarSpecEdge]!
  aggregate: AggregateCarSpec!
}

input CarSpecCreateInput {
  trim: CarTrimCreateOneWithoutCarSpecsInput
  body_type: CarBodyTypeCreateOneWithoutCarSpecsInput
  fuel_type: CarFuelTypeCreateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecCreateManyWithoutBody_typeInput {
  create: [CarSpecCreateWithoutBody_typeInput!]
  connect: [CarSpecWhereUniqueInput!]
}

input CarSpecCreateManyWithoutFuel_typeInput {
  create: [CarSpecCreateWithoutFuel_typeInput!]
  connect: [CarSpecWhereUniqueInput!]
}

input CarSpecCreateManyWithoutTrimInput {
  create: [CarSpecCreateWithoutTrimInput!]
  connect: [CarSpecWhereUniqueInput!]
}

input CarSpecCreateWithoutBody_typeInput {
  trim: CarTrimCreateOneWithoutCarSpecsInput
  fuel_type: CarFuelTypeCreateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecCreateWithoutFuel_typeInput {
  trim: CarTrimCreateOneWithoutCarSpecsInput
  body_type: CarBodyTypeCreateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecCreateWithoutTrimInput {
  body_type: CarBodyTypeCreateOneWithoutCarSpecsInput
  fuel_type: CarFuelTypeCreateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

type CarSpecEdge {
  node: CarSpec!
  cursor: String!
}

enum CarSpecOrderByInput {
  id_ASC
  id_DESC
  year_from_ASC
  year_from_DESC
  year_to_ASC
  year_to_DESC
  zero_to_sixty_ASC
  zero_to_sixty_DESC
  no_of_doors_ASC
  no_of_doors_DESC
  no_of_seats_ASC
  no_of_seats_DESC
  power_ps_ASC
  power_ps_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarSpecPreviousValues {
  id: ID!
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

type CarSpecSubscriptionPayload {
  mutation: MutationType!
  node: CarSpec
  updatedFields: [String!]
  previousValues: CarSpecPreviousValues
}

input CarSpecSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarSpecWhereInput
  AND: [CarSpecSubscriptionWhereInput!]
  OR: [CarSpecSubscriptionWhereInput!]
  NOT: [CarSpecSubscriptionWhereInput!]
}

input CarSpecUpdateInput {
  trim: CarTrimUpdateOneWithoutCarSpecsInput
  body_type: CarBodyTypeUpdateOneWithoutCarSpecsInput
  fuel_type: CarFuelTypeUpdateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecUpdateManyMutationInput {
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecUpdateManyWithoutBody_typeInput {
  create: [CarSpecCreateWithoutBody_typeInput!]
  delete: [CarSpecWhereUniqueInput!]
  connect: [CarSpecWhereUniqueInput!]
  disconnect: [CarSpecWhereUniqueInput!]
  update: [CarSpecUpdateWithWhereUniqueWithoutBody_typeInput!]
  upsert: [CarSpecUpsertWithWhereUniqueWithoutBody_typeInput!]
}

input CarSpecUpdateManyWithoutFuel_typeInput {
  create: [CarSpecCreateWithoutFuel_typeInput!]
  delete: [CarSpecWhereUniqueInput!]
  connect: [CarSpecWhereUniqueInput!]
  disconnect: [CarSpecWhereUniqueInput!]
  update: [CarSpecUpdateWithWhereUniqueWithoutFuel_typeInput!]
  upsert: [CarSpecUpsertWithWhereUniqueWithoutFuel_typeInput!]
}

input CarSpecUpdateManyWithoutTrimInput {
  create: [CarSpecCreateWithoutTrimInput!]
  delete: [CarSpecWhereUniqueInput!]
  connect: [CarSpecWhereUniqueInput!]
  disconnect: [CarSpecWhereUniqueInput!]
  update: [CarSpecUpdateWithWhereUniqueWithoutTrimInput!]
  upsert: [CarSpecUpsertWithWhereUniqueWithoutTrimInput!]
}

input CarSpecUpdateWithoutBody_typeDataInput {
  trim: CarTrimUpdateOneWithoutCarSpecsInput
  fuel_type: CarFuelTypeUpdateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecUpdateWithoutFuel_typeDataInput {
  trim: CarTrimUpdateOneWithoutCarSpecsInput
  body_type: CarBodyTypeUpdateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecUpdateWithoutTrimDataInput {
  body_type: CarBodyTypeUpdateOneWithoutCarSpecsInput
  fuel_type: CarFuelTypeUpdateOneWithoutCarSpecsInput
  year_from: Int
  year_to: Int
  zero_to_sixty: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarSpecUpdateWithWhereUniqueWithoutBody_typeInput {
  where: CarSpecWhereUniqueInput!
  data: CarSpecUpdateWithoutBody_typeDataInput!
}

input CarSpecUpdateWithWhereUniqueWithoutFuel_typeInput {
  where: CarSpecWhereUniqueInput!
  data: CarSpecUpdateWithoutFuel_typeDataInput!
}

input CarSpecUpdateWithWhereUniqueWithoutTrimInput {
  where: CarSpecWhereUniqueInput!
  data: CarSpecUpdateWithoutTrimDataInput!
}

input CarSpecUpsertWithWhereUniqueWithoutBody_typeInput {
  where: CarSpecWhereUniqueInput!
  update: CarSpecUpdateWithoutBody_typeDataInput!
  create: CarSpecCreateWithoutBody_typeInput!
}

input CarSpecUpsertWithWhereUniqueWithoutFuel_typeInput {
  where: CarSpecWhereUniqueInput!
  update: CarSpecUpdateWithoutFuel_typeDataInput!
  create: CarSpecCreateWithoutFuel_typeInput!
}

input CarSpecUpsertWithWhereUniqueWithoutTrimInput {
  where: CarSpecWhereUniqueInput!
  update: CarSpecUpdateWithoutTrimDataInput!
  create: CarSpecCreateWithoutTrimInput!
}

input CarSpecWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  trim: CarTrimWhereInput
  body_type: CarBodyTypeWhereInput
  fuel_type: CarFuelTypeWhereInput
  year_from: Int
  year_from_not: Int
  year_from_in: [Int!]
  year_from_not_in: [Int!]
  year_from_lt: Int
  year_from_lte: Int
  year_from_gt: Int
  year_from_gte: Int
  year_to: Int
  year_to_not: Int
  year_to_in: [Int!]
  year_to_not_in: [Int!]
  year_to_lt: Int
  year_to_lte: Int
  year_to_gt: Int
  year_to_gte: Int
  zero_to_sixty: Float
  zero_to_sixty_not: Float
  zero_to_sixty_in: [Float!]
  zero_to_sixty_not_in: [Float!]
  zero_to_sixty_lt: Float
  zero_to_sixty_lte: Float
  zero_to_sixty_gt: Float
  zero_to_sixty_gte: Float
  no_of_doors: Int
  no_of_doors_not: Int
  no_of_doors_in: [Int!]
  no_of_doors_not_in: [Int!]
  no_of_doors_lt: Int
  no_of_doors_lte: Int
  no_of_doors_gt: Int
  no_of_doors_gte: Int
  no_of_seats: Int
  no_of_seats_not: Int
  no_of_seats_in: [Int!]
  no_of_seats_not_in: [Int!]
  no_of_seats_lt: Int
  no_of_seats_lte: Int
  no_of_seats_gt: Int
  no_of_seats_gte: Int
  power_ps: Int
  power_ps_not: Int
  power_ps_in: [Int!]
  power_ps_not_in: [Int!]
  power_ps_lt: Int
  power_ps_lte: Int
  power_ps_gt: Int
  power_ps_gte: Int
  AND: [CarSpecWhereInput!]
  OR: [CarSpecWhereInput!]
  NOT: [CarSpecWhereInput!]
}

input CarSpecWhereUniqueInput {
  id: ID
}

type CarTrim {
  id: ID!
  name: String!
  model: CarModel!
  carSpecs(where: CarSpecWhereInput, orderBy: CarSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarSpec!]
}

type CarTrimConnection {
  pageInfo: PageInfo!
  edges: [CarTrimEdge]!
  aggregate: AggregateCarTrim!
}

input CarTrimCreateInput {
  name: String!
  model: CarModelCreateOneWithoutTrimsInput!
  carSpecs: CarSpecCreateManyWithoutTrimInput
}

input CarTrimCreateManyWithoutModelInput {
  create: [CarTrimCreateWithoutModelInput!]
  connect: [CarTrimWhereUniqueInput!]
}

input CarTrimCreateOneWithoutCarSpecsInput {
  create: CarTrimCreateWithoutCarSpecsInput
  connect: CarTrimWhereUniqueInput
}

input CarTrimCreateWithoutCarSpecsInput {
  name: String!
  model: CarModelCreateOneWithoutTrimsInput!
}

input CarTrimCreateWithoutModelInput {
  name: String!
  carSpecs: CarSpecCreateManyWithoutTrimInput
}

type CarTrimEdge {
  node: CarTrim!
  cursor: String!
}

enum CarTrimOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarTrimPreviousValues {
  id: ID!
  name: String!
}

type CarTrimSubscriptionPayload {
  mutation: MutationType!
  node: CarTrim
  updatedFields: [String!]
  previousValues: CarTrimPreviousValues
}

input CarTrimSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarTrimWhereInput
  AND: [CarTrimSubscriptionWhereInput!]
  OR: [CarTrimSubscriptionWhereInput!]
  NOT: [CarTrimSubscriptionWhereInput!]
}

input CarTrimUpdateInput {
  name: String
  model: CarModelUpdateOneRequiredWithoutTrimsInput
  carSpecs: CarSpecUpdateManyWithoutTrimInput
}

input CarTrimUpdateManyMutationInput {
  name: String
}

input CarTrimUpdateManyWithoutModelInput {
  create: [CarTrimCreateWithoutModelInput!]
  delete: [CarTrimWhereUniqueInput!]
  connect: [CarTrimWhereUniqueInput!]
  disconnect: [CarTrimWhereUniqueInput!]
  update: [CarTrimUpdateWithWhereUniqueWithoutModelInput!]
  upsert: [CarTrimUpsertWithWhereUniqueWithoutModelInput!]
}

input CarTrimUpdateOneWithoutCarSpecsInput {
  create: CarTrimCreateWithoutCarSpecsInput
  update: CarTrimUpdateWithoutCarSpecsDataInput
  upsert: CarTrimUpsertWithoutCarSpecsInput
  delete: Boolean
  disconnect: Boolean
  connect: CarTrimWhereUniqueInput
}

input CarTrimUpdateWithoutCarSpecsDataInput {
  name: String
  model: CarModelUpdateOneRequiredWithoutTrimsInput
}

input CarTrimUpdateWithoutModelDataInput {
  name: String
  carSpecs: CarSpecUpdateManyWithoutTrimInput
}

input CarTrimUpdateWithWhereUniqueWithoutModelInput {
  where: CarTrimWhereUniqueInput!
  data: CarTrimUpdateWithoutModelDataInput!
}

input CarTrimUpsertWithoutCarSpecsInput {
  update: CarTrimUpdateWithoutCarSpecsDataInput!
  create: CarTrimCreateWithoutCarSpecsInput!
}

input CarTrimUpsertWithWhereUniqueWithoutModelInput {
  where: CarTrimWhereUniqueInput!
  update: CarTrimUpdateWithoutModelDataInput!
  create: CarTrimCreateWithoutModelInput!
}

input CarTrimWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  model: CarModelWhereInput
  carSpecs_every: CarSpecWhereInput
  carSpecs_some: CarSpecWhereInput
  carSpecs_none: CarSpecWhereInput
  AND: [CarTrimWhereInput!]
  OR: [CarTrimWhereInput!]
  NOT: [CarTrimWhereInput!]
}

input CarTrimWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCarBodyType(data: CarBodyTypeCreateInput!): CarBodyType!
  updateCarBodyType(data: CarBodyTypeUpdateInput!, where: CarBodyTypeWhereUniqueInput!): CarBodyType
  updateManyCarBodyTypes(data: CarBodyTypeUpdateManyMutationInput!, where: CarBodyTypeWhereInput): BatchPayload!
  upsertCarBodyType(where: CarBodyTypeWhereUniqueInput!, create: CarBodyTypeCreateInput!, update: CarBodyTypeUpdateInput!): CarBodyType!
  deleteCarBodyType(where: CarBodyTypeWhereUniqueInput!): CarBodyType
  deleteManyCarBodyTypes(where: CarBodyTypeWhereInput): BatchPayload!
  createCarFuelType(data: CarFuelTypeCreateInput!): CarFuelType!
  updateCarFuelType(data: CarFuelTypeUpdateInput!, where: CarFuelTypeWhereUniqueInput!): CarFuelType
  updateManyCarFuelTypes(data: CarFuelTypeUpdateManyMutationInput!, where: CarFuelTypeWhereInput): BatchPayload!
  upsertCarFuelType(where: CarFuelTypeWhereUniqueInput!, create: CarFuelTypeCreateInput!, update: CarFuelTypeUpdateInput!): CarFuelType!
  deleteCarFuelType(where: CarFuelTypeWhereUniqueInput!): CarFuelType
  deleteManyCarFuelTypes(where: CarFuelTypeWhereInput): BatchPayload!
  createCarMake(data: CarMakeCreateInput!): CarMake!
  updateCarMake(data: CarMakeUpdateInput!, where: CarMakeWhereUniqueInput!): CarMake
  updateManyCarMakes(data: CarMakeUpdateManyMutationInput!, where: CarMakeWhereInput): BatchPayload!
  upsertCarMake(where: CarMakeWhereUniqueInput!, create: CarMakeCreateInput!, update: CarMakeUpdateInput!): CarMake!
  deleteCarMake(where: CarMakeWhereUniqueInput!): CarMake
  deleteManyCarMakes(where: CarMakeWhereInput): BatchPayload!
  createCarModel(data: CarModelCreateInput!): CarModel!
  updateCarModel(data: CarModelUpdateInput!, where: CarModelWhereUniqueInput!): CarModel
  updateManyCarModels(data: CarModelUpdateManyMutationInput!, where: CarModelWhereInput): BatchPayload!
  upsertCarModel(where: CarModelWhereUniqueInput!, create: CarModelCreateInput!, update: CarModelUpdateInput!): CarModel!
  deleteCarModel(where: CarModelWhereUniqueInput!): CarModel
  deleteManyCarModels(where: CarModelWhereInput): BatchPayload!
  createCarSpec(data: CarSpecCreateInput!): CarSpec!
  updateCarSpec(data: CarSpecUpdateInput!, where: CarSpecWhereUniqueInput!): CarSpec
  updateManyCarSpecs(data: CarSpecUpdateManyMutationInput!, where: CarSpecWhereInput): BatchPayload!
  upsertCarSpec(where: CarSpecWhereUniqueInput!, create: CarSpecCreateInput!, update: CarSpecUpdateInput!): CarSpec!
  deleteCarSpec(where: CarSpecWhereUniqueInput!): CarSpec
  deleteManyCarSpecs(where: CarSpecWhereInput): BatchPayload!
  createCarTrim(data: CarTrimCreateInput!): CarTrim!
  updateCarTrim(data: CarTrimUpdateInput!, where: CarTrimWhereUniqueInput!): CarTrim
  updateManyCarTrims(data: CarTrimUpdateManyMutationInput!, where: CarTrimWhereInput): BatchPayload!
  upsertCarTrim(where: CarTrimWhereUniqueInput!, create: CarTrimCreateInput!, update: CarTrimUpdateInput!): CarTrim!
  deleteCarTrim(where: CarTrimWhereUniqueInput!): CarTrim
  deleteManyCarTrims(where: CarTrimWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  published: Boolean!
  author: User
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  published: Boolean
  author: UserCreateOneInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  published: Boolean!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  published: Boolean
  author: UserUpdateOneInput
}

input PostUpdateManyMutationInput {
  title: String
  published: Boolean
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  carBodyType(where: CarBodyTypeWhereUniqueInput!): CarBodyType
  carBodyTypes(where: CarBodyTypeWhereInput, orderBy: CarBodyTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarBodyType]!
  carBodyTypesConnection(where: CarBodyTypeWhereInput, orderBy: CarBodyTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarBodyTypeConnection!
  carFuelType(where: CarFuelTypeWhereUniqueInput!): CarFuelType
  carFuelTypes(where: CarFuelTypeWhereInput, orderBy: CarFuelTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarFuelType]!
  carFuelTypesConnection(where: CarFuelTypeWhereInput, orderBy: CarFuelTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarFuelTypeConnection!
  carMake(where: CarMakeWhereUniqueInput!): CarMake
  carMakes(where: CarMakeWhereInput, orderBy: CarMakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarMake]!
  carMakesConnection(where: CarMakeWhereInput, orderBy: CarMakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarMakeConnection!
  carModel(where: CarModelWhereUniqueInput!): CarModel
  carModels(where: CarModelWhereInput, orderBy: CarModelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarModel]!
  carModelsConnection(where: CarModelWhereInput, orderBy: CarModelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarModelConnection!
  carSpec(where: CarSpecWhereUniqueInput!): CarSpec
  carSpecs(where: CarSpecWhereInput, orderBy: CarSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarSpec]!
  carSpecsConnection(where: CarSpecWhereInput, orderBy: CarSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarSpecConnection!
  carTrim(where: CarTrimWhereUniqueInput!): CarTrim
  carTrims(where: CarTrimWhereInput, orderBy: CarTrimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarTrim]!
  carTrimsConnection(where: CarTrimWhereInput, orderBy: CarTrimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarTrimConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  carBodyType(where: CarBodyTypeSubscriptionWhereInput): CarBodyTypeSubscriptionPayload
  carFuelType(where: CarFuelTypeSubscriptionWhereInput): CarFuelTypeSubscriptionPayload
  carMake(where: CarMakeSubscriptionWhereInput): CarMakeSubscriptionPayload
  carModel(where: CarModelSubscriptionWhereInput): CarModelSubscriptionPayload
  carSpec(where: CarSpecSubscriptionWhereInput): CarSpecSubscriptionPayload
  carTrim(where: CarTrimSubscriptionWhereInput): CarTrimSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    