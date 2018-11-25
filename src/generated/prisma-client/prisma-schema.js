module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCar {
  count: Int!
}

type AggregateCarMake {
  count: Int!
}

type AggregateCarModel {
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

type Car {
  id: ID!
  trim: CarTrim
  zero_to_60: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

type CarConnection {
  pageInfo: PageInfo!
  edges: [CarEdge]!
  aggregate: AggregateCar!
}

input CarCreateInput {
  trim: CarTrimCreateOneWithoutCarsInput
  zero_to_60: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarCreateManyWithoutTrimInput {
  create: [CarCreateWithoutTrimInput!]
  connect: [CarWhereUniqueInput!]
}

input CarCreateWithoutTrimInput {
  zero_to_60: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

type CarEdge {
  node: Car!
  cursor: String!
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

enum CarOrderByInput {
  id_ASC
  id_DESC
  zero_to_60_ASC
  zero_to_60_DESC
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

type CarPreviousValues {
  id: ID!
  zero_to_60: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

type CarSubscriptionPayload {
  mutation: MutationType!
  node: Car
  updatedFields: [String!]
  previousValues: CarPreviousValues
}

input CarSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarWhereInput
  AND: [CarSubscriptionWhereInput!]
  OR: [CarSubscriptionWhereInput!]
  NOT: [CarSubscriptionWhereInput!]
}

type CarTrim {
  id: ID!
  name: String!
  model: CarModel!
  cars(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Car!]
}

type CarTrimConnection {
  pageInfo: PageInfo!
  edges: [CarTrimEdge]!
  aggregate: AggregateCarTrim!
}

input CarTrimCreateInput {
  name: String!
  model: CarModelCreateOneWithoutTrimsInput!
  cars: CarCreateManyWithoutTrimInput
}

input CarTrimCreateManyWithoutModelInput {
  create: [CarTrimCreateWithoutModelInput!]
  connect: [CarTrimWhereUniqueInput!]
}

input CarTrimCreateOneWithoutCarsInput {
  create: CarTrimCreateWithoutCarsInput
  connect: CarTrimWhereUniqueInput
}

input CarTrimCreateWithoutCarsInput {
  name: String!
  model: CarModelCreateOneWithoutTrimsInput!
}

input CarTrimCreateWithoutModelInput {
  name: String!
  cars: CarCreateManyWithoutTrimInput
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
  cars: CarUpdateManyWithoutTrimInput
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

input CarTrimUpdateOneWithoutCarsInput {
  create: CarTrimCreateWithoutCarsInput
  update: CarTrimUpdateWithoutCarsDataInput
  upsert: CarTrimUpsertWithoutCarsInput
  delete: Boolean
  disconnect: Boolean
  connect: CarTrimWhereUniqueInput
}

input CarTrimUpdateWithoutCarsDataInput {
  name: String
  model: CarModelUpdateOneRequiredWithoutTrimsInput
}

input CarTrimUpdateWithoutModelDataInput {
  name: String
  cars: CarUpdateManyWithoutTrimInput
}

input CarTrimUpdateWithWhereUniqueWithoutModelInput {
  where: CarTrimWhereUniqueInput!
  data: CarTrimUpdateWithoutModelDataInput!
}

input CarTrimUpsertWithoutCarsInput {
  update: CarTrimUpdateWithoutCarsDataInput!
  create: CarTrimCreateWithoutCarsInput!
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
  cars_every: CarWhereInput
  cars_some: CarWhereInput
  cars_none: CarWhereInput
  AND: [CarTrimWhereInput!]
  OR: [CarTrimWhereInput!]
  NOT: [CarTrimWhereInput!]
}

input CarTrimWhereUniqueInput {
  id: ID
}

input CarUpdateInput {
  trim: CarTrimUpdateOneWithoutCarsInput
  zero_to_60: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarUpdateManyMutationInput {
  zero_to_60: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarUpdateManyWithoutTrimInput {
  create: [CarCreateWithoutTrimInput!]
  delete: [CarWhereUniqueInput!]
  connect: [CarWhereUniqueInput!]
  disconnect: [CarWhereUniqueInput!]
  update: [CarUpdateWithWhereUniqueWithoutTrimInput!]
  upsert: [CarUpsertWithWhereUniqueWithoutTrimInput!]
}

input CarUpdateWithoutTrimDataInput {
  zero_to_60: Float
  no_of_doors: Int
  no_of_seats: Int
  power_ps: Int
}

input CarUpdateWithWhereUniqueWithoutTrimInput {
  where: CarWhereUniqueInput!
  data: CarUpdateWithoutTrimDataInput!
}

input CarUpsertWithWhereUniqueWithoutTrimInput {
  where: CarWhereUniqueInput!
  update: CarUpdateWithoutTrimDataInput!
  create: CarCreateWithoutTrimInput!
}

input CarWhereInput {
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
  zero_to_60: Float
  zero_to_60_not: Float
  zero_to_60_in: [Float!]
  zero_to_60_not_in: [Float!]
  zero_to_60_lt: Float
  zero_to_60_lte: Float
  zero_to_60_gt: Float
  zero_to_60_gte: Float
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
  AND: [CarWhereInput!]
  OR: [CarWhereInput!]
  NOT: [CarWhereInput!]
}

input CarWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCar(data: CarCreateInput!): Car!
  updateCar(data: CarUpdateInput!, where: CarWhereUniqueInput!): Car
  updateManyCars(data: CarUpdateManyMutationInput!, where: CarWhereInput): BatchPayload!
  upsertCar(where: CarWhereUniqueInput!, create: CarCreateInput!, update: CarUpdateInput!): Car!
  deleteCar(where: CarWhereUniqueInput!): Car
  deleteManyCars(where: CarWhereInput): BatchPayload!
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
  car(where: CarWhereUniqueInput!): Car
  cars(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Car]!
  carsConnection(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarConnection!
  carMake(where: CarMakeWhereUniqueInput!): CarMake
  carMakes(where: CarMakeWhereInput, orderBy: CarMakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarMake]!
  carMakesConnection(where: CarMakeWhereInput, orderBy: CarMakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarMakeConnection!
  carModel(where: CarModelWhereUniqueInput!): CarModel
  carModels(where: CarModelWhereInput, orderBy: CarModelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CarModel]!
  carModelsConnection(where: CarModelWhereInput, orderBy: CarModelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarModelConnection!
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
  car(where: CarSubscriptionWhereInput): CarSubscriptionPayload
  carMake(where: CarMakeSubscriptionWhereInput): CarMakeSubscriptionPayload
  carModel(where: CarModelSubscriptionWhereInput): CarModelSubscriptionPayload
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
    