// Code generated by Prisma (prisma@1.28.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  admin: (where?: AdminWhereInput) => Promise<boolean>;
  customer: (where?: CustomerWhereInput) => Promise<boolean>;
  product: (where?: ProductWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  admin: (where: AdminWhereUniqueInput) => AdminPromise;
  admins: (
    args?: {
      where?: AdminWhereInput;
      orderBy?: AdminOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Admin>;
  adminsConnection: (
    args?: {
      where?: AdminWhereInput;
      orderBy?: AdminOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AdminConnectionPromise;
  customer: (where: CustomerWhereUniqueInput) => CustomerPromise;
  customers: (
    args?: {
      where?: CustomerWhereInput;
      orderBy?: CustomerOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Customer>;
  customersConnection: (
    args?: {
      where?: CustomerWhereInput;
      orderBy?: CustomerOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CustomerConnectionPromise;
  product: (where: ProductWhereUniqueInput) => ProductPromise;
  products: (
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Product>;
  productsConnection: (
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProductConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAdmin: (data: AdminCreateInput) => AdminPromise;
  updateAdmin: (
    args: { data: AdminUpdateInput; where: AdminWhereUniqueInput }
  ) => AdminPromise;
  updateManyAdmins: (
    args: { data: AdminUpdateManyMutationInput; where?: AdminWhereInput }
  ) => BatchPayloadPromise;
  upsertAdmin: (
    args: {
      where: AdminWhereUniqueInput;
      create: AdminCreateInput;
      update: AdminUpdateInput;
    }
  ) => AdminPromise;
  deleteAdmin: (where: AdminWhereUniqueInput) => AdminPromise;
  deleteManyAdmins: (where?: AdminWhereInput) => BatchPayloadPromise;
  createCustomer: (data: CustomerCreateInput) => CustomerPromise;
  updateCustomer: (
    args: { data: CustomerUpdateInput; where: CustomerWhereUniqueInput }
  ) => CustomerPromise;
  updateManyCustomers: (
    args: { data: CustomerUpdateManyMutationInput; where?: CustomerWhereInput }
  ) => BatchPayloadPromise;
  upsertCustomer: (
    args: {
      where: CustomerWhereUniqueInput;
      create: CustomerCreateInput;
      update: CustomerUpdateInput;
    }
  ) => CustomerPromise;
  deleteCustomer: (where: CustomerWhereUniqueInput) => CustomerPromise;
  deleteManyCustomers: (where?: CustomerWhereInput) => BatchPayloadPromise;
  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (
    args: { data: ProductUpdateInput; where: ProductWhereUniqueInput }
  ) => ProductPromise;
  updateManyProducts: (
    args: { data: ProductUpdateManyMutationInput; where?: ProductWhereInput }
  ) => BatchPayloadPromise;
  upsertProduct: (
    args: {
      where: ProductWhereUniqueInput;
      create: ProductCreateInput;
      update: ProductUpdateInput;
    }
  ) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  admin: (
    where?: AdminSubscriptionWhereInput
  ) => AdminSubscriptionPayloadSubscription;
  customer: (
    where?: CustomerSubscriptionWhereInput
  ) => CustomerSubscriptionPayloadSubscription;
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AdminOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "desc_ASC"
  | "desc_DESC"
  | "photo_ASC"
  | "photo_DESC"
  | "Price_ASC"
  | "Price_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type CustomerOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "address_ASC"
  | "address_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AdminWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  username?: String;
}>;

export interface AdminWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  AND?: AdminWhereInput[] | AdminWhereInput;
  OR?: AdminWhereInput[] | AdminWhereInput;
  NOT?: AdminWhereInput[] | AdminWhereInput;
}

export type CustomerWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface ProductWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  desc?: String;
  desc_not?: String;
  desc_in?: String[] | String;
  desc_not_in?: String[] | String;
  desc_lt?: String;
  desc_lte?: String;
  desc_gt?: String;
  desc_gte?: String;
  desc_contains?: String;
  desc_not_contains?: String;
  desc_starts_with?: String;
  desc_not_starts_with?: String;
  desc_ends_with?: String;
  desc_not_ends_with?: String;
  photo?: String;
  photo_not?: String;
  photo_in?: String[] | String;
  photo_not_in?: String[] | String;
  photo_lt?: String;
  photo_lte?: String;
  photo_gt?: String;
  photo_gte?: String;
  photo_contains?: String;
  photo_not_contains?: String;
  photo_starts_with?: String;
  photo_not_starts_with?: String;
  photo_ends_with?: String;
  photo_not_ends_with?: String;
  Price?: String;
  Price_not?: String;
  Price_in?: String[] | String;
  Price_not_in?: String[] | String;
  Price_lt?: String;
  Price_lte?: String;
  Price_gt?: String;
  Price_gte?: String;
  Price_contains?: String;
  Price_not_contains?: String;
  Price_starts_with?: String;
  Price_not_starts_with?: String;
  Price_ends_with?: String;
  Price_not_ends_with?: String;
  AND?: ProductWhereInput[] | ProductWhereInput;
  OR?: ProductWhereInput[] | ProductWhereInput;
  NOT?: ProductWhereInput[] | ProductWhereInput;
}

export interface CustomerWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  address?: String;
  address_not?: String;
  address_in?: String[] | String;
  address_not_in?: String[] | String;
  address_lt?: String;
  address_lte?: String;
  address_gt?: String;
  address_gte?: String;
  address_contains?: String;
  address_not_contains?: String;
  address_starts_with?: String;
  address_not_starts_with?: String;
  address_ends_with?: String;
  address_not_ends_with?: String;
  phone?: String;
  phone_not?: String;
  phone_in?: String[] | String;
  phone_not_in?: String[] | String;
  phone_lt?: String;
  phone_lte?: String;
  phone_gt?: String;
  phone_gte?: String;
  phone_contains?: String;
  phone_not_contains?: String;
  phone_starts_with?: String;
  phone_not_starts_with?: String;
  phone_ends_with?: String;
  phone_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  productsByCustomer_every?: ProductWhereInput;
  productsByCustomer_some?: ProductWhereInput;
  productsByCustomer_none?: ProductWhereInput;
  AND?: CustomerWhereInput[] | CustomerWhereInput;
  OR?: CustomerWhereInput[] | CustomerWhereInput;
  NOT?: CustomerWhereInput[] | CustomerWhereInput;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface AdminCreateInput {
  username: String;
  password: String;
}

export interface AdminUpdateInput {
  username?: String;
  password?: String;
}

export interface AdminUpdateManyMutationInput {
  username?: String;
  password?: String;
}

export interface CustomerCreateInput {
  email: String;
  firstName?: String;
  lastName?: String;
  address?: String;
  phone?: String;
  password: String;
  productsByCustomer?: ProductCreateManyInput;
}

export interface ProductCreateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput;
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
}

export interface ProductCreateInput {
  name?: String;
  desc?: String;
  photo?: String;
  Price?: String;
}

export interface CustomerUpdateInput {
  email?: String;
  firstName?: String;
  lastName?: String;
  address?: String;
  phone?: String;
  password?: String;
  productsByCustomer?: ProductUpdateManyInput;
}

export interface ProductUpdateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput;
  update?:
    | ProductUpdateWithWhereUniqueNestedInput[]
    | ProductUpdateWithWhereUniqueNestedInput;
  upsert?:
    | ProductUpsertWithWhereUniqueNestedInput[]
    | ProductUpsertWithWhereUniqueNestedInput;
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  set?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  deleteMany?: ProductScalarWhereInput[] | ProductScalarWhereInput;
  updateMany?:
    | ProductUpdateManyWithWhereNestedInput[]
    | ProductUpdateManyWithWhereNestedInput;
}

export interface ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput;
  data: ProductUpdateDataInput;
}

export interface ProductUpdateDataInput {
  name?: String;
  desc?: String;
  photo?: String;
  Price?: String;
}

export interface ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput;
  update: ProductUpdateDataInput;
  create: ProductCreateInput;
}

export interface ProductScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  desc?: String;
  desc_not?: String;
  desc_in?: String[] | String;
  desc_not_in?: String[] | String;
  desc_lt?: String;
  desc_lte?: String;
  desc_gt?: String;
  desc_gte?: String;
  desc_contains?: String;
  desc_not_contains?: String;
  desc_starts_with?: String;
  desc_not_starts_with?: String;
  desc_ends_with?: String;
  desc_not_ends_with?: String;
  photo?: String;
  photo_not?: String;
  photo_in?: String[] | String;
  photo_not_in?: String[] | String;
  photo_lt?: String;
  photo_lte?: String;
  photo_gt?: String;
  photo_gte?: String;
  photo_contains?: String;
  photo_not_contains?: String;
  photo_starts_with?: String;
  photo_not_starts_with?: String;
  photo_ends_with?: String;
  photo_not_ends_with?: String;
  Price?: String;
  Price_not?: String;
  Price_in?: String[] | String;
  Price_not_in?: String[] | String;
  Price_lt?: String;
  Price_lte?: String;
  Price_gt?: String;
  Price_gte?: String;
  Price_contains?: String;
  Price_not_contains?: String;
  Price_starts_with?: String;
  Price_not_starts_with?: String;
  Price_ends_with?: String;
  Price_not_ends_with?: String;
  AND?: ProductScalarWhereInput[] | ProductScalarWhereInput;
  OR?: ProductScalarWhereInput[] | ProductScalarWhereInput;
  NOT?: ProductScalarWhereInput[] | ProductScalarWhereInput;
}

export interface ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyDataInput;
}

export interface ProductUpdateManyDataInput {
  name?: String;
  desc?: String;
  photo?: String;
  Price?: String;
}

export interface CustomerUpdateManyMutationInput {
  email?: String;
  firstName?: String;
  lastName?: String;
  address?: String;
  phone?: String;
  password?: String;
}

export interface ProductUpdateInput {
  name?: String;
  desc?: String;
  photo?: String;
  Price?: String;
}

export interface ProductUpdateManyMutationInput {
  name?: String;
  desc?: String;
  photo?: String;
  Price?: String;
}

export interface AdminSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AdminWhereInput;
  AND?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput;
  OR?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput;
  NOT?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput;
}

export interface CustomerSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CustomerWhereInput;
  AND?: CustomerSubscriptionWhereInput[] | CustomerSubscriptionWhereInput;
  OR?: CustomerSubscriptionWhereInput[] | CustomerSubscriptionWhereInput;
  NOT?: CustomerSubscriptionWhereInput[] | CustomerSubscriptionWhereInput;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProductWhereInput;
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput;
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput;
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Admin {
  id: ID_Output;
  username: String;
  password: String;
}

export interface AdminPromise extends Promise<Admin>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
}

export interface AdminSubscription
  extends Promise<AsyncIterator<Admin>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface AdminConnection {
  pageInfo: PageInfo;
  edges: AdminEdge[];
}

export interface AdminConnectionPromise
  extends Promise<AdminConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AdminEdge>>() => T;
  aggregate: <T = AggregateAdminPromise>() => T;
}

export interface AdminConnectionSubscription
  extends Promise<AsyncIterator<AdminConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AdminEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAdminSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AdminEdge {
  node: Admin;
  cursor: String;
}

export interface AdminEdgePromise extends Promise<AdminEdge>, Fragmentable {
  node: <T = AdminPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AdminEdgeSubscription
  extends Promise<AsyncIterator<AdminEdge>>,
    Fragmentable {
  node: <T = AdminSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAdmin {
  count: Int;
}

export interface AggregateAdminPromise
  extends Promise<AggregateAdmin>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAdminSubscription
  extends Promise<AsyncIterator<AggregateAdmin>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Customer {
  id: ID_Output;
  email: String;
  firstName?: String;
  lastName?: String;
  address?: String;
  phone?: String;
  password: String;
}

export interface CustomerPromise extends Promise<Customer>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  address: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
  productsByCustomer: <T = FragmentableArray<Product>>(
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface CustomerSubscription
  extends Promise<AsyncIterator<Customer>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  productsByCustomer: <T = Promise<AsyncIterator<ProductSubscription>>>(
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Product {
  id: ID_Output;
  name?: String;
  desc?: String;
  photo?: String;
  Price?: String;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  desc: () => Promise<String>;
  photo: () => Promise<String>;
  Price: () => Promise<String>;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  desc: () => Promise<AsyncIterator<String>>;
  photo: () => Promise<AsyncIterator<String>>;
  Price: () => Promise<AsyncIterator<String>>;
}

export interface CustomerConnection {
  pageInfo: PageInfo;
  edges: CustomerEdge[];
}

export interface CustomerConnectionPromise
  extends Promise<CustomerConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CustomerEdge>>() => T;
  aggregate: <T = AggregateCustomerPromise>() => T;
}

export interface CustomerConnectionSubscription
  extends Promise<AsyncIterator<CustomerConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CustomerEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCustomerSubscription>() => T;
}

export interface CustomerEdge {
  node: Customer;
  cursor: String;
}

export interface CustomerEdgePromise
  extends Promise<CustomerEdge>,
    Fragmentable {
  node: <T = CustomerPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CustomerEdgeSubscription
  extends Promise<AsyncIterator<CustomerEdge>>,
    Fragmentable {
  node: <T = CustomerSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCustomer {
  count: Int;
}

export interface AggregateCustomerPromise
  extends Promise<AggregateCustomer>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCustomerSubscription
  extends Promise<AsyncIterator<AggregateCustomer>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AdminSubscriptionPayload {
  mutation: MutationType;
  node: Admin;
  updatedFields: String[];
  previousValues: AdminPreviousValues;
}

export interface AdminSubscriptionPayloadPromise
  extends Promise<AdminSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AdminPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AdminPreviousValuesPromise>() => T;
}

export interface AdminSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AdminSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AdminSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AdminPreviousValuesSubscription>() => T;
}

export interface AdminPreviousValues {
  id: ID_Output;
  username: String;
  password: String;
}

export interface AdminPreviousValuesPromise
  extends Promise<AdminPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
}

export interface AdminPreviousValuesSubscription
  extends Promise<AsyncIterator<AdminPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface CustomerSubscriptionPayload {
  mutation: MutationType;
  node: Customer;
  updatedFields: String[];
  previousValues: CustomerPreviousValues;
}

export interface CustomerSubscriptionPayloadPromise
  extends Promise<CustomerSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CustomerPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CustomerPreviousValuesPromise>() => T;
}

export interface CustomerSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CustomerSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CustomerSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CustomerPreviousValuesSubscription>() => T;
}

export interface CustomerPreviousValues {
  id: ID_Output;
  email: String;
  firstName?: String;
  lastName?: String;
  address?: String;
  phone?: String;
  password: String;
}

export interface CustomerPreviousValuesPromise
  extends Promise<CustomerPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  address: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
}

export interface CustomerPreviousValuesSubscription
  extends Promise<AsyncIterator<CustomerPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface ProductPreviousValues {
  id: ID_Output;
  name?: String;
  desc?: String;
  photo?: String;
  Price?: String;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  desc: () => Promise<String>;
  photo: () => Promise<String>;
  Price: () => Promise<String>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  desc: () => Promise<AsyncIterator<String>>;
  photo: () => Promise<AsyncIterator<String>>;
  Price: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "Admin",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
