
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
 * Model Appoitnement
 * 
 */
export type Appoitnement = $Result.DefaultSelection<Prisma.$AppoitnementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appoitnements
 * const appoitnements = await prisma.appoitnement.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Appoitnements
   * const appoitnements = await prisma.appoitnement.findMany()
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
   * `prisma.appoitnement`: Exposes CRUD operations for the **Appoitnement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appoitnements
    * const appoitnements = await prisma.appoitnement.findMany()
    * ```
    */
  get appoitnement(): Prisma.AppoitnementDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Appoitnement: 'Appoitnement'
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
      modelProps: "appoitnement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appoitnement: {
        payload: Prisma.$AppoitnementPayload<ExtArgs>
        fields: Prisma.AppoitnementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppoitnementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppoitnementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>
          }
          findFirst: {
            args: Prisma.AppoitnementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppoitnementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>
          }
          findMany: {
            args: Prisma.AppoitnementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>[]
          }
          create: {
            args: Prisma.AppoitnementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>
          }
          createMany: {
            args: Prisma.AppoitnementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppoitnementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>[]
          }
          delete: {
            args: Prisma.AppoitnementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>
          }
          update: {
            args: Prisma.AppoitnementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>
          }
          deleteMany: {
            args: Prisma.AppoitnementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppoitnementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppoitnementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>[]
          }
          upsert: {
            args: Prisma.AppoitnementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppoitnementPayload>
          }
          aggregate: {
            args: Prisma.AppoitnementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppoitnement>
          }
          groupBy: {
            args: Prisma.AppoitnementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppoitnementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppoitnementCountArgs<ExtArgs>
            result: $Utils.Optional<AppoitnementCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    appoitnement?: AppoitnementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model Appoitnement
   */

  export type AggregateAppoitnement = {
    _count: AppoitnementCountAggregateOutputType | null
    _avg: AppoitnementAvgAggregateOutputType | null
    _sum: AppoitnementSumAggregateOutputType | null
    _min: AppoitnementMinAggregateOutputType | null
    _max: AppoitnementMaxAggregateOutputType | null
  }

  export type AppoitnementAvgAggregateOutputType = {
    id: number | null
    mobile: number | null
  }

  export type AppoitnementSumAggregateOutputType = {
    id: number | null
    mobile: number | null
  }

  export type AppoitnementMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: number | null
    timezone: string | null
    notes: string | null
    date: string | null
    timeslot: string | null
  }

  export type AppoitnementMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: number | null
    timezone: string | null
    notes: string | null
    date: string | null
    timeslot: string | null
  }

  export type AppoitnementCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    mobile: number
    timezone: number
    notes: number
    date: number
    timeslot: number
    _all: number
  }


  export type AppoitnementAvgAggregateInputType = {
    id?: true
    mobile?: true
  }

  export type AppoitnementSumAggregateInputType = {
    id?: true
    mobile?: true
  }

  export type AppoitnementMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    timezone?: true
    notes?: true
    date?: true
    timeslot?: true
  }

  export type AppoitnementMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    timezone?: true
    notes?: true
    date?: true
    timeslot?: true
  }

  export type AppoitnementCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    timezone?: true
    notes?: true
    date?: true
    timeslot?: true
    _all?: true
  }

  export type AppoitnementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appoitnement to aggregate.
     */
    where?: AppoitnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appoitnements to fetch.
     */
    orderBy?: AppoitnementOrderByWithRelationInput | AppoitnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppoitnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appoitnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appoitnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appoitnements
    **/
    _count?: true | AppoitnementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppoitnementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppoitnementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppoitnementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppoitnementMaxAggregateInputType
  }

  export type GetAppoitnementAggregateType<T extends AppoitnementAggregateArgs> = {
        [P in keyof T & keyof AggregateAppoitnement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppoitnement[P]>
      : GetScalarType<T[P], AggregateAppoitnement[P]>
  }




  export type AppoitnementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppoitnementWhereInput
    orderBy?: AppoitnementOrderByWithAggregationInput | AppoitnementOrderByWithAggregationInput[]
    by: AppoitnementScalarFieldEnum[] | AppoitnementScalarFieldEnum
    having?: AppoitnementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppoitnementCountAggregateInputType | true
    _avg?: AppoitnementAvgAggregateInputType
    _sum?: AppoitnementSumAggregateInputType
    _min?: AppoitnementMinAggregateInputType
    _max?: AppoitnementMaxAggregateInputType
  }

  export type AppoitnementGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    mobile: number
    timezone: string
    notes: string
    date: string
    timeslot: string
    _count: AppoitnementCountAggregateOutputType | null
    _avg: AppoitnementAvgAggregateOutputType | null
    _sum: AppoitnementSumAggregateOutputType | null
    _min: AppoitnementMinAggregateOutputType | null
    _max: AppoitnementMaxAggregateOutputType | null
  }

  type GetAppoitnementGroupByPayload<T extends AppoitnementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppoitnementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppoitnementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppoitnementGroupByOutputType[P]>
            : GetScalarType<T[P], AppoitnementGroupByOutputType[P]>
        }
      >
    >


  export type AppoitnementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    timezone?: boolean
    notes?: boolean
    date?: boolean
    timeslot?: boolean
  }, ExtArgs["result"]["appoitnement"]>

  export type AppoitnementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    timezone?: boolean
    notes?: boolean
    date?: boolean
    timeslot?: boolean
  }, ExtArgs["result"]["appoitnement"]>

  export type AppoitnementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    timezone?: boolean
    notes?: boolean
    date?: boolean
    timeslot?: boolean
  }, ExtArgs["result"]["appoitnement"]>

  export type AppoitnementSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    timezone?: boolean
    notes?: boolean
    date?: boolean
    timeslot?: boolean
  }

  export type AppoitnementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "mobile" | "timezone" | "notes" | "date" | "timeslot", ExtArgs["result"]["appoitnement"]>

  export type $AppoitnementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appoitnement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      mobile: number
      timezone: string
      notes: string
      date: string
      timeslot: string
    }, ExtArgs["result"]["appoitnement"]>
    composites: {}
  }

  type AppoitnementGetPayload<S extends boolean | null | undefined | AppoitnementDefaultArgs> = $Result.GetResult<Prisma.$AppoitnementPayload, S>

  type AppoitnementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppoitnementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppoitnementCountAggregateInputType | true
    }

  export interface AppoitnementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appoitnement'], meta: { name: 'Appoitnement' } }
    /**
     * Find zero or one Appoitnement that matches the filter.
     * @param {AppoitnementFindUniqueArgs} args - Arguments to find a Appoitnement
     * @example
     * // Get one Appoitnement
     * const appoitnement = await prisma.appoitnement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppoitnementFindUniqueArgs>(args: SelectSubset<T, AppoitnementFindUniqueArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appoitnement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppoitnementFindUniqueOrThrowArgs} args - Arguments to find a Appoitnement
     * @example
     * // Get one Appoitnement
     * const appoitnement = await prisma.appoitnement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppoitnementFindUniqueOrThrowArgs>(args: SelectSubset<T, AppoitnementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appoitnement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppoitnementFindFirstArgs} args - Arguments to find a Appoitnement
     * @example
     * // Get one Appoitnement
     * const appoitnement = await prisma.appoitnement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppoitnementFindFirstArgs>(args?: SelectSubset<T, AppoitnementFindFirstArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appoitnement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppoitnementFindFirstOrThrowArgs} args - Arguments to find a Appoitnement
     * @example
     * // Get one Appoitnement
     * const appoitnement = await prisma.appoitnement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppoitnementFindFirstOrThrowArgs>(args?: SelectSubset<T, AppoitnementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appoitnements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppoitnementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appoitnements
     * const appoitnements = await prisma.appoitnement.findMany()
     * 
     * // Get first 10 Appoitnements
     * const appoitnements = await prisma.appoitnement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appoitnementWithIdOnly = await prisma.appoitnement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppoitnementFindManyArgs>(args?: SelectSubset<T, AppoitnementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appoitnement.
     * @param {AppoitnementCreateArgs} args - Arguments to create a Appoitnement.
     * @example
     * // Create one Appoitnement
     * const Appoitnement = await prisma.appoitnement.create({
     *   data: {
     *     // ... data to create a Appoitnement
     *   }
     * })
     * 
     */
    create<T extends AppoitnementCreateArgs>(args: SelectSubset<T, AppoitnementCreateArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appoitnements.
     * @param {AppoitnementCreateManyArgs} args - Arguments to create many Appoitnements.
     * @example
     * // Create many Appoitnements
     * const appoitnement = await prisma.appoitnement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppoitnementCreateManyArgs>(args?: SelectSubset<T, AppoitnementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appoitnements and returns the data saved in the database.
     * @param {AppoitnementCreateManyAndReturnArgs} args - Arguments to create many Appoitnements.
     * @example
     * // Create many Appoitnements
     * const appoitnement = await prisma.appoitnement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appoitnements and only return the `id`
     * const appoitnementWithIdOnly = await prisma.appoitnement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppoitnementCreateManyAndReturnArgs>(args?: SelectSubset<T, AppoitnementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appoitnement.
     * @param {AppoitnementDeleteArgs} args - Arguments to delete one Appoitnement.
     * @example
     * // Delete one Appoitnement
     * const Appoitnement = await prisma.appoitnement.delete({
     *   where: {
     *     // ... filter to delete one Appoitnement
     *   }
     * })
     * 
     */
    delete<T extends AppoitnementDeleteArgs>(args: SelectSubset<T, AppoitnementDeleteArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appoitnement.
     * @param {AppoitnementUpdateArgs} args - Arguments to update one Appoitnement.
     * @example
     * // Update one Appoitnement
     * const appoitnement = await prisma.appoitnement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppoitnementUpdateArgs>(args: SelectSubset<T, AppoitnementUpdateArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appoitnements.
     * @param {AppoitnementDeleteManyArgs} args - Arguments to filter Appoitnements to delete.
     * @example
     * // Delete a few Appoitnements
     * const { count } = await prisma.appoitnement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppoitnementDeleteManyArgs>(args?: SelectSubset<T, AppoitnementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appoitnements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppoitnementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appoitnements
     * const appoitnement = await prisma.appoitnement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppoitnementUpdateManyArgs>(args: SelectSubset<T, AppoitnementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appoitnements and returns the data updated in the database.
     * @param {AppoitnementUpdateManyAndReturnArgs} args - Arguments to update many Appoitnements.
     * @example
     * // Update many Appoitnements
     * const appoitnement = await prisma.appoitnement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appoitnements and only return the `id`
     * const appoitnementWithIdOnly = await prisma.appoitnement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppoitnementUpdateManyAndReturnArgs>(args: SelectSubset<T, AppoitnementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appoitnement.
     * @param {AppoitnementUpsertArgs} args - Arguments to update or create a Appoitnement.
     * @example
     * // Update or create a Appoitnement
     * const appoitnement = await prisma.appoitnement.upsert({
     *   create: {
     *     // ... data to create a Appoitnement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appoitnement we want to update
     *   }
     * })
     */
    upsert<T extends AppoitnementUpsertArgs>(args: SelectSubset<T, AppoitnementUpsertArgs<ExtArgs>>): Prisma__AppoitnementClient<$Result.GetResult<Prisma.$AppoitnementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appoitnements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppoitnementCountArgs} args - Arguments to filter Appoitnements to count.
     * @example
     * // Count the number of Appoitnements
     * const count = await prisma.appoitnement.count({
     *   where: {
     *     // ... the filter for the Appoitnements we want to count
     *   }
     * })
    **/
    count<T extends AppoitnementCountArgs>(
      args?: Subset<T, AppoitnementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppoitnementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appoitnement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppoitnementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppoitnementAggregateArgs>(args: Subset<T, AppoitnementAggregateArgs>): Prisma.PrismaPromise<GetAppoitnementAggregateType<T>>

    /**
     * Group by Appoitnement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppoitnementGroupByArgs} args - Group by arguments.
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
      T extends AppoitnementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppoitnementGroupByArgs['orderBy'] }
        : { orderBy?: AppoitnementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppoitnementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppoitnementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appoitnement model
   */
  readonly fields: AppoitnementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appoitnement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppoitnementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Appoitnement model
   */
  interface AppoitnementFieldRefs {
    readonly id: FieldRef<"Appoitnement", 'Int'>
    readonly firstName: FieldRef<"Appoitnement", 'String'>
    readonly lastName: FieldRef<"Appoitnement", 'String'>
    readonly email: FieldRef<"Appoitnement", 'String'>
    readonly mobile: FieldRef<"Appoitnement", 'Int'>
    readonly timezone: FieldRef<"Appoitnement", 'String'>
    readonly notes: FieldRef<"Appoitnement", 'String'>
    readonly date: FieldRef<"Appoitnement", 'String'>
    readonly timeslot: FieldRef<"Appoitnement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appoitnement findUnique
   */
  export type AppoitnementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * Filter, which Appoitnement to fetch.
     */
    where: AppoitnementWhereUniqueInput
  }

  /**
   * Appoitnement findUniqueOrThrow
   */
  export type AppoitnementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * Filter, which Appoitnement to fetch.
     */
    where: AppoitnementWhereUniqueInput
  }

  /**
   * Appoitnement findFirst
   */
  export type AppoitnementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * Filter, which Appoitnement to fetch.
     */
    where?: AppoitnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appoitnements to fetch.
     */
    orderBy?: AppoitnementOrderByWithRelationInput | AppoitnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appoitnements.
     */
    cursor?: AppoitnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appoitnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appoitnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appoitnements.
     */
    distinct?: AppoitnementScalarFieldEnum | AppoitnementScalarFieldEnum[]
  }

  /**
   * Appoitnement findFirstOrThrow
   */
  export type AppoitnementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * Filter, which Appoitnement to fetch.
     */
    where?: AppoitnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appoitnements to fetch.
     */
    orderBy?: AppoitnementOrderByWithRelationInput | AppoitnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appoitnements.
     */
    cursor?: AppoitnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appoitnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appoitnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appoitnements.
     */
    distinct?: AppoitnementScalarFieldEnum | AppoitnementScalarFieldEnum[]
  }

  /**
   * Appoitnement findMany
   */
  export type AppoitnementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * Filter, which Appoitnements to fetch.
     */
    where?: AppoitnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appoitnements to fetch.
     */
    orderBy?: AppoitnementOrderByWithRelationInput | AppoitnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appoitnements.
     */
    cursor?: AppoitnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appoitnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appoitnements.
     */
    skip?: number
    distinct?: AppoitnementScalarFieldEnum | AppoitnementScalarFieldEnum[]
  }

  /**
   * Appoitnement create
   */
  export type AppoitnementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * The data needed to create a Appoitnement.
     */
    data: XOR<AppoitnementCreateInput, AppoitnementUncheckedCreateInput>
  }

  /**
   * Appoitnement createMany
   */
  export type AppoitnementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appoitnements.
     */
    data: AppoitnementCreateManyInput | AppoitnementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appoitnement createManyAndReturn
   */
  export type AppoitnementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * The data used to create many Appoitnements.
     */
    data: AppoitnementCreateManyInput | AppoitnementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appoitnement update
   */
  export type AppoitnementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * The data needed to update a Appoitnement.
     */
    data: XOR<AppoitnementUpdateInput, AppoitnementUncheckedUpdateInput>
    /**
     * Choose, which Appoitnement to update.
     */
    where: AppoitnementWhereUniqueInput
  }

  /**
   * Appoitnement updateMany
   */
  export type AppoitnementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appoitnements.
     */
    data: XOR<AppoitnementUpdateManyMutationInput, AppoitnementUncheckedUpdateManyInput>
    /**
     * Filter which Appoitnements to update
     */
    where?: AppoitnementWhereInput
    /**
     * Limit how many Appoitnements to update.
     */
    limit?: number
  }

  /**
   * Appoitnement updateManyAndReturn
   */
  export type AppoitnementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * The data used to update Appoitnements.
     */
    data: XOR<AppoitnementUpdateManyMutationInput, AppoitnementUncheckedUpdateManyInput>
    /**
     * Filter which Appoitnements to update
     */
    where?: AppoitnementWhereInput
    /**
     * Limit how many Appoitnements to update.
     */
    limit?: number
  }

  /**
   * Appoitnement upsert
   */
  export type AppoitnementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * The filter to search for the Appoitnement to update in case it exists.
     */
    where: AppoitnementWhereUniqueInput
    /**
     * In case the Appoitnement found by the `where` argument doesn't exist, create a new Appoitnement with this data.
     */
    create: XOR<AppoitnementCreateInput, AppoitnementUncheckedCreateInput>
    /**
     * In case the Appoitnement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppoitnementUpdateInput, AppoitnementUncheckedUpdateInput>
  }

  /**
   * Appoitnement delete
   */
  export type AppoitnementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
    /**
     * Filter which Appoitnement to delete.
     */
    where: AppoitnementWhereUniqueInput
  }

  /**
   * Appoitnement deleteMany
   */
  export type AppoitnementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appoitnements to delete
     */
    where?: AppoitnementWhereInput
    /**
     * Limit how many Appoitnements to delete.
     */
    limit?: number
  }

  /**
   * Appoitnement without action
   */
  export type AppoitnementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appoitnement
     */
    select?: AppoitnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appoitnement
     */
    omit?: AppoitnementOmit<ExtArgs> | null
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


  export const AppoitnementScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'mobile',
    timezone: 'timezone',
    notes: 'notes',
    date: 'date',
    timeslot: 'timeslot'
  };

  export type AppoitnementScalarFieldEnum = (typeof AppoitnementScalarFieldEnum)[keyof typeof AppoitnementScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppoitnementWhereInput = {
    AND?: AppoitnementWhereInput | AppoitnementWhereInput[]
    OR?: AppoitnementWhereInput[]
    NOT?: AppoitnementWhereInput | AppoitnementWhereInput[]
    id?: IntFilter<"Appoitnement"> | number
    firstName?: StringFilter<"Appoitnement"> | string
    lastName?: StringFilter<"Appoitnement"> | string
    email?: StringFilter<"Appoitnement"> | string
    mobile?: IntFilter<"Appoitnement"> | number
    timezone?: StringFilter<"Appoitnement"> | string
    notes?: StringFilter<"Appoitnement"> | string
    date?: StringFilter<"Appoitnement"> | string
    timeslot?: StringFilter<"Appoitnement"> | string
  }

  export type AppoitnementOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    timezone?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    timeslot?: SortOrder
  }

  export type AppoitnementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppoitnementWhereInput | AppoitnementWhereInput[]
    OR?: AppoitnementWhereInput[]
    NOT?: AppoitnementWhereInput | AppoitnementWhereInput[]
    firstName?: StringFilter<"Appoitnement"> | string
    lastName?: StringFilter<"Appoitnement"> | string
    email?: StringFilter<"Appoitnement"> | string
    mobile?: IntFilter<"Appoitnement"> | number
    timezone?: StringFilter<"Appoitnement"> | string
    notes?: StringFilter<"Appoitnement"> | string
    date?: StringFilter<"Appoitnement"> | string
    timeslot?: StringFilter<"Appoitnement"> | string
  }, "id">

  export type AppoitnementOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    timezone?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    timeslot?: SortOrder
    _count?: AppoitnementCountOrderByAggregateInput
    _avg?: AppoitnementAvgOrderByAggregateInput
    _max?: AppoitnementMaxOrderByAggregateInput
    _min?: AppoitnementMinOrderByAggregateInput
    _sum?: AppoitnementSumOrderByAggregateInput
  }

  export type AppoitnementScalarWhereWithAggregatesInput = {
    AND?: AppoitnementScalarWhereWithAggregatesInput | AppoitnementScalarWhereWithAggregatesInput[]
    OR?: AppoitnementScalarWhereWithAggregatesInput[]
    NOT?: AppoitnementScalarWhereWithAggregatesInput | AppoitnementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appoitnement"> | number
    firstName?: StringWithAggregatesFilter<"Appoitnement"> | string
    lastName?: StringWithAggregatesFilter<"Appoitnement"> | string
    email?: StringWithAggregatesFilter<"Appoitnement"> | string
    mobile?: IntWithAggregatesFilter<"Appoitnement"> | number
    timezone?: StringWithAggregatesFilter<"Appoitnement"> | string
    notes?: StringWithAggregatesFilter<"Appoitnement"> | string
    date?: StringWithAggregatesFilter<"Appoitnement"> | string
    timeslot?: StringWithAggregatesFilter<"Appoitnement"> | string
  }

  export type AppoitnementCreateInput = {
    firstName: string
    lastName: string
    email: string
    mobile: number
    timezone: string
    notes: string
    date: string
    timeslot: string
  }

  export type AppoitnementUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    mobile: number
    timezone: string
    notes: string
    date: string
    timeslot: string
  }

  export type AppoitnementUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeslot?: StringFieldUpdateOperationsInput | string
  }

  export type AppoitnementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeslot?: StringFieldUpdateOperationsInput | string
  }

  export type AppoitnementCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    mobile: number
    timezone: string
    notes: string
    date: string
    timeslot: string
  }

  export type AppoitnementUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeslot?: StringFieldUpdateOperationsInput | string
  }

  export type AppoitnementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeslot?: StringFieldUpdateOperationsInput | string
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

  export type AppoitnementCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    timezone?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    timeslot?: SortOrder
  }

  export type AppoitnementAvgOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
  }

  export type AppoitnementMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    timezone?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    timeslot?: SortOrder
  }

  export type AppoitnementMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    timezone?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    timeslot?: SortOrder
  }

  export type AppoitnementSumOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
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