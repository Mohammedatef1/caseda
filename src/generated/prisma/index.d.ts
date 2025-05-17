
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Configuration
 * 
 */
export type Configuration = $Result.DefaultSelection<Prisma.$ConfigurationPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model ShippingAddress
 * 
 */
export type ShippingAddress = $Result.DefaultSelection<Prisma.$ShippingAddressPayload>
/**
 * Model BillingAddress
 * 
 */
export type BillingAddress = $Result.DefaultSelection<Prisma.$BillingAddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Color: {
  red: 'red',
  blue: 'blue',
  black: 'black'
};

export type Color = (typeof Color)[keyof typeof Color]


export const Model: {
  iphonex: 'iphonex',
  iphone11: 'iphone11',
  iphone12: 'iphone12',
  iphone13: 'iphone13',
  iphone14: 'iphone14',
  iphone15: 'iphone15'
};

export type Model = (typeof Model)[keyof typeof Model]


export const Material: {
  silicon: 'silicon',
  polycarbonate: 'polycarbonate'
};

export type Material = (typeof Material)[keyof typeof Material]


export const Finish: {
  smooth: 'smooth',
  texture: 'texture'
};

export type Finish = (typeof Finish)[keyof typeof Finish]


export const OrderStatus: {
  fulfilled: 'fulfilled',
  shipped: 'shipped',
  waiting_shipment: 'waiting_shipment'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Color = $Enums.Color

export const Color: typeof $Enums.Color

export type Model = $Enums.Model

export const Model: typeof $Enums.Model

export type Material = $Enums.Material

export const Material: typeof $Enums.Material

export type Finish = $Enums.Finish

export const Finish: typeof $Enums.Finish

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Configurations
 * const configurations = await prisma.configuration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Configurations
   * const configurations = await prisma.configuration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.configuration`: Exposes CRUD operations for the **Configuration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configurations
    * const configurations = await prisma.configuration.findMany()
    * ```
    */
  get configuration(): Prisma.ConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shippingAddress`: Exposes CRUD operations for the **ShippingAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingAddresses
    * const shippingAddresses = await prisma.shippingAddress.findMany()
    * ```
    */
  get shippingAddress(): Prisma.ShippingAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billingAddress`: Exposes CRUD operations for the **BillingAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingAddresses
    * const billingAddresses = await prisma.billingAddress.findMany()
    * ```
    */
  get billingAddress(): Prisma.BillingAddressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Configuration: 'Configuration',
    Order: 'Order',
    ShippingAddress: 'ShippingAddress',
    BillingAddress: 'BillingAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "configuration" | "order" | "shippingAddress" | "billingAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Configuration: {
        payload: Prisma.$ConfigurationPayload<ExtArgs>
        fields: Prisma.ConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findFirst: {
            args: Prisma.ConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findMany: {
            args: Prisma.ConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          create: {
            args: Prisma.ConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          createMany: {
            args: Prisma.ConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          delete: {
            args: Prisma.ConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          update: {
            args: Prisma.ConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.ConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.ConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          aggregate: {
            args: Prisma.ConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguration>
          }
          groupBy: {
            args: Prisma.ConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      ShippingAddress: {
        payload: Prisma.$ShippingAddressPayload<ExtArgs>
        fields: Prisma.ShippingAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          findFirst: {
            args: Prisma.ShippingAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          findMany: {
            args: Prisma.ShippingAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>[]
          }
          create: {
            args: Prisma.ShippingAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          createMany: {
            args: Prisma.ShippingAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShippingAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>[]
          }
          delete: {
            args: Prisma.ShippingAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          update: {
            args: Prisma.ShippingAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          deleteMany: {
            args: Prisma.ShippingAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShippingAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>[]
          }
          upsert: {
            args: Prisma.ShippingAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          aggregate: {
            args: Prisma.ShippingAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShippingAddress>
          }
          groupBy: {
            args: Prisma.ShippingAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingAddressCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingAddressCountAggregateOutputType> | number
          }
        }
      }
      BillingAddress: {
        payload: Prisma.$BillingAddressPayload<ExtArgs>
        fields: Prisma.BillingAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          findFirst: {
            args: Prisma.BillingAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          findMany: {
            args: Prisma.BillingAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>[]
          }
          create: {
            args: Prisma.BillingAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          createMany: {
            args: Prisma.BillingAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>[]
          }
          delete: {
            args: Prisma.BillingAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          update: {
            args: Prisma.BillingAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          deleteMany: {
            args: Prisma.BillingAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>[]
          }
          upsert: {
            args: Prisma.BillingAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          aggregate: {
            args: Prisma.BillingAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingAddress>
          }
          groupBy: {
            args: Prisma.BillingAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingAddressCountArgs<ExtArgs>
            result: $Utils.Optional<BillingAddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    configuration?: ConfigurationOmit
    order?: OrderOmit
    shippingAddress?: ShippingAddressOmit
    billingAddress?: BillingAddressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConfigurationCountOutputType
   */

  export type ConfigurationCountOutputType = {
    Order: number
  }

  export type ConfigurationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | ConfigurationCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * ConfigurationCountOutputType without action
   */
  export type ConfigurationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigurationCountOutputType
     */
    select?: ConfigurationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConfigurationCountOutputType without action
   */
  export type ConfigurationCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ShippingAddressCountOutputType
   */

  export type ShippingAddressCountOutputType = {
    order: number
  }

  export type ShippingAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ShippingAddressCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * ShippingAddressCountOutputType without action
   */
  export type ShippingAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddressCountOutputType
     */
    select?: ShippingAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShippingAddressCountOutputType without action
   */
  export type ShippingAddressCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type BillingAddressCountOutputType
   */

  export type BillingAddressCountOutputType = {
    order: number
  }

  export type BillingAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | BillingAddressCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * BillingAddressCountOutputType without action
   */
  export type BillingAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddressCountOutputType
     */
    select?: BillingAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillingAddressCountOutputType without action
   */
  export type BillingAddressCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Configuration
   */

  export type AggregateConfiguration = {
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  export type ConfigurationAvgAggregateOutputType = {
    width: number | null
    height: number | null
    price: number | null
  }

  export type ConfigurationSumAggregateOutputType = {
    width: number | null
    height: number | null
    price: number | null
  }

  export type ConfigurationMinAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
    imgUrl: string | null
    croppedImageUrl: string | null
    color: string | null
    model: string | null
    finish: string | null
    material: string | null
    price: number | null
  }

  export type ConfigurationMaxAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
    imgUrl: string | null
    croppedImageUrl: string | null
    color: string | null
    model: string | null
    finish: string | null
    material: string | null
    price: number | null
  }

  export type ConfigurationCountAggregateOutputType = {
    id: number
    width: number
    height: number
    imgUrl: number
    croppedImageUrl: number
    color: number
    model: number
    finish: number
    material: number
    price: number
    _all: number
  }


  export type ConfigurationAvgAggregateInputType = {
    width?: true
    height?: true
    price?: true
  }

  export type ConfigurationSumAggregateInputType = {
    width?: true
    height?: true
    price?: true
  }

  export type ConfigurationMinAggregateInputType = {
    id?: true
    width?: true
    height?: true
    imgUrl?: true
    croppedImageUrl?: true
    color?: true
    model?: true
    finish?: true
    material?: true
    price?: true
  }

  export type ConfigurationMaxAggregateInputType = {
    id?: true
    width?: true
    height?: true
    imgUrl?: true
    croppedImageUrl?: true
    color?: true
    model?: true
    finish?: true
    material?: true
    price?: true
  }

  export type ConfigurationCountAggregateInputType = {
    id?: true
    width?: true
    height?: true
    imgUrl?: true
    croppedImageUrl?: true
    color?: true
    model?: true
    finish?: true
    material?: true
    price?: true
    _all?: true
  }

  export type ConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuration to aggregate.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configurations
    **/
    _count?: true | ConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigurationMaxAggregateInputType
  }

  export type GetConfigurationAggregateType<T extends ConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguration[P]>
      : GetScalarType<T[P], AggregateConfiguration[P]>
  }




  export type ConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigurationWhereInput
    orderBy?: ConfigurationOrderByWithAggregationInput | ConfigurationOrderByWithAggregationInput[]
    by: ConfigurationScalarFieldEnum[] | ConfigurationScalarFieldEnum
    having?: ConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigurationCountAggregateInputType | true
    _avg?: ConfigurationAvgAggregateInputType
    _sum?: ConfigurationSumAggregateInputType
    _min?: ConfigurationMinAggregateInputType
    _max?: ConfigurationMaxAggregateInputType
  }

  export type ConfigurationGroupByOutputType = {
    id: string
    width: number
    height: number
    imgUrl: string
    croppedImageUrl: string | null
    color: string | null
    model: string | null
    finish: string | null
    material: string | null
    price: number | null
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  type GetConfigurationGroupByPayload<T extends ConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type ConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    width?: boolean
    height?: boolean
    imgUrl?: boolean
    croppedImageUrl?: boolean
    color?: boolean
    model?: boolean
    finish?: boolean
    material?: boolean
    price?: boolean
    Order?: boolean | Configuration$OrderArgs<ExtArgs>
    _count?: boolean | ConfigurationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuration"]>

  export type ConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    width?: boolean
    height?: boolean
    imgUrl?: boolean
    croppedImageUrl?: boolean
    color?: boolean
    model?: boolean
    finish?: boolean
    material?: boolean
    price?: boolean
  }, ExtArgs["result"]["configuration"]>

  export type ConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    width?: boolean
    height?: boolean
    imgUrl?: boolean
    croppedImageUrl?: boolean
    color?: boolean
    model?: boolean
    finish?: boolean
    material?: boolean
    price?: boolean
  }, ExtArgs["result"]["configuration"]>

  export type ConfigurationSelectScalar = {
    id?: boolean
    width?: boolean
    height?: boolean
    imgUrl?: boolean
    croppedImageUrl?: boolean
    color?: boolean
    model?: boolean
    finish?: boolean
    material?: boolean
    price?: boolean
  }

  export type ConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "width" | "height" | "imgUrl" | "croppedImageUrl" | "color" | "model" | "finish" | "material" | "price", ExtArgs["result"]["configuration"]>
  export type ConfigurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | Configuration$OrderArgs<ExtArgs>
    _count?: boolean | ConfigurationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConfigurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConfigurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuration"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      width: number
      height: number
      imgUrl: string
      croppedImageUrl: string | null
      color: string | null
      model: string | null
      finish: string | null
      material: string | null
      price: number | null
    }, ExtArgs["result"]["configuration"]>
    composites: {}
  }

  type ConfigurationGetPayload<S extends boolean | null | undefined | ConfigurationDefaultArgs> = $Result.GetResult<Prisma.$ConfigurationPayload, S>

  type ConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigurationCountAggregateInputType | true
    }

  export interface ConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuration'], meta: { name: 'Configuration' } }
    /**
     * Find zero or one Configuration that matches the filter.
     * @param {ConfigurationFindUniqueArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigurationFindUniqueArgs>(args: SelectSubset<T, ConfigurationFindUniqueArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigurationFindUniqueOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigurationFindFirstArgs>(args?: SelectSubset<T, ConfigurationFindFirstArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configurations
     * const configurations = await prisma.configuration.findMany()
     * 
     * // Get first 10 Configurations
     * const configurations = await prisma.configuration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configurationWithIdOnly = await prisma.configuration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigurationFindManyArgs>(args?: SelectSubset<T, ConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuration.
     * @param {ConfigurationCreateArgs} args - Arguments to create a Configuration.
     * @example
     * // Create one Configuration
     * const Configuration = await prisma.configuration.create({
     *   data: {
     *     // ... data to create a Configuration
     *   }
     * })
     * 
     */
    create<T extends ConfigurationCreateArgs>(args: SelectSubset<T, ConfigurationCreateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configurations.
     * @param {ConfigurationCreateManyArgs} args - Arguments to create many Configurations.
     * @example
     * // Create many Configurations
     * const configuration = await prisma.configuration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigurationCreateManyArgs>(args?: SelectSubset<T, ConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configurations and returns the data saved in the database.
     * @param {ConfigurationCreateManyAndReturnArgs} args - Arguments to create many Configurations.
     * @example
     * // Create many Configurations
     * const configuration = await prisma.configuration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configurations and only return the `id`
     * const configurationWithIdOnly = await prisma.configuration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuration.
     * @param {ConfigurationDeleteArgs} args - Arguments to delete one Configuration.
     * @example
     * // Delete one Configuration
     * const Configuration = await prisma.configuration.delete({
     *   where: {
     *     // ... filter to delete one Configuration
     *   }
     * })
     * 
     */
    delete<T extends ConfigurationDeleteArgs>(args: SelectSubset<T, ConfigurationDeleteArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuration.
     * @param {ConfigurationUpdateArgs} args - Arguments to update one Configuration.
     * @example
     * // Update one Configuration
     * const configuration = await prisma.configuration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigurationUpdateArgs>(args: SelectSubset<T, ConfigurationUpdateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configurations.
     * @param {ConfigurationDeleteManyArgs} args - Arguments to filter Configurations to delete.
     * @example
     * // Delete a few Configurations
     * const { count } = await prisma.configuration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigurationDeleteManyArgs>(args?: SelectSubset<T, ConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configurations
     * const configuration = await prisma.configuration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigurationUpdateManyArgs>(args: SelectSubset<T, ConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurations and returns the data updated in the database.
     * @param {ConfigurationUpdateManyAndReturnArgs} args - Arguments to update many Configurations.
     * @example
     * // Update many Configurations
     * const configuration = await prisma.configuration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configurations and only return the `id`
     * const configurationWithIdOnly = await prisma.configuration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuration.
     * @param {ConfigurationUpsertArgs} args - Arguments to update or create a Configuration.
     * @example
     * // Update or create a Configuration
     * const configuration = await prisma.configuration.upsert({
     *   create: {
     *     // ... data to create a Configuration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuration we want to update
     *   }
     * })
     */
    upsert<T extends ConfigurationUpsertArgs>(args: SelectSubset<T, ConfigurationUpsertArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationCountArgs} args - Arguments to filter Configurations to count.
     * @example
     * // Count the number of Configurations
     * const count = await prisma.configuration.count({
     *   where: {
     *     // ... the filter for the Configurations we want to count
     *   }
     * })
    **/
    count<T extends ConfigurationCountArgs>(
      args?: Subset<T, ConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigurationAggregateArgs>(args: Subset<T, ConfigurationAggregateArgs>): Prisma.PrismaPromise<GetConfigurationAggregateType<T>>

    /**
     * Group by Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: ConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuration model
   */
  readonly fields: ConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends Configuration$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Configuration$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Configuration model
   */
  interface ConfigurationFieldRefs {
    readonly id: FieldRef<"Configuration", 'String'>
    readonly width: FieldRef<"Configuration", 'Int'>
    readonly height: FieldRef<"Configuration", 'Int'>
    readonly imgUrl: FieldRef<"Configuration", 'String'>
    readonly croppedImageUrl: FieldRef<"Configuration", 'String'>
    readonly color: FieldRef<"Configuration", 'String'>
    readonly model: FieldRef<"Configuration", 'String'>
    readonly finish: FieldRef<"Configuration", 'String'>
    readonly material: FieldRef<"Configuration", 'String'>
    readonly price: FieldRef<"Configuration", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Configuration findUnique
   */
  export type ConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findUniqueOrThrow
   */
  export type ConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findFirst
   */
  export type ConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findFirstOrThrow
   */
  export type ConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findMany
   */
  export type ConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configurations to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration create
   */
  export type ConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to create a Configuration.
     */
    data: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
  }

  /**
   * Configuration createMany
   */
  export type ConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configurations.
     */
    data: ConfigurationCreateManyInput | ConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuration createManyAndReturn
   */
  export type ConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many Configurations.
     */
    data: ConfigurationCreateManyInput | ConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuration update
   */
  export type ConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to update a Configuration.
     */
    data: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
    /**
     * Choose, which Configuration to update.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration updateMany
   */
  export type ConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configurations.
     */
    data: XOR<ConfigurationUpdateManyMutationInput, ConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which Configurations to update
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to update.
     */
    limit?: number
  }

  /**
   * Configuration updateManyAndReturn
   */
  export type ConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update Configurations.
     */
    data: XOR<ConfigurationUpdateManyMutationInput, ConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which Configurations to update
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to update.
     */
    limit?: number
  }

  /**
   * Configuration upsert
   */
  export type ConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * The filter to search for the Configuration to update in case it exists.
     */
    where: ConfigurationWhereUniqueInput
    /**
     * In case the Configuration found by the `where` argument doesn't exist, create a new Configuration with this data.
     */
    create: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
    /**
     * In case the Configuration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
  }

  /**
   * Configuration delete
   */
  export type ConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter which Configuration to delete.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration deleteMany
   */
  export type ConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configurations to delete
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to delete.
     */
    limit?: number
  }

  /**
   * Configuration.Order
   */
  export type Configuration$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Configuration without action
   */
  export type ConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    configurationId: string | null
    amount: number | null
    isPaid: boolean | null
    status: $Enums.OrderStatus | null
    shippingAddressId: string | null
    billingAddressId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    configurationId: string | null
    amount: number | null
    isPaid: boolean | null
    status: $Enums.OrderStatus | null
    shippingAddressId: string | null
    billingAddressId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    configurationId: number
    amount: number
    isPaid: number
    status: number
    shippingAddressId: number
    billingAddressId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    configurationId?: true
    amount?: true
    isPaid?: true
    status?: true
    shippingAddressId?: true
    billingAddressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    configurationId?: true
    amount?: true
    isPaid?: true
    status?: true
    shippingAddressId?: true
    billingAddressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    configurationId?: true
    amount?: true
    isPaid?: true
    status?: true
    shippingAddressId?: true
    billingAddressId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    configurationId: string
    amount: number
    isPaid: boolean
    status: $Enums.OrderStatus
    shippingAddressId: string
    billingAddressId: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    amount?: boolean
    isPaid?: boolean
    status?: boolean
    shippingAddressId?: boolean
    billingAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
    shippingAddress?: boolean | ShippingAddressDefaultArgs<ExtArgs>
    billingAddress?: boolean | BillingAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    amount?: boolean
    isPaid?: boolean
    status?: boolean
    shippingAddressId?: boolean
    billingAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
    shippingAddress?: boolean | ShippingAddressDefaultArgs<ExtArgs>
    billingAddress?: boolean | BillingAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    amount?: boolean
    isPaid?: boolean
    status?: boolean
    shippingAddressId?: boolean
    billingAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
    shippingAddress?: boolean | ShippingAddressDefaultArgs<ExtArgs>
    billingAddress?: boolean | BillingAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    configurationId?: boolean
    amount?: boolean
    isPaid?: boolean
    status?: boolean
    shippingAddressId?: boolean
    billingAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configurationId" | "amount" | "isPaid" | "status" | "shippingAddressId" | "billingAddressId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
    shippingAddress?: boolean | ShippingAddressDefaultArgs<ExtArgs>
    billingAddress?: boolean | BillingAddressDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
    shippingAddress?: boolean | ShippingAddressDefaultArgs<ExtArgs>
    billingAddress?: boolean | BillingAddressDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
    shippingAddress?: boolean | ShippingAddressDefaultArgs<ExtArgs>
    billingAddress?: boolean | BillingAddressDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      configuration: Prisma.$ConfigurationPayload<ExtArgs>
      shippingAddress: Prisma.$ShippingAddressPayload<ExtArgs>
      billingAddress: Prisma.$BillingAddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      configurationId: string
      amount: number
      isPaid: boolean
      status: $Enums.OrderStatus
      shippingAddressId: string
      billingAddressId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    configuration<T extends ConfigurationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConfigurationDefaultArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shippingAddress<T extends ShippingAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShippingAddressDefaultArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billingAddress<T extends BillingAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillingAddressDefaultArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly configurationId: FieldRef<"Order", 'String'>
    readonly amount: FieldRef<"Order", 'Float'>
    readonly isPaid: FieldRef<"Order", 'Boolean'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly shippingAddressId: FieldRef<"Order", 'String'>
    readonly billingAddressId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model ShippingAddress
   */

  export type AggregateShippingAddress = {
    _count: ShippingAddressCountAggregateOutputType | null
    _min: ShippingAddressMinAggregateOutputType | null
    _max: ShippingAddressMaxAggregateOutputType | null
  }

  export type ShippingAddressMinAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    State: string | null
    phoneNumber: string | null
  }

  export type ShippingAddressMaxAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    State: string | null
    phoneNumber: string | null
  }

  export type ShippingAddressCountAggregateOutputType = {
    id: number
    name: number
    street: number
    city: number
    postalCode: number
    country: number
    State: number
    phoneNumber: number
    _all: number
  }


  export type ShippingAddressMinAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    postalCode?: true
    country?: true
    State?: true
    phoneNumber?: true
  }

  export type ShippingAddressMaxAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    postalCode?: true
    country?: true
    State?: true
    phoneNumber?: true
  }

  export type ShippingAddressCountAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    postalCode?: true
    country?: true
    State?: true
    phoneNumber?: true
    _all?: true
  }

  export type ShippingAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingAddress to aggregate.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingAddresses
    **/
    _count?: true | ShippingAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingAddressMaxAggregateInputType
  }

  export type GetShippingAddressAggregateType<T extends ShippingAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingAddress[P]>
      : GetScalarType<T[P], AggregateShippingAddress[P]>
  }




  export type ShippingAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingAddressWhereInput
    orderBy?: ShippingAddressOrderByWithAggregationInput | ShippingAddressOrderByWithAggregationInput[]
    by: ShippingAddressScalarFieldEnum[] | ShippingAddressScalarFieldEnum
    having?: ShippingAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingAddressCountAggregateInputType | true
    _min?: ShippingAddressMinAggregateInputType
    _max?: ShippingAddressMaxAggregateInputType
  }

  export type ShippingAddressGroupByOutputType = {
    id: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State: string | null
    phoneNumber: string | null
    _count: ShippingAddressCountAggregateOutputType | null
    _min: ShippingAddressMinAggregateOutputType | null
    _max: ShippingAddressMaxAggregateOutputType | null
  }

  type GetShippingAddressGroupByPayload<T extends ShippingAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingAddressGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingAddressGroupByOutputType[P]>
        }
      >
    >


  export type ShippingAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
    order?: boolean | ShippingAddress$orderArgs<ExtArgs>
    _count?: boolean | ShippingAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippingAddress"]>

  export type ShippingAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["shippingAddress"]>

  export type ShippingAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["shippingAddress"]>

  export type ShippingAddressSelectScalar = {
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
  }

  export type ShippingAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "street" | "city" | "postalCode" | "country" | "State" | "phoneNumber", ExtArgs["result"]["shippingAddress"]>
  export type ShippingAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ShippingAddress$orderArgs<ExtArgs>
    _count?: boolean | ShippingAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShippingAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShippingAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShippingAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShippingAddress"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      street: string
      city: string
      postalCode: string
      country: string
      State: string | null
      phoneNumber: string | null
    }, ExtArgs["result"]["shippingAddress"]>
    composites: {}
  }

  type ShippingAddressGetPayload<S extends boolean | null | undefined | ShippingAddressDefaultArgs> = $Result.GetResult<Prisma.$ShippingAddressPayload, S>

  type ShippingAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShippingAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippingAddressCountAggregateInputType | true
    }

  export interface ShippingAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShippingAddress'], meta: { name: 'ShippingAddress' } }
    /**
     * Find zero or one ShippingAddress that matches the filter.
     * @param {ShippingAddressFindUniqueArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippingAddressFindUniqueArgs>(args: SelectSubset<T, ShippingAddressFindUniqueArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShippingAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShippingAddressFindUniqueOrThrowArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippingAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippingAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressFindFirstArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippingAddressFindFirstArgs>(args?: SelectSubset<T, ShippingAddressFindFirstArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressFindFirstOrThrowArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippingAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippingAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShippingAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingAddresses
     * const shippingAddresses = await prisma.shippingAddress.findMany()
     * 
     * // Get first 10 ShippingAddresses
     * const shippingAddresses = await prisma.shippingAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingAddressWithIdOnly = await prisma.shippingAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShippingAddressFindManyArgs>(args?: SelectSubset<T, ShippingAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShippingAddress.
     * @param {ShippingAddressCreateArgs} args - Arguments to create a ShippingAddress.
     * @example
     * // Create one ShippingAddress
     * const ShippingAddress = await prisma.shippingAddress.create({
     *   data: {
     *     // ... data to create a ShippingAddress
     *   }
     * })
     * 
     */
    create<T extends ShippingAddressCreateArgs>(args: SelectSubset<T, ShippingAddressCreateArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShippingAddresses.
     * @param {ShippingAddressCreateManyArgs} args - Arguments to create many ShippingAddresses.
     * @example
     * // Create many ShippingAddresses
     * const shippingAddress = await prisma.shippingAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippingAddressCreateManyArgs>(args?: SelectSubset<T, ShippingAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShippingAddresses and returns the data saved in the database.
     * @param {ShippingAddressCreateManyAndReturnArgs} args - Arguments to create many ShippingAddresses.
     * @example
     * // Create many ShippingAddresses
     * const shippingAddress = await prisma.shippingAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShippingAddresses and only return the `id`
     * const shippingAddressWithIdOnly = await prisma.shippingAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShippingAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, ShippingAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShippingAddress.
     * @param {ShippingAddressDeleteArgs} args - Arguments to delete one ShippingAddress.
     * @example
     * // Delete one ShippingAddress
     * const ShippingAddress = await prisma.shippingAddress.delete({
     *   where: {
     *     // ... filter to delete one ShippingAddress
     *   }
     * })
     * 
     */
    delete<T extends ShippingAddressDeleteArgs>(args: SelectSubset<T, ShippingAddressDeleteArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShippingAddress.
     * @param {ShippingAddressUpdateArgs} args - Arguments to update one ShippingAddress.
     * @example
     * // Update one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippingAddressUpdateArgs>(args: SelectSubset<T, ShippingAddressUpdateArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShippingAddresses.
     * @param {ShippingAddressDeleteManyArgs} args - Arguments to filter ShippingAddresses to delete.
     * @example
     * // Delete a few ShippingAddresses
     * const { count } = await prisma.shippingAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippingAddressDeleteManyArgs>(args?: SelectSubset<T, ShippingAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingAddresses
     * const shippingAddress = await prisma.shippingAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippingAddressUpdateManyArgs>(args: SelectSubset<T, ShippingAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingAddresses and returns the data updated in the database.
     * @param {ShippingAddressUpdateManyAndReturnArgs} args - Arguments to update many ShippingAddresses.
     * @example
     * // Update many ShippingAddresses
     * const shippingAddress = await prisma.shippingAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShippingAddresses and only return the `id`
     * const shippingAddressWithIdOnly = await prisma.shippingAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShippingAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, ShippingAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShippingAddress.
     * @param {ShippingAddressUpsertArgs} args - Arguments to update or create a ShippingAddress.
     * @example
     * // Update or create a ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.upsert({
     *   create: {
     *     // ... data to create a ShippingAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingAddress we want to update
     *   }
     * })
     */
    upsert<T extends ShippingAddressUpsertArgs>(args: SelectSubset<T, ShippingAddressUpsertArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShippingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressCountArgs} args - Arguments to filter ShippingAddresses to count.
     * @example
     * // Count the number of ShippingAddresses
     * const count = await prisma.shippingAddress.count({
     *   where: {
     *     // ... the filter for the ShippingAddresses we want to count
     *   }
     * })
    **/
    count<T extends ShippingAddressCountArgs>(
      args?: Subset<T, ShippingAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShippingAddressAggregateArgs>(args: Subset<T, ShippingAddressAggregateArgs>): Prisma.PrismaPromise<GetShippingAddressAggregateType<T>>

    /**
     * Group by ShippingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShippingAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingAddressGroupByArgs['orderBy'] }
        : { orderBy?: ShippingAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShippingAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShippingAddress model
   */
  readonly fields: ShippingAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ShippingAddress$orderArgs<ExtArgs> = {}>(args?: Subset<T, ShippingAddress$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShippingAddress model
   */
  interface ShippingAddressFieldRefs {
    readonly id: FieldRef<"ShippingAddress", 'String'>
    readonly name: FieldRef<"ShippingAddress", 'String'>
    readonly street: FieldRef<"ShippingAddress", 'String'>
    readonly city: FieldRef<"ShippingAddress", 'String'>
    readonly postalCode: FieldRef<"ShippingAddress", 'String'>
    readonly country: FieldRef<"ShippingAddress", 'String'>
    readonly State: FieldRef<"ShippingAddress", 'String'>
    readonly phoneNumber: FieldRef<"ShippingAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShippingAddress findUnique
   */
  export type ShippingAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress findUniqueOrThrow
   */
  export type ShippingAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress findFirst
   */
  export type ShippingAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingAddresses.
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingAddresses.
     */
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * ShippingAddress findFirstOrThrow
   */
  export type ShippingAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingAddresses.
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingAddresses.
     */
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * ShippingAddress findMany
   */
  export type ShippingAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddresses to fetch.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingAddresses.
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * ShippingAddress create
   */
  export type ShippingAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a ShippingAddress.
     */
    data: XOR<ShippingAddressCreateInput, ShippingAddressUncheckedCreateInput>
  }

  /**
   * ShippingAddress createMany
   */
  export type ShippingAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShippingAddresses.
     */
    data: ShippingAddressCreateManyInput | ShippingAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingAddress createManyAndReturn
   */
  export type ShippingAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * The data used to create many ShippingAddresses.
     */
    data: ShippingAddressCreateManyInput | ShippingAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingAddress update
   */
  export type ShippingAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a ShippingAddress.
     */
    data: XOR<ShippingAddressUpdateInput, ShippingAddressUncheckedUpdateInput>
    /**
     * Choose, which ShippingAddress to update.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress updateMany
   */
  export type ShippingAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShippingAddresses.
     */
    data: XOR<ShippingAddressUpdateManyMutationInput, ShippingAddressUncheckedUpdateManyInput>
    /**
     * Filter which ShippingAddresses to update
     */
    where?: ShippingAddressWhereInput
    /**
     * Limit how many ShippingAddresses to update.
     */
    limit?: number
  }

  /**
   * ShippingAddress updateManyAndReturn
   */
  export type ShippingAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * The data used to update ShippingAddresses.
     */
    data: XOR<ShippingAddressUpdateManyMutationInput, ShippingAddressUncheckedUpdateManyInput>
    /**
     * Filter which ShippingAddresses to update
     */
    where?: ShippingAddressWhereInput
    /**
     * Limit how many ShippingAddresses to update.
     */
    limit?: number
  }

  /**
   * ShippingAddress upsert
   */
  export type ShippingAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the ShippingAddress to update in case it exists.
     */
    where: ShippingAddressWhereUniqueInput
    /**
     * In case the ShippingAddress found by the `where` argument doesn't exist, create a new ShippingAddress with this data.
     */
    create: XOR<ShippingAddressCreateInput, ShippingAddressUncheckedCreateInput>
    /**
     * In case the ShippingAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingAddressUpdateInput, ShippingAddressUncheckedUpdateInput>
  }

  /**
   * ShippingAddress delete
   */
  export type ShippingAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter which ShippingAddress to delete.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress deleteMany
   */
  export type ShippingAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingAddresses to delete
     */
    where?: ShippingAddressWhereInput
    /**
     * Limit how many ShippingAddresses to delete.
     */
    limit?: number
  }

  /**
   * ShippingAddress.order
   */
  export type ShippingAddress$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * ShippingAddress without action
   */
  export type ShippingAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
  }


  /**
   * Model BillingAddress
   */

  export type AggregateBillingAddress = {
    _count: BillingAddressCountAggregateOutputType | null
    _min: BillingAddressMinAggregateOutputType | null
    _max: BillingAddressMaxAggregateOutputType | null
  }

  export type BillingAddressMinAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    State: string | null
    phoneNumber: string | null
  }

  export type BillingAddressMaxAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    State: string | null
    phoneNumber: string | null
  }

  export type BillingAddressCountAggregateOutputType = {
    id: number
    name: number
    street: number
    city: number
    postalCode: number
    country: number
    State: number
    phoneNumber: number
    _all: number
  }


  export type BillingAddressMinAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    postalCode?: true
    country?: true
    State?: true
    phoneNumber?: true
  }

  export type BillingAddressMaxAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    postalCode?: true
    country?: true
    State?: true
    phoneNumber?: true
  }

  export type BillingAddressCountAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    postalCode?: true
    country?: true
    State?: true
    phoneNumber?: true
    _all?: true
  }

  export type BillingAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingAddress to aggregate.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingAddresses
    **/
    _count?: true | BillingAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingAddressMaxAggregateInputType
  }

  export type GetBillingAddressAggregateType<T extends BillingAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingAddress[P]>
      : GetScalarType<T[P], AggregateBillingAddress[P]>
  }




  export type BillingAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingAddressWhereInput
    orderBy?: BillingAddressOrderByWithAggregationInput | BillingAddressOrderByWithAggregationInput[]
    by: BillingAddressScalarFieldEnum[] | BillingAddressScalarFieldEnum
    having?: BillingAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingAddressCountAggregateInputType | true
    _min?: BillingAddressMinAggregateInputType
    _max?: BillingAddressMaxAggregateInputType
  }

  export type BillingAddressGroupByOutputType = {
    id: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State: string | null
    phoneNumber: string | null
    _count: BillingAddressCountAggregateOutputType | null
    _min: BillingAddressMinAggregateOutputType | null
    _max: BillingAddressMaxAggregateOutputType | null
  }

  type GetBillingAddressGroupByPayload<T extends BillingAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingAddressGroupByOutputType[P]>
            : GetScalarType<T[P], BillingAddressGroupByOutputType[P]>
        }
      >
    >


  export type BillingAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
    order?: boolean | BillingAddress$orderArgs<ExtArgs>
    _count?: boolean | BillingAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingAddress"]>

  export type BillingAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["billingAddress"]>

  export type BillingAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["billingAddress"]>

  export type BillingAddressSelectScalar = {
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    State?: boolean
    phoneNumber?: boolean
  }

  export type BillingAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "street" | "city" | "postalCode" | "country" | "State" | "phoneNumber", ExtArgs["result"]["billingAddress"]>
  export type BillingAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | BillingAddress$orderArgs<ExtArgs>
    _count?: boolean | BillingAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillingAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BillingAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BillingAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingAddress"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      street: string
      city: string
      postalCode: string
      country: string
      State: string | null
      phoneNumber: string | null
    }, ExtArgs["result"]["billingAddress"]>
    composites: {}
  }

  type BillingAddressGetPayload<S extends boolean | null | undefined | BillingAddressDefaultArgs> = $Result.GetResult<Prisma.$BillingAddressPayload, S>

  type BillingAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingAddressCountAggregateInputType | true
    }

  export interface BillingAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingAddress'], meta: { name: 'BillingAddress' } }
    /**
     * Find zero or one BillingAddress that matches the filter.
     * @param {BillingAddressFindUniqueArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingAddressFindUniqueArgs>(args: SelectSubset<T, BillingAddressFindUniqueArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingAddressFindUniqueOrThrowArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressFindFirstArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingAddressFindFirstArgs>(args?: SelectSubset<T, BillingAddressFindFirstArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressFindFirstOrThrowArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingAddresses
     * const billingAddresses = await prisma.billingAddress.findMany()
     * 
     * // Get first 10 BillingAddresses
     * const billingAddresses = await prisma.billingAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingAddressWithIdOnly = await prisma.billingAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingAddressFindManyArgs>(args?: SelectSubset<T, BillingAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingAddress.
     * @param {BillingAddressCreateArgs} args - Arguments to create a BillingAddress.
     * @example
     * // Create one BillingAddress
     * const BillingAddress = await prisma.billingAddress.create({
     *   data: {
     *     // ... data to create a BillingAddress
     *   }
     * })
     * 
     */
    create<T extends BillingAddressCreateArgs>(args: SelectSubset<T, BillingAddressCreateArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingAddresses.
     * @param {BillingAddressCreateManyArgs} args - Arguments to create many BillingAddresses.
     * @example
     * // Create many BillingAddresses
     * const billingAddress = await prisma.billingAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingAddressCreateManyArgs>(args?: SelectSubset<T, BillingAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingAddresses and returns the data saved in the database.
     * @param {BillingAddressCreateManyAndReturnArgs} args - Arguments to create many BillingAddresses.
     * @example
     * // Create many BillingAddresses
     * const billingAddress = await prisma.billingAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingAddresses and only return the `id`
     * const billingAddressWithIdOnly = await prisma.billingAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillingAddress.
     * @param {BillingAddressDeleteArgs} args - Arguments to delete one BillingAddress.
     * @example
     * // Delete one BillingAddress
     * const BillingAddress = await prisma.billingAddress.delete({
     *   where: {
     *     // ... filter to delete one BillingAddress
     *   }
     * })
     * 
     */
    delete<T extends BillingAddressDeleteArgs>(args: SelectSubset<T, BillingAddressDeleteArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingAddress.
     * @param {BillingAddressUpdateArgs} args - Arguments to update one BillingAddress.
     * @example
     * // Update one BillingAddress
     * const billingAddress = await prisma.billingAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingAddressUpdateArgs>(args: SelectSubset<T, BillingAddressUpdateArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingAddresses.
     * @param {BillingAddressDeleteManyArgs} args - Arguments to filter BillingAddresses to delete.
     * @example
     * // Delete a few BillingAddresses
     * const { count } = await prisma.billingAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingAddressDeleteManyArgs>(args?: SelectSubset<T, BillingAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingAddresses
     * const billingAddress = await prisma.billingAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingAddressUpdateManyArgs>(args: SelectSubset<T, BillingAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingAddresses and returns the data updated in the database.
     * @param {BillingAddressUpdateManyAndReturnArgs} args - Arguments to update many BillingAddresses.
     * @example
     * // Update many BillingAddresses
     * const billingAddress = await prisma.billingAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillingAddresses and only return the `id`
     * const billingAddressWithIdOnly = await prisma.billingAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillingAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillingAddress.
     * @param {BillingAddressUpsertArgs} args - Arguments to update or create a BillingAddress.
     * @example
     * // Update or create a BillingAddress
     * const billingAddress = await prisma.billingAddress.upsert({
     *   create: {
     *     // ... data to create a BillingAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingAddress we want to update
     *   }
     * })
     */
    upsert<T extends BillingAddressUpsertArgs>(args: SelectSubset<T, BillingAddressUpsertArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressCountArgs} args - Arguments to filter BillingAddresses to count.
     * @example
     * // Count the number of BillingAddresses
     * const count = await prisma.billingAddress.count({
     *   where: {
     *     // ... the filter for the BillingAddresses we want to count
     *   }
     * })
    **/
    count<T extends BillingAddressCountArgs>(
      args?: Subset<T, BillingAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingAddressAggregateArgs>(args: Subset<T, BillingAddressAggregateArgs>): Prisma.PrismaPromise<GetBillingAddressAggregateType<T>>

    /**
     * Group by BillingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillingAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingAddressGroupByArgs['orderBy'] }
        : { orderBy?: BillingAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillingAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingAddress model
   */
  readonly fields: BillingAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends BillingAddress$orderArgs<ExtArgs> = {}>(args?: Subset<T, BillingAddress$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BillingAddress model
   */
  interface BillingAddressFieldRefs {
    readonly id: FieldRef<"BillingAddress", 'String'>
    readonly name: FieldRef<"BillingAddress", 'String'>
    readonly street: FieldRef<"BillingAddress", 'String'>
    readonly city: FieldRef<"BillingAddress", 'String'>
    readonly postalCode: FieldRef<"BillingAddress", 'String'>
    readonly country: FieldRef<"BillingAddress", 'String'>
    readonly State: FieldRef<"BillingAddress", 'String'>
    readonly phoneNumber: FieldRef<"BillingAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BillingAddress findUnique
   */
  export type BillingAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress findUniqueOrThrow
   */
  export type BillingAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress findFirst
   */
  export type BillingAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingAddresses.
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingAddresses.
     */
    distinct?: BillingAddressScalarFieldEnum | BillingAddressScalarFieldEnum[]
  }

  /**
   * BillingAddress findFirstOrThrow
   */
  export type BillingAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingAddresses.
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingAddresses.
     */
    distinct?: BillingAddressScalarFieldEnum | BillingAddressScalarFieldEnum[]
  }

  /**
   * BillingAddress findMany
   */
  export type BillingAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddresses to fetch.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingAddresses.
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    distinct?: BillingAddressScalarFieldEnum | BillingAddressScalarFieldEnum[]
  }

  /**
   * BillingAddress create
   */
  export type BillingAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingAddress.
     */
    data: XOR<BillingAddressCreateInput, BillingAddressUncheckedCreateInput>
  }

  /**
   * BillingAddress createMany
   */
  export type BillingAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingAddresses.
     */
    data: BillingAddressCreateManyInput | BillingAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingAddress createManyAndReturn
   */
  export type BillingAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * The data used to create many BillingAddresses.
     */
    data: BillingAddressCreateManyInput | BillingAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingAddress update
   */
  export type BillingAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingAddress.
     */
    data: XOR<BillingAddressUpdateInput, BillingAddressUncheckedUpdateInput>
    /**
     * Choose, which BillingAddress to update.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress updateMany
   */
  export type BillingAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingAddresses.
     */
    data: XOR<BillingAddressUpdateManyMutationInput, BillingAddressUncheckedUpdateManyInput>
    /**
     * Filter which BillingAddresses to update
     */
    where?: BillingAddressWhereInput
    /**
     * Limit how many BillingAddresses to update.
     */
    limit?: number
  }

  /**
   * BillingAddress updateManyAndReturn
   */
  export type BillingAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * The data used to update BillingAddresses.
     */
    data: XOR<BillingAddressUpdateManyMutationInput, BillingAddressUncheckedUpdateManyInput>
    /**
     * Filter which BillingAddresses to update
     */
    where?: BillingAddressWhereInput
    /**
     * Limit how many BillingAddresses to update.
     */
    limit?: number
  }

  /**
   * BillingAddress upsert
   */
  export type BillingAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingAddress to update in case it exists.
     */
    where: BillingAddressWhereUniqueInput
    /**
     * In case the BillingAddress found by the `where` argument doesn't exist, create a new BillingAddress with this data.
     */
    create: XOR<BillingAddressCreateInput, BillingAddressUncheckedCreateInput>
    /**
     * In case the BillingAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingAddressUpdateInput, BillingAddressUncheckedUpdateInput>
  }

  /**
   * BillingAddress delete
   */
  export type BillingAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter which BillingAddress to delete.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress deleteMany
   */
  export type BillingAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingAddresses to delete
     */
    where?: BillingAddressWhereInput
    /**
     * Limit how many BillingAddresses to delete.
     */
    limit?: number
  }

  /**
   * BillingAddress.order
   */
  export type BillingAddress$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * BillingAddress without action
   */
  export type BillingAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConfigurationScalarFieldEnum: {
    id: 'id',
    width: 'width',
    height: 'height',
    imgUrl: 'imgUrl',
    croppedImageUrl: 'croppedImageUrl',
    color: 'color',
    model: 'model',
    finish: 'finish',
    material: 'material',
    price: 'price'
  };

  export type ConfigurationScalarFieldEnum = (typeof ConfigurationScalarFieldEnum)[keyof typeof ConfigurationScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    configurationId: 'configurationId',
    amount: 'amount',
    isPaid: 'isPaid',
    status: 'status',
    shippingAddressId: 'shippingAddressId',
    billingAddressId: 'billingAddressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ShippingAddressScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street: 'street',
    city: 'city',
    postalCode: 'postalCode',
    country: 'country',
    State: 'State',
    phoneNumber: 'phoneNumber'
  };

  export type ShippingAddressScalarFieldEnum = (typeof ShippingAddressScalarFieldEnum)[keyof typeof ShippingAddressScalarFieldEnum]


  export const BillingAddressScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street: 'street',
    city: 'city',
    postalCode: 'postalCode',
    country: 'country',
    State: 'State',
    phoneNumber: 'phoneNumber'
  };

  export type BillingAddressScalarFieldEnum = (typeof BillingAddressScalarFieldEnum)[keyof typeof BillingAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ConfigurationWhereInput = {
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    id?: StringFilter<"Configuration"> | string
    width?: IntFilter<"Configuration"> | number
    height?: IntFilter<"Configuration"> | number
    imgUrl?: StringFilter<"Configuration"> | string
    croppedImageUrl?: StringNullableFilter<"Configuration"> | string | null
    color?: StringNullableFilter<"Configuration"> | string | null
    model?: StringNullableFilter<"Configuration"> | string | null
    finish?: StringNullableFilter<"Configuration"> | string | null
    material?: StringNullableFilter<"Configuration"> | string | null
    price?: IntNullableFilter<"Configuration"> | number | null
    Order?: OrderListRelationFilter
  }

  export type ConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imgUrl?: SortOrder
    croppedImageUrl?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    finish?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    Order?: OrderOrderByRelationAggregateInput
  }

  export type ConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    width?: IntFilter<"Configuration"> | number
    height?: IntFilter<"Configuration"> | number
    imgUrl?: StringFilter<"Configuration"> | string
    croppedImageUrl?: StringNullableFilter<"Configuration"> | string | null
    color?: StringNullableFilter<"Configuration"> | string | null
    model?: StringNullableFilter<"Configuration"> | string | null
    finish?: StringNullableFilter<"Configuration"> | string | null
    material?: StringNullableFilter<"Configuration"> | string | null
    price?: IntNullableFilter<"Configuration"> | number | null
    Order?: OrderListRelationFilter
  }, "id">

  export type ConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imgUrl?: SortOrder
    croppedImageUrl?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    finish?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    _count?: ConfigurationCountOrderByAggregateInput
    _avg?: ConfigurationAvgOrderByAggregateInput
    _max?: ConfigurationMaxOrderByAggregateInput
    _min?: ConfigurationMinOrderByAggregateInput
    _sum?: ConfigurationSumOrderByAggregateInput
  }

  export type ConfigurationScalarWhereWithAggregatesInput = {
    AND?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    OR?: ConfigurationScalarWhereWithAggregatesInput[]
    NOT?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Configuration"> | string
    width?: IntWithAggregatesFilter<"Configuration"> | number
    height?: IntWithAggregatesFilter<"Configuration"> | number
    imgUrl?: StringWithAggregatesFilter<"Configuration"> | string
    croppedImageUrl?: StringNullableWithAggregatesFilter<"Configuration"> | string | null
    color?: StringNullableWithAggregatesFilter<"Configuration"> | string | null
    model?: StringNullableWithAggregatesFilter<"Configuration"> | string | null
    finish?: StringNullableWithAggregatesFilter<"Configuration"> | string | null
    material?: StringNullableWithAggregatesFilter<"Configuration"> | string | null
    price?: IntNullableWithAggregatesFilter<"Configuration"> | number | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    configurationId?: StringFilter<"Order"> | string
    amount?: FloatFilter<"Order"> | number
    isPaid?: BoolFilter<"Order"> | boolean
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    shippingAddressId?: StringFilter<"Order"> | string
    billingAddressId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    configuration?: XOR<ConfigurationScalarRelationFilter, ConfigurationWhereInput>
    shippingAddress?: XOR<ShippingAddressScalarRelationFilter, ShippingAddressWhereInput>
    billingAddress?: XOR<BillingAddressScalarRelationFilter, BillingAddressWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    configurationId?: SortOrder
    amount?: SortOrder
    isPaid?: SortOrder
    status?: SortOrder
    shippingAddressId?: SortOrder
    billingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configuration?: ConfigurationOrderByWithRelationInput
    shippingAddress?: ShippingAddressOrderByWithRelationInput
    billingAddress?: BillingAddressOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    configurationId?: StringFilter<"Order"> | string
    amount?: FloatFilter<"Order"> | number
    isPaid?: BoolFilter<"Order"> | boolean
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    shippingAddressId?: StringFilter<"Order"> | string
    billingAddressId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    configuration?: XOR<ConfigurationScalarRelationFilter, ConfigurationWhereInput>
    shippingAddress?: XOR<ShippingAddressScalarRelationFilter, ShippingAddressWhereInput>
    billingAddress?: XOR<BillingAddressScalarRelationFilter, BillingAddressWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    configurationId?: SortOrder
    amount?: SortOrder
    isPaid?: SortOrder
    status?: SortOrder
    shippingAddressId?: SortOrder
    billingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    configurationId?: StringWithAggregatesFilter<"Order"> | string
    amount?: FloatWithAggregatesFilter<"Order"> | number
    isPaid?: BoolWithAggregatesFilter<"Order"> | boolean
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    shippingAddressId?: StringWithAggregatesFilter<"Order"> | string
    billingAddressId?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ShippingAddressWhereInput = {
    AND?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    OR?: ShippingAddressWhereInput[]
    NOT?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    id?: StringFilter<"ShippingAddress"> | string
    name?: StringFilter<"ShippingAddress"> | string
    street?: StringFilter<"ShippingAddress"> | string
    city?: StringFilter<"ShippingAddress"> | string
    postalCode?: StringFilter<"ShippingAddress"> | string
    country?: StringFilter<"ShippingAddress"> | string
    State?: StringNullableFilter<"ShippingAddress"> | string | null
    phoneNumber?: StringNullableFilter<"ShippingAddress"> | string | null
    order?: OrderListRelationFilter
  }

  export type ShippingAddressOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    order?: OrderOrderByRelationAggregateInput
  }

  export type ShippingAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    OR?: ShippingAddressWhereInput[]
    NOT?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    name?: StringFilter<"ShippingAddress"> | string
    street?: StringFilter<"ShippingAddress"> | string
    city?: StringFilter<"ShippingAddress"> | string
    postalCode?: StringFilter<"ShippingAddress"> | string
    country?: StringFilter<"ShippingAddress"> | string
    State?: StringNullableFilter<"ShippingAddress"> | string | null
    phoneNumber?: StringNullableFilter<"ShippingAddress"> | string | null
    order?: OrderListRelationFilter
  }, "id">

  export type ShippingAddressOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    _count?: ShippingAddressCountOrderByAggregateInput
    _max?: ShippingAddressMaxOrderByAggregateInput
    _min?: ShippingAddressMinOrderByAggregateInput
  }

  export type ShippingAddressScalarWhereWithAggregatesInput = {
    AND?: ShippingAddressScalarWhereWithAggregatesInput | ShippingAddressScalarWhereWithAggregatesInput[]
    OR?: ShippingAddressScalarWhereWithAggregatesInput[]
    NOT?: ShippingAddressScalarWhereWithAggregatesInput | ShippingAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShippingAddress"> | string
    name?: StringWithAggregatesFilter<"ShippingAddress"> | string
    street?: StringWithAggregatesFilter<"ShippingAddress"> | string
    city?: StringWithAggregatesFilter<"ShippingAddress"> | string
    postalCode?: StringWithAggregatesFilter<"ShippingAddress"> | string
    country?: StringWithAggregatesFilter<"ShippingAddress"> | string
    State?: StringNullableWithAggregatesFilter<"ShippingAddress"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"ShippingAddress"> | string | null
  }

  export type BillingAddressWhereInput = {
    AND?: BillingAddressWhereInput | BillingAddressWhereInput[]
    OR?: BillingAddressWhereInput[]
    NOT?: BillingAddressWhereInput | BillingAddressWhereInput[]
    id?: StringFilter<"BillingAddress"> | string
    name?: StringFilter<"BillingAddress"> | string
    street?: StringFilter<"BillingAddress"> | string
    city?: StringFilter<"BillingAddress"> | string
    postalCode?: StringFilter<"BillingAddress"> | string
    country?: StringFilter<"BillingAddress"> | string
    State?: StringNullableFilter<"BillingAddress"> | string | null
    phoneNumber?: StringNullableFilter<"BillingAddress"> | string | null
    order?: OrderListRelationFilter
  }

  export type BillingAddressOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    order?: OrderOrderByRelationAggregateInput
  }

  export type BillingAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillingAddressWhereInput | BillingAddressWhereInput[]
    OR?: BillingAddressWhereInput[]
    NOT?: BillingAddressWhereInput | BillingAddressWhereInput[]
    name?: StringFilter<"BillingAddress"> | string
    street?: StringFilter<"BillingAddress"> | string
    city?: StringFilter<"BillingAddress"> | string
    postalCode?: StringFilter<"BillingAddress"> | string
    country?: StringFilter<"BillingAddress"> | string
    State?: StringNullableFilter<"BillingAddress"> | string | null
    phoneNumber?: StringNullableFilter<"BillingAddress"> | string | null
    order?: OrderListRelationFilter
  }, "id">

  export type BillingAddressOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    _count?: BillingAddressCountOrderByAggregateInput
    _max?: BillingAddressMaxOrderByAggregateInput
    _min?: BillingAddressMinOrderByAggregateInput
  }

  export type BillingAddressScalarWhereWithAggregatesInput = {
    AND?: BillingAddressScalarWhereWithAggregatesInput | BillingAddressScalarWhereWithAggregatesInput[]
    OR?: BillingAddressScalarWhereWithAggregatesInput[]
    NOT?: BillingAddressScalarWhereWithAggregatesInput | BillingAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingAddress"> | string
    name?: StringWithAggregatesFilter<"BillingAddress"> | string
    street?: StringWithAggregatesFilter<"BillingAddress"> | string
    city?: StringWithAggregatesFilter<"BillingAddress"> | string
    postalCode?: StringWithAggregatesFilter<"BillingAddress"> | string
    country?: StringWithAggregatesFilter<"BillingAddress"> | string
    State?: StringNullableWithAggregatesFilter<"BillingAddress"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"BillingAddress"> | string | null
  }

  export type ConfigurationCreateInput = {
    id?: string
    width: number
    height: number
    imgUrl: string
    croppedImageUrl?: string | null
    color?: string | null
    model?: string | null
    finish?: string | null
    material?: string | null
    price?: number | null
    Order?: OrderCreateNestedManyWithoutConfigurationInput
  }

  export type ConfigurationUncheckedCreateInput = {
    id?: string
    width: number
    height: number
    imgUrl: string
    croppedImageUrl?: string | null
    color?: string | null
    model?: string | null
    finish?: string | null
    material?: string | null
    price?: number | null
    Order?: OrderUncheckedCreateNestedManyWithoutConfigurationInput
  }

  export type ConfigurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    Order?: OrderUpdateManyWithoutConfigurationNestedInput
  }

  export type ConfigurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    Order?: OrderUncheckedUpdateManyWithoutConfigurationNestedInput
  }

  export type ConfigurationCreateManyInput = {
    id?: string
    width: number
    height: number
    imgUrl: string
    croppedImageUrl?: string | null
    color?: string | null
    model?: string | null
    finish?: string | null
    material?: string | null
    price?: number | null
  }

  export type ConfigurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConfigurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateInput = {
    id?: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration: ConfigurationCreateNestedOneWithoutOrderInput
    shippingAddress: ShippingAddressCreateNestedOneWithoutOrderInput
    billingAddress: BillingAddressCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    configurationId: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    shippingAddressId: string
    billingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUpdateOneRequiredWithoutOrderNestedInput
    shippingAddress?: ShippingAddressUpdateOneRequiredWithoutOrderNestedInput
    billingAddress?: BillingAddressUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippingAddressId?: StringFieldUpdateOperationsInput | string
    billingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    configurationId: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    shippingAddressId: string
    billingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippingAddressId?: StringFieldUpdateOperationsInput | string
    billingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingAddressCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
    order?: OrderCreateNestedManyWithoutShippingAddressInput
  }

  export type ShippingAddressUncheckedCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
    order?: OrderUncheckedCreateNestedManyWithoutShippingAddressInput
  }

  export type ShippingAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateManyWithoutShippingAddressNestedInput
  }

  export type ShippingAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUncheckedUpdateManyWithoutShippingAddressNestedInput
  }

  export type ShippingAddressCreateManyInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
  }

  export type ShippingAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippingAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingAddressCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
    order?: OrderCreateNestedManyWithoutBillingAddressInput
  }

  export type BillingAddressUncheckedCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
    order?: OrderUncheckedCreateNestedManyWithoutBillingAddressInput
  }

  export type BillingAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateManyWithoutBillingAddressNestedInput
  }

  export type BillingAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUncheckedUpdateManyWithoutBillingAddressNestedInput
  }

  export type BillingAddressCreateManyInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
  }

  export type BillingAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imgUrl?: SortOrder
    croppedImageUrl?: SortOrder
    color?: SortOrder
    model?: SortOrder
    finish?: SortOrder
    material?: SortOrder
    price?: SortOrder
  }

  export type ConfigurationAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    price?: SortOrder
  }

  export type ConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imgUrl?: SortOrder
    croppedImageUrl?: SortOrder
    color?: SortOrder
    model?: SortOrder
    finish?: SortOrder
    material?: SortOrder
    price?: SortOrder
  }

  export type ConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imgUrl?: SortOrder
    croppedImageUrl?: SortOrder
    color?: SortOrder
    model?: SortOrder
    finish?: SortOrder
    material?: SortOrder
    price?: SortOrder
  }

  export type ConfigurationSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConfigurationScalarRelationFilter = {
    is?: ConfigurationWhereInput
    isNot?: ConfigurationWhereInput
  }

  export type ShippingAddressScalarRelationFilter = {
    is?: ShippingAddressWhereInput
    isNot?: ShippingAddressWhereInput
  }

  export type BillingAddressScalarRelationFilter = {
    is?: BillingAddressWhereInput
    isNot?: BillingAddressWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    amount?: SortOrder
    isPaid?: SortOrder
    status?: SortOrder
    shippingAddressId?: SortOrder
    billingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    amount?: SortOrder
    isPaid?: SortOrder
    status?: SortOrder
    shippingAddressId?: SortOrder
    billingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    amount?: SortOrder
    isPaid?: SortOrder
    status?: SortOrder
    shippingAddressId?: SortOrder
    billingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShippingAddressCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ShippingAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ShippingAddressMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrder
    phoneNumber?: SortOrder
  }

  export type BillingAddressCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrder
    phoneNumber?: SortOrder
  }

  export type BillingAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrder
    phoneNumber?: SortOrder
  }

  export type BillingAddressMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    State?: SortOrder
    phoneNumber?: SortOrder
  }

  export type OrderCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<OrderCreateWithoutConfigurationInput, OrderUncheckedCreateWithoutConfigurationInput> | OrderCreateWithoutConfigurationInput[] | OrderUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfigurationInput | OrderCreateOrConnectWithoutConfigurationInput[]
    createMany?: OrderCreateManyConfigurationInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<OrderCreateWithoutConfigurationInput, OrderUncheckedCreateWithoutConfigurationInput> | OrderCreateWithoutConfigurationInput[] | OrderUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfigurationInput | OrderCreateOrConnectWithoutConfigurationInput[]
    createMany?: OrderCreateManyConfigurationInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<OrderCreateWithoutConfigurationInput, OrderUncheckedCreateWithoutConfigurationInput> | OrderCreateWithoutConfigurationInput[] | OrderUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfigurationInput | OrderCreateOrConnectWithoutConfigurationInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutConfigurationInput | OrderUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: OrderCreateManyConfigurationInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutConfigurationInput | OrderUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutConfigurationInput | OrderUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<OrderCreateWithoutConfigurationInput, OrderUncheckedCreateWithoutConfigurationInput> | OrderCreateWithoutConfigurationInput[] | OrderUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfigurationInput | OrderCreateOrConnectWithoutConfigurationInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutConfigurationInput | OrderUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: OrderCreateManyConfigurationInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutConfigurationInput | OrderUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutConfigurationInput | OrderUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ConfigurationCreateNestedOneWithoutOrderInput = {
    create?: XOR<ConfigurationCreateWithoutOrderInput, ConfigurationUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutOrderInput
    connect?: ConfigurationWhereUniqueInput
  }

  export type ShippingAddressCreateNestedOneWithoutOrderInput = {
    create?: XOR<ShippingAddressCreateWithoutOrderInput, ShippingAddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutOrderInput
    connect?: ShippingAddressWhereUniqueInput
  }

  export type BillingAddressCreateNestedOneWithoutOrderInput = {
    create?: XOR<BillingAddressCreateWithoutOrderInput, BillingAddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: BillingAddressCreateOrConnectWithoutOrderInput
    connect?: BillingAddressWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConfigurationUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<ConfigurationCreateWithoutOrderInput, ConfigurationUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutOrderInput
    upsert?: ConfigurationUpsertWithoutOrderInput
    connect?: ConfigurationWhereUniqueInput
    update?: XOR<XOR<ConfigurationUpdateToOneWithWhereWithoutOrderInput, ConfigurationUpdateWithoutOrderInput>, ConfigurationUncheckedUpdateWithoutOrderInput>
  }

  export type ShippingAddressUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<ShippingAddressCreateWithoutOrderInput, ShippingAddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutOrderInput
    upsert?: ShippingAddressUpsertWithoutOrderInput
    connect?: ShippingAddressWhereUniqueInput
    update?: XOR<XOR<ShippingAddressUpdateToOneWithWhereWithoutOrderInput, ShippingAddressUpdateWithoutOrderInput>, ShippingAddressUncheckedUpdateWithoutOrderInput>
  }

  export type BillingAddressUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<BillingAddressCreateWithoutOrderInput, BillingAddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: BillingAddressCreateOrConnectWithoutOrderInput
    upsert?: BillingAddressUpsertWithoutOrderInput
    connect?: BillingAddressWhereUniqueInput
    update?: XOR<XOR<BillingAddressUpdateToOneWithWhereWithoutOrderInput, BillingAddressUpdateWithoutOrderInput>, BillingAddressUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedManyWithoutShippingAddressInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[]
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutShippingAddressInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[]
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutShippingAddressNestedInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShippingAddressInput | OrderUpsertWithWhereUniqueWithoutShippingAddressInput[]
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShippingAddressInput | OrderUpdateWithWhereUniqueWithoutShippingAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShippingAddressInput | OrderUpdateManyWithWhereWithoutShippingAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutShippingAddressNestedInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShippingAddressInput | OrderUpsertWithWhereUniqueWithoutShippingAddressInput[]
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShippingAddressInput | OrderUpdateWithWhereUniqueWithoutShippingAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShippingAddressInput | OrderUpdateManyWithWhereWithoutShippingAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutBillingAddressInput = {
    create?: XOR<OrderCreateWithoutBillingAddressInput, OrderUncheckedCreateWithoutBillingAddressInput> | OrderCreateWithoutBillingAddressInput[] | OrderUncheckedCreateWithoutBillingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingAddressInput | OrderCreateOrConnectWithoutBillingAddressInput[]
    createMany?: OrderCreateManyBillingAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBillingAddressInput = {
    create?: XOR<OrderCreateWithoutBillingAddressInput, OrderUncheckedCreateWithoutBillingAddressInput> | OrderCreateWithoutBillingAddressInput[] | OrderUncheckedCreateWithoutBillingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingAddressInput | OrderCreateOrConnectWithoutBillingAddressInput[]
    createMany?: OrderCreateManyBillingAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutBillingAddressNestedInput = {
    create?: XOR<OrderCreateWithoutBillingAddressInput, OrderUncheckedCreateWithoutBillingAddressInput> | OrderCreateWithoutBillingAddressInput[] | OrderUncheckedCreateWithoutBillingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingAddressInput | OrderCreateOrConnectWithoutBillingAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBillingAddressInput | OrderUpsertWithWhereUniqueWithoutBillingAddressInput[]
    createMany?: OrderCreateManyBillingAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBillingAddressInput | OrderUpdateWithWhereUniqueWithoutBillingAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBillingAddressInput | OrderUpdateManyWithWhereWithoutBillingAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBillingAddressNestedInput = {
    create?: XOR<OrderCreateWithoutBillingAddressInput, OrderUncheckedCreateWithoutBillingAddressInput> | OrderCreateWithoutBillingAddressInput[] | OrderUncheckedCreateWithoutBillingAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingAddressInput | OrderCreateOrConnectWithoutBillingAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBillingAddressInput | OrderUpsertWithWhereUniqueWithoutBillingAddressInput[]
    createMany?: OrderCreateManyBillingAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBillingAddressInput | OrderUpdateWithWhereUniqueWithoutBillingAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBillingAddressInput | OrderUpdateManyWithWhereWithoutBillingAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderCreateWithoutConfigurationInput = {
    id?: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingAddress: ShippingAddressCreateNestedOneWithoutOrderInput
    billingAddress: BillingAddressCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutConfigurationInput = {
    id?: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    shippingAddressId: string
    billingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutConfigurationInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutConfigurationInput, OrderUncheckedCreateWithoutConfigurationInput>
  }

  export type OrderCreateManyConfigurationInputEnvelope = {
    data: OrderCreateManyConfigurationInput | OrderCreateManyConfigurationInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutConfigurationInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutConfigurationInput, OrderUncheckedUpdateWithoutConfigurationInput>
    create: XOR<OrderCreateWithoutConfigurationInput, OrderUncheckedCreateWithoutConfigurationInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutConfigurationInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutConfigurationInput, OrderUncheckedUpdateWithoutConfigurationInput>
  }

  export type OrderUpdateManyWithWhereWithoutConfigurationInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutConfigurationInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    configurationId?: StringFilter<"Order"> | string
    amount?: FloatFilter<"Order"> | number
    isPaid?: BoolFilter<"Order"> | boolean
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    shippingAddressId?: StringFilter<"Order"> | string
    billingAddressId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ConfigurationCreateWithoutOrderInput = {
    id?: string
    width: number
    height: number
    imgUrl: string
    croppedImageUrl?: string | null
    color?: string | null
    model?: string | null
    finish?: string | null
    material?: string | null
    price?: number | null
  }

  export type ConfigurationUncheckedCreateWithoutOrderInput = {
    id?: string
    width: number
    height: number
    imgUrl: string
    croppedImageUrl?: string | null
    color?: string | null
    model?: string | null
    finish?: string | null
    material?: string | null
    price?: number | null
  }

  export type ConfigurationCreateOrConnectWithoutOrderInput = {
    where: ConfigurationWhereUniqueInput
    create: XOR<ConfigurationCreateWithoutOrderInput, ConfigurationUncheckedCreateWithoutOrderInput>
  }

  export type ShippingAddressCreateWithoutOrderInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
  }

  export type ShippingAddressUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
  }

  export type ShippingAddressCreateOrConnectWithoutOrderInput = {
    where: ShippingAddressWhereUniqueInput
    create: XOR<ShippingAddressCreateWithoutOrderInput, ShippingAddressUncheckedCreateWithoutOrderInput>
  }

  export type BillingAddressCreateWithoutOrderInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
  }

  export type BillingAddressUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    street: string
    city: string
    postalCode: string
    country: string
    State?: string | null
    phoneNumber?: string | null
  }

  export type BillingAddressCreateOrConnectWithoutOrderInput = {
    where: BillingAddressWhereUniqueInput
    create: XOR<BillingAddressCreateWithoutOrderInput, BillingAddressUncheckedCreateWithoutOrderInput>
  }

  export type ConfigurationUpsertWithoutOrderInput = {
    update: XOR<ConfigurationUpdateWithoutOrderInput, ConfigurationUncheckedUpdateWithoutOrderInput>
    create: XOR<ConfigurationCreateWithoutOrderInput, ConfigurationUncheckedCreateWithoutOrderInput>
    where?: ConfigurationWhereInput
  }

  export type ConfigurationUpdateToOneWithWhereWithoutOrderInput = {
    where?: ConfigurationWhereInput
    data: XOR<ConfigurationUpdateWithoutOrderInput, ConfigurationUncheckedUpdateWithoutOrderInput>
  }

  export type ConfigurationUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConfigurationUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShippingAddressUpsertWithoutOrderInput = {
    update: XOR<ShippingAddressUpdateWithoutOrderInput, ShippingAddressUncheckedUpdateWithoutOrderInput>
    create: XOR<ShippingAddressCreateWithoutOrderInput, ShippingAddressUncheckedCreateWithoutOrderInput>
    where?: ShippingAddressWhereInput
  }

  export type ShippingAddressUpdateToOneWithWhereWithoutOrderInput = {
    where?: ShippingAddressWhereInput
    data: XOR<ShippingAddressUpdateWithoutOrderInput, ShippingAddressUncheckedUpdateWithoutOrderInput>
  }

  export type ShippingAddressUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippingAddressUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingAddressUpsertWithoutOrderInput = {
    update: XOR<BillingAddressUpdateWithoutOrderInput, BillingAddressUncheckedUpdateWithoutOrderInput>
    create: XOR<BillingAddressCreateWithoutOrderInput, BillingAddressUncheckedCreateWithoutOrderInput>
    where?: BillingAddressWhereInput
  }

  export type BillingAddressUpdateToOneWithWhereWithoutOrderInput = {
    where?: BillingAddressWhereInput
    data: XOR<BillingAddressUpdateWithoutOrderInput, BillingAddressUncheckedUpdateWithoutOrderInput>
  }

  export type BillingAddressUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingAddressUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    State?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateWithoutShippingAddressInput = {
    id?: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration: ConfigurationCreateNestedOneWithoutOrderInput
    billingAddress: BillingAddressCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShippingAddressInput = {
    id?: string
    configurationId: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    billingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput>
  }

  export type OrderCreateManyShippingAddressInputEnvelope = {
    data: OrderCreateManyShippingAddressInput | OrderCreateManyShippingAddressInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShippingAddressInput, OrderUncheckedUpdateWithoutShippingAddressInput>
    create: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShippingAddressInput, OrderUncheckedUpdateWithoutShippingAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutShippingAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShippingAddressInput>
  }

  export type OrderCreateWithoutBillingAddressInput = {
    id?: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration: ConfigurationCreateNestedOneWithoutOrderInput
    shippingAddress: ShippingAddressCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutBillingAddressInput = {
    id?: string
    configurationId: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    shippingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutBillingAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBillingAddressInput, OrderUncheckedCreateWithoutBillingAddressInput>
  }

  export type OrderCreateManyBillingAddressInputEnvelope = {
    data: OrderCreateManyBillingAddressInput | OrderCreateManyBillingAddressInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutBillingAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBillingAddressInput, OrderUncheckedUpdateWithoutBillingAddressInput>
    create: XOR<OrderCreateWithoutBillingAddressInput, OrderUncheckedCreateWithoutBillingAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBillingAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBillingAddressInput, OrderUncheckedUpdateWithoutBillingAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutBillingAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBillingAddressInput>
  }

  export type OrderCreateManyConfigurationInput = {
    id?: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    shippingAddressId: string
    billingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingAddress?: ShippingAddressUpdateOneRequiredWithoutOrderNestedInput
    billingAddress?: BillingAddressUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippingAddressId?: StringFieldUpdateOperationsInput | string
    billingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippingAddressId?: StringFieldUpdateOperationsInput | string
    billingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyShippingAddressInput = {
    id?: string
    configurationId: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    billingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutShippingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUpdateOneRequiredWithoutOrderNestedInput
    billingAddress?: BillingAddressUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShippingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    billingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutShippingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    billingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyBillingAddressInput = {
    id?: string
    configurationId: string
    amount: number
    isPaid?: boolean
    status?: $Enums.OrderStatus
    shippingAddressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutBillingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUpdateOneRequiredWithoutOrderNestedInput
    shippingAddress?: ShippingAddressUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutBillingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutBillingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippingAddressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}