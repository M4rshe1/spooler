
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Spool
 * SOLID | GRADIENT | MULTI
 */
export type Spool = $Result.DefaultSelection<Prisma.$SpoolPayload>
/**
 * Model SpoolColorStop
 * 
 */
export type SpoolColorStop = $Result.DefaultSelection<Prisma.$SpoolColorStopPayload>
/**
 * Model Usage
 * 
 */
export type Usage = $Result.DefaultSelection<Prisma.$UsagePayload>
/**
 * Model CustomField
 * TEXT | NUMBER | BOOLEAN | DATE | SELECT | MULTISELECT
 */
export type CustomField = $Result.DefaultSelection<Prisma.$CustomFieldPayload>
/**
 * Model CustomFieldValue
 * 
 */
export type CustomFieldValue = $Result.DefaultSelection<Prisma.$CustomFieldValuePayload>
/**
 * Model AppSetup
 * Singleton row (id = 1) tracking first-run setup
 */
export type AppSetup = $Result.DefaultSelection<Prisma.$AppSetupPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spool`: Exposes CRUD operations for the **Spool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spools
    * const spools = await prisma.spool.findMany()
    * ```
    */
  get spool(): Prisma.SpoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spoolColorStop`: Exposes CRUD operations for the **SpoolColorStop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpoolColorStops
    * const spoolColorStops = await prisma.spoolColorStop.findMany()
    * ```
    */
  get spoolColorStop(): Prisma.SpoolColorStopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usage`: Exposes CRUD operations for the **Usage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usages
    * const usages = await prisma.usage.findMany()
    * ```
    */
  get usage(): Prisma.UsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customField`: Exposes CRUD operations for the **CustomField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomFields
    * const customFields = await prisma.customField.findMany()
    * ```
    */
  get customField(): Prisma.CustomFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customFieldValue`: Exposes CRUD operations for the **CustomFieldValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomFieldValues
    * const customFieldValues = await prisma.customFieldValue.findMany()
    * ```
    */
  get customFieldValue(): Prisma.CustomFieldValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appSetup`: Exposes CRUD operations for the **AppSetup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSetups
    * const appSetups = await prisma.appSetup.findMany()
    * ```
    */
  get appSetup(): Prisma.AppSetupDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Brand: 'Brand',
    Material: 'Material',
    Location: 'Location',
    Spool: 'Spool',
    SpoolColorStop: 'SpoolColorStop',
    Usage: 'Usage',
    CustomField: 'CustomField',
    CustomFieldValue: 'CustomFieldValue',
    AppSetup: 'AppSetup'
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
      modelProps: "user" | "session" | "account" | "verification" | "brand" | "material" | "location" | "spool" | "spoolColorStop" | "usage" | "customField" | "customFieldValue" | "appSetup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Spool: {
        payload: Prisma.$SpoolPayload<ExtArgs>
        fields: Prisma.SpoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>
          }
          findFirst: {
            args: Prisma.SpoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>
          }
          findMany: {
            args: Prisma.SpoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>[]
          }
          create: {
            args: Prisma.SpoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>
          }
          createMany: {
            args: Prisma.SpoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>[]
          }
          delete: {
            args: Prisma.SpoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>
          }
          update: {
            args: Prisma.SpoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>
          }
          deleteMany: {
            args: Prisma.SpoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>[]
          }
          upsert: {
            args: Prisma.SpoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolPayload>
          }
          aggregate: {
            args: Prisma.SpoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpool>
          }
          groupBy: {
            args: Prisma.SpoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpoolCountArgs<ExtArgs>
            result: $Utils.Optional<SpoolCountAggregateOutputType> | number
          }
        }
      }
      SpoolColorStop: {
        payload: Prisma.$SpoolColorStopPayload<ExtArgs>
        fields: Prisma.SpoolColorStopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpoolColorStopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpoolColorStopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>
          }
          findFirst: {
            args: Prisma.SpoolColorStopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpoolColorStopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>
          }
          findMany: {
            args: Prisma.SpoolColorStopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>[]
          }
          create: {
            args: Prisma.SpoolColorStopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>
          }
          createMany: {
            args: Prisma.SpoolColorStopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpoolColorStopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>[]
          }
          delete: {
            args: Prisma.SpoolColorStopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>
          }
          update: {
            args: Prisma.SpoolColorStopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>
          }
          deleteMany: {
            args: Prisma.SpoolColorStopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpoolColorStopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpoolColorStopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>[]
          }
          upsert: {
            args: Prisma.SpoolColorStopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpoolColorStopPayload>
          }
          aggregate: {
            args: Prisma.SpoolColorStopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpoolColorStop>
          }
          groupBy: {
            args: Prisma.SpoolColorStopGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpoolColorStopGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpoolColorStopCountArgs<ExtArgs>
            result: $Utils.Optional<SpoolColorStopCountAggregateOutputType> | number
          }
        }
      }
      Usage: {
        payload: Prisma.$UsagePayload<ExtArgs>
        fields: Prisma.UsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          findFirst: {
            args: Prisma.UsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          findMany: {
            args: Prisma.UsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>[]
          }
          create: {
            args: Prisma.UsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          createMany: {
            args: Prisma.UsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>[]
          }
          delete: {
            args: Prisma.UsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          update: {
            args: Prisma.UsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          deleteMany: {
            args: Prisma.UsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>[]
          }
          upsert: {
            args: Prisma.UsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          aggregate: {
            args: Prisma.UsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsage>
          }
          groupBy: {
            args: Prisma.UsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageCountArgs<ExtArgs>
            result: $Utils.Optional<UsageCountAggregateOutputType> | number
          }
        }
      }
      CustomField: {
        payload: Prisma.$CustomFieldPayload<ExtArgs>
        fields: Prisma.CustomFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          findFirst: {
            args: Prisma.CustomFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          findMany: {
            args: Prisma.CustomFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          create: {
            args: Prisma.CustomFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          createMany: {
            args: Prisma.CustomFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          delete: {
            args: Prisma.CustomFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          update: {
            args: Prisma.CustomFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          deleteMany: {
            args: Prisma.CustomFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          upsert: {
            args: Prisma.CustomFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          aggregate: {
            args: Prisma.CustomFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomField>
          }
          groupBy: {
            args: Prisma.CustomFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomFieldCountArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldCountAggregateOutputType> | number
          }
        }
      }
      CustomFieldValue: {
        payload: Prisma.$CustomFieldValuePayload<ExtArgs>
        fields: Prisma.CustomFieldValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomFieldValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomFieldValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          findFirst: {
            args: Prisma.CustomFieldValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomFieldValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          findMany: {
            args: Prisma.CustomFieldValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>[]
          }
          create: {
            args: Prisma.CustomFieldValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          createMany: {
            args: Prisma.CustomFieldValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomFieldValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>[]
          }
          delete: {
            args: Prisma.CustomFieldValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          update: {
            args: Prisma.CustomFieldValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          deleteMany: {
            args: Prisma.CustomFieldValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomFieldValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomFieldValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>[]
          }
          upsert: {
            args: Prisma.CustomFieldValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          aggregate: {
            args: Prisma.CustomFieldValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomFieldValue>
          }
          groupBy: {
            args: Prisma.CustomFieldValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomFieldValueCountArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldValueCountAggregateOutputType> | number
          }
        }
      }
      AppSetup: {
        payload: Prisma.$AppSetupPayload<ExtArgs>
        fields: Prisma.AppSetupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSetupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSetupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>
          }
          findFirst: {
            args: Prisma.AppSetupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSetupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>
          }
          findMany: {
            args: Prisma.AppSetupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>[]
          }
          create: {
            args: Prisma.AppSetupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>
          }
          createMany: {
            args: Prisma.AppSetupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSetupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>[]
          }
          delete: {
            args: Prisma.AppSetupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>
          }
          update: {
            args: Prisma.AppSetupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>
          }
          deleteMany: {
            args: Prisma.AppSetupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSetupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppSetupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>[]
          }
          upsert: {
            args: Prisma.AppSetupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSetupPayload>
          }
          aggregate: {
            args: Prisma.AppSetupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSetup>
          }
          groupBy: {
            args: Prisma.AppSetupGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSetupGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSetupCountArgs<ExtArgs>
            result: $Utils.Optional<AppSetupCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    brand?: BrandOmit
    material?: MaterialOmit
    location?: LocationOmit
    spool?: SpoolOmit
    spoolColorStop?: SpoolColorStopOmit
    usage?: UsageOmit
    customField?: CustomFieldOmit
    customFieldValue?: CustomFieldValueOmit
    appSetup?: AppSetupOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    brands: number
    locations: number
    spools: number
    customFields: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    brands?: boolean | UserCountOutputTypeCountBrandsArgs
    locations?: boolean | UserCountOutputTypeCountLocationsArgs
    spools?: boolean | UserCountOutputTypeCountSpoolsArgs
    customFields?: boolean | UserCountOutputTypeCountCustomFieldsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBrandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpoolWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    spools: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spools?: boolean | BrandCountOutputTypeCountSpoolsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountSpoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpoolWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    spools: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spools?: boolean | MaterialCountOutputTypeCountSpoolsArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountSpoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpoolWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    spools: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spools?: boolean | LocationCountOutputTypeCountSpoolsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountSpoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpoolWhereInput
  }


  /**
   * Count Type SpoolCountOutputType
   */

  export type SpoolCountOutputType = {
    colors: number
    usages: number
    customFieldValues: number
  }

  export type SpoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | SpoolCountOutputTypeCountColorsArgs
    usages?: boolean | SpoolCountOutputTypeCountUsagesArgs
    customFieldValues?: boolean | SpoolCountOutputTypeCountCustomFieldValuesArgs
  }

  // Custom InputTypes
  /**
   * SpoolCountOutputType without action
   */
  export type SpoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolCountOutputType
     */
    select?: SpoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpoolCountOutputType without action
   */
  export type SpoolCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpoolColorStopWhereInput
  }

  /**
   * SpoolCountOutputType without action
   */
  export type SpoolCountOutputTypeCountUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageWhereInput
  }

  /**
   * SpoolCountOutputType without action
   */
  export type SpoolCountOutputTypeCountCustomFieldValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldValueWhereInput
  }


  /**
   * Count Type CustomFieldCountOutputType
   */

  export type CustomFieldCountOutputType = {
    values: number
  }

  export type CustomFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | CustomFieldCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * CustomFieldCountOutputType without action
   */
  export type CustomFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldCountOutputType
     */
    select?: CustomFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomFieldCountOutputType without action
   */
  export type CustomFieldCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldValueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    brands?: boolean | User$brandsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    spools?: boolean | User$spoolsArgs<ExtArgs>
    customFields?: boolean | User$customFieldsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    brands?: boolean | User$brandsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    spools?: boolean | User$spoolsArgs<ExtArgs>
    customFields?: boolean | User$customFieldsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      brands: Prisma.$BrandPayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
      spools: Prisma.$SpoolPayload<ExtArgs>[]
      customFields: Prisma.$CustomFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      /**
       * admin | user
       */
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brands<T extends User$brandsArgs<ExtArgs> = {}>(args?: Subset<T, User$brandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends User$locationsArgs<ExtArgs> = {}>(args?: Subset<T, User$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spools<T extends User$spoolsArgs<ExtArgs> = {}>(args?: Subset<T, User$spoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customFields<T extends User$customFieldsArgs<ExtArgs> = {}>(args?: Subset<T, User$customFieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.brands
   */
  export type User$brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    cursor?: BrandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * User.locations
   */
  export type User$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * User.spools
   */
  export type User$spoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    where?: SpoolWhereInput
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    cursor?: SpoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpoolScalarFieldEnum | SpoolScalarFieldEnum[]
  }

  /**
   * User.customFields
   */
  export type User$customFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    where?: CustomFieldWhereInput
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    cursor?: CustomFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
    websiteUrl: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    websiteUrl: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    websiteUrl: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    websiteUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    websiteUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    websiteUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    websiteUrl: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    spools?: boolean | Brand$spoolsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "websiteUrl" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    spools?: boolean | Brand$spoolsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      spools: Prisma.$SpoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      /**
       * Storefront / manufacturer website
       */
      websiteUrl: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spools<T extends Brand$spoolsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$spoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly websiteUrl: FieldRef<"Brand", 'String'>
    readonly userId: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.spools
   */
  export type Brand$spoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    where?: SpoolWhereInput
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    cursor?: SpoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpoolScalarFieldEnum | SpoolScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    density: number | null
    maxNozzleC: number | null
    maxBedC: number | null
    minNozzleC: number | null
    minBedC: number | null
  }

  export type MaterialSumAggregateOutputType = {
    density: number | null
    maxNozzleC: number | null
    maxBedC: number | null
    minNozzleC: number | null
    minBedC: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    name: string | null
    density: number | null
    maxNozzleC: number | null
    maxBedC: number | null
    minNozzleC: number | null
    minBedC: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    density: number | null
    maxNozzleC: number | null
    maxBedC: number | null
    minNozzleC: number | null
    minBedC: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    density: number
    maxNozzleC: number
    maxBedC: number
    minNozzleC: number
    minBedC: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    density?: true
    maxNozzleC?: true
    maxBedC?: true
    minNozzleC?: true
    minBedC?: true
  }

  export type MaterialSumAggregateInputType = {
    density?: true
    maxNozzleC?: true
    maxBedC?: true
    minNozzleC?: true
    minBedC?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    density?: true
    maxNozzleC?: true
    maxBedC?: true
    minNozzleC?: true
    minBedC?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    density?: true
    maxNozzleC?: true
    maxBedC?: true
    minNozzleC?: true
    minBedC?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    density?: true
    maxNozzleC?: true
    maxBedC?: true
    minNozzleC?: true
    minBedC?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    name: string
    density: number | null
    maxNozzleC: number | null
    maxBedC: number | null
    minNozzleC: number | null
    minBedC: number | null
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    density?: boolean
    maxNozzleC?: boolean
    maxBedC?: boolean
    minNozzleC?: boolean
    minBedC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spools?: boolean | Material$spoolsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    density?: boolean
    maxNozzleC?: boolean
    maxBedC?: boolean
    minNozzleC?: boolean
    minBedC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    density?: boolean
    maxNozzleC?: boolean
    maxBedC?: boolean
    minNozzleC?: boolean
    minBedC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    density?: boolean
    maxNozzleC?: boolean
    maxBedC?: boolean
    minNozzleC?: boolean
    minBedC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "density" | "maxNozzleC" | "maxBedC" | "minNozzleC" | "minBedC" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spools?: boolean | Material$spoolsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      spools: Prisma.$SpoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      density: number | null
      maxNozzleC: number | null
      maxBedC: number | null
      minNozzleC: number | null
      minBedC: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spools<T extends Material$spoolsArgs<ExtArgs> = {}>(args?: Subset<T, Material$spoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly density: FieldRef<"Material", 'Float'>
    readonly maxNozzleC: FieldRef<"Material", 'Int'>
    readonly maxBedC: FieldRef<"Material", 'Int'>
    readonly minNozzleC: FieldRef<"Material", 'Int'>
    readonly minBedC: FieldRef<"Material", 'Int'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.spools
   */
  export type Material$spoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    where?: SpoolWhereInput
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    cursor?: SpoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpoolScalarFieldEnum | SpoolScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    spools?: boolean | Location$spoolsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    spools?: boolean | Location$spoolsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      spools: Prisma.$SpoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spools<T extends Location$spoolsArgs<ExtArgs> = {}>(args?: Subset<T, Location$spoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly userId: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.spools
   */
  export type Location$spoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    where?: SpoolWhereInput
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    cursor?: SpoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpoolScalarFieldEnum | SpoolScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Spool
   */

  export type AggregateSpool = {
    _count: SpoolCountAggregateOutputType | null
    _avg: SpoolAvgAggregateOutputType | null
    _sum: SpoolSumAggregateOutputType | null
    _min: SpoolMinAggregateOutputType | null
    _max: SpoolMaxAggregateOutputType | null
  }

  export type SpoolAvgAggregateOutputType = {
    diameterMm: number | null
    initialWeightG: number | null
    remainingWeightG: number | null
    priceCents: number | null
  }

  export type SpoolSumAggregateOutputType = {
    diameterMm: number | null
    initialWeightG: number | null
    remainingWeightG: number | null
    priceCents: number | null
  }

  export type SpoolMinAggregateOutputType = {
    id: string | null
    userId: string | null
    brandId: string | null
    materialId: string | null
    locationId: string | null
    colorMode: string | null
    colorName: string | null
    diameterMm: number | null
    initialWeightG: number | null
    remainingWeightG: number | null
    status: string | null
    needsRepurchase: boolean | null
    productUrl: string | null
    purchasedAt: Date | null
    priceCents: number | null
    notes: string | null
    lastDriedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpoolMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    brandId: string | null
    materialId: string | null
    locationId: string | null
    colorMode: string | null
    colorName: string | null
    diameterMm: number | null
    initialWeightG: number | null
    remainingWeightG: number | null
    status: string | null
    needsRepurchase: boolean | null
    productUrl: string | null
    purchasedAt: Date | null
    priceCents: number | null
    notes: string | null
    lastDriedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpoolCountAggregateOutputType = {
    id: number
    userId: number
    brandId: number
    materialId: number
    locationId: number
    colorMode: number
    colorName: number
    diameterMm: number
    initialWeightG: number
    remainingWeightG: number
    status: number
    needsRepurchase: number
    productUrl: number
    purchasedAt: number
    priceCents: number
    notes: number
    lastDriedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpoolAvgAggregateInputType = {
    diameterMm?: true
    initialWeightG?: true
    remainingWeightG?: true
    priceCents?: true
  }

  export type SpoolSumAggregateInputType = {
    diameterMm?: true
    initialWeightG?: true
    remainingWeightG?: true
    priceCents?: true
  }

  export type SpoolMinAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    materialId?: true
    locationId?: true
    colorMode?: true
    colorName?: true
    diameterMm?: true
    initialWeightG?: true
    remainingWeightG?: true
    status?: true
    needsRepurchase?: true
    productUrl?: true
    purchasedAt?: true
    priceCents?: true
    notes?: true
    lastDriedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpoolMaxAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    materialId?: true
    locationId?: true
    colorMode?: true
    colorName?: true
    diameterMm?: true
    initialWeightG?: true
    remainingWeightG?: true
    status?: true
    needsRepurchase?: true
    productUrl?: true
    purchasedAt?: true
    priceCents?: true
    notes?: true
    lastDriedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpoolCountAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    materialId?: true
    locationId?: true
    colorMode?: true
    colorName?: true
    diameterMm?: true
    initialWeightG?: true
    remainingWeightG?: true
    status?: true
    needsRepurchase?: true
    productUrl?: true
    purchasedAt?: true
    priceCents?: true
    notes?: true
    lastDriedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spool to aggregate.
     */
    where?: SpoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spools to fetch.
     */
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spools
    **/
    _count?: true | SpoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpoolMaxAggregateInputType
  }

  export type GetSpoolAggregateType<T extends SpoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSpool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpool[P]>
      : GetScalarType<T[P], AggregateSpool[P]>
  }




  export type SpoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpoolWhereInput
    orderBy?: SpoolOrderByWithAggregationInput | SpoolOrderByWithAggregationInput[]
    by: SpoolScalarFieldEnum[] | SpoolScalarFieldEnum
    having?: SpoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpoolCountAggregateInputType | true
    _avg?: SpoolAvgAggregateInputType
    _sum?: SpoolSumAggregateInputType
    _min?: SpoolMinAggregateInputType
    _max?: SpoolMaxAggregateInputType
  }

  export type SpoolGroupByOutputType = {
    id: string
    userId: string
    brandId: string
    materialId: string
    locationId: string | null
    colorMode: string
    colorName: string | null
    diameterMm: number
    initialWeightG: number
    remainingWeightG: number
    status: string
    needsRepurchase: boolean
    productUrl: string | null
    purchasedAt: Date | null
    priceCents: number | null
    notes: string | null
    lastDriedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SpoolCountAggregateOutputType | null
    _avg: SpoolAvgAggregateOutputType | null
    _sum: SpoolSumAggregateOutputType | null
    _min: SpoolMinAggregateOutputType | null
    _max: SpoolMaxAggregateOutputType | null
  }

  type GetSpoolGroupByPayload<T extends SpoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpoolGroupByOutputType[P]>
            : GetScalarType<T[P], SpoolGroupByOutputType[P]>
        }
      >
    >


  export type SpoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandId?: boolean
    materialId?: boolean
    locationId?: boolean
    colorMode?: boolean
    colorName?: boolean
    diameterMm?: boolean
    initialWeightG?: boolean
    remainingWeightG?: boolean
    status?: boolean
    needsRepurchase?: boolean
    productUrl?: boolean
    purchasedAt?: boolean
    priceCents?: boolean
    notes?: boolean
    lastDriedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    location?: boolean | Spool$locationArgs<ExtArgs>
    colors?: boolean | Spool$colorsArgs<ExtArgs>
    usages?: boolean | Spool$usagesArgs<ExtArgs>
    customFieldValues?: boolean | Spool$customFieldValuesArgs<ExtArgs>
    _count?: boolean | SpoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spool"]>

  export type SpoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandId?: boolean
    materialId?: boolean
    locationId?: boolean
    colorMode?: boolean
    colorName?: boolean
    diameterMm?: boolean
    initialWeightG?: boolean
    remainingWeightG?: boolean
    status?: boolean
    needsRepurchase?: boolean
    productUrl?: boolean
    purchasedAt?: boolean
    priceCents?: boolean
    notes?: boolean
    lastDriedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    location?: boolean | Spool$locationArgs<ExtArgs>
  }, ExtArgs["result"]["spool"]>

  export type SpoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandId?: boolean
    materialId?: boolean
    locationId?: boolean
    colorMode?: boolean
    colorName?: boolean
    diameterMm?: boolean
    initialWeightG?: boolean
    remainingWeightG?: boolean
    status?: boolean
    needsRepurchase?: boolean
    productUrl?: boolean
    purchasedAt?: boolean
    priceCents?: boolean
    notes?: boolean
    lastDriedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    location?: boolean | Spool$locationArgs<ExtArgs>
  }, ExtArgs["result"]["spool"]>

  export type SpoolSelectScalar = {
    id?: boolean
    userId?: boolean
    brandId?: boolean
    materialId?: boolean
    locationId?: boolean
    colorMode?: boolean
    colorName?: boolean
    diameterMm?: boolean
    initialWeightG?: boolean
    remainingWeightG?: boolean
    status?: boolean
    needsRepurchase?: boolean
    productUrl?: boolean
    purchasedAt?: boolean
    priceCents?: boolean
    notes?: boolean
    lastDriedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "brandId" | "materialId" | "locationId" | "colorMode" | "colorName" | "diameterMm" | "initialWeightG" | "remainingWeightG" | "status" | "needsRepurchase" | "productUrl" | "purchasedAt" | "priceCents" | "notes" | "lastDriedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["spool"]>
  export type SpoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    location?: boolean | Spool$locationArgs<ExtArgs>
    colors?: boolean | Spool$colorsArgs<ExtArgs>
    usages?: boolean | Spool$usagesArgs<ExtArgs>
    customFieldValues?: boolean | Spool$customFieldValuesArgs<ExtArgs>
    _count?: boolean | SpoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    location?: boolean | Spool$locationArgs<ExtArgs>
  }
  export type SpoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    location?: boolean | Spool$locationArgs<ExtArgs>
  }

  export type $SpoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spool"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs> | null
      colors: Prisma.$SpoolColorStopPayload<ExtArgs>[]
      usages: Prisma.$UsagePayload<ExtArgs>[]
      customFieldValues: Prisma.$CustomFieldValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      brandId: string
      materialId: string
      locationId: string | null
      colorMode: string
      colorName: string | null
      diameterMm: number
      initialWeightG: number
      remainingWeightG: number
      /**
       * sealed | open | empty | archived
       */
      status: string
      /**
       * Manually or auto flagged for repurchase list
       */
      needsRepurchase: boolean
      /**
       * Product page / store listing for this spool
       */
      productUrl: string | null
      purchasedAt: Date | null
      priceCents: number | null
      notes: string | null
      lastDriedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["spool"]>
    composites: {}
  }

  type SpoolGetPayload<S extends boolean | null | undefined | SpoolDefaultArgs> = $Result.GetResult<Prisma.$SpoolPayload, S>

  type SpoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpoolCountAggregateInputType | true
    }

  export interface SpoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spool'], meta: { name: 'Spool' } }
    /**
     * Find zero or one Spool that matches the filter.
     * @param {SpoolFindUniqueArgs} args - Arguments to find a Spool
     * @example
     * // Get one Spool
     * const spool = await prisma.spool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpoolFindUniqueArgs>(args: SelectSubset<T, SpoolFindUniqueArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpoolFindUniqueOrThrowArgs} args - Arguments to find a Spool
     * @example
     * // Get one Spool
     * const spool = await prisma.spool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SpoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolFindFirstArgs} args - Arguments to find a Spool
     * @example
     * // Get one Spool
     * const spool = await prisma.spool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpoolFindFirstArgs>(args?: SelectSubset<T, SpoolFindFirstArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolFindFirstOrThrowArgs} args - Arguments to find a Spool
     * @example
     * // Get one Spool
     * const spool = await prisma.spool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SpoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spools
     * const spools = await prisma.spool.findMany()
     * 
     * // Get first 10 Spools
     * const spools = await prisma.spool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spoolWithIdOnly = await prisma.spool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpoolFindManyArgs>(args?: SelectSubset<T, SpoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spool.
     * @param {SpoolCreateArgs} args - Arguments to create a Spool.
     * @example
     * // Create one Spool
     * const Spool = await prisma.spool.create({
     *   data: {
     *     // ... data to create a Spool
     *   }
     * })
     * 
     */
    create<T extends SpoolCreateArgs>(args: SelectSubset<T, SpoolCreateArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spools.
     * @param {SpoolCreateManyArgs} args - Arguments to create many Spools.
     * @example
     * // Create many Spools
     * const spool = await prisma.spool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpoolCreateManyArgs>(args?: SelectSubset<T, SpoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spools and returns the data saved in the database.
     * @param {SpoolCreateManyAndReturnArgs} args - Arguments to create many Spools.
     * @example
     * // Create many Spools
     * const spool = await prisma.spool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spools and only return the `id`
     * const spoolWithIdOnly = await prisma.spool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SpoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spool.
     * @param {SpoolDeleteArgs} args - Arguments to delete one Spool.
     * @example
     * // Delete one Spool
     * const Spool = await prisma.spool.delete({
     *   where: {
     *     // ... filter to delete one Spool
     *   }
     * })
     * 
     */
    delete<T extends SpoolDeleteArgs>(args: SelectSubset<T, SpoolDeleteArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spool.
     * @param {SpoolUpdateArgs} args - Arguments to update one Spool.
     * @example
     * // Update one Spool
     * const spool = await prisma.spool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpoolUpdateArgs>(args: SelectSubset<T, SpoolUpdateArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spools.
     * @param {SpoolDeleteManyArgs} args - Arguments to filter Spools to delete.
     * @example
     * // Delete a few Spools
     * const { count } = await prisma.spool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpoolDeleteManyArgs>(args?: SelectSubset<T, SpoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spools
     * const spool = await prisma.spool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpoolUpdateManyArgs>(args: SelectSubset<T, SpoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spools and returns the data updated in the database.
     * @param {SpoolUpdateManyAndReturnArgs} args - Arguments to update many Spools.
     * @example
     * // Update many Spools
     * const spool = await prisma.spool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spools and only return the `id`
     * const spoolWithIdOnly = await prisma.spool.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SpoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spool.
     * @param {SpoolUpsertArgs} args - Arguments to update or create a Spool.
     * @example
     * // Update or create a Spool
     * const spool = await prisma.spool.upsert({
     *   create: {
     *     // ... data to create a Spool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spool we want to update
     *   }
     * })
     */
    upsert<T extends SpoolUpsertArgs>(args: SelectSubset<T, SpoolUpsertArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolCountArgs} args - Arguments to filter Spools to count.
     * @example
     * // Count the number of Spools
     * const count = await prisma.spool.count({
     *   where: {
     *     // ... the filter for the Spools we want to count
     *   }
     * })
    **/
    count<T extends SpoolCountArgs>(
      args?: Subset<T, SpoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpoolAggregateArgs>(args: Subset<T, SpoolAggregateArgs>): Prisma.PrismaPromise<GetSpoolAggregateType<T>>

    /**
     * Group by Spool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolGroupByArgs} args - Group by arguments.
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
      T extends SpoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpoolGroupByArgs['orderBy'] }
        : { orderBy?: SpoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spool model
   */
  readonly fields: SpoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends Spool$locationArgs<ExtArgs> = {}>(args?: Subset<T, Spool$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    colors<T extends Spool$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Spool$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usages<T extends Spool$usagesArgs<ExtArgs> = {}>(args?: Subset<T, Spool$usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customFieldValues<T extends Spool$customFieldValuesArgs<ExtArgs> = {}>(args?: Subset<T, Spool$customFieldValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Spool model
   */
  interface SpoolFieldRefs {
    readonly id: FieldRef<"Spool", 'String'>
    readonly userId: FieldRef<"Spool", 'String'>
    readonly brandId: FieldRef<"Spool", 'String'>
    readonly materialId: FieldRef<"Spool", 'String'>
    readonly locationId: FieldRef<"Spool", 'String'>
    readonly colorMode: FieldRef<"Spool", 'String'>
    readonly colorName: FieldRef<"Spool", 'String'>
    readonly diameterMm: FieldRef<"Spool", 'Float'>
    readonly initialWeightG: FieldRef<"Spool", 'Int'>
    readonly remainingWeightG: FieldRef<"Spool", 'Int'>
    readonly status: FieldRef<"Spool", 'String'>
    readonly needsRepurchase: FieldRef<"Spool", 'Boolean'>
    readonly productUrl: FieldRef<"Spool", 'String'>
    readonly purchasedAt: FieldRef<"Spool", 'DateTime'>
    readonly priceCents: FieldRef<"Spool", 'Int'>
    readonly notes: FieldRef<"Spool", 'String'>
    readonly lastDriedAt: FieldRef<"Spool", 'DateTime'>
    readonly createdAt: FieldRef<"Spool", 'DateTime'>
    readonly updatedAt: FieldRef<"Spool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Spool findUnique
   */
  export type SpoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * Filter, which Spool to fetch.
     */
    where: SpoolWhereUniqueInput
  }

  /**
   * Spool findUniqueOrThrow
   */
  export type SpoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * Filter, which Spool to fetch.
     */
    where: SpoolWhereUniqueInput
  }

  /**
   * Spool findFirst
   */
  export type SpoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * Filter, which Spool to fetch.
     */
    where?: SpoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spools to fetch.
     */
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spools.
     */
    cursor?: SpoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spools.
     */
    distinct?: SpoolScalarFieldEnum | SpoolScalarFieldEnum[]
  }

  /**
   * Spool findFirstOrThrow
   */
  export type SpoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * Filter, which Spool to fetch.
     */
    where?: SpoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spools to fetch.
     */
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spools.
     */
    cursor?: SpoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spools.
     */
    distinct?: SpoolScalarFieldEnum | SpoolScalarFieldEnum[]
  }

  /**
   * Spool findMany
   */
  export type SpoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * Filter, which Spools to fetch.
     */
    where?: SpoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spools to fetch.
     */
    orderBy?: SpoolOrderByWithRelationInput | SpoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spools.
     */
    cursor?: SpoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spools.
     */
    skip?: number
    distinct?: SpoolScalarFieldEnum | SpoolScalarFieldEnum[]
  }

  /**
   * Spool create
   */
  export type SpoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * The data needed to create a Spool.
     */
    data: XOR<SpoolCreateInput, SpoolUncheckedCreateInput>
  }

  /**
   * Spool createMany
   */
  export type SpoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spools.
     */
    data: SpoolCreateManyInput | SpoolCreateManyInput[]
  }

  /**
   * Spool createManyAndReturn
   */
  export type SpoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * The data used to create many Spools.
     */
    data: SpoolCreateManyInput | SpoolCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Spool update
   */
  export type SpoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * The data needed to update a Spool.
     */
    data: XOR<SpoolUpdateInput, SpoolUncheckedUpdateInput>
    /**
     * Choose, which Spool to update.
     */
    where: SpoolWhereUniqueInput
  }

  /**
   * Spool updateMany
   */
  export type SpoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spools.
     */
    data: XOR<SpoolUpdateManyMutationInput, SpoolUncheckedUpdateManyInput>
    /**
     * Filter which Spools to update
     */
    where?: SpoolWhereInput
    /**
     * Limit how many Spools to update.
     */
    limit?: number
  }

  /**
   * Spool updateManyAndReturn
   */
  export type SpoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * The data used to update Spools.
     */
    data: XOR<SpoolUpdateManyMutationInput, SpoolUncheckedUpdateManyInput>
    /**
     * Filter which Spools to update
     */
    where?: SpoolWhereInput
    /**
     * Limit how many Spools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Spool upsert
   */
  export type SpoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * The filter to search for the Spool to update in case it exists.
     */
    where: SpoolWhereUniqueInput
    /**
     * In case the Spool found by the `where` argument doesn't exist, create a new Spool with this data.
     */
    create: XOR<SpoolCreateInput, SpoolUncheckedCreateInput>
    /**
     * In case the Spool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpoolUpdateInput, SpoolUncheckedUpdateInput>
  }

  /**
   * Spool delete
   */
  export type SpoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
    /**
     * Filter which Spool to delete.
     */
    where: SpoolWhereUniqueInput
  }

  /**
   * Spool deleteMany
   */
  export type SpoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spools to delete
     */
    where?: SpoolWhereInput
    /**
     * Limit how many Spools to delete.
     */
    limit?: number
  }

  /**
   * Spool.location
   */
  export type Spool$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Spool.colors
   */
  export type Spool$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    where?: SpoolColorStopWhereInput
    orderBy?: SpoolColorStopOrderByWithRelationInput | SpoolColorStopOrderByWithRelationInput[]
    cursor?: SpoolColorStopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpoolColorStopScalarFieldEnum | SpoolColorStopScalarFieldEnum[]
  }

  /**
   * Spool.usages
   */
  export type Spool$usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    where?: UsageWhereInput
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    cursor?: UsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Spool.customFieldValues
   */
  export type Spool$customFieldValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    where?: CustomFieldValueWhereInput
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    cursor?: CustomFieldValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * Spool without action
   */
  export type SpoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spool
     */
    select?: SpoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spool
     */
    omit?: SpoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolInclude<ExtArgs> | null
  }


  /**
   * Model SpoolColorStop
   */

  export type AggregateSpoolColorStop = {
    _count: SpoolColorStopCountAggregateOutputType | null
    _avg: SpoolColorStopAvgAggregateOutputType | null
    _sum: SpoolColorStopSumAggregateOutputType | null
    _min: SpoolColorStopMinAggregateOutputType | null
    _max: SpoolColorStopMaxAggregateOutputType | null
  }

  export type SpoolColorStopAvgAggregateOutputType = {
    position: number | null
    weight: number | null
  }

  export type SpoolColorStopSumAggregateOutputType = {
    position: number | null
    weight: number | null
  }

  export type SpoolColorStopMinAggregateOutputType = {
    id: string | null
    spoolId: string | null
    hex: string | null
    name: string | null
    position: number | null
    weight: number | null
  }

  export type SpoolColorStopMaxAggregateOutputType = {
    id: string | null
    spoolId: string | null
    hex: string | null
    name: string | null
    position: number | null
    weight: number | null
  }

  export type SpoolColorStopCountAggregateOutputType = {
    id: number
    spoolId: number
    hex: number
    name: number
    position: number
    weight: number
    _all: number
  }


  export type SpoolColorStopAvgAggregateInputType = {
    position?: true
    weight?: true
  }

  export type SpoolColorStopSumAggregateInputType = {
    position?: true
    weight?: true
  }

  export type SpoolColorStopMinAggregateInputType = {
    id?: true
    spoolId?: true
    hex?: true
    name?: true
    position?: true
    weight?: true
  }

  export type SpoolColorStopMaxAggregateInputType = {
    id?: true
    spoolId?: true
    hex?: true
    name?: true
    position?: true
    weight?: true
  }

  export type SpoolColorStopCountAggregateInputType = {
    id?: true
    spoolId?: true
    hex?: true
    name?: true
    position?: true
    weight?: true
    _all?: true
  }

  export type SpoolColorStopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpoolColorStop to aggregate.
     */
    where?: SpoolColorStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpoolColorStops to fetch.
     */
    orderBy?: SpoolColorStopOrderByWithRelationInput | SpoolColorStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpoolColorStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpoolColorStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpoolColorStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpoolColorStops
    **/
    _count?: true | SpoolColorStopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpoolColorStopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpoolColorStopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpoolColorStopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpoolColorStopMaxAggregateInputType
  }

  export type GetSpoolColorStopAggregateType<T extends SpoolColorStopAggregateArgs> = {
        [P in keyof T & keyof AggregateSpoolColorStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpoolColorStop[P]>
      : GetScalarType<T[P], AggregateSpoolColorStop[P]>
  }




  export type SpoolColorStopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpoolColorStopWhereInput
    orderBy?: SpoolColorStopOrderByWithAggregationInput | SpoolColorStopOrderByWithAggregationInput[]
    by: SpoolColorStopScalarFieldEnum[] | SpoolColorStopScalarFieldEnum
    having?: SpoolColorStopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpoolColorStopCountAggregateInputType | true
    _avg?: SpoolColorStopAvgAggregateInputType
    _sum?: SpoolColorStopSumAggregateInputType
    _min?: SpoolColorStopMinAggregateInputType
    _max?: SpoolColorStopMaxAggregateInputType
  }

  export type SpoolColorStopGroupByOutputType = {
    id: string
    spoolId: string
    hex: string
    name: string | null
    position: number
    weight: number | null
    _count: SpoolColorStopCountAggregateOutputType | null
    _avg: SpoolColorStopAvgAggregateOutputType | null
    _sum: SpoolColorStopSumAggregateOutputType | null
    _min: SpoolColorStopMinAggregateOutputType | null
    _max: SpoolColorStopMaxAggregateOutputType | null
  }

  type GetSpoolColorStopGroupByPayload<T extends SpoolColorStopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpoolColorStopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpoolColorStopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpoolColorStopGroupByOutputType[P]>
            : GetScalarType<T[P], SpoolColorStopGroupByOutputType[P]>
        }
      >
    >


  export type SpoolColorStopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spoolId?: boolean
    hex?: boolean
    name?: boolean
    position?: boolean
    weight?: boolean
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spoolColorStop"]>

  export type SpoolColorStopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spoolId?: boolean
    hex?: boolean
    name?: boolean
    position?: boolean
    weight?: boolean
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spoolColorStop"]>

  export type SpoolColorStopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spoolId?: boolean
    hex?: boolean
    name?: boolean
    position?: boolean
    weight?: boolean
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spoolColorStop"]>

  export type SpoolColorStopSelectScalar = {
    id?: boolean
    spoolId?: boolean
    hex?: boolean
    name?: boolean
    position?: boolean
    weight?: boolean
  }

  export type SpoolColorStopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spoolId" | "hex" | "name" | "position" | "weight", ExtArgs["result"]["spoolColorStop"]>
  export type SpoolColorStopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }
  export type SpoolColorStopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }
  export type SpoolColorStopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }

  export type $SpoolColorStopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpoolColorStop"
    objects: {
      spool: Prisma.$SpoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      spoolId: string
      hex: string
      name: string | null
      position: number
      weight: number | null
    }, ExtArgs["result"]["spoolColorStop"]>
    composites: {}
  }

  type SpoolColorStopGetPayload<S extends boolean | null | undefined | SpoolColorStopDefaultArgs> = $Result.GetResult<Prisma.$SpoolColorStopPayload, S>

  type SpoolColorStopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpoolColorStopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpoolColorStopCountAggregateInputType | true
    }

  export interface SpoolColorStopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpoolColorStop'], meta: { name: 'SpoolColorStop' } }
    /**
     * Find zero or one SpoolColorStop that matches the filter.
     * @param {SpoolColorStopFindUniqueArgs} args - Arguments to find a SpoolColorStop
     * @example
     * // Get one SpoolColorStop
     * const spoolColorStop = await prisma.spoolColorStop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpoolColorStopFindUniqueArgs>(args: SelectSubset<T, SpoolColorStopFindUniqueArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpoolColorStop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpoolColorStopFindUniqueOrThrowArgs} args - Arguments to find a SpoolColorStop
     * @example
     * // Get one SpoolColorStop
     * const spoolColorStop = await prisma.spoolColorStop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpoolColorStopFindUniqueOrThrowArgs>(args: SelectSubset<T, SpoolColorStopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpoolColorStop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolColorStopFindFirstArgs} args - Arguments to find a SpoolColorStop
     * @example
     * // Get one SpoolColorStop
     * const spoolColorStop = await prisma.spoolColorStop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpoolColorStopFindFirstArgs>(args?: SelectSubset<T, SpoolColorStopFindFirstArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpoolColorStop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolColorStopFindFirstOrThrowArgs} args - Arguments to find a SpoolColorStop
     * @example
     * // Get one SpoolColorStop
     * const spoolColorStop = await prisma.spoolColorStop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpoolColorStopFindFirstOrThrowArgs>(args?: SelectSubset<T, SpoolColorStopFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpoolColorStops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolColorStopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpoolColorStops
     * const spoolColorStops = await prisma.spoolColorStop.findMany()
     * 
     * // Get first 10 SpoolColorStops
     * const spoolColorStops = await prisma.spoolColorStop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spoolColorStopWithIdOnly = await prisma.spoolColorStop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpoolColorStopFindManyArgs>(args?: SelectSubset<T, SpoolColorStopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpoolColorStop.
     * @param {SpoolColorStopCreateArgs} args - Arguments to create a SpoolColorStop.
     * @example
     * // Create one SpoolColorStop
     * const SpoolColorStop = await prisma.spoolColorStop.create({
     *   data: {
     *     // ... data to create a SpoolColorStop
     *   }
     * })
     * 
     */
    create<T extends SpoolColorStopCreateArgs>(args: SelectSubset<T, SpoolColorStopCreateArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpoolColorStops.
     * @param {SpoolColorStopCreateManyArgs} args - Arguments to create many SpoolColorStops.
     * @example
     * // Create many SpoolColorStops
     * const spoolColorStop = await prisma.spoolColorStop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpoolColorStopCreateManyArgs>(args?: SelectSubset<T, SpoolColorStopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpoolColorStops and returns the data saved in the database.
     * @param {SpoolColorStopCreateManyAndReturnArgs} args - Arguments to create many SpoolColorStops.
     * @example
     * // Create many SpoolColorStops
     * const spoolColorStop = await prisma.spoolColorStop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpoolColorStops and only return the `id`
     * const spoolColorStopWithIdOnly = await prisma.spoolColorStop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpoolColorStopCreateManyAndReturnArgs>(args?: SelectSubset<T, SpoolColorStopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpoolColorStop.
     * @param {SpoolColorStopDeleteArgs} args - Arguments to delete one SpoolColorStop.
     * @example
     * // Delete one SpoolColorStop
     * const SpoolColorStop = await prisma.spoolColorStop.delete({
     *   where: {
     *     // ... filter to delete one SpoolColorStop
     *   }
     * })
     * 
     */
    delete<T extends SpoolColorStopDeleteArgs>(args: SelectSubset<T, SpoolColorStopDeleteArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpoolColorStop.
     * @param {SpoolColorStopUpdateArgs} args - Arguments to update one SpoolColorStop.
     * @example
     * // Update one SpoolColorStop
     * const spoolColorStop = await prisma.spoolColorStop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpoolColorStopUpdateArgs>(args: SelectSubset<T, SpoolColorStopUpdateArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpoolColorStops.
     * @param {SpoolColorStopDeleteManyArgs} args - Arguments to filter SpoolColorStops to delete.
     * @example
     * // Delete a few SpoolColorStops
     * const { count } = await prisma.spoolColorStop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpoolColorStopDeleteManyArgs>(args?: SelectSubset<T, SpoolColorStopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpoolColorStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolColorStopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpoolColorStops
     * const spoolColorStop = await prisma.spoolColorStop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpoolColorStopUpdateManyArgs>(args: SelectSubset<T, SpoolColorStopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpoolColorStops and returns the data updated in the database.
     * @param {SpoolColorStopUpdateManyAndReturnArgs} args - Arguments to update many SpoolColorStops.
     * @example
     * // Update many SpoolColorStops
     * const spoolColorStop = await prisma.spoolColorStop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpoolColorStops and only return the `id`
     * const spoolColorStopWithIdOnly = await prisma.spoolColorStop.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpoolColorStopUpdateManyAndReturnArgs>(args: SelectSubset<T, SpoolColorStopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpoolColorStop.
     * @param {SpoolColorStopUpsertArgs} args - Arguments to update or create a SpoolColorStop.
     * @example
     * // Update or create a SpoolColorStop
     * const spoolColorStop = await prisma.spoolColorStop.upsert({
     *   create: {
     *     // ... data to create a SpoolColorStop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpoolColorStop we want to update
     *   }
     * })
     */
    upsert<T extends SpoolColorStopUpsertArgs>(args: SelectSubset<T, SpoolColorStopUpsertArgs<ExtArgs>>): Prisma__SpoolColorStopClient<$Result.GetResult<Prisma.$SpoolColorStopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpoolColorStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolColorStopCountArgs} args - Arguments to filter SpoolColorStops to count.
     * @example
     * // Count the number of SpoolColorStops
     * const count = await prisma.spoolColorStop.count({
     *   where: {
     *     // ... the filter for the SpoolColorStops we want to count
     *   }
     * })
    **/
    count<T extends SpoolColorStopCountArgs>(
      args?: Subset<T, SpoolColorStopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpoolColorStopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpoolColorStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolColorStopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpoolColorStopAggregateArgs>(args: Subset<T, SpoolColorStopAggregateArgs>): Prisma.PrismaPromise<GetSpoolColorStopAggregateType<T>>

    /**
     * Group by SpoolColorStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpoolColorStopGroupByArgs} args - Group by arguments.
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
      T extends SpoolColorStopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpoolColorStopGroupByArgs['orderBy'] }
        : { orderBy?: SpoolColorStopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpoolColorStopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpoolColorStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpoolColorStop model
   */
  readonly fields: SpoolColorStopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpoolColorStop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpoolColorStopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spool<T extends SpoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpoolDefaultArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SpoolColorStop model
   */
  interface SpoolColorStopFieldRefs {
    readonly id: FieldRef<"SpoolColorStop", 'String'>
    readonly spoolId: FieldRef<"SpoolColorStop", 'String'>
    readonly hex: FieldRef<"SpoolColorStop", 'String'>
    readonly name: FieldRef<"SpoolColorStop", 'String'>
    readonly position: FieldRef<"SpoolColorStop", 'Float'>
    readonly weight: FieldRef<"SpoolColorStop", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SpoolColorStop findUnique
   */
  export type SpoolColorStopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * Filter, which SpoolColorStop to fetch.
     */
    where: SpoolColorStopWhereUniqueInput
  }

  /**
   * SpoolColorStop findUniqueOrThrow
   */
  export type SpoolColorStopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * Filter, which SpoolColorStop to fetch.
     */
    where: SpoolColorStopWhereUniqueInput
  }

  /**
   * SpoolColorStop findFirst
   */
  export type SpoolColorStopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * Filter, which SpoolColorStop to fetch.
     */
    where?: SpoolColorStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpoolColorStops to fetch.
     */
    orderBy?: SpoolColorStopOrderByWithRelationInput | SpoolColorStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpoolColorStops.
     */
    cursor?: SpoolColorStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpoolColorStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpoolColorStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpoolColorStops.
     */
    distinct?: SpoolColorStopScalarFieldEnum | SpoolColorStopScalarFieldEnum[]
  }

  /**
   * SpoolColorStop findFirstOrThrow
   */
  export type SpoolColorStopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * Filter, which SpoolColorStop to fetch.
     */
    where?: SpoolColorStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpoolColorStops to fetch.
     */
    orderBy?: SpoolColorStopOrderByWithRelationInput | SpoolColorStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpoolColorStops.
     */
    cursor?: SpoolColorStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpoolColorStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpoolColorStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpoolColorStops.
     */
    distinct?: SpoolColorStopScalarFieldEnum | SpoolColorStopScalarFieldEnum[]
  }

  /**
   * SpoolColorStop findMany
   */
  export type SpoolColorStopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * Filter, which SpoolColorStops to fetch.
     */
    where?: SpoolColorStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpoolColorStops to fetch.
     */
    orderBy?: SpoolColorStopOrderByWithRelationInput | SpoolColorStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpoolColorStops.
     */
    cursor?: SpoolColorStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpoolColorStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpoolColorStops.
     */
    skip?: number
    distinct?: SpoolColorStopScalarFieldEnum | SpoolColorStopScalarFieldEnum[]
  }

  /**
   * SpoolColorStop create
   */
  export type SpoolColorStopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * The data needed to create a SpoolColorStop.
     */
    data: XOR<SpoolColorStopCreateInput, SpoolColorStopUncheckedCreateInput>
  }

  /**
   * SpoolColorStop createMany
   */
  export type SpoolColorStopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpoolColorStops.
     */
    data: SpoolColorStopCreateManyInput | SpoolColorStopCreateManyInput[]
  }

  /**
   * SpoolColorStop createManyAndReturn
   */
  export type SpoolColorStopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * The data used to create many SpoolColorStops.
     */
    data: SpoolColorStopCreateManyInput | SpoolColorStopCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpoolColorStop update
   */
  export type SpoolColorStopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * The data needed to update a SpoolColorStop.
     */
    data: XOR<SpoolColorStopUpdateInput, SpoolColorStopUncheckedUpdateInput>
    /**
     * Choose, which SpoolColorStop to update.
     */
    where: SpoolColorStopWhereUniqueInput
  }

  /**
   * SpoolColorStop updateMany
   */
  export type SpoolColorStopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpoolColorStops.
     */
    data: XOR<SpoolColorStopUpdateManyMutationInput, SpoolColorStopUncheckedUpdateManyInput>
    /**
     * Filter which SpoolColorStops to update
     */
    where?: SpoolColorStopWhereInput
    /**
     * Limit how many SpoolColorStops to update.
     */
    limit?: number
  }

  /**
   * SpoolColorStop updateManyAndReturn
   */
  export type SpoolColorStopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * The data used to update SpoolColorStops.
     */
    data: XOR<SpoolColorStopUpdateManyMutationInput, SpoolColorStopUncheckedUpdateManyInput>
    /**
     * Filter which SpoolColorStops to update
     */
    where?: SpoolColorStopWhereInput
    /**
     * Limit how many SpoolColorStops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpoolColorStop upsert
   */
  export type SpoolColorStopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * The filter to search for the SpoolColorStop to update in case it exists.
     */
    where: SpoolColorStopWhereUniqueInput
    /**
     * In case the SpoolColorStop found by the `where` argument doesn't exist, create a new SpoolColorStop with this data.
     */
    create: XOR<SpoolColorStopCreateInput, SpoolColorStopUncheckedCreateInput>
    /**
     * In case the SpoolColorStop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpoolColorStopUpdateInput, SpoolColorStopUncheckedUpdateInput>
  }

  /**
   * SpoolColorStop delete
   */
  export type SpoolColorStopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
    /**
     * Filter which SpoolColorStop to delete.
     */
    where: SpoolColorStopWhereUniqueInput
  }

  /**
   * SpoolColorStop deleteMany
   */
  export type SpoolColorStopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpoolColorStops to delete
     */
    where?: SpoolColorStopWhereInput
    /**
     * Limit how many SpoolColorStops to delete.
     */
    limit?: number
  }

  /**
   * SpoolColorStop without action
   */
  export type SpoolColorStopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpoolColorStop
     */
    select?: SpoolColorStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpoolColorStop
     */
    omit?: SpoolColorStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpoolColorStopInclude<ExtArgs> | null
  }


  /**
   * Model Usage
   */

  export type AggregateUsage = {
    _count: UsageCountAggregateOutputType | null
    _avg: UsageAvgAggregateOutputType | null
    _sum: UsageSumAggregateOutputType | null
    _min: UsageMinAggregateOutputType | null
    _max: UsageMaxAggregateOutputType | null
  }

  export type UsageAvgAggregateOutputType = {
    gramsUsed: number | null
  }

  export type UsageSumAggregateOutputType = {
    gramsUsed: number | null
  }

  export type UsageMinAggregateOutputType = {
    id: string | null
    spoolId: string | null
    gramsUsed: number | null
    note: string | null
    usedAt: Date | null
  }

  export type UsageMaxAggregateOutputType = {
    id: string | null
    spoolId: string | null
    gramsUsed: number | null
    note: string | null
    usedAt: Date | null
  }

  export type UsageCountAggregateOutputType = {
    id: number
    spoolId: number
    gramsUsed: number
    note: number
    usedAt: number
    _all: number
  }


  export type UsageAvgAggregateInputType = {
    gramsUsed?: true
  }

  export type UsageSumAggregateInputType = {
    gramsUsed?: true
  }

  export type UsageMinAggregateInputType = {
    id?: true
    spoolId?: true
    gramsUsed?: true
    note?: true
    usedAt?: true
  }

  export type UsageMaxAggregateInputType = {
    id?: true
    spoolId?: true
    gramsUsed?: true
    note?: true
    usedAt?: true
  }

  export type UsageCountAggregateInputType = {
    id?: true
    spoolId?: true
    gramsUsed?: true
    note?: true
    usedAt?: true
    _all?: true
  }

  export type UsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usage to aggregate.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usages
    **/
    _count?: true | UsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageMaxAggregateInputType
  }

  export type GetUsageAggregateType<T extends UsageAggregateArgs> = {
        [P in keyof T & keyof AggregateUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsage[P]>
      : GetScalarType<T[P], AggregateUsage[P]>
  }




  export type UsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageWhereInput
    orderBy?: UsageOrderByWithAggregationInput | UsageOrderByWithAggregationInput[]
    by: UsageScalarFieldEnum[] | UsageScalarFieldEnum
    having?: UsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageCountAggregateInputType | true
    _avg?: UsageAvgAggregateInputType
    _sum?: UsageSumAggregateInputType
    _min?: UsageMinAggregateInputType
    _max?: UsageMaxAggregateInputType
  }

  export type UsageGroupByOutputType = {
    id: string
    spoolId: string
    gramsUsed: number
    note: string | null
    usedAt: Date
    _count: UsageCountAggregateOutputType | null
    _avg: UsageAvgAggregateOutputType | null
    _sum: UsageSumAggregateOutputType | null
    _min: UsageMinAggregateOutputType | null
    _max: UsageMaxAggregateOutputType | null
  }

  type GetUsageGroupByPayload<T extends UsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageGroupByOutputType[P]>
            : GetScalarType<T[P], UsageGroupByOutputType[P]>
        }
      >
    >


  export type UsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spoolId?: boolean
    gramsUsed?: boolean
    note?: boolean
    usedAt?: boolean
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage"]>

  export type UsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spoolId?: boolean
    gramsUsed?: boolean
    note?: boolean
    usedAt?: boolean
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage"]>

  export type UsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spoolId?: boolean
    gramsUsed?: boolean
    note?: boolean
    usedAt?: boolean
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage"]>

  export type UsageSelectScalar = {
    id?: boolean
    spoolId?: boolean
    gramsUsed?: boolean
    note?: boolean
    usedAt?: boolean
  }

  export type UsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spoolId" | "gramsUsed" | "note" | "usedAt", ExtArgs["result"]["usage"]>
  export type UsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }
  export type UsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }
  export type UsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }

  export type $UsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usage"
    objects: {
      spool: Prisma.$SpoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      spoolId: string
      gramsUsed: number
      note: string | null
      usedAt: Date
    }, ExtArgs["result"]["usage"]>
    composites: {}
  }

  type UsageGetPayload<S extends boolean | null | undefined | UsageDefaultArgs> = $Result.GetResult<Prisma.$UsagePayload, S>

  type UsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageCountAggregateInputType | true
    }

  export interface UsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usage'], meta: { name: 'Usage' } }
    /**
     * Find zero or one Usage that matches the filter.
     * @param {UsageFindUniqueArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageFindUniqueArgs>(args: SelectSubset<T, UsageFindUniqueArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageFindUniqueOrThrowArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageFindFirstArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageFindFirstArgs>(args?: SelectSubset<T, UsageFindFirstArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageFindFirstOrThrowArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usages
     * const usages = await prisma.usage.findMany()
     * 
     * // Get first 10 Usages
     * const usages = await prisma.usage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageWithIdOnly = await prisma.usage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageFindManyArgs>(args?: SelectSubset<T, UsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usage.
     * @param {UsageCreateArgs} args - Arguments to create a Usage.
     * @example
     * // Create one Usage
     * const Usage = await prisma.usage.create({
     *   data: {
     *     // ... data to create a Usage
     *   }
     * })
     * 
     */
    create<T extends UsageCreateArgs>(args: SelectSubset<T, UsageCreateArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usages.
     * @param {UsageCreateManyArgs} args - Arguments to create many Usages.
     * @example
     * // Create many Usages
     * const usage = await prisma.usage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageCreateManyArgs>(args?: SelectSubset<T, UsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usages and returns the data saved in the database.
     * @param {UsageCreateManyAndReturnArgs} args - Arguments to create many Usages.
     * @example
     * // Create many Usages
     * const usage = await prisma.usage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usages and only return the `id`
     * const usageWithIdOnly = await prisma.usage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usage.
     * @param {UsageDeleteArgs} args - Arguments to delete one Usage.
     * @example
     * // Delete one Usage
     * const Usage = await prisma.usage.delete({
     *   where: {
     *     // ... filter to delete one Usage
     *   }
     * })
     * 
     */
    delete<T extends UsageDeleteArgs>(args: SelectSubset<T, UsageDeleteArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usage.
     * @param {UsageUpdateArgs} args - Arguments to update one Usage.
     * @example
     * // Update one Usage
     * const usage = await prisma.usage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageUpdateArgs>(args: SelectSubset<T, UsageUpdateArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usages.
     * @param {UsageDeleteManyArgs} args - Arguments to filter Usages to delete.
     * @example
     * // Delete a few Usages
     * const { count } = await prisma.usage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageDeleteManyArgs>(args?: SelectSubset<T, UsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usages
     * const usage = await prisma.usage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageUpdateManyArgs>(args: SelectSubset<T, UsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usages and returns the data updated in the database.
     * @param {UsageUpdateManyAndReturnArgs} args - Arguments to update many Usages.
     * @example
     * // Update many Usages
     * const usage = await prisma.usage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usages and only return the `id`
     * const usageWithIdOnly = await prisma.usage.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsageUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usage.
     * @param {UsageUpsertArgs} args - Arguments to update or create a Usage.
     * @example
     * // Update or create a Usage
     * const usage = await prisma.usage.upsert({
     *   create: {
     *     // ... data to create a Usage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usage we want to update
     *   }
     * })
     */
    upsert<T extends UsageUpsertArgs>(args: SelectSubset<T, UsageUpsertArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCountArgs} args - Arguments to filter Usages to count.
     * @example
     * // Count the number of Usages
     * const count = await prisma.usage.count({
     *   where: {
     *     // ... the filter for the Usages we want to count
     *   }
     * })
    **/
    count<T extends UsageCountArgs>(
      args?: Subset<T, UsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsageAggregateArgs>(args: Subset<T, UsageAggregateArgs>): Prisma.PrismaPromise<GetUsageAggregateType<T>>

    /**
     * Group by Usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGroupByArgs} args - Group by arguments.
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
      T extends UsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageGroupByArgs['orderBy'] }
        : { orderBy?: UsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usage model
   */
  readonly fields: UsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spool<T extends SpoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpoolDefaultArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usage model
   */
  interface UsageFieldRefs {
    readonly id: FieldRef<"Usage", 'String'>
    readonly spoolId: FieldRef<"Usage", 'String'>
    readonly gramsUsed: FieldRef<"Usage", 'Int'>
    readonly note: FieldRef<"Usage", 'String'>
    readonly usedAt: FieldRef<"Usage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usage findUnique
   */
  export type UsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage findUniqueOrThrow
   */
  export type UsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage findFirst
   */
  export type UsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usages.
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usages.
     */
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Usage findFirstOrThrow
   */
  export type UsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usages.
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usages.
     */
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Usage findMany
   */
  export type UsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usages to fetch.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usages.
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Usage create
   */
  export type UsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * The data needed to create a Usage.
     */
    data: XOR<UsageCreateInput, UsageUncheckedCreateInput>
  }

  /**
   * Usage createMany
   */
  export type UsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usages.
     */
    data: UsageCreateManyInput | UsageCreateManyInput[]
  }

  /**
   * Usage createManyAndReturn
   */
  export type UsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * The data used to create many Usages.
     */
    data: UsageCreateManyInput | UsageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usage update
   */
  export type UsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * The data needed to update a Usage.
     */
    data: XOR<UsageUpdateInput, UsageUncheckedUpdateInput>
    /**
     * Choose, which Usage to update.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage updateMany
   */
  export type UsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usages.
     */
    data: XOR<UsageUpdateManyMutationInput, UsageUncheckedUpdateManyInput>
    /**
     * Filter which Usages to update
     */
    where?: UsageWhereInput
    /**
     * Limit how many Usages to update.
     */
    limit?: number
  }

  /**
   * Usage updateManyAndReturn
   */
  export type UsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * The data used to update Usages.
     */
    data: XOR<UsageUpdateManyMutationInput, UsageUncheckedUpdateManyInput>
    /**
     * Filter which Usages to update
     */
    where?: UsageWhereInput
    /**
     * Limit how many Usages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usage upsert
   */
  export type UsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * The filter to search for the Usage to update in case it exists.
     */
    where: UsageWhereUniqueInput
    /**
     * In case the Usage found by the `where` argument doesn't exist, create a new Usage with this data.
     */
    create: XOR<UsageCreateInput, UsageUncheckedCreateInput>
    /**
     * In case the Usage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageUpdateInput, UsageUncheckedUpdateInput>
  }

  /**
   * Usage delete
   */
  export type UsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter which Usage to delete.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage deleteMany
   */
  export type UsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usages to delete
     */
    where?: UsageWhereInput
    /**
     * Limit how many Usages to delete.
     */
    limit?: number
  }

  /**
   * Usage without action
   */
  export type UsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usage
     */
    omit?: UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
  }


  /**
   * Model CustomField
   */

  export type AggregateCustomField = {
    _count: CustomFieldCountAggregateOutputType | null
    _avg: CustomFieldAvgAggregateOutputType | null
    _sum: CustomFieldSumAggregateOutputType | null
    _min: CustomFieldMinAggregateOutputType | null
    _max: CustomFieldMaxAggregateOutputType | null
  }

  export type CustomFieldAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CustomFieldSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CustomFieldMinAggregateOutputType = {
    id: string | null
    userId: string | null
    entity: string | null
    key: string | null
    label: string | null
    type: string | null
    required: boolean | null
    options: string | null
    sortOrder: number | null
    showInList: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomFieldMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    entity: string | null
    key: string | null
    label: string | null
    type: string | null
    required: boolean | null
    options: string | null
    sortOrder: number | null
    showInList: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomFieldCountAggregateOutputType = {
    id: number
    userId: number
    entity: number
    key: number
    label: number
    type: number
    required: number
    options: number
    sortOrder: number
    showInList: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomFieldAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CustomFieldSumAggregateInputType = {
    sortOrder?: true
  }

  export type CustomFieldMinAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    key?: true
    label?: true
    type?: true
    required?: true
    options?: true
    sortOrder?: true
    showInList?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomFieldMaxAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    key?: true
    label?: true
    type?: true
    required?: true
    options?: true
    sortOrder?: true
    showInList?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomFieldCountAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    key?: true
    label?: true
    type?: true
    required?: true
    options?: true
    sortOrder?: true
    showInList?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomField to aggregate.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomFields
    **/
    _count?: true | CustomFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomFieldMaxAggregateInputType
  }

  export type GetCustomFieldAggregateType<T extends CustomFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomField[P]>
      : GetScalarType<T[P], AggregateCustomField[P]>
  }




  export type CustomFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldWhereInput
    orderBy?: CustomFieldOrderByWithAggregationInput | CustomFieldOrderByWithAggregationInput[]
    by: CustomFieldScalarFieldEnum[] | CustomFieldScalarFieldEnum
    having?: CustomFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomFieldCountAggregateInputType | true
    _avg?: CustomFieldAvgAggregateInputType
    _sum?: CustomFieldSumAggregateInputType
    _min?: CustomFieldMinAggregateInputType
    _max?: CustomFieldMaxAggregateInputType
  }

  export type CustomFieldGroupByOutputType = {
    id: string
    userId: string
    entity: string
    key: string
    label: string
    type: string
    required: boolean
    options: string | null
    sortOrder: number
    showInList: boolean
    createdAt: Date
    updatedAt: Date
    _count: CustomFieldCountAggregateOutputType | null
    _avg: CustomFieldAvgAggregateOutputType | null
    _sum: CustomFieldSumAggregateOutputType | null
    _min: CustomFieldMinAggregateOutputType | null
    _max: CustomFieldMaxAggregateOutputType | null
  }

  type GetCustomFieldGroupByPayload<T extends CustomFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomFieldGroupByOutputType[P]>
            : GetScalarType<T[P], CustomFieldGroupByOutputType[P]>
        }
      >
    >


  export type CustomFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entity?: boolean
    key?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    sortOrder?: boolean
    showInList?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    values?: boolean | CustomField$valuesArgs<ExtArgs>
    _count?: boolean | CustomFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entity?: boolean
    key?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    sortOrder?: boolean
    showInList?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entity?: boolean
    key?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    sortOrder?: boolean
    showInList?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectScalar = {
    id?: boolean
    userId?: boolean
    entity?: boolean
    key?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    sortOrder?: boolean
    showInList?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "entity" | "key" | "label" | "type" | "required" | "options" | "sortOrder" | "showInList" | "createdAt" | "updatedAt", ExtArgs["result"]["customField"]>
  export type CustomFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    values?: boolean | CustomField$valuesArgs<ExtArgs>
    _count?: boolean | CustomFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomField"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      values: Prisma.$CustomFieldValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      /**
       * SPOOL for now
       */
      entity: string
      key: string
      label: string
      type: string
      required: boolean
      /**
       * JSON string array for SELECT / MULTISELECT
       */
      options: string | null
      sortOrder: number
      showInList: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customField"]>
    composites: {}
  }

  type CustomFieldGetPayload<S extends boolean | null | undefined | CustomFieldDefaultArgs> = $Result.GetResult<Prisma.$CustomFieldPayload, S>

  type CustomFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomFieldCountAggregateInputType | true
    }

  export interface CustomFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomField'], meta: { name: 'CustomField' } }
    /**
     * Find zero or one CustomField that matches the filter.
     * @param {CustomFieldFindUniqueArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomFieldFindUniqueArgs>(args: SelectSubset<T, CustomFieldFindUniqueArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomFieldFindUniqueOrThrowArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindFirstArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomFieldFindFirstArgs>(args?: SelectSubset<T, CustomFieldFindFirstArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindFirstOrThrowArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomFields
     * const customFields = await prisma.customField.findMany()
     * 
     * // Get first 10 CustomFields
     * const customFields = await prisma.customField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customFieldWithIdOnly = await prisma.customField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomFieldFindManyArgs>(args?: SelectSubset<T, CustomFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomField.
     * @param {CustomFieldCreateArgs} args - Arguments to create a CustomField.
     * @example
     * // Create one CustomField
     * const CustomField = await prisma.customField.create({
     *   data: {
     *     // ... data to create a CustomField
     *   }
     * })
     * 
     */
    create<T extends CustomFieldCreateArgs>(args: SelectSubset<T, CustomFieldCreateArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomFields.
     * @param {CustomFieldCreateManyArgs} args - Arguments to create many CustomFields.
     * @example
     * // Create many CustomFields
     * const customField = await prisma.customField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomFieldCreateManyArgs>(args?: SelectSubset<T, CustomFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomFields and returns the data saved in the database.
     * @param {CustomFieldCreateManyAndReturnArgs} args - Arguments to create many CustomFields.
     * @example
     * // Create many CustomFields
     * const customField = await prisma.customField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomFields and only return the `id`
     * const customFieldWithIdOnly = await prisma.customField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomField.
     * @param {CustomFieldDeleteArgs} args - Arguments to delete one CustomField.
     * @example
     * // Delete one CustomField
     * const CustomField = await prisma.customField.delete({
     *   where: {
     *     // ... filter to delete one CustomField
     *   }
     * })
     * 
     */
    delete<T extends CustomFieldDeleteArgs>(args: SelectSubset<T, CustomFieldDeleteArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomField.
     * @param {CustomFieldUpdateArgs} args - Arguments to update one CustomField.
     * @example
     * // Update one CustomField
     * const customField = await prisma.customField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomFieldUpdateArgs>(args: SelectSubset<T, CustomFieldUpdateArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomFields.
     * @param {CustomFieldDeleteManyArgs} args - Arguments to filter CustomFields to delete.
     * @example
     * // Delete a few CustomFields
     * const { count } = await prisma.customField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomFieldDeleteManyArgs>(args?: SelectSubset<T, CustomFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomFields
     * const customField = await prisma.customField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomFieldUpdateManyArgs>(args: SelectSubset<T, CustomFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFields and returns the data updated in the database.
     * @param {CustomFieldUpdateManyAndReturnArgs} args - Arguments to update many CustomFields.
     * @example
     * // Update many CustomFields
     * const customField = await prisma.customField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomFields and only return the `id`
     * const customFieldWithIdOnly = await prisma.customField.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomField.
     * @param {CustomFieldUpsertArgs} args - Arguments to update or create a CustomField.
     * @example
     * // Update or create a CustomField
     * const customField = await prisma.customField.upsert({
     *   create: {
     *     // ... data to create a CustomField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomField we want to update
     *   }
     * })
     */
    upsert<T extends CustomFieldUpsertArgs>(args: SelectSubset<T, CustomFieldUpsertArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldCountArgs} args - Arguments to filter CustomFields to count.
     * @example
     * // Count the number of CustomFields
     * const count = await prisma.customField.count({
     *   where: {
     *     // ... the filter for the CustomFields we want to count
     *   }
     * })
    **/
    count<T extends CustomFieldCountArgs>(
      args?: Subset<T, CustomFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomFieldAggregateArgs>(args: Subset<T, CustomFieldAggregateArgs>): Prisma.PrismaPromise<GetCustomFieldAggregateType<T>>

    /**
     * Group by CustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldGroupByArgs} args - Group by arguments.
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
      T extends CustomFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomFieldGroupByArgs['orderBy'] }
        : { orderBy?: CustomFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomField model
   */
  readonly fields: CustomFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends CustomField$valuesArgs<ExtArgs> = {}>(args?: Subset<T, CustomField$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CustomField model
   */
  interface CustomFieldFieldRefs {
    readonly id: FieldRef<"CustomField", 'String'>
    readonly userId: FieldRef<"CustomField", 'String'>
    readonly entity: FieldRef<"CustomField", 'String'>
    readonly key: FieldRef<"CustomField", 'String'>
    readonly label: FieldRef<"CustomField", 'String'>
    readonly type: FieldRef<"CustomField", 'String'>
    readonly required: FieldRef<"CustomField", 'Boolean'>
    readonly options: FieldRef<"CustomField", 'String'>
    readonly sortOrder: FieldRef<"CustomField", 'Int'>
    readonly showInList: FieldRef<"CustomField", 'Boolean'>
    readonly createdAt: FieldRef<"CustomField", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomField findUnique
   */
  export type CustomFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField findUniqueOrThrow
   */
  export type CustomFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField findFirst
   */
  export type CustomFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFields.
     */
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField findFirstOrThrow
   */
  export type CustomFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFields.
     */
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField findMany
   */
  export type CustomFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomFields to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField create
   */
  export type CustomFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomField.
     */
    data: XOR<CustomFieldCreateInput, CustomFieldUncheckedCreateInput>
  }

  /**
   * CustomField createMany
   */
  export type CustomFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomFields.
     */
    data: CustomFieldCreateManyInput | CustomFieldCreateManyInput[]
  }

  /**
   * CustomField createManyAndReturn
   */
  export type CustomFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * The data used to create many CustomFields.
     */
    data: CustomFieldCreateManyInput | CustomFieldCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomField update
   */
  export type CustomFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomField.
     */
    data: XOR<CustomFieldUpdateInput, CustomFieldUncheckedUpdateInput>
    /**
     * Choose, which CustomField to update.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField updateMany
   */
  export type CustomFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomFields.
     */
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyInput>
    /**
     * Filter which CustomFields to update
     */
    where?: CustomFieldWhereInput
    /**
     * Limit how many CustomFields to update.
     */
    limit?: number
  }

  /**
   * CustomField updateManyAndReturn
   */
  export type CustomFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * The data used to update CustomFields.
     */
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyInput>
    /**
     * Filter which CustomFields to update
     */
    where?: CustomFieldWhereInput
    /**
     * Limit how many CustomFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomField upsert
   */
  export type CustomFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomField to update in case it exists.
     */
    where: CustomFieldWhereUniqueInput
    /**
     * In case the CustomField found by the `where` argument doesn't exist, create a new CustomField with this data.
     */
    create: XOR<CustomFieldCreateInput, CustomFieldUncheckedCreateInput>
    /**
     * In case the CustomField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomFieldUpdateInput, CustomFieldUncheckedUpdateInput>
  }

  /**
   * CustomField delete
   */
  export type CustomFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter which CustomField to delete.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField deleteMany
   */
  export type CustomFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFields to delete
     */
    where?: CustomFieldWhereInput
    /**
     * Limit how many CustomFields to delete.
     */
    limit?: number
  }

  /**
   * CustomField.values
   */
  export type CustomField$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    where?: CustomFieldValueWhereInput
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    cursor?: CustomFieldValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomField without action
   */
  export type CustomFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
  }


  /**
   * Model CustomFieldValue
   */

  export type AggregateCustomFieldValue = {
    _count: CustomFieldValueCountAggregateOutputType | null
    _avg: CustomFieldValueAvgAggregateOutputType | null
    _sum: CustomFieldValueSumAggregateOutputType | null
    _min: CustomFieldValueMinAggregateOutputType | null
    _max: CustomFieldValueMaxAggregateOutputType | null
  }

  export type CustomFieldValueAvgAggregateOutputType = {
    valueNumber: number | null
  }

  export type CustomFieldValueSumAggregateOutputType = {
    valueNumber: number | null
  }

  export type CustomFieldValueMinAggregateOutputType = {
    id: string | null
    fieldId: string | null
    spoolId: string | null
    valueText: string | null
    valueNumber: number | null
    valueBoolean: boolean | null
    valueDate: Date | null
  }

  export type CustomFieldValueMaxAggregateOutputType = {
    id: string | null
    fieldId: string | null
    spoolId: string | null
    valueText: string | null
    valueNumber: number | null
    valueBoolean: boolean | null
    valueDate: Date | null
  }

  export type CustomFieldValueCountAggregateOutputType = {
    id: number
    fieldId: number
    spoolId: number
    valueText: number
    valueNumber: number
    valueBoolean: number
    valueDate: number
    _all: number
  }


  export type CustomFieldValueAvgAggregateInputType = {
    valueNumber?: true
  }

  export type CustomFieldValueSumAggregateInputType = {
    valueNumber?: true
  }

  export type CustomFieldValueMinAggregateInputType = {
    id?: true
    fieldId?: true
    spoolId?: true
    valueText?: true
    valueNumber?: true
    valueBoolean?: true
    valueDate?: true
  }

  export type CustomFieldValueMaxAggregateInputType = {
    id?: true
    fieldId?: true
    spoolId?: true
    valueText?: true
    valueNumber?: true
    valueBoolean?: true
    valueDate?: true
  }

  export type CustomFieldValueCountAggregateInputType = {
    id?: true
    fieldId?: true
    spoolId?: true
    valueText?: true
    valueNumber?: true
    valueBoolean?: true
    valueDate?: true
    _all?: true
  }

  export type CustomFieldValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFieldValue to aggregate.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomFieldValues
    **/
    _count?: true | CustomFieldValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomFieldValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomFieldValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomFieldValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomFieldValueMaxAggregateInputType
  }

  export type GetCustomFieldValueAggregateType<T extends CustomFieldValueAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomFieldValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomFieldValue[P]>
      : GetScalarType<T[P], AggregateCustomFieldValue[P]>
  }




  export type CustomFieldValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldValueWhereInput
    orderBy?: CustomFieldValueOrderByWithAggregationInput | CustomFieldValueOrderByWithAggregationInput[]
    by: CustomFieldValueScalarFieldEnum[] | CustomFieldValueScalarFieldEnum
    having?: CustomFieldValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomFieldValueCountAggregateInputType | true
    _avg?: CustomFieldValueAvgAggregateInputType
    _sum?: CustomFieldValueSumAggregateInputType
    _min?: CustomFieldValueMinAggregateInputType
    _max?: CustomFieldValueMaxAggregateInputType
  }

  export type CustomFieldValueGroupByOutputType = {
    id: string
    fieldId: string
    spoolId: string
    valueText: string | null
    valueNumber: number | null
    valueBoolean: boolean | null
    valueDate: Date | null
    _count: CustomFieldValueCountAggregateOutputType | null
    _avg: CustomFieldValueAvgAggregateOutputType | null
    _sum: CustomFieldValueSumAggregateOutputType | null
    _min: CustomFieldValueMinAggregateOutputType | null
    _max: CustomFieldValueMaxAggregateOutputType | null
  }

  type GetCustomFieldValueGroupByPayload<T extends CustomFieldValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomFieldValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomFieldValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomFieldValueGroupByOutputType[P]>
            : GetScalarType<T[P], CustomFieldValueGroupByOutputType[P]>
        }
      >
    >


  export type CustomFieldValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    spoolId?: boolean
    valueText?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    valueDate?: boolean
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldValue"]>

  export type CustomFieldValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    spoolId?: boolean
    valueText?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    valueDate?: boolean
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldValue"]>

  export type CustomFieldValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    spoolId?: boolean
    valueText?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    valueDate?: boolean
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldValue"]>

  export type CustomFieldValueSelectScalar = {
    id?: boolean
    fieldId?: boolean
    spoolId?: boolean
    valueText?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    valueDate?: boolean
  }

  export type CustomFieldValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fieldId" | "spoolId" | "valueText" | "valueNumber" | "valueBoolean" | "valueDate", ExtArgs["result"]["customFieldValue"]>
  export type CustomFieldValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }
  export type CustomFieldValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }
  export type CustomFieldValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
    spool?: boolean | SpoolDefaultArgs<ExtArgs>
  }

  export type $CustomFieldValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomFieldValue"
    objects: {
      field: Prisma.$CustomFieldPayload<ExtArgs>
      spool: Prisma.$SpoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fieldId: string
      spoolId: string
      valueText: string | null
      valueNumber: number | null
      valueBoolean: boolean | null
      valueDate: Date | null
    }, ExtArgs["result"]["customFieldValue"]>
    composites: {}
  }

  type CustomFieldValueGetPayload<S extends boolean | null | undefined | CustomFieldValueDefaultArgs> = $Result.GetResult<Prisma.$CustomFieldValuePayload, S>

  type CustomFieldValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomFieldValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomFieldValueCountAggregateInputType | true
    }

  export interface CustomFieldValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomFieldValue'], meta: { name: 'CustomFieldValue' } }
    /**
     * Find zero or one CustomFieldValue that matches the filter.
     * @param {CustomFieldValueFindUniqueArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomFieldValueFindUniqueArgs>(args: SelectSubset<T, CustomFieldValueFindUniqueArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomFieldValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomFieldValueFindUniqueOrThrowArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomFieldValueFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomFieldValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomFieldValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueFindFirstArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomFieldValueFindFirstArgs>(args?: SelectSubset<T, CustomFieldValueFindFirstArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomFieldValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueFindFirstOrThrowArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomFieldValueFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomFieldValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomFieldValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomFieldValues
     * const customFieldValues = await prisma.customFieldValue.findMany()
     * 
     * // Get first 10 CustomFieldValues
     * const customFieldValues = await prisma.customFieldValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customFieldValueWithIdOnly = await prisma.customFieldValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomFieldValueFindManyArgs>(args?: SelectSubset<T, CustomFieldValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomFieldValue.
     * @param {CustomFieldValueCreateArgs} args - Arguments to create a CustomFieldValue.
     * @example
     * // Create one CustomFieldValue
     * const CustomFieldValue = await prisma.customFieldValue.create({
     *   data: {
     *     // ... data to create a CustomFieldValue
     *   }
     * })
     * 
     */
    create<T extends CustomFieldValueCreateArgs>(args: SelectSubset<T, CustomFieldValueCreateArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomFieldValues.
     * @param {CustomFieldValueCreateManyArgs} args - Arguments to create many CustomFieldValues.
     * @example
     * // Create many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomFieldValueCreateManyArgs>(args?: SelectSubset<T, CustomFieldValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomFieldValues and returns the data saved in the database.
     * @param {CustomFieldValueCreateManyAndReturnArgs} args - Arguments to create many CustomFieldValues.
     * @example
     * // Create many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomFieldValues and only return the `id`
     * const customFieldValueWithIdOnly = await prisma.customFieldValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomFieldValueCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomFieldValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomFieldValue.
     * @param {CustomFieldValueDeleteArgs} args - Arguments to delete one CustomFieldValue.
     * @example
     * // Delete one CustomFieldValue
     * const CustomFieldValue = await prisma.customFieldValue.delete({
     *   where: {
     *     // ... filter to delete one CustomFieldValue
     *   }
     * })
     * 
     */
    delete<T extends CustomFieldValueDeleteArgs>(args: SelectSubset<T, CustomFieldValueDeleteArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomFieldValue.
     * @param {CustomFieldValueUpdateArgs} args - Arguments to update one CustomFieldValue.
     * @example
     * // Update one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomFieldValueUpdateArgs>(args: SelectSubset<T, CustomFieldValueUpdateArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomFieldValues.
     * @param {CustomFieldValueDeleteManyArgs} args - Arguments to filter CustomFieldValues to delete.
     * @example
     * // Delete a few CustomFieldValues
     * const { count } = await prisma.customFieldValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomFieldValueDeleteManyArgs>(args?: SelectSubset<T, CustomFieldValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFieldValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomFieldValueUpdateManyArgs>(args: SelectSubset<T, CustomFieldValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFieldValues and returns the data updated in the database.
     * @param {CustomFieldValueUpdateManyAndReturnArgs} args - Arguments to update many CustomFieldValues.
     * @example
     * // Update many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomFieldValues and only return the `id`
     * const customFieldValueWithIdOnly = await prisma.customFieldValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomFieldValueUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomFieldValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomFieldValue.
     * @param {CustomFieldValueUpsertArgs} args - Arguments to update or create a CustomFieldValue.
     * @example
     * // Update or create a CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.upsert({
     *   create: {
     *     // ... data to create a CustomFieldValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomFieldValue we want to update
     *   }
     * })
     */
    upsert<T extends CustomFieldValueUpsertArgs>(args: SelectSubset<T, CustomFieldValueUpsertArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomFieldValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueCountArgs} args - Arguments to filter CustomFieldValues to count.
     * @example
     * // Count the number of CustomFieldValues
     * const count = await prisma.customFieldValue.count({
     *   where: {
     *     // ... the filter for the CustomFieldValues we want to count
     *   }
     * })
    **/
    count<T extends CustomFieldValueCountArgs>(
      args?: Subset<T, CustomFieldValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomFieldValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomFieldValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomFieldValueAggregateArgs>(args: Subset<T, CustomFieldValueAggregateArgs>): Prisma.PrismaPromise<GetCustomFieldValueAggregateType<T>>

    /**
     * Group by CustomFieldValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueGroupByArgs} args - Group by arguments.
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
      T extends CustomFieldValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomFieldValueGroupByArgs['orderBy'] }
        : { orderBy?: CustomFieldValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomFieldValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomFieldValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomFieldValue model
   */
  readonly fields: CustomFieldValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomFieldValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomFieldValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends CustomFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomFieldDefaultArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spool<T extends SpoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpoolDefaultArgs<ExtArgs>>): Prisma__SpoolClient<$Result.GetResult<Prisma.$SpoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomFieldValue model
   */
  interface CustomFieldValueFieldRefs {
    readonly id: FieldRef<"CustomFieldValue", 'String'>
    readonly fieldId: FieldRef<"CustomFieldValue", 'String'>
    readonly spoolId: FieldRef<"CustomFieldValue", 'String'>
    readonly valueText: FieldRef<"CustomFieldValue", 'String'>
    readonly valueNumber: FieldRef<"CustomFieldValue", 'Float'>
    readonly valueBoolean: FieldRef<"CustomFieldValue", 'Boolean'>
    readonly valueDate: FieldRef<"CustomFieldValue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomFieldValue findUnique
   */
  export type CustomFieldValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue findUniqueOrThrow
   */
  export type CustomFieldValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue findFirst
   */
  export type CustomFieldValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFieldValues.
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFieldValues.
     */
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomFieldValue findFirstOrThrow
   */
  export type CustomFieldValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFieldValues.
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFieldValues.
     */
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomFieldValue findMany
   */
  export type CustomFieldValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValues to fetch.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomFieldValues.
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomFieldValue create
   */
  export type CustomFieldValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomFieldValue.
     */
    data: XOR<CustomFieldValueCreateInput, CustomFieldValueUncheckedCreateInput>
  }

  /**
   * CustomFieldValue createMany
   */
  export type CustomFieldValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomFieldValues.
     */
    data: CustomFieldValueCreateManyInput | CustomFieldValueCreateManyInput[]
  }

  /**
   * CustomFieldValue createManyAndReturn
   */
  export type CustomFieldValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * The data used to create many CustomFieldValues.
     */
    data: CustomFieldValueCreateManyInput | CustomFieldValueCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomFieldValue update
   */
  export type CustomFieldValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomFieldValue.
     */
    data: XOR<CustomFieldValueUpdateInput, CustomFieldValueUncheckedUpdateInput>
    /**
     * Choose, which CustomFieldValue to update.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue updateMany
   */
  export type CustomFieldValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomFieldValues.
     */
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyInput>
    /**
     * Filter which CustomFieldValues to update
     */
    where?: CustomFieldValueWhereInput
    /**
     * Limit how many CustomFieldValues to update.
     */
    limit?: number
  }

  /**
   * CustomFieldValue updateManyAndReturn
   */
  export type CustomFieldValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * The data used to update CustomFieldValues.
     */
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyInput>
    /**
     * Filter which CustomFieldValues to update
     */
    where?: CustomFieldValueWhereInput
    /**
     * Limit how many CustomFieldValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomFieldValue upsert
   */
  export type CustomFieldValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomFieldValue to update in case it exists.
     */
    where: CustomFieldValueWhereUniqueInput
    /**
     * In case the CustomFieldValue found by the `where` argument doesn't exist, create a new CustomFieldValue with this data.
     */
    create: XOR<CustomFieldValueCreateInput, CustomFieldValueUncheckedCreateInput>
    /**
     * In case the CustomFieldValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomFieldValueUpdateInput, CustomFieldValueUncheckedUpdateInput>
  }

  /**
   * CustomFieldValue delete
   */
  export type CustomFieldValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter which CustomFieldValue to delete.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue deleteMany
   */
  export type CustomFieldValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFieldValues to delete
     */
    where?: CustomFieldValueWhereInput
    /**
     * Limit how many CustomFieldValues to delete.
     */
    limit?: number
  }

  /**
   * CustomFieldValue without action
   */
  export type CustomFieldValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
  }


  /**
   * Model AppSetup
   */

  export type AggregateAppSetup = {
    _count: AppSetupCountAggregateOutputType | null
    _avg: AppSetupAvgAggregateOutputType | null
    _sum: AppSetupSumAggregateOutputType | null
    _min: AppSetupMinAggregateOutputType | null
    _max: AppSetupMaxAggregateOutputType | null
  }

  export type AppSetupAvgAggregateOutputType = {
    id: number | null
  }

  export type AppSetupSumAggregateOutputType = {
    id: number | null
  }

  export type AppSetupMinAggregateOutputType = {
    id: number | null
    completed: boolean | null
    completedAt: Date | null
    installedDatasets: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSetupMaxAggregateOutputType = {
    id: number | null
    completed: boolean | null
    completedAt: Date | null
    installedDatasets: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSetupCountAggregateOutputType = {
    id: number
    completed: number
    completedAt: number
    installedDatasets: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppSetupAvgAggregateInputType = {
    id?: true
  }

  export type AppSetupSumAggregateInputType = {
    id?: true
  }

  export type AppSetupMinAggregateInputType = {
    id?: true
    completed?: true
    completedAt?: true
    installedDatasets?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSetupMaxAggregateInputType = {
    id?: true
    completed?: true
    completedAt?: true
    installedDatasets?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSetupCountAggregateInputType = {
    id?: true
    completed?: true
    completedAt?: true
    installedDatasets?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSetupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSetup to aggregate.
     */
    where?: AppSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSetups to fetch.
     */
    orderBy?: AppSetupOrderByWithRelationInput | AppSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSetups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSetups
    **/
    _count?: true | AppSetupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppSetupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppSetupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSetupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSetupMaxAggregateInputType
  }

  export type GetAppSetupAggregateType<T extends AppSetupAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSetup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSetup[P]>
      : GetScalarType<T[P], AggregateAppSetup[P]>
  }




  export type AppSetupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSetupWhereInput
    orderBy?: AppSetupOrderByWithAggregationInput | AppSetupOrderByWithAggregationInput[]
    by: AppSetupScalarFieldEnum[] | AppSetupScalarFieldEnum
    having?: AppSetupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSetupCountAggregateInputType | true
    _avg?: AppSetupAvgAggregateInputType
    _sum?: AppSetupSumAggregateInputType
    _min?: AppSetupMinAggregateInputType
    _max?: AppSetupMaxAggregateInputType
  }

  export type AppSetupGroupByOutputType = {
    id: number
    completed: boolean
    completedAt: Date | null
    installedDatasets: string
    createdAt: Date
    updatedAt: Date
    _count: AppSetupCountAggregateOutputType | null
    _avg: AppSetupAvgAggregateOutputType | null
    _sum: AppSetupSumAggregateOutputType | null
    _min: AppSetupMinAggregateOutputType | null
    _max: AppSetupMaxAggregateOutputType | null
  }

  type GetAppSetupGroupByPayload<T extends AppSetupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSetupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSetupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSetupGroupByOutputType[P]>
            : GetScalarType<T[P], AppSetupGroupByOutputType[P]>
        }
      >
    >


  export type AppSetupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    completedAt?: boolean
    installedDatasets?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetup"]>

  export type AppSetupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    completedAt?: boolean
    installedDatasets?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetup"]>

  export type AppSetupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    completedAt?: boolean
    installedDatasets?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetup"]>

  export type AppSetupSelectScalar = {
    id?: boolean
    completed?: boolean
    completedAt?: boolean
    installedDatasets?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppSetupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completed" | "completedAt" | "installedDatasets" | "createdAt" | "updatedAt", ExtArgs["result"]["appSetup"]>

  export type $AppSetupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSetup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      completed: boolean
      completedAt: Date | null
      installedDatasets: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appSetup"]>
    composites: {}
  }

  type AppSetupGetPayload<S extends boolean | null | undefined | AppSetupDefaultArgs> = $Result.GetResult<Prisma.$AppSetupPayload, S>

  type AppSetupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppSetupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppSetupCountAggregateInputType | true
    }

  export interface AppSetupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSetup'], meta: { name: 'AppSetup' } }
    /**
     * Find zero or one AppSetup that matches the filter.
     * @param {AppSetupFindUniqueArgs} args - Arguments to find a AppSetup
     * @example
     * // Get one AppSetup
     * const appSetup = await prisma.appSetup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSetupFindUniqueArgs>(args: SelectSubset<T, AppSetupFindUniqueArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppSetup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppSetupFindUniqueOrThrowArgs} args - Arguments to find a AppSetup
     * @example
     * // Get one AppSetup
     * const appSetup = await prisma.appSetup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSetupFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSetupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSetupFindFirstArgs} args - Arguments to find a AppSetup
     * @example
     * // Get one AppSetup
     * const appSetup = await prisma.appSetup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSetupFindFirstArgs>(args?: SelectSubset<T, AppSetupFindFirstArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSetupFindFirstOrThrowArgs} args - Arguments to find a AppSetup
     * @example
     * // Get one AppSetup
     * const appSetup = await prisma.appSetup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSetupFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSetupFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppSetups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSetupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSetups
     * const appSetups = await prisma.appSetup.findMany()
     * 
     * // Get first 10 AppSetups
     * const appSetups = await prisma.appSetup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSetupWithIdOnly = await prisma.appSetup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSetupFindManyArgs>(args?: SelectSubset<T, AppSetupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppSetup.
     * @param {AppSetupCreateArgs} args - Arguments to create a AppSetup.
     * @example
     * // Create one AppSetup
     * const AppSetup = await prisma.appSetup.create({
     *   data: {
     *     // ... data to create a AppSetup
     *   }
     * })
     * 
     */
    create<T extends AppSetupCreateArgs>(args: SelectSubset<T, AppSetupCreateArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppSetups.
     * @param {AppSetupCreateManyArgs} args - Arguments to create many AppSetups.
     * @example
     * // Create many AppSetups
     * const appSetup = await prisma.appSetup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSetupCreateManyArgs>(args?: SelectSubset<T, AppSetupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSetups and returns the data saved in the database.
     * @param {AppSetupCreateManyAndReturnArgs} args - Arguments to create many AppSetups.
     * @example
     * // Create many AppSetups
     * const appSetup = await prisma.appSetup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSetups and only return the `id`
     * const appSetupWithIdOnly = await prisma.appSetup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSetupCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSetupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppSetup.
     * @param {AppSetupDeleteArgs} args - Arguments to delete one AppSetup.
     * @example
     * // Delete one AppSetup
     * const AppSetup = await prisma.appSetup.delete({
     *   where: {
     *     // ... filter to delete one AppSetup
     *   }
     * })
     * 
     */
    delete<T extends AppSetupDeleteArgs>(args: SelectSubset<T, AppSetupDeleteArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppSetup.
     * @param {AppSetupUpdateArgs} args - Arguments to update one AppSetup.
     * @example
     * // Update one AppSetup
     * const appSetup = await prisma.appSetup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSetupUpdateArgs>(args: SelectSubset<T, AppSetupUpdateArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppSetups.
     * @param {AppSetupDeleteManyArgs} args - Arguments to filter AppSetups to delete.
     * @example
     * // Delete a few AppSetups
     * const { count } = await prisma.appSetup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSetupDeleteManyArgs>(args?: SelectSubset<T, AppSetupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSetups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSetupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSetups
     * const appSetup = await prisma.appSetup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSetupUpdateManyArgs>(args: SelectSubset<T, AppSetupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSetups and returns the data updated in the database.
     * @param {AppSetupUpdateManyAndReturnArgs} args - Arguments to update many AppSetups.
     * @example
     * // Update many AppSetups
     * const appSetup = await prisma.appSetup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppSetups and only return the `id`
     * const appSetupWithIdOnly = await prisma.appSetup.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppSetupUpdateManyAndReturnArgs>(args: SelectSubset<T, AppSetupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppSetup.
     * @param {AppSetupUpsertArgs} args - Arguments to update or create a AppSetup.
     * @example
     * // Update or create a AppSetup
     * const appSetup = await prisma.appSetup.upsert({
     *   create: {
     *     // ... data to create a AppSetup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSetup we want to update
     *   }
     * })
     */
    upsert<T extends AppSetupUpsertArgs>(args: SelectSubset<T, AppSetupUpsertArgs<ExtArgs>>): Prisma__AppSetupClient<$Result.GetResult<Prisma.$AppSetupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppSetups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSetupCountArgs} args - Arguments to filter AppSetups to count.
     * @example
     * // Count the number of AppSetups
     * const count = await prisma.appSetup.count({
     *   where: {
     *     // ... the filter for the AppSetups we want to count
     *   }
     * })
    **/
    count<T extends AppSetupCountArgs>(
      args?: Subset<T, AppSetupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSetupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSetup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSetupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppSetupAggregateArgs>(args: Subset<T, AppSetupAggregateArgs>): Prisma.PrismaPromise<GetAppSetupAggregateType<T>>

    /**
     * Group by AppSetup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSetupGroupByArgs} args - Group by arguments.
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
      T extends AppSetupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSetupGroupByArgs['orderBy'] }
        : { orderBy?: AppSetupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppSetupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSetupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSetup model
   */
  readonly fields: AppSetupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSetup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSetupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AppSetup model
   */
  interface AppSetupFieldRefs {
    readonly id: FieldRef<"AppSetup", 'Int'>
    readonly completed: FieldRef<"AppSetup", 'Boolean'>
    readonly completedAt: FieldRef<"AppSetup", 'DateTime'>
    readonly installedDatasets: FieldRef<"AppSetup", 'String'>
    readonly createdAt: FieldRef<"AppSetup", 'DateTime'>
    readonly updatedAt: FieldRef<"AppSetup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSetup findUnique
   */
  export type AppSetupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * Filter, which AppSetup to fetch.
     */
    where: AppSetupWhereUniqueInput
  }

  /**
   * AppSetup findUniqueOrThrow
   */
  export type AppSetupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * Filter, which AppSetup to fetch.
     */
    where: AppSetupWhereUniqueInput
  }

  /**
   * AppSetup findFirst
   */
  export type AppSetupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * Filter, which AppSetup to fetch.
     */
    where?: AppSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSetups to fetch.
     */
    orderBy?: AppSetupOrderByWithRelationInput | AppSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSetups.
     */
    cursor?: AppSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSetups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSetups.
     */
    distinct?: AppSetupScalarFieldEnum | AppSetupScalarFieldEnum[]
  }

  /**
   * AppSetup findFirstOrThrow
   */
  export type AppSetupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * Filter, which AppSetup to fetch.
     */
    where?: AppSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSetups to fetch.
     */
    orderBy?: AppSetupOrderByWithRelationInput | AppSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSetups.
     */
    cursor?: AppSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSetups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSetups.
     */
    distinct?: AppSetupScalarFieldEnum | AppSetupScalarFieldEnum[]
  }

  /**
   * AppSetup findMany
   */
  export type AppSetupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * Filter, which AppSetups to fetch.
     */
    where?: AppSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSetups to fetch.
     */
    orderBy?: AppSetupOrderByWithRelationInput | AppSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSetups.
     */
    cursor?: AppSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSetups.
     */
    skip?: number
    distinct?: AppSetupScalarFieldEnum | AppSetupScalarFieldEnum[]
  }

  /**
   * AppSetup create
   */
  export type AppSetupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * The data needed to create a AppSetup.
     */
    data: XOR<AppSetupCreateInput, AppSetupUncheckedCreateInput>
  }

  /**
   * AppSetup createMany
   */
  export type AppSetupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSetups.
     */
    data: AppSetupCreateManyInput | AppSetupCreateManyInput[]
  }

  /**
   * AppSetup createManyAndReturn
   */
  export type AppSetupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * The data used to create many AppSetups.
     */
    data: AppSetupCreateManyInput | AppSetupCreateManyInput[]
  }

  /**
   * AppSetup update
   */
  export type AppSetupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * The data needed to update a AppSetup.
     */
    data: XOR<AppSetupUpdateInput, AppSetupUncheckedUpdateInput>
    /**
     * Choose, which AppSetup to update.
     */
    where: AppSetupWhereUniqueInput
  }

  /**
   * AppSetup updateMany
   */
  export type AppSetupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSetups.
     */
    data: XOR<AppSetupUpdateManyMutationInput, AppSetupUncheckedUpdateManyInput>
    /**
     * Filter which AppSetups to update
     */
    where?: AppSetupWhereInput
    /**
     * Limit how many AppSetups to update.
     */
    limit?: number
  }

  /**
   * AppSetup updateManyAndReturn
   */
  export type AppSetupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * The data used to update AppSetups.
     */
    data: XOR<AppSetupUpdateManyMutationInput, AppSetupUncheckedUpdateManyInput>
    /**
     * Filter which AppSetups to update
     */
    where?: AppSetupWhereInput
    /**
     * Limit how many AppSetups to update.
     */
    limit?: number
  }

  /**
   * AppSetup upsert
   */
  export type AppSetupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * The filter to search for the AppSetup to update in case it exists.
     */
    where: AppSetupWhereUniqueInput
    /**
     * In case the AppSetup found by the `where` argument doesn't exist, create a new AppSetup with this data.
     */
    create: XOR<AppSetupCreateInput, AppSetupUncheckedCreateInput>
    /**
     * In case the AppSetup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSetupUpdateInput, AppSetupUncheckedUpdateInput>
  }

  /**
   * AppSetup delete
   */
  export type AppSetupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
    /**
     * Filter which AppSetup to delete.
     */
    where: AppSetupWhereUniqueInput
  }

  /**
   * AppSetup deleteMany
   */
  export type AppSetupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSetups to delete
     */
    where?: AppSetupWhereInput
    /**
     * Limit how many AppSetups to delete.
     */
    limit?: number
  }

  /**
   * AppSetup without action
   */
  export type AppSetupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetup
     */
    select?: AppSetupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetup
     */
    omit?: AppSetupOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    websiteUrl: 'websiteUrl',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    density: 'density',
    maxNozzleC: 'maxNozzleC',
    maxBedC: 'maxBedC',
    minNozzleC: 'minNozzleC',
    minBedC: 'minBedC',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SpoolScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    brandId: 'brandId',
    materialId: 'materialId',
    locationId: 'locationId',
    colorMode: 'colorMode',
    colorName: 'colorName',
    diameterMm: 'diameterMm',
    initialWeightG: 'initialWeightG',
    remainingWeightG: 'remainingWeightG',
    status: 'status',
    needsRepurchase: 'needsRepurchase',
    productUrl: 'productUrl',
    purchasedAt: 'purchasedAt',
    priceCents: 'priceCents',
    notes: 'notes',
    lastDriedAt: 'lastDriedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpoolScalarFieldEnum = (typeof SpoolScalarFieldEnum)[keyof typeof SpoolScalarFieldEnum]


  export const SpoolColorStopScalarFieldEnum: {
    id: 'id',
    spoolId: 'spoolId',
    hex: 'hex',
    name: 'name',
    position: 'position',
    weight: 'weight'
  };

  export type SpoolColorStopScalarFieldEnum = (typeof SpoolColorStopScalarFieldEnum)[keyof typeof SpoolColorStopScalarFieldEnum]


  export const UsageScalarFieldEnum: {
    id: 'id',
    spoolId: 'spoolId',
    gramsUsed: 'gramsUsed',
    note: 'note',
    usedAt: 'usedAt'
  };

  export type UsageScalarFieldEnum = (typeof UsageScalarFieldEnum)[keyof typeof UsageScalarFieldEnum]


  export const CustomFieldScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    entity: 'entity',
    key: 'key',
    label: 'label',
    type: 'type',
    required: 'required',
    options: 'options',
    sortOrder: 'sortOrder',
    showInList: 'showInList',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomFieldScalarFieldEnum = (typeof CustomFieldScalarFieldEnum)[keyof typeof CustomFieldScalarFieldEnum]


  export const CustomFieldValueScalarFieldEnum: {
    id: 'id',
    fieldId: 'fieldId',
    spoolId: 'spoolId',
    valueText: 'valueText',
    valueNumber: 'valueNumber',
    valueBoolean: 'valueBoolean',
    valueDate: 'valueDate'
  };

  export type CustomFieldValueScalarFieldEnum = (typeof CustomFieldValueScalarFieldEnum)[keyof typeof CustomFieldValueScalarFieldEnum]


  export const AppSetupScalarFieldEnum: {
    id: 'id',
    completed: 'completed',
    completedAt: 'completedAt',
    installedDatasets: 'installedDatasets',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppSetupScalarFieldEnum = (typeof AppSetupScalarFieldEnum)[keyof typeof AppSetupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    brands?: BrandListRelationFilter
    locations?: LocationListRelationFilter
    spools?: SpoolListRelationFilter
    customFields?: CustomFieldListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    brands?: BrandOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
    spools?: SpoolOrderByRelationAggregateInput
    customFields?: CustomFieldOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    brands?: BrandListRelationFilter
    locations?: LocationListRelationFilter
    spools?: SpoolListRelationFilter
    customFields?: CustomFieldListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    websiteUrl?: StringNullableFilter<"Brand"> | string | null
    userId?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    spools?: SpoolListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    spools?: SpoolOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: BrandUserIdNameCompoundUniqueInput
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name?: StringFilter<"Brand"> | string
    websiteUrl?: StringNullableFilter<"Brand"> | string | null
    userId?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    spools?: SpoolListRelationFilter
  }, "id" | "userId_name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
    websiteUrl?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    userId?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    density?: FloatNullableFilter<"Material"> | number | null
    maxNozzleC?: IntNullableFilter<"Material"> | number | null
    maxBedC?: IntNullableFilter<"Material"> | number | null
    minNozzleC?: IntNullableFilter<"Material"> | number | null
    minBedC?: IntNullableFilter<"Material"> | number | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    spools?: SpoolListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    density?: SortOrderInput | SortOrder
    maxNozzleC?: SortOrderInput | SortOrder
    maxBedC?: SortOrderInput | SortOrder
    minNozzleC?: SortOrderInput | SortOrder
    minBedC?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spools?: SpoolOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    density?: FloatNullableFilter<"Material"> | number | null
    maxNozzleC?: IntNullableFilter<"Material"> | number | null
    maxBedC?: IntNullableFilter<"Material"> | number | null
    minNozzleC?: IntNullableFilter<"Material"> | number | null
    minBedC?: IntNullableFilter<"Material"> | number | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    spools?: SpoolListRelationFilter
  }, "id" | "name">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    density?: SortOrderInput | SortOrder
    maxNozzleC?: SortOrderInput | SortOrder
    maxBedC?: SortOrderInput | SortOrder
    minNozzleC?: SortOrderInput | SortOrder
    minBedC?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    density?: FloatNullableWithAggregatesFilter<"Material"> | number | null
    maxNozzleC?: IntNullableWithAggregatesFilter<"Material"> | number | null
    maxBedC?: IntNullableWithAggregatesFilter<"Material"> | number | null
    minNozzleC?: IntNullableWithAggregatesFilter<"Material"> | number | null
    minBedC?: IntNullableWithAggregatesFilter<"Material"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    userId?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    spools?: SpoolListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    spools?: SpoolOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: LocationUserIdNameCompoundUniqueInput
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    userId?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    spools?: SpoolListRelationFilter
  }, "id" | "userId_name">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    userId?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type SpoolWhereInput = {
    AND?: SpoolWhereInput | SpoolWhereInput[]
    OR?: SpoolWhereInput[]
    NOT?: SpoolWhereInput | SpoolWhereInput[]
    id?: StringFilter<"Spool"> | string
    userId?: StringFilter<"Spool"> | string
    brandId?: StringFilter<"Spool"> | string
    materialId?: StringFilter<"Spool"> | string
    locationId?: StringNullableFilter<"Spool"> | string | null
    colorMode?: StringFilter<"Spool"> | string
    colorName?: StringNullableFilter<"Spool"> | string | null
    diameterMm?: FloatFilter<"Spool"> | number
    initialWeightG?: IntFilter<"Spool"> | number
    remainingWeightG?: IntFilter<"Spool"> | number
    status?: StringFilter<"Spool"> | string
    needsRepurchase?: BoolFilter<"Spool"> | boolean
    productUrl?: StringNullableFilter<"Spool"> | string | null
    purchasedAt?: DateTimeNullableFilter<"Spool"> | Date | string | null
    priceCents?: IntNullableFilter<"Spool"> | number | null
    notes?: StringNullableFilter<"Spool"> | string | null
    lastDriedAt?: DateTimeNullableFilter<"Spool"> | Date | string | null
    createdAt?: DateTimeFilter<"Spool"> | Date | string
    updatedAt?: DateTimeFilter<"Spool"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    colors?: SpoolColorStopListRelationFilter
    usages?: UsageListRelationFilter
    customFieldValues?: CustomFieldValueListRelationFilter
  }

  export type SpoolOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    materialId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    colorMode?: SortOrder
    colorName?: SortOrderInput | SortOrder
    diameterMm?: SortOrder
    initialWeightG?: SortOrder
    remainingWeightG?: SortOrder
    status?: SortOrder
    needsRepurchase?: SortOrder
    productUrl?: SortOrderInput | SortOrder
    purchasedAt?: SortOrderInput | SortOrder
    priceCents?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastDriedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    colors?: SpoolColorStopOrderByRelationAggregateInput
    usages?: UsageOrderByRelationAggregateInput
    customFieldValues?: CustomFieldValueOrderByRelationAggregateInput
  }

  export type SpoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpoolWhereInput | SpoolWhereInput[]
    OR?: SpoolWhereInput[]
    NOT?: SpoolWhereInput | SpoolWhereInput[]
    userId?: StringFilter<"Spool"> | string
    brandId?: StringFilter<"Spool"> | string
    materialId?: StringFilter<"Spool"> | string
    locationId?: StringNullableFilter<"Spool"> | string | null
    colorMode?: StringFilter<"Spool"> | string
    colorName?: StringNullableFilter<"Spool"> | string | null
    diameterMm?: FloatFilter<"Spool"> | number
    initialWeightG?: IntFilter<"Spool"> | number
    remainingWeightG?: IntFilter<"Spool"> | number
    status?: StringFilter<"Spool"> | string
    needsRepurchase?: BoolFilter<"Spool"> | boolean
    productUrl?: StringNullableFilter<"Spool"> | string | null
    purchasedAt?: DateTimeNullableFilter<"Spool"> | Date | string | null
    priceCents?: IntNullableFilter<"Spool"> | number | null
    notes?: StringNullableFilter<"Spool"> | string | null
    lastDriedAt?: DateTimeNullableFilter<"Spool"> | Date | string | null
    createdAt?: DateTimeFilter<"Spool"> | Date | string
    updatedAt?: DateTimeFilter<"Spool"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    colors?: SpoolColorStopListRelationFilter
    usages?: UsageListRelationFilter
    customFieldValues?: CustomFieldValueListRelationFilter
  }, "id">

  export type SpoolOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    materialId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    colorMode?: SortOrder
    colorName?: SortOrderInput | SortOrder
    diameterMm?: SortOrder
    initialWeightG?: SortOrder
    remainingWeightG?: SortOrder
    status?: SortOrder
    needsRepurchase?: SortOrder
    productUrl?: SortOrderInput | SortOrder
    purchasedAt?: SortOrderInput | SortOrder
    priceCents?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastDriedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpoolCountOrderByAggregateInput
    _avg?: SpoolAvgOrderByAggregateInput
    _max?: SpoolMaxOrderByAggregateInput
    _min?: SpoolMinOrderByAggregateInput
    _sum?: SpoolSumOrderByAggregateInput
  }

  export type SpoolScalarWhereWithAggregatesInput = {
    AND?: SpoolScalarWhereWithAggregatesInput | SpoolScalarWhereWithAggregatesInput[]
    OR?: SpoolScalarWhereWithAggregatesInput[]
    NOT?: SpoolScalarWhereWithAggregatesInput | SpoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Spool"> | string
    userId?: StringWithAggregatesFilter<"Spool"> | string
    brandId?: StringWithAggregatesFilter<"Spool"> | string
    materialId?: StringWithAggregatesFilter<"Spool"> | string
    locationId?: StringNullableWithAggregatesFilter<"Spool"> | string | null
    colorMode?: StringWithAggregatesFilter<"Spool"> | string
    colorName?: StringNullableWithAggregatesFilter<"Spool"> | string | null
    diameterMm?: FloatWithAggregatesFilter<"Spool"> | number
    initialWeightG?: IntWithAggregatesFilter<"Spool"> | number
    remainingWeightG?: IntWithAggregatesFilter<"Spool"> | number
    status?: StringWithAggregatesFilter<"Spool"> | string
    needsRepurchase?: BoolWithAggregatesFilter<"Spool"> | boolean
    productUrl?: StringNullableWithAggregatesFilter<"Spool"> | string | null
    purchasedAt?: DateTimeNullableWithAggregatesFilter<"Spool"> | Date | string | null
    priceCents?: IntNullableWithAggregatesFilter<"Spool"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Spool"> | string | null
    lastDriedAt?: DateTimeNullableWithAggregatesFilter<"Spool"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Spool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Spool"> | Date | string
  }

  export type SpoolColorStopWhereInput = {
    AND?: SpoolColorStopWhereInput | SpoolColorStopWhereInput[]
    OR?: SpoolColorStopWhereInput[]
    NOT?: SpoolColorStopWhereInput | SpoolColorStopWhereInput[]
    id?: StringFilter<"SpoolColorStop"> | string
    spoolId?: StringFilter<"SpoolColorStop"> | string
    hex?: StringFilter<"SpoolColorStop"> | string
    name?: StringNullableFilter<"SpoolColorStop"> | string | null
    position?: FloatFilter<"SpoolColorStop"> | number
    weight?: FloatNullableFilter<"SpoolColorStop"> | number | null
    spool?: XOR<SpoolScalarRelationFilter, SpoolWhereInput>
  }

  export type SpoolColorStopOrderByWithRelationInput = {
    id?: SortOrder
    spoolId?: SortOrder
    hex?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrder
    weight?: SortOrderInput | SortOrder
    spool?: SpoolOrderByWithRelationInput
  }

  export type SpoolColorStopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpoolColorStopWhereInput | SpoolColorStopWhereInput[]
    OR?: SpoolColorStopWhereInput[]
    NOT?: SpoolColorStopWhereInput | SpoolColorStopWhereInput[]
    spoolId?: StringFilter<"SpoolColorStop"> | string
    hex?: StringFilter<"SpoolColorStop"> | string
    name?: StringNullableFilter<"SpoolColorStop"> | string | null
    position?: FloatFilter<"SpoolColorStop"> | number
    weight?: FloatNullableFilter<"SpoolColorStop"> | number | null
    spool?: XOR<SpoolScalarRelationFilter, SpoolWhereInput>
  }, "id">

  export type SpoolColorStopOrderByWithAggregationInput = {
    id?: SortOrder
    spoolId?: SortOrder
    hex?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrder
    weight?: SortOrderInput | SortOrder
    _count?: SpoolColorStopCountOrderByAggregateInput
    _avg?: SpoolColorStopAvgOrderByAggregateInput
    _max?: SpoolColorStopMaxOrderByAggregateInput
    _min?: SpoolColorStopMinOrderByAggregateInput
    _sum?: SpoolColorStopSumOrderByAggregateInput
  }

  export type SpoolColorStopScalarWhereWithAggregatesInput = {
    AND?: SpoolColorStopScalarWhereWithAggregatesInput | SpoolColorStopScalarWhereWithAggregatesInput[]
    OR?: SpoolColorStopScalarWhereWithAggregatesInput[]
    NOT?: SpoolColorStopScalarWhereWithAggregatesInput | SpoolColorStopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpoolColorStop"> | string
    spoolId?: StringWithAggregatesFilter<"SpoolColorStop"> | string
    hex?: StringWithAggregatesFilter<"SpoolColorStop"> | string
    name?: StringNullableWithAggregatesFilter<"SpoolColorStop"> | string | null
    position?: FloatWithAggregatesFilter<"SpoolColorStop"> | number
    weight?: FloatNullableWithAggregatesFilter<"SpoolColorStop"> | number | null
  }

  export type UsageWhereInput = {
    AND?: UsageWhereInput | UsageWhereInput[]
    OR?: UsageWhereInput[]
    NOT?: UsageWhereInput | UsageWhereInput[]
    id?: StringFilter<"Usage"> | string
    spoolId?: StringFilter<"Usage"> | string
    gramsUsed?: IntFilter<"Usage"> | number
    note?: StringNullableFilter<"Usage"> | string | null
    usedAt?: DateTimeFilter<"Usage"> | Date | string
    spool?: XOR<SpoolScalarRelationFilter, SpoolWhereInput>
  }

  export type UsageOrderByWithRelationInput = {
    id?: SortOrder
    spoolId?: SortOrder
    gramsUsed?: SortOrder
    note?: SortOrderInput | SortOrder
    usedAt?: SortOrder
    spool?: SpoolOrderByWithRelationInput
  }

  export type UsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsageWhereInput | UsageWhereInput[]
    OR?: UsageWhereInput[]
    NOT?: UsageWhereInput | UsageWhereInput[]
    spoolId?: StringFilter<"Usage"> | string
    gramsUsed?: IntFilter<"Usage"> | number
    note?: StringNullableFilter<"Usage"> | string | null
    usedAt?: DateTimeFilter<"Usage"> | Date | string
    spool?: XOR<SpoolScalarRelationFilter, SpoolWhereInput>
  }, "id">

  export type UsageOrderByWithAggregationInput = {
    id?: SortOrder
    spoolId?: SortOrder
    gramsUsed?: SortOrder
    note?: SortOrderInput | SortOrder
    usedAt?: SortOrder
    _count?: UsageCountOrderByAggregateInput
    _avg?: UsageAvgOrderByAggregateInput
    _max?: UsageMaxOrderByAggregateInput
    _min?: UsageMinOrderByAggregateInput
    _sum?: UsageSumOrderByAggregateInput
  }

  export type UsageScalarWhereWithAggregatesInput = {
    AND?: UsageScalarWhereWithAggregatesInput | UsageScalarWhereWithAggregatesInput[]
    OR?: UsageScalarWhereWithAggregatesInput[]
    NOT?: UsageScalarWhereWithAggregatesInput | UsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usage"> | string
    spoolId?: StringWithAggregatesFilter<"Usage"> | string
    gramsUsed?: IntWithAggregatesFilter<"Usage"> | number
    note?: StringNullableWithAggregatesFilter<"Usage"> | string | null
    usedAt?: DateTimeWithAggregatesFilter<"Usage"> | Date | string
  }

  export type CustomFieldWhereInput = {
    AND?: CustomFieldWhereInput | CustomFieldWhereInput[]
    OR?: CustomFieldWhereInput[]
    NOT?: CustomFieldWhereInput | CustomFieldWhereInput[]
    id?: StringFilter<"CustomField"> | string
    userId?: StringFilter<"CustomField"> | string
    entity?: StringFilter<"CustomField"> | string
    key?: StringFilter<"CustomField"> | string
    label?: StringFilter<"CustomField"> | string
    type?: StringFilter<"CustomField"> | string
    required?: BoolFilter<"CustomField"> | boolean
    options?: StringNullableFilter<"CustomField"> | string | null
    sortOrder?: IntFilter<"CustomField"> | number
    showInList?: BoolFilter<"CustomField"> | boolean
    createdAt?: DateTimeFilter<"CustomField"> | Date | string
    updatedAt?: DateTimeFilter<"CustomField"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    values?: CustomFieldValueListRelationFilter
  }

  export type CustomFieldOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    key?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    showInList?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    values?: CustomFieldValueOrderByRelationAggregateInput
  }

  export type CustomFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_entity_key?: CustomFieldUserIdEntityKeyCompoundUniqueInput
    AND?: CustomFieldWhereInput | CustomFieldWhereInput[]
    OR?: CustomFieldWhereInput[]
    NOT?: CustomFieldWhereInput | CustomFieldWhereInput[]
    userId?: StringFilter<"CustomField"> | string
    entity?: StringFilter<"CustomField"> | string
    key?: StringFilter<"CustomField"> | string
    label?: StringFilter<"CustomField"> | string
    type?: StringFilter<"CustomField"> | string
    required?: BoolFilter<"CustomField"> | boolean
    options?: StringNullableFilter<"CustomField"> | string | null
    sortOrder?: IntFilter<"CustomField"> | number
    showInList?: BoolFilter<"CustomField"> | boolean
    createdAt?: DateTimeFilter<"CustomField"> | Date | string
    updatedAt?: DateTimeFilter<"CustomField"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    values?: CustomFieldValueListRelationFilter
  }, "id" | "userId_entity_key">

  export type CustomFieldOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    key?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    showInList?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomFieldCountOrderByAggregateInput
    _avg?: CustomFieldAvgOrderByAggregateInput
    _max?: CustomFieldMaxOrderByAggregateInput
    _min?: CustomFieldMinOrderByAggregateInput
    _sum?: CustomFieldSumOrderByAggregateInput
  }

  export type CustomFieldScalarWhereWithAggregatesInput = {
    AND?: CustomFieldScalarWhereWithAggregatesInput | CustomFieldScalarWhereWithAggregatesInput[]
    OR?: CustomFieldScalarWhereWithAggregatesInput[]
    NOT?: CustomFieldScalarWhereWithAggregatesInput | CustomFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomField"> | string
    userId?: StringWithAggregatesFilter<"CustomField"> | string
    entity?: StringWithAggregatesFilter<"CustomField"> | string
    key?: StringWithAggregatesFilter<"CustomField"> | string
    label?: StringWithAggregatesFilter<"CustomField"> | string
    type?: StringWithAggregatesFilter<"CustomField"> | string
    required?: BoolWithAggregatesFilter<"CustomField"> | boolean
    options?: StringNullableWithAggregatesFilter<"CustomField"> | string | null
    sortOrder?: IntWithAggregatesFilter<"CustomField"> | number
    showInList?: BoolWithAggregatesFilter<"CustomField"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CustomField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomField"> | Date | string
  }

  export type CustomFieldValueWhereInput = {
    AND?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    OR?: CustomFieldValueWhereInput[]
    NOT?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    id?: StringFilter<"CustomFieldValue"> | string
    fieldId?: StringFilter<"CustomFieldValue"> | string
    spoolId?: StringFilter<"CustomFieldValue"> | string
    valueText?: StringNullableFilter<"CustomFieldValue"> | string | null
    valueNumber?: FloatNullableFilter<"CustomFieldValue"> | number | null
    valueBoolean?: BoolNullableFilter<"CustomFieldValue"> | boolean | null
    valueDate?: DateTimeNullableFilter<"CustomFieldValue"> | Date | string | null
    field?: XOR<CustomFieldScalarRelationFilter, CustomFieldWhereInput>
    spool?: XOR<SpoolScalarRelationFilter, SpoolWhereInput>
  }

  export type CustomFieldValueOrderByWithRelationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    spoolId?: SortOrder
    valueText?: SortOrderInput | SortOrder
    valueNumber?: SortOrderInput | SortOrder
    valueBoolean?: SortOrderInput | SortOrder
    valueDate?: SortOrderInput | SortOrder
    field?: CustomFieldOrderByWithRelationInput
    spool?: SpoolOrderByWithRelationInput
  }

  export type CustomFieldValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fieldId_spoolId?: CustomFieldValueFieldIdSpoolIdCompoundUniqueInput
    AND?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    OR?: CustomFieldValueWhereInput[]
    NOT?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    fieldId?: StringFilter<"CustomFieldValue"> | string
    spoolId?: StringFilter<"CustomFieldValue"> | string
    valueText?: StringNullableFilter<"CustomFieldValue"> | string | null
    valueNumber?: FloatNullableFilter<"CustomFieldValue"> | number | null
    valueBoolean?: BoolNullableFilter<"CustomFieldValue"> | boolean | null
    valueDate?: DateTimeNullableFilter<"CustomFieldValue"> | Date | string | null
    field?: XOR<CustomFieldScalarRelationFilter, CustomFieldWhereInput>
    spool?: XOR<SpoolScalarRelationFilter, SpoolWhereInput>
  }, "id" | "fieldId_spoolId">

  export type CustomFieldValueOrderByWithAggregationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    spoolId?: SortOrder
    valueText?: SortOrderInput | SortOrder
    valueNumber?: SortOrderInput | SortOrder
    valueBoolean?: SortOrderInput | SortOrder
    valueDate?: SortOrderInput | SortOrder
    _count?: CustomFieldValueCountOrderByAggregateInput
    _avg?: CustomFieldValueAvgOrderByAggregateInput
    _max?: CustomFieldValueMaxOrderByAggregateInput
    _min?: CustomFieldValueMinOrderByAggregateInput
    _sum?: CustomFieldValueSumOrderByAggregateInput
  }

  export type CustomFieldValueScalarWhereWithAggregatesInput = {
    AND?: CustomFieldValueScalarWhereWithAggregatesInput | CustomFieldValueScalarWhereWithAggregatesInput[]
    OR?: CustomFieldValueScalarWhereWithAggregatesInput[]
    NOT?: CustomFieldValueScalarWhereWithAggregatesInput | CustomFieldValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomFieldValue"> | string
    fieldId?: StringWithAggregatesFilter<"CustomFieldValue"> | string
    spoolId?: StringWithAggregatesFilter<"CustomFieldValue"> | string
    valueText?: StringNullableWithAggregatesFilter<"CustomFieldValue"> | string | null
    valueNumber?: FloatNullableWithAggregatesFilter<"CustomFieldValue"> | number | null
    valueBoolean?: BoolNullableWithAggregatesFilter<"CustomFieldValue"> | boolean | null
    valueDate?: DateTimeNullableWithAggregatesFilter<"CustomFieldValue"> | Date | string | null
  }

  export type AppSetupWhereInput = {
    AND?: AppSetupWhereInput | AppSetupWhereInput[]
    OR?: AppSetupWhereInput[]
    NOT?: AppSetupWhereInput | AppSetupWhereInput[]
    id?: IntFilter<"AppSetup"> | number
    completed?: BoolFilter<"AppSetup"> | boolean
    completedAt?: DateTimeNullableFilter<"AppSetup"> | Date | string | null
    installedDatasets?: StringFilter<"AppSetup"> | string
    createdAt?: DateTimeFilter<"AppSetup"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetup"> | Date | string
  }

  export type AppSetupOrderByWithRelationInput = {
    id?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    installedDatasets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSetupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppSetupWhereInput | AppSetupWhereInput[]
    OR?: AppSetupWhereInput[]
    NOT?: AppSetupWhereInput | AppSetupWhereInput[]
    completed?: BoolFilter<"AppSetup"> | boolean
    completedAt?: DateTimeNullableFilter<"AppSetup"> | Date | string | null
    installedDatasets?: StringFilter<"AppSetup"> | string
    createdAt?: DateTimeFilter<"AppSetup"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetup"> | Date | string
  }, "id">

  export type AppSetupOrderByWithAggregationInput = {
    id?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    installedDatasets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppSetupCountOrderByAggregateInput
    _avg?: AppSetupAvgOrderByAggregateInput
    _max?: AppSetupMaxOrderByAggregateInput
    _min?: AppSetupMinOrderByAggregateInput
    _sum?: AppSetupSumOrderByAggregateInput
  }

  export type AppSetupScalarWhereWithAggregatesInput = {
    AND?: AppSetupScalarWhereWithAggregatesInput | AppSetupScalarWhereWithAggregatesInput[]
    OR?: AppSetupScalarWhereWithAggregatesInput[]
    NOT?: AppSetupScalarWhereWithAggregatesInput | AppSetupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppSetup"> | number
    completed?: BoolWithAggregatesFilter<"AppSetup"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"AppSetup"> | Date | string | null
    installedDatasets?: StringWithAggregatesFilter<"AppSetup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AppSetup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppSetup"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    brands?: BrandCreateNestedManyWithoutUserInput
    locations?: LocationCreateNestedManyWithoutUserInput
    spools?: SpoolCreateNestedManyWithoutUserInput
    customFields?: CustomFieldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    brands?: BrandUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationUncheckedCreateNestedManyWithoutUserInput
    spools?: SpoolUncheckedCreateNestedManyWithoutUserInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    brands?: BrandUpdateManyWithoutUserNestedInput
    locations?: LocationUpdateManyWithoutUserNestedInput
    spools?: SpoolUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    brands?: BrandUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationUncheckedUpdateManyWithoutUserNestedInput
    spools?: SpoolUncheckedUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBrandsInput
    spools?: SpoolCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBrandsNestedInput
    spools?: SpoolUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    id?: string
    name: string
    density?: number | null
    maxNozzleC?: number | null
    maxBedC?: number | null
    minNozzleC?: number | null
    minBedC?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    name: string
    density?: number | null
    maxNozzleC?: number | null
    maxBedC?: number | null
    minNozzleC?: number | null
    minBedC?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    maxNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    maxBedC?: NullableIntFieldUpdateOperationsInput | number | null
    minNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    minBedC?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    maxNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    maxBedC?: NullableIntFieldUpdateOperationsInput | number | null
    minNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    minBedC?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: string
    name: string
    density?: number | null
    maxNozzleC?: number | null
    maxBedC?: number | null
    minNozzleC?: number | null
    minBedC?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    maxNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    maxBedC?: NullableIntFieldUpdateOperationsInput | number | null
    minNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    minBedC?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    maxNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    maxBedC?: NullableIntFieldUpdateOperationsInput | number | null
    minNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    minBedC?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLocationsInput
    spools?: SpoolCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
    spools?: SpoolUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolCreateInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpoolsInput
    brand: BrandCreateNestedOneWithoutSpoolsInput
    material: MaterialCreateNestedOneWithoutSpoolsInput
    location?: LocationCreateNestedOneWithoutSpoolsInput
    colors?: SpoolColorStopCreateNestedManyWithoutSpoolInput
    usages?: UsageCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateInput = {
    id?: string
    userId: string
    brandId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput
    usages?: UsageUncheckedCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpoolsNestedInput
    brand?: BrandUpdateOneRequiredWithoutSpoolsNestedInput
    material?: MaterialUpdateOneRequiredWithoutSpoolsNestedInput
    location?: LocationUpdateOneWithoutSpoolsNestedInput
    colors?: SpoolColorStopUpdateManyWithoutSpoolNestedInput
    usages?: UsageUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput
    usages?: UsageUncheckedUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolCreateManyInput = {
    id?: string
    userId: string
    brandId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolColorStopCreateInput = {
    id?: string
    hex: string
    name?: string | null
    position: number
    weight?: number | null
    spool: SpoolCreateNestedOneWithoutColorsInput
  }

  export type SpoolColorStopUncheckedCreateInput = {
    id?: string
    spoolId: string
    hex: string
    name?: string | null
    position: number
    weight?: number | null
  }

  export type SpoolColorStopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hex?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    spool?: SpoolUpdateOneRequiredWithoutColorsNestedInput
  }

  export type SpoolColorStopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    hex?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SpoolColorStopCreateManyInput = {
    id?: string
    spoolId: string
    hex: string
    name?: string | null
    position: number
    weight?: number | null
  }

  export type SpoolColorStopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hex?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SpoolColorStopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    hex?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UsageCreateInput = {
    id?: string
    gramsUsed: number
    note?: string | null
    usedAt?: Date | string
    spool: SpoolCreateNestedOneWithoutUsagesInput
  }

  export type UsageUncheckedCreateInput = {
    id?: string
    spoolId: string
    gramsUsed: number
    note?: string | null
    usedAt?: Date | string
  }

  export type UsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gramsUsed?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spool?: SpoolUpdateOneRequiredWithoutUsagesNestedInput
  }

  export type UsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    gramsUsed?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCreateManyInput = {
    id?: string
    spoolId: string
    gramsUsed: number
    note?: string | null
    usedAt?: Date | string
  }

  export type UsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gramsUsed?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    gramsUsed?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldCreateInput = {
    id?: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomFieldsInput
    values?: CustomFieldValueCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUncheckedCreateInput = {
    id?: string
    userId: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: CustomFieldValueUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomFieldsNestedInput
    values?: CustomFieldValueUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: CustomFieldValueUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldCreateManyInput = {
    id?: string
    userId: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldValueCreateInput = {
    id?: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
    field: CustomFieldCreateNestedOneWithoutValuesInput
    spool: SpoolCreateNestedOneWithoutCustomFieldValuesInput
  }

  export type CustomFieldValueUncheckedCreateInput = {
    id?: string
    fieldId: string
    spoolId: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
  }

  export type CustomFieldValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    field?: CustomFieldUpdateOneRequiredWithoutValuesNestedInput
    spool?: SpoolUpdateOneRequiredWithoutCustomFieldValuesNestedInput
  }

  export type CustomFieldValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomFieldValueCreateManyInput = {
    id?: string
    fieldId: string
    spoolId: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
  }

  export type CustomFieldValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomFieldValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppSetupCreateInput = {
    id?: number
    completed?: boolean
    completedAt?: Date | string | null
    installedDatasets?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSetupUncheckedCreateInput = {
    id?: number
    completed?: boolean
    completedAt?: Date | string | null
    installedDatasets?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSetupUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installedDatasets?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSetupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installedDatasets?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSetupCreateManyInput = {
    id?: number
    completed?: boolean
    completedAt?: Date | string | null
    installedDatasets?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSetupUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installedDatasets?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSetupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installedDatasets?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type BrandListRelationFilter = {
    every?: BrandWhereInput
    some?: BrandWhereInput
    none?: BrandWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type SpoolListRelationFilter = {
    every?: SpoolWhereInput
    some?: SpoolWhereInput
    none?: SpoolWhereInput
  }

  export type CustomFieldListRelationFilter = {
    every?: CustomFieldWhereInput
    some?: CustomFieldWhereInput
    none?: CustomFieldWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    density?: SortOrder
    maxNozzleC?: SortOrder
    maxBedC?: SortOrder
    minNozzleC?: SortOrder
    minBedC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    density?: SortOrder
    maxNozzleC?: SortOrder
    maxBedC?: SortOrder
    minNozzleC?: SortOrder
    minBedC?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    density?: SortOrder
    maxNozzleC?: SortOrder
    maxBedC?: SortOrder
    minNozzleC?: SortOrder
    minBedC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    density?: SortOrder
    maxNozzleC?: SortOrder
    maxBedC?: SortOrder
    minNozzleC?: SortOrder
    minBedC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    density?: SortOrder
    maxNozzleC?: SortOrder
    maxBedC?: SortOrder
    minNozzleC?: SortOrder
    minBedC?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type LocationUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type SpoolColorStopListRelationFilter = {
    every?: SpoolColorStopWhereInput
    some?: SpoolColorStopWhereInput
    none?: SpoolColorStopWhereInput
  }

  export type UsageListRelationFilter = {
    every?: UsageWhereInput
    some?: UsageWhereInput
    none?: UsageWhereInput
  }

  export type CustomFieldValueListRelationFilter = {
    every?: CustomFieldValueWhereInput
    some?: CustomFieldValueWhereInput
    none?: CustomFieldValueWhereInput
  }

  export type SpoolColorStopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomFieldValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpoolCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    materialId?: SortOrder
    locationId?: SortOrder
    colorMode?: SortOrder
    colorName?: SortOrder
    diameterMm?: SortOrder
    initialWeightG?: SortOrder
    remainingWeightG?: SortOrder
    status?: SortOrder
    needsRepurchase?: SortOrder
    productUrl?: SortOrder
    purchasedAt?: SortOrder
    priceCents?: SortOrder
    notes?: SortOrder
    lastDriedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpoolAvgOrderByAggregateInput = {
    diameterMm?: SortOrder
    initialWeightG?: SortOrder
    remainingWeightG?: SortOrder
    priceCents?: SortOrder
  }

  export type SpoolMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    materialId?: SortOrder
    locationId?: SortOrder
    colorMode?: SortOrder
    colorName?: SortOrder
    diameterMm?: SortOrder
    initialWeightG?: SortOrder
    remainingWeightG?: SortOrder
    status?: SortOrder
    needsRepurchase?: SortOrder
    productUrl?: SortOrder
    purchasedAt?: SortOrder
    priceCents?: SortOrder
    notes?: SortOrder
    lastDriedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpoolMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    materialId?: SortOrder
    locationId?: SortOrder
    colorMode?: SortOrder
    colorName?: SortOrder
    diameterMm?: SortOrder
    initialWeightG?: SortOrder
    remainingWeightG?: SortOrder
    status?: SortOrder
    needsRepurchase?: SortOrder
    productUrl?: SortOrder
    purchasedAt?: SortOrder
    priceCents?: SortOrder
    notes?: SortOrder
    lastDriedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpoolSumOrderByAggregateInput = {
    diameterMm?: SortOrder
    initialWeightG?: SortOrder
    remainingWeightG?: SortOrder
    priceCents?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type SpoolScalarRelationFilter = {
    is?: SpoolWhereInput
    isNot?: SpoolWhereInput
  }

  export type SpoolColorStopCountOrderByAggregateInput = {
    id?: SortOrder
    spoolId?: SortOrder
    hex?: SortOrder
    name?: SortOrder
    position?: SortOrder
    weight?: SortOrder
  }

  export type SpoolColorStopAvgOrderByAggregateInput = {
    position?: SortOrder
    weight?: SortOrder
  }

  export type SpoolColorStopMaxOrderByAggregateInput = {
    id?: SortOrder
    spoolId?: SortOrder
    hex?: SortOrder
    name?: SortOrder
    position?: SortOrder
    weight?: SortOrder
  }

  export type SpoolColorStopMinOrderByAggregateInput = {
    id?: SortOrder
    spoolId?: SortOrder
    hex?: SortOrder
    name?: SortOrder
    position?: SortOrder
    weight?: SortOrder
  }

  export type SpoolColorStopSumOrderByAggregateInput = {
    position?: SortOrder
    weight?: SortOrder
  }

  export type UsageCountOrderByAggregateInput = {
    id?: SortOrder
    spoolId?: SortOrder
    gramsUsed?: SortOrder
    note?: SortOrder
    usedAt?: SortOrder
  }

  export type UsageAvgOrderByAggregateInput = {
    gramsUsed?: SortOrder
  }

  export type UsageMaxOrderByAggregateInput = {
    id?: SortOrder
    spoolId?: SortOrder
    gramsUsed?: SortOrder
    note?: SortOrder
    usedAt?: SortOrder
  }

  export type UsageMinOrderByAggregateInput = {
    id?: SortOrder
    spoolId?: SortOrder
    gramsUsed?: SortOrder
    note?: SortOrder
    usedAt?: SortOrder
  }

  export type UsageSumOrderByAggregateInput = {
    gramsUsed?: SortOrder
  }

  export type CustomFieldUserIdEntityKeyCompoundUniqueInput = {
    userId: string
    entity: string
    key: string
  }

  export type CustomFieldCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    key?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrder
    sortOrder?: SortOrder
    showInList?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomFieldAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CustomFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    key?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrder
    sortOrder?: SortOrder
    showInList?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomFieldMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    key?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrder
    sortOrder?: SortOrder
    showInList?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomFieldSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CustomFieldScalarRelationFilter = {
    is?: CustomFieldWhereInput
    isNot?: CustomFieldWhereInput
  }

  export type CustomFieldValueFieldIdSpoolIdCompoundUniqueInput = {
    fieldId: string
    spoolId: string
  }

  export type CustomFieldValueCountOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    spoolId?: SortOrder
    valueText?: SortOrder
    valueNumber?: SortOrder
    valueBoolean?: SortOrder
    valueDate?: SortOrder
  }

  export type CustomFieldValueAvgOrderByAggregateInput = {
    valueNumber?: SortOrder
  }

  export type CustomFieldValueMaxOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    spoolId?: SortOrder
    valueText?: SortOrder
    valueNumber?: SortOrder
    valueBoolean?: SortOrder
    valueDate?: SortOrder
  }

  export type CustomFieldValueMinOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    spoolId?: SortOrder
    valueText?: SortOrder
    valueNumber?: SortOrder
    valueBoolean?: SortOrder
    valueDate?: SortOrder
  }

  export type CustomFieldValueSumOrderByAggregateInput = {
    valueNumber?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AppSetupCountOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    installedDatasets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSetupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppSetupMaxOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    installedDatasets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSetupMinOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    installedDatasets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSetupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BrandCreateNestedManyWithoutUserInput = {
    create?: XOR<BrandCreateWithoutUserInput, BrandUncheckedCreateWithoutUserInput> | BrandCreateWithoutUserInput[] | BrandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutUserInput | BrandCreateOrConnectWithoutUserInput[]
    createMany?: BrandCreateManyUserInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutUserInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput> | LocationCreateWithoutUserInput[] | LocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput | LocationCreateOrConnectWithoutUserInput[]
    createMany?: LocationCreateManyUserInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type SpoolCreateNestedManyWithoutUserInput = {
    create?: XOR<SpoolCreateWithoutUserInput, SpoolUncheckedCreateWithoutUserInput> | SpoolCreateWithoutUserInput[] | SpoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutUserInput | SpoolCreateOrConnectWithoutUserInput[]
    createMany?: SpoolCreateManyUserInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type CustomFieldCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomFieldCreateWithoutUserInput, CustomFieldUncheckedCreateWithoutUserInput> | CustomFieldCreateWithoutUserInput[] | CustomFieldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutUserInput | CustomFieldCreateOrConnectWithoutUserInput[]
    createMany?: CustomFieldCreateManyUserInputEnvelope
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BrandUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BrandCreateWithoutUserInput, BrandUncheckedCreateWithoutUserInput> | BrandCreateWithoutUserInput[] | BrandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutUserInput | BrandCreateOrConnectWithoutUserInput[]
    createMany?: BrandCreateManyUserInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput> | LocationCreateWithoutUserInput[] | LocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput | LocationCreateOrConnectWithoutUserInput[]
    createMany?: LocationCreateManyUserInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type SpoolUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpoolCreateWithoutUserInput, SpoolUncheckedCreateWithoutUserInput> | SpoolCreateWithoutUserInput[] | SpoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutUserInput | SpoolCreateOrConnectWithoutUserInput[]
    createMany?: SpoolCreateManyUserInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type CustomFieldUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomFieldCreateWithoutUserInput, CustomFieldUncheckedCreateWithoutUserInput> | CustomFieldCreateWithoutUserInput[] | CustomFieldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutUserInput | CustomFieldCreateOrConnectWithoutUserInput[]
    createMany?: CustomFieldCreateManyUserInputEnvelope
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BrandUpdateManyWithoutUserNestedInput = {
    create?: XOR<BrandCreateWithoutUserInput, BrandUncheckedCreateWithoutUserInput> | BrandCreateWithoutUserInput[] | BrandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutUserInput | BrandCreateOrConnectWithoutUserInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutUserInput | BrandUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BrandCreateManyUserInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutUserInput | BrandUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutUserInput | BrandUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutUserNestedInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput> | LocationCreateWithoutUserInput[] | LocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput | LocationCreateOrConnectWithoutUserInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutUserInput | LocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LocationCreateManyUserInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutUserInput | LocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutUserInput | LocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type SpoolUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpoolCreateWithoutUserInput, SpoolUncheckedCreateWithoutUserInput> | SpoolCreateWithoutUserInput[] | SpoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutUserInput | SpoolCreateOrConnectWithoutUserInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutUserInput | SpoolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpoolCreateManyUserInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutUserInput | SpoolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutUserInput | SpoolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type CustomFieldUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomFieldCreateWithoutUserInput, CustomFieldUncheckedCreateWithoutUserInput> | CustomFieldCreateWithoutUserInput[] | CustomFieldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutUserInput | CustomFieldCreateOrConnectWithoutUserInput[]
    upsert?: CustomFieldUpsertWithWhereUniqueWithoutUserInput | CustomFieldUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomFieldCreateManyUserInputEnvelope
    set?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    disconnect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    delete?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    update?: CustomFieldUpdateWithWhereUniqueWithoutUserInput | CustomFieldUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomFieldUpdateManyWithWhereWithoutUserInput | CustomFieldUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BrandUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BrandCreateWithoutUserInput, BrandUncheckedCreateWithoutUserInput> | BrandCreateWithoutUserInput[] | BrandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutUserInput | BrandCreateOrConnectWithoutUserInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutUserInput | BrandUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BrandCreateManyUserInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutUserInput | BrandUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutUserInput | BrandUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput> | LocationCreateWithoutUserInput[] | LocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput | LocationCreateOrConnectWithoutUserInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutUserInput | LocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LocationCreateManyUserInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutUserInput | LocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutUserInput | LocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type SpoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpoolCreateWithoutUserInput, SpoolUncheckedCreateWithoutUserInput> | SpoolCreateWithoutUserInput[] | SpoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutUserInput | SpoolCreateOrConnectWithoutUserInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutUserInput | SpoolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpoolCreateManyUserInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutUserInput | SpoolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutUserInput | SpoolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type CustomFieldUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomFieldCreateWithoutUserInput, CustomFieldUncheckedCreateWithoutUserInput> | CustomFieldCreateWithoutUserInput[] | CustomFieldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutUserInput | CustomFieldCreateOrConnectWithoutUserInput[]
    upsert?: CustomFieldUpsertWithWhereUniqueWithoutUserInput | CustomFieldUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomFieldCreateManyUserInputEnvelope
    set?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    disconnect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    delete?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    update?: CustomFieldUpdateWithWhereUniqueWithoutUserInput | CustomFieldUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomFieldUpdateManyWithWhereWithoutUserInput | CustomFieldUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutBrandsInput = {
    create?: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandsInput
    connect?: UserWhereUniqueInput
  }

  export type SpoolCreateNestedManyWithoutBrandInput = {
    create?: XOR<SpoolCreateWithoutBrandInput, SpoolUncheckedCreateWithoutBrandInput> | SpoolCreateWithoutBrandInput[] | SpoolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutBrandInput | SpoolCreateOrConnectWithoutBrandInput[]
    createMany?: SpoolCreateManyBrandInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type SpoolUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<SpoolCreateWithoutBrandInput, SpoolUncheckedCreateWithoutBrandInput> | SpoolCreateWithoutBrandInput[] | SpoolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutBrandInput | SpoolCreateOrConnectWithoutBrandInput[]
    createMany?: SpoolCreateManyBrandInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBrandsNestedInput = {
    create?: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandsInput
    upsert?: UserUpsertWithoutBrandsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBrandsInput, UserUpdateWithoutBrandsInput>, UserUncheckedUpdateWithoutBrandsInput>
  }

  export type SpoolUpdateManyWithoutBrandNestedInput = {
    create?: XOR<SpoolCreateWithoutBrandInput, SpoolUncheckedCreateWithoutBrandInput> | SpoolCreateWithoutBrandInput[] | SpoolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutBrandInput | SpoolCreateOrConnectWithoutBrandInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutBrandInput | SpoolUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: SpoolCreateManyBrandInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutBrandInput | SpoolUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutBrandInput | SpoolUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type SpoolUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<SpoolCreateWithoutBrandInput, SpoolUncheckedCreateWithoutBrandInput> | SpoolCreateWithoutBrandInput[] | SpoolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutBrandInput | SpoolCreateOrConnectWithoutBrandInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutBrandInput | SpoolUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: SpoolCreateManyBrandInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutBrandInput | SpoolUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutBrandInput | SpoolUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type SpoolCreateNestedManyWithoutMaterialInput = {
    create?: XOR<SpoolCreateWithoutMaterialInput, SpoolUncheckedCreateWithoutMaterialInput> | SpoolCreateWithoutMaterialInput[] | SpoolUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutMaterialInput | SpoolCreateOrConnectWithoutMaterialInput[]
    createMany?: SpoolCreateManyMaterialInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type SpoolUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<SpoolCreateWithoutMaterialInput, SpoolUncheckedCreateWithoutMaterialInput> | SpoolCreateWithoutMaterialInput[] | SpoolUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutMaterialInput | SpoolCreateOrConnectWithoutMaterialInput[]
    createMany?: SpoolCreateManyMaterialInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SpoolUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<SpoolCreateWithoutMaterialInput, SpoolUncheckedCreateWithoutMaterialInput> | SpoolCreateWithoutMaterialInput[] | SpoolUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutMaterialInput | SpoolCreateOrConnectWithoutMaterialInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutMaterialInput | SpoolUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: SpoolCreateManyMaterialInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutMaterialInput | SpoolUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutMaterialInput | SpoolUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type SpoolUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<SpoolCreateWithoutMaterialInput, SpoolUncheckedCreateWithoutMaterialInput> | SpoolCreateWithoutMaterialInput[] | SpoolUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutMaterialInput | SpoolCreateOrConnectWithoutMaterialInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutMaterialInput | SpoolUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: SpoolCreateManyMaterialInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutMaterialInput | SpoolUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutMaterialInput | SpoolUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLocationsInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type SpoolCreateNestedManyWithoutLocationInput = {
    create?: XOR<SpoolCreateWithoutLocationInput, SpoolUncheckedCreateWithoutLocationInput> | SpoolCreateWithoutLocationInput[] | SpoolUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutLocationInput | SpoolCreateOrConnectWithoutLocationInput[]
    createMany?: SpoolCreateManyLocationInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type SpoolUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<SpoolCreateWithoutLocationInput, SpoolUncheckedCreateWithoutLocationInput> | SpoolCreateWithoutLocationInput[] | SpoolUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutLocationInput | SpoolCreateOrConnectWithoutLocationInput[]
    createMany?: SpoolCreateManyLocationInputEnvelope
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    upsert?: UserUpsertWithoutLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationsInput, UserUpdateWithoutLocationsInput>, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type SpoolUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SpoolCreateWithoutLocationInput, SpoolUncheckedCreateWithoutLocationInput> | SpoolCreateWithoutLocationInput[] | SpoolUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutLocationInput | SpoolCreateOrConnectWithoutLocationInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutLocationInput | SpoolUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SpoolCreateManyLocationInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutLocationInput | SpoolUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutLocationInput | SpoolUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type SpoolUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SpoolCreateWithoutLocationInput, SpoolUncheckedCreateWithoutLocationInput> | SpoolCreateWithoutLocationInput[] | SpoolUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpoolCreateOrConnectWithoutLocationInput | SpoolCreateOrConnectWithoutLocationInput[]
    upsert?: SpoolUpsertWithWhereUniqueWithoutLocationInput | SpoolUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SpoolCreateManyLocationInputEnvelope
    set?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    disconnect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    delete?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    connect?: SpoolWhereUniqueInput | SpoolWhereUniqueInput[]
    update?: SpoolUpdateWithWhereUniqueWithoutLocationInput | SpoolUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SpoolUpdateManyWithWhereWithoutLocationInput | SpoolUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSpoolsInput = {
    create?: XOR<UserCreateWithoutSpoolsInput, UserUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpoolsInput
    connect?: UserWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutSpoolsInput = {
    create?: XOR<BrandCreateWithoutSpoolsInput, BrandUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutSpoolsInput
    connect?: BrandWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutSpoolsInput = {
    create?: XOR<MaterialCreateWithoutSpoolsInput, MaterialUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutSpoolsInput
    connect?: MaterialWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutSpoolsInput = {
    create?: XOR<LocationCreateWithoutSpoolsInput, LocationUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSpoolsInput
    connect?: LocationWhereUniqueInput
  }

  export type SpoolColorStopCreateNestedManyWithoutSpoolInput = {
    create?: XOR<SpoolColorStopCreateWithoutSpoolInput, SpoolColorStopUncheckedCreateWithoutSpoolInput> | SpoolColorStopCreateWithoutSpoolInput[] | SpoolColorStopUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: SpoolColorStopCreateOrConnectWithoutSpoolInput | SpoolColorStopCreateOrConnectWithoutSpoolInput[]
    createMany?: SpoolColorStopCreateManySpoolInputEnvelope
    connect?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
  }

  export type UsageCreateNestedManyWithoutSpoolInput = {
    create?: XOR<UsageCreateWithoutSpoolInput, UsageUncheckedCreateWithoutSpoolInput> | UsageCreateWithoutSpoolInput[] | UsageUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutSpoolInput | UsageCreateOrConnectWithoutSpoolInput[]
    createMany?: UsageCreateManySpoolInputEnvelope
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
  }

  export type CustomFieldValueCreateNestedManyWithoutSpoolInput = {
    create?: XOR<CustomFieldValueCreateWithoutSpoolInput, CustomFieldValueUncheckedCreateWithoutSpoolInput> | CustomFieldValueCreateWithoutSpoolInput[] | CustomFieldValueUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutSpoolInput | CustomFieldValueCreateOrConnectWithoutSpoolInput[]
    createMany?: CustomFieldValueCreateManySpoolInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput = {
    create?: XOR<SpoolColorStopCreateWithoutSpoolInput, SpoolColorStopUncheckedCreateWithoutSpoolInput> | SpoolColorStopCreateWithoutSpoolInput[] | SpoolColorStopUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: SpoolColorStopCreateOrConnectWithoutSpoolInput | SpoolColorStopCreateOrConnectWithoutSpoolInput[]
    createMany?: SpoolColorStopCreateManySpoolInputEnvelope
    connect?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
  }

  export type UsageUncheckedCreateNestedManyWithoutSpoolInput = {
    create?: XOR<UsageCreateWithoutSpoolInput, UsageUncheckedCreateWithoutSpoolInput> | UsageCreateWithoutSpoolInput[] | UsageUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutSpoolInput | UsageCreateOrConnectWithoutSpoolInput[]
    createMany?: UsageCreateManySpoolInputEnvelope
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
  }

  export type CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput = {
    create?: XOR<CustomFieldValueCreateWithoutSpoolInput, CustomFieldValueUncheckedCreateWithoutSpoolInput> | CustomFieldValueCreateWithoutSpoolInput[] | CustomFieldValueUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutSpoolInput | CustomFieldValueCreateOrConnectWithoutSpoolInput[]
    createMany?: CustomFieldValueCreateManySpoolInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSpoolsNestedInput = {
    create?: XOR<UserCreateWithoutSpoolsInput, UserUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpoolsInput
    upsert?: UserUpsertWithoutSpoolsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpoolsInput, UserUpdateWithoutSpoolsInput>, UserUncheckedUpdateWithoutSpoolsInput>
  }

  export type BrandUpdateOneRequiredWithoutSpoolsNestedInput = {
    create?: XOR<BrandCreateWithoutSpoolsInput, BrandUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutSpoolsInput
    upsert?: BrandUpsertWithoutSpoolsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutSpoolsInput, BrandUpdateWithoutSpoolsInput>, BrandUncheckedUpdateWithoutSpoolsInput>
  }

  export type MaterialUpdateOneRequiredWithoutSpoolsNestedInput = {
    create?: XOR<MaterialCreateWithoutSpoolsInput, MaterialUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutSpoolsInput
    upsert?: MaterialUpsertWithoutSpoolsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutSpoolsInput, MaterialUpdateWithoutSpoolsInput>, MaterialUncheckedUpdateWithoutSpoolsInput>
  }

  export type LocationUpdateOneWithoutSpoolsNestedInput = {
    create?: XOR<LocationCreateWithoutSpoolsInput, LocationUncheckedCreateWithoutSpoolsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSpoolsInput
    upsert?: LocationUpsertWithoutSpoolsInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutSpoolsInput, LocationUpdateWithoutSpoolsInput>, LocationUncheckedUpdateWithoutSpoolsInput>
  }

  export type SpoolColorStopUpdateManyWithoutSpoolNestedInput = {
    create?: XOR<SpoolColorStopCreateWithoutSpoolInput, SpoolColorStopUncheckedCreateWithoutSpoolInput> | SpoolColorStopCreateWithoutSpoolInput[] | SpoolColorStopUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: SpoolColorStopCreateOrConnectWithoutSpoolInput | SpoolColorStopCreateOrConnectWithoutSpoolInput[]
    upsert?: SpoolColorStopUpsertWithWhereUniqueWithoutSpoolInput | SpoolColorStopUpsertWithWhereUniqueWithoutSpoolInput[]
    createMany?: SpoolColorStopCreateManySpoolInputEnvelope
    set?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    disconnect?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    delete?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    connect?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    update?: SpoolColorStopUpdateWithWhereUniqueWithoutSpoolInput | SpoolColorStopUpdateWithWhereUniqueWithoutSpoolInput[]
    updateMany?: SpoolColorStopUpdateManyWithWhereWithoutSpoolInput | SpoolColorStopUpdateManyWithWhereWithoutSpoolInput[]
    deleteMany?: SpoolColorStopScalarWhereInput | SpoolColorStopScalarWhereInput[]
  }

  export type UsageUpdateManyWithoutSpoolNestedInput = {
    create?: XOR<UsageCreateWithoutSpoolInput, UsageUncheckedCreateWithoutSpoolInput> | UsageCreateWithoutSpoolInput[] | UsageUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutSpoolInput | UsageCreateOrConnectWithoutSpoolInput[]
    upsert?: UsageUpsertWithWhereUniqueWithoutSpoolInput | UsageUpsertWithWhereUniqueWithoutSpoolInput[]
    createMany?: UsageCreateManySpoolInputEnvelope
    set?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    disconnect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    delete?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    update?: UsageUpdateWithWhereUniqueWithoutSpoolInput | UsageUpdateWithWhereUniqueWithoutSpoolInput[]
    updateMany?: UsageUpdateManyWithWhereWithoutSpoolInput | UsageUpdateManyWithWhereWithoutSpoolInput[]
    deleteMany?: UsageScalarWhereInput | UsageScalarWhereInput[]
  }

  export type CustomFieldValueUpdateManyWithoutSpoolNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutSpoolInput, CustomFieldValueUncheckedCreateWithoutSpoolInput> | CustomFieldValueCreateWithoutSpoolInput[] | CustomFieldValueUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutSpoolInput | CustomFieldValueCreateOrConnectWithoutSpoolInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutSpoolInput | CustomFieldValueUpsertWithWhereUniqueWithoutSpoolInput[]
    createMany?: CustomFieldValueCreateManySpoolInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutSpoolInput | CustomFieldValueUpdateWithWhereUniqueWithoutSpoolInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutSpoolInput | CustomFieldValueUpdateManyWithWhereWithoutSpoolInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput = {
    create?: XOR<SpoolColorStopCreateWithoutSpoolInput, SpoolColorStopUncheckedCreateWithoutSpoolInput> | SpoolColorStopCreateWithoutSpoolInput[] | SpoolColorStopUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: SpoolColorStopCreateOrConnectWithoutSpoolInput | SpoolColorStopCreateOrConnectWithoutSpoolInput[]
    upsert?: SpoolColorStopUpsertWithWhereUniqueWithoutSpoolInput | SpoolColorStopUpsertWithWhereUniqueWithoutSpoolInput[]
    createMany?: SpoolColorStopCreateManySpoolInputEnvelope
    set?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    disconnect?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    delete?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    connect?: SpoolColorStopWhereUniqueInput | SpoolColorStopWhereUniqueInput[]
    update?: SpoolColorStopUpdateWithWhereUniqueWithoutSpoolInput | SpoolColorStopUpdateWithWhereUniqueWithoutSpoolInput[]
    updateMany?: SpoolColorStopUpdateManyWithWhereWithoutSpoolInput | SpoolColorStopUpdateManyWithWhereWithoutSpoolInput[]
    deleteMany?: SpoolColorStopScalarWhereInput | SpoolColorStopScalarWhereInput[]
  }

  export type UsageUncheckedUpdateManyWithoutSpoolNestedInput = {
    create?: XOR<UsageCreateWithoutSpoolInput, UsageUncheckedCreateWithoutSpoolInput> | UsageCreateWithoutSpoolInput[] | UsageUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutSpoolInput | UsageCreateOrConnectWithoutSpoolInput[]
    upsert?: UsageUpsertWithWhereUniqueWithoutSpoolInput | UsageUpsertWithWhereUniqueWithoutSpoolInput[]
    createMany?: UsageCreateManySpoolInputEnvelope
    set?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    disconnect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    delete?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    update?: UsageUpdateWithWhereUniqueWithoutSpoolInput | UsageUpdateWithWhereUniqueWithoutSpoolInput[]
    updateMany?: UsageUpdateManyWithWhereWithoutSpoolInput | UsageUpdateManyWithWhereWithoutSpoolInput[]
    deleteMany?: UsageScalarWhereInput | UsageScalarWhereInput[]
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutSpoolInput, CustomFieldValueUncheckedCreateWithoutSpoolInput> | CustomFieldValueCreateWithoutSpoolInput[] | CustomFieldValueUncheckedCreateWithoutSpoolInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutSpoolInput | CustomFieldValueCreateOrConnectWithoutSpoolInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutSpoolInput | CustomFieldValueUpsertWithWhereUniqueWithoutSpoolInput[]
    createMany?: CustomFieldValueCreateManySpoolInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutSpoolInput | CustomFieldValueUpdateWithWhereUniqueWithoutSpoolInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutSpoolInput | CustomFieldValueUpdateManyWithWhereWithoutSpoolInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type SpoolCreateNestedOneWithoutColorsInput = {
    create?: XOR<SpoolCreateWithoutColorsInput, SpoolUncheckedCreateWithoutColorsInput>
    connectOrCreate?: SpoolCreateOrConnectWithoutColorsInput
    connect?: SpoolWhereUniqueInput
  }

  export type SpoolUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<SpoolCreateWithoutColorsInput, SpoolUncheckedCreateWithoutColorsInput>
    connectOrCreate?: SpoolCreateOrConnectWithoutColorsInput
    upsert?: SpoolUpsertWithoutColorsInput
    connect?: SpoolWhereUniqueInput
    update?: XOR<XOR<SpoolUpdateToOneWithWhereWithoutColorsInput, SpoolUpdateWithoutColorsInput>, SpoolUncheckedUpdateWithoutColorsInput>
  }

  export type SpoolCreateNestedOneWithoutUsagesInput = {
    create?: XOR<SpoolCreateWithoutUsagesInput, SpoolUncheckedCreateWithoutUsagesInput>
    connectOrCreate?: SpoolCreateOrConnectWithoutUsagesInput
    connect?: SpoolWhereUniqueInput
  }

  export type SpoolUpdateOneRequiredWithoutUsagesNestedInput = {
    create?: XOR<SpoolCreateWithoutUsagesInput, SpoolUncheckedCreateWithoutUsagesInput>
    connectOrCreate?: SpoolCreateOrConnectWithoutUsagesInput
    upsert?: SpoolUpsertWithoutUsagesInput
    connect?: SpoolWhereUniqueInput
    update?: XOR<XOR<SpoolUpdateToOneWithWhereWithoutUsagesInput, SpoolUpdateWithoutUsagesInput>, SpoolUncheckedUpdateWithoutUsagesInput>
  }

  export type UserCreateNestedOneWithoutCustomFieldsInput = {
    create?: XOR<UserCreateWithoutCustomFieldsInput, UserUncheckedCreateWithoutCustomFieldsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomFieldsInput
    connect?: UserWhereUniqueInput
  }

  export type CustomFieldValueCreateNestedManyWithoutFieldInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type CustomFieldValueUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCustomFieldsNestedInput = {
    create?: XOR<UserCreateWithoutCustomFieldsInput, UserUncheckedCreateWithoutCustomFieldsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomFieldsInput
    upsert?: UserUpsertWithoutCustomFieldsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomFieldsInput, UserUpdateWithoutCustomFieldsInput>, UserUncheckedUpdateWithoutCustomFieldsInput>
  }

  export type CustomFieldValueUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput | CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput | CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutFieldInput | CustomFieldValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput | CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput | CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutFieldInput | CustomFieldValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type CustomFieldCreateNestedOneWithoutValuesInput = {
    create?: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
    connectOrCreate?: CustomFieldCreateOrConnectWithoutValuesInput
    connect?: CustomFieldWhereUniqueInput
  }

  export type SpoolCreateNestedOneWithoutCustomFieldValuesInput = {
    create?: XOR<SpoolCreateWithoutCustomFieldValuesInput, SpoolUncheckedCreateWithoutCustomFieldValuesInput>
    connectOrCreate?: SpoolCreateOrConnectWithoutCustomFieldValuesInput
    connect?: SpoolWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CustomFieldUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
    connectOrCreate?: CustomFieldCreateOrConnectWithoutValuesInput
    upsert?: CustomFieldUpsertWithoutValuesInput
    connect?: CustomFieldWhereUniqueInput
    update?: XOR<XOR<CustomFieldUpdateToOneWithWhereWithoutValuesInput, CustomFieldUpdateWithoutValuesInput>, CustomFieldUncheckedUpdateWithoutValuesInput>
  }

  export type SpoolUpdateOneRequiredWithoutCustomFieldValuesNestedInput = {
    create?: XOR<SpoolCreateWithoutCustomFieldValuesInput, SpoolUncheckedCreateWithoutCustomFieldValuesInput>
    connectOrCreate?: SpoolCreateOrConnectWithoutCustomFieldValuesInput
    upsert?: SpoolUpsertWithoutCustomFieldValuesInput
    connect?: SpoolWhereUniqueInput
    update?: XOR<XOR<SpoolUpdateToOneWithWhereWithoutCustomFieldValuesInput, SpoolUpdateWithoutCustomFieldValuesInput>, SpoolUncheckedUpdateWithoutCustomFieldValuesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type BrandCreateWithoutUserInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutUserInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutUserInput, BrandUncheckedCreateWithoutUserInput>
  }

  export type BrandCreateManyUserInputEnvelope = {
    data: BrandCreateManyUserInput | BrandCreateManyUserInput[]
  }

  export type LocationCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spools?: SpoolUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutUserInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
  }

  export type LocationCreateManyUserInputEnvelope = {
    data: LocationCreateManyUserInput | LocationCreateManyUserInput[]
  }

  export type SpoolCreateWithoutUserInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutSpoolsInput
    material: MaterialCreateNestedOneWithoutSpoolsInput
    location?: LocationCreateNestedOneWithoutSpoolsInput
    colors?: SpoolColorStopCreateNestedManyWithoutSpoolInput
    usages?: UsageCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateWithoutUserInput = {
    id?: string
    brandId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput
    usages?: UsageUncheckedCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolCreateOrConnectWithoutUserInput = {
    where: SpoolWhereUniqueInput
    create: XOR<SpoolCreateWithoutUserInput, SpoolUncheckedCreateWithoutUserInput>
  }

  export type SpoolCreateManyUserInputEnvelope = {
    data: SpoolCreateManyUserInput | SpoolCreateManyUserInput[]
  }

  export type CustomFieldCreateWithoutUserInput = {
    id?: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: CustomFieldValueCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUncheckedCreateWithoutUserInput = {
    id?: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: CustomFieldValueUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldCreateOrConnectWithoutUserInput = {
    where: CustomFieldWhereUniqueInput
    create: XOR<CustomFieldCreateWithoutUserInput, CustomFieldUncheckedCreateWithoutUserInput>
  }

  export type CustomFieldCreateManyUserInputEnvelope = {
    data: CustomFieldCreateManyUserInput | CustomFieldCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type BrandUpsertWithWhereUniqueWithoutUserInput = {
    where: BrandWhereUniqueInput
    update: XOR<BrandUpdateWithoutUserInput, BrandUncheckedUpdateWithoutUserInput>
    create: XOR<BrandCreateWithoutUserInput, BrandUncheckedCreateWithoutUserInput>
  }

  export type BrandUpdateWithWhereUniqueWithoutUserInput = {
    where: BrandWhereUniqueInput
    data: XOR<BrandUpdateWithoutUserInput, BrandUncheckedUpdateWithoutUserInput>
  }

  export type BrandUpdateManyWithWhereWithoutUserInput = {
    where: BrandScalarWhereInput
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyWithoutUserInput>
  }

  export type BrandScalarWhereInput = {
    AND?: BrandScalarWhereInput | BrandScalarWhereInput[]
    OR?: BrandScalarWhereInput[]
    NOT?: BrandScalarWhereInput | BrandScalarWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    websiteUrl?: StringNullableFilter<"Brand"> | string | null
    userId?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
  }

  export type LocationUpsertWithWhereUniqueWithoutUserInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutUserInput, LocationUncheckedUpdateWithoutUserInput>
    create: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutUserInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutUserInput, LocationUncheckedUpdateWithoutUserInput>
  }

  export type LocationUpdateManyWithWhereWithoutUserInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutUserInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    userId?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type SpoolUpsertWithWhereUniqueWithoutUserInput = {
    where: SpoolWhereUniqueInput
    update: XOR<SpoolUpdateWithoutUserInput, SpoolUncheckedUpdateWithoutUserInput>
    create: XOR<SpoolCreateWithoutUserInput, SpoolUncheckedCreateWithoutUserInput>
  }

  export type SpoolUpdateWithWhereUniqueWithoutUserInput = {
    where: SpoolWhereUniqueInput
    data: XOR<SpoolUpdateWithoutUserInput, SpoolUncheckedUpdateWithoutUserInput>
  }

  export type SpoolUpdateManyWithWhereWithoutUserInput = {
    where: SpoolScalarWhereInput
    data: XOR<SpoolUpdateManyMutationInput, SpoolUncheckedUpdateManyWithoutUserInput>
  }

  export type SpoolScalarWhereInput = {
    AND?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
    OR?: SpoolScalarWhereInput[]
    NOT?: SpoolScalarWhereInput | SpoolScalarWhereInput[]
    id?: StringFilter<"Spool"> | string
    userId?: StringFilter<"Spool"> | string
    brandId?: StringFilter<"Spool"> | string
    materialId?: StringFilter<"Spool"> | string
    locationId?: StringNullableFilter<"Spool"> | string | null
    colorMode?: StringFilter<"Spool"> | string
    colorName?: StringNullableFilter<"Spool"> | string | null
    diameterMm?: FloatFilter<"Spool"> | number
    initialWeightG?: IntFilter<"Spool"> | number
    remainingWeightG?: IntFilter<"Spool"> | number
    status?: StringFilter<"Spool"> | string
    needsRepurchase?: BoolFilter<"Spool"> | boolean
    productUrl?: StringNullableFilter<"Spool"> | string | null
    purchasedAt?: DateTimeNullableFilter<"Spool"> | Date | string | null
    priceCents?: IntNullableFilter<"Spool"> | number | null
    notes?: StringNullableFilter<"Spool"> | string | null
    lastDriedAt?: DateTimeNullableFilter<"Spool"> | Date | string | null
    createdAt?: DateTimeFilter<"Spool"> | Date | string
    updatedAt?: DateTimeFilter<"Spool"> | Date | string
  }

  export type CustomFieldUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomFieldWhereUniqueInput
    update: XOR<CustomFieldUpdateWithoutUserInput, CustomFieldUncheckedUpdateWithoutUserInput>
    create: XOR<CustomFieldCreateWithoutUserInput, CustomFieldUncheckedCreateWithoutUserInput>
  }

  export type CustomFieldUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomFieldWhereUniqueInput
    data: XOR<CustomFieldUpdateWithoutUserInput, CustomFieldUncheckedUpdateWithoutUserInput>
  }

  export type CustomFieldUpdateManyWithWhereWithoutUserInput = {
    where: CustomFieldScalarWhereInput
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomFieldScalarWhereInput = {
    AND?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
    OR?: CustomFieldScalarWhereInput[]
    NOT?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
    id?: StringFilter<"CustomField"> | string
    userId?: StringFilter<"CustomField"> | string
    entity?: StringFilter<"CustomField"> | string
    key?: StringFilter<"CustomField"> | string
    label?: StringFilter<"CustomField"> | string
    type?: StringFilter<"CustomField"> | string
    required?: BoolFilter<"CustomField"> | boolean
    options?: StringNullableFilter<"CustomField"> | string | null
    sortOrder?: IntFilter<"CustomField"> | number
    showInList?: BoolFilter<"CustomField"> | boolean
    createdAt?: DateTimeFilter<"CustomField"> | Date | string
    updatedAt?: DateTimeFilter<"CustomField"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    brands?: BrandCreateNestedManyWithoutUserInput
    locations?: LocationCreateNestedManyWithoutUserInput
    spools?: SpoolCreateNestedManyWithoutUserInput
    customFields?: CustomFieldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    brands?: BrandUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationUncheckedCreateNestedManyWithoutUserInput
    spools?: SpoolUncheckedCreateNestedManyWithoutUserInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    brands?: BrandUpdateManyWithoutUserNestedInput
    locations?: LocationUpdateManyWithoutUserNestedInput
    spools?: SpoolUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    brands?: BrandUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationUncheckedUpdateManyWithoutUserNestedInput
    spools?: SpoolUncheckedUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    brands?: BrandCreateNestedManyWithoutUserInput
    locations?: LocationCreateNestedManyWithoutUserInput
    spools?: SpoolCreateNestedManyWithoutUserInput
    customFields?: CustomFieldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    brands?: BrandUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationUncheckedCreateNestedManyWithoutUserInput
    spools?: SpoolUncheckedCreateNestedManyWithoutUserInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    brands?: BrandUpdateManyWithoutUserNestedInput
    locations?: LocationUpdateManyWithoutUserNestedInput
    spools?: SpoolUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    brands?: BrandUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationUncheckedUpdateManyWithoutUserNestedInput
    spools?: SpoolUncheckedUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBrandsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    locations?: LocationCreateNestedManyWithoutUserInput
    spools?: SpoolCreateNestedManyWithoutUserInput
    customFields?: CustomFieldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBrandsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationUncheckedCreateNestedManyWithoutUserInput
    spools?: SpoolUncheckedCreateNestedManyWithoutUserInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBrandsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
  }

  export type SpoolCreateWithoutBrandInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpoolsInput
    material: MaterialCreateNestedOneWithoutSpoolsInput
    location?: LocationCreateNestedOneWithoutSpoolsInput
    colors?: SpoolColorStopCreateNestedManyWithoutSpoolInput
    usages?: UsageCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateWithoutBrandInput = {
    id?: string
    userId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput
    usages?: UsageUncheckedCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolCreateOrConnectWithoutBrandInput = {
    where: SpoolWhereUniqueInput
    create: XOR<SpoolCreateWithoutBrandInput, SpoolUncheckedCreateWithoutBrandInput>
  }

  export type SpoolCreateManyBrandInputEnvelope = {
    data: SpoolCreateManyBrandInput | SpoolCreateManyBrandInput[]
  }

  export type UserUpsertWithoutBrandsInput = {
    update: XOR<UserUpdateWithoutBrandsInput, UserUncheckedUpdateWithoutBrandsInput>
    create: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBrandsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBrandsInput, UserUncheckedUpdateWithoutBrandsInput>
  }

  export type UserUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    locations?: LocationUpdateManyWithoutUserNestedInput
    spools?: SpoolUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationUncheckedUpdateManyWithoutUserNestedInput
    spools?: SpoolUncheckedUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpoolUpsertWithWhereUniqueWithoutBrandInput = {
    where: SpoolWhereUniqueInput
    update: XOR<SpoolUpdateWithoutBrandInput, SpoolUncheckedUpdateWithoutBrandInput>
    create: XOR<SpoolCreateWithoutBrandInput, SpoolUncheckedCreateWithoutBrandInput>
  }

  export type SpoolUpdateWithWhereUniqueWithoutBrandInput = {
    where: SpoolWhereUniqueInput
    data: XOR<SpoolUpdateWithoutBrandInput, SpoolUncheckedUpdateWithoutBrandInput>
  }

  export type SpoolUpdateManyWithWhereWithoutBrandInput = {
    where: SpoolScalarWhereInput
    data: XOR<SpoolUpdateManyMutationInput, SpoolUncheckedUpdateManyWithoutBrandInput>
  }

  export type SpoolCreateWithoutMaterialInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpoolsInput
    brand: BrandCreateNestedOneWithoutSpoolsInput
    location?: LocationCreateNestedOneWithoutSpoolsInput
    colors?: SpoolColorStopCreateNestedManyWithoutSpoolInput
    usages?: UsageCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateWithoutMaterialInput = {
    id?: string
    userId: string
    brandId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput
    usages?: UsageUncheckedCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolCreateOrConnectWithoutMaterialInput = {
    where: SpoolWhereUniqueInput
    create: XOR<SpoolCreateWithoutMaterialInput, SpoolUncheckedCreateWithoutMaterialInput>
  }

  export type SpoolCreateManyMaterialInputEnvelope = {
    data: SpoolCreateManyMaterialInput | SpoolCreateManyMaterialInput[]
  }

  export type SpoolUpsertWithWhereUniqueWithoutMaterialInput = {
    where: SpoolWhereUniqueInput
    update: XOR<SpoolUpdateWithoutMaterialInput, SpoolUncheckedUpdateWithoutMaterialInput>
    create: XOR<SpoolCreateWithoutMaterialInput, SpoolUncheckedCreateWithoutMaterialInput>
  }

  export type SpoolUpdateWithWhereUniqueWithoutMaterialInput = {
    where: SpoolWhereUniqueInput
    data: XOR<SpoolUpdateWithoutMaterialInput, SpoolUncheckedUpdateWithoutMaterialInput>
  }

  export type SpoolUpdateManyWithWhereWithoutMaterialInput = {
    where: SpoolScalarWhereInput
    data: XOR<SpoolUpdateManyMutationInput, SpoolUncheckedUpdateManyWithoutMaterialInput>
  }

  export type UserCreateWithoutLocationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    brands?: BrandCreateNestedManyWithoutUserInput
    spools?: SpoolCreateNestedManyWithoutUserInput
    customFields?: CustomFieldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    brands?: BrandUncheckedCreateNestedManyWithoutUserInput
    spools?: SpoolUncheckedCreateNestedManyWithoutUserInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
  }

  export type SpoolCreateWithoutLocationInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpoolsInput
    brand: BrandCreateNestedOneWithoutSpoolsInput
    material: MaterialCreateNestedOneWithoutSpoolsInput
    colors?: SpoolColorStopCreateNestedManyWithoutSpoolInput
    usages?: UsageCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    brandId: string
    materialId: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput
    usages?: UsageUncheckedCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolCreateOrConnectWithoutLocationInput = {
    where: SpoolWhereUniqueInput
    create: XOR<SpoolCreateWithoutLocationInput, SpoolUncheckedCreateWithoutLocationInput>
  }

  export type SpoolCreateManyLocationInputEnvelope = {
    data: SpoolCreateManyLocationInput | SpoolCreateManyLocationInput[]
  }

  export type UserUpsertWithoutLocationsInput = {
    update: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    brands?: BrandUpdateManyWithoutUserNestedInput
    spools?: SpoolUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    brands?: BrandUncheckedUpdateManyWithoutUserNestedInput
    spools?: SpoolUncheckedUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpoolUpsertWithWhereUniqueWithoutLocationInput = {
    where: SpoolWhereUniqueInput
    update: XOR<SpoolUpdateWithoutLocationInput, SpoolUncheckedUpdateWithoutLocationInput>
    create: XOR<SpoolCreateWithoutLocationInput, SpoolUncheckedCreateWithoutLocationInput>
  }

  export type SpoolUpdateWithWhereUniqueWithoutLocationInput = {
    where: SpoolWhereUniqueInput
    data: XOR<SpoolUpdateWithoutLocationInput, SpoolUncheckedUpdateWithoutLocationInput>
  }

  export type SpoolUpdateManyWithWhereWithoutLocationInput = {
    where: SpoolScalarWhereInput
    data: XOR<SpoolUpdateManyMutationInput, SpoolUncheckedUpdateManyWithoutLocationInput>
  }

  export type UserCreateWithoutSpoolsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    brands?: BrandCreateNestedManyWithoutUserInput
    locations?: LocationCreateNestedManyWithoutUserInput
    customFields?: CustomFieldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpoolsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    brands?: BrandUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationUncheckedCreateNestedManyWithoutUserInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpoolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpoolsInput, UserUncheckedCreateWithoutSpoolsInput>
  }

  export type BrandCreateWithoutSpoolsInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBrandsInput
  }

  export type BrandUncheckedCreateWithoutSpoolsInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutSpoolsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutSpoolsInput, BrandUncheckedCreateWithoutSpoolsInput>
  }

  export type MaterialCreateWithoutSpoolsInput = {
    id?: string
    name: string
    density?: number | null
    maxNozzleC?: number | null
    maxBedC?: number | null
    minNozzleC?: number | null
    minBedC?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUncheckedCreateWithoutSpoolsInput = {
    id?: string
    name: string
    density?: number | null
    maxNozzleC?: number | null
    maxBedC?: number | null
    minNozzleC?: number | null
    minBedC?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutSpoolsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutSpoolsInput, MaterialUncheckedCreateWithoutSpoolsInput>
  }

  export type LocationCreateWithoutSpoolsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutSpoolsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutSpoolsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutSpoolsInput, LocationUncheckedCreateWithoutSpoolsInput>
  }

  export type SpoolColorStopCreateWithoutSpoolInput = {
    id?: string
    hex: string
    name?: string | null
    position: number
    weight?: number | null
  }

  export type SpoolColorStopUncheckedCreateWithoutSpoolInput = {
    id?: string
    hex: string
    name?: string | null
    position: number
    weight?: number | null
  }

  export type SpoolColorStopCreateOrConnectWithoutSpoolInput = {
    where: SpoolColorStopWhereUniqueInput
    create: XOR<SpoolColorStopCreateWithoutSpoolInput, SpoolColorStopUncheckedCreateWithoutSpoolInput>
  }

  export type SpoolColorStopCreateManySpoolInputEnvelope = {
    data: SpoolColorStopCreateManySpoolInput | SpoolColorStopCreateManySpoolInput[]
  }

  export type UsageCreateWithoutSpoolInput = {
    id?: string
    gramsUsed: number
    note?: string | null
    usedAt?: Date | string
  }

  export type UsageUncheckedCreateWithoutSpoolInput = {
    id?: string
    gramsUsed: number
    note?: string | null
    usedAt?: Date | string
  }

  export type UsageCreateOrConnectWithoutSpoolInput = {
    where: UsageWhereUniqueInput
    create: XOR<UsageCreateWithoutSpoolInput, UsageUncheckedCreateWithoutSpoolInput>
  }

  export type UsageCreateManySpoolInputEnvelope = {
    data: UsageCreateManySpoolInput | UsageCreateManySpoolInput[]
  }

  export type CustomFieldValueCreateWithoutSpoolInput = {
    id?: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
    field: CustomFieldCreateNestedOneWithoutValuesInput
  }

  export type CustomFieldValueUncheckedCreateWithoutSpoolInput = {
    id?: string
    fieldId: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
  }

  export type CustomFieldValueCreateOrConnectWithoutSpoolInput = {
    where: CustomFieldValueWhereUniqueInput
    create: XOR<CustomFieldValueCreateWithoutSpoolInput, CustomFieldValueUncheckedCreateWithoutSpoolInput>
  }

  export type CustomFieldValueCreateManySpoolInputEnvelope = {
    data: CustomFieldValueCreateManySpoolInput | CustomFieldValueCreateManySpoolInput[]
  }

  export type UserUpsertWithoutSpoolsInput = {
    update: XOR<UserUpdateWithoutSpoolsInput, UserUncheckedUpdateWithoutSpoolsInput>
    create: XOR<UserCreateWithoutSpoolsInput, UserUncheckedCreateWithoutSpoolsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpoolsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpoolsInput, UserUncheckedUpdateWithoutSpoolsInput>
  }

  export type UserUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    brands?: BrandUpdateManyWithoutUserNestedInput
    locations?: LocationUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    brands?: BrandUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationUncheckedUpdateManyWithoutUserNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BrandUpsertWithoutSpoolsInput = {
    update: XOR<BrandUpdateWithoutSpoolsInput, BrandUncheckedUpdateWithoutSpoolsInput>
    create: XOR<BrandCreateWithoutSpoolsInput, BrandUncheckedCreateWithoutSpoolsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutSpoolsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutSpoolsInput, BrandUncheckedUpdateWithoutSpoolsInput>
  }

  export type BrandUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBrandsNestedInput
  }

  export type BrandUncheckedUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUpsertWithoutSpoolsInput = {
    update: XOR<MaterialUpdateWithoutSpoolsInput, MaterialUncheckedUpdateWithoutSpoolsInput>
    create: XOR<MaterialCreateWithoutSpoolsInput, MaterialUncheckedCreateWithoutSpoolsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutSpoolsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutSpoolsInput, MaterialUncheckedUpdateWithoutSpoolsInput>
  }

  export type MaterialUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    maxNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    maxBedC?: NullableIntFieldUpdateOperationsInput | number | null
    minNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    minBedC?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    maxNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    maxBedC?: NullableIntFieldUpdateOperationsInput | number | null
    minNozzleC?: NullableIntFieldUpdateOperationsInput | number | null
    minBedC?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithoutSpoolsInput = {
    update: XOR<LocationUpdateWithoutSpoolsInput, LocationUncheckedUpdateWithoutSpoolsInput>
    create: XOR<LocationCreateWithoutSpoolsInput, LocationUncheckedCreateWithoutSpoolsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutSpoolsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutSpoolsInput, LocationUncheckedUpdateWithoutSpoolsInput>
  }

  export type LocationUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutSpoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolColorStopUpsertWithWhereUniqueWithoutSpoolInput = {
    where: SpoolColorStopWhereUniqueInput
    update: XOR<SpoolColorStopUpdateWithoutSpoolInput, SpoolColorStopUncheckedUpdateWithoutSpoolInput>
    create: XOR<SpoolColorStopCreateWithoutSpoolInput, SpoolColorStopUncheckedCreateWithoutSpoolInput>
  }

  export type SpoolColorStopUpdateWithWhereUniqueWithoutSpoolInput = {
    where: SpoolColorStopWhereUniqueInput
    data: XOR<SpoolColorStopUpdateWithoutSpoolInput, SpoolColorStopUncheckedUpdateWithoutSpoolInput>
  }

  export type SpoolColorStopUpdateManyWithWhereWithoutSpoolInput = {
    where: SpoolColorStopScalarWhereInput
    data: XOR<SpoolColorStopUpdateManyMutationInput, SpoolColorStopUncheckedUpdateManyWithoutSpoolInput>
  }

  export type SpoolColorStopScalarWhereInput = {
    AND?: SpoolColorStopScalarWhereInput | SpoolColorStopScalarWhereInput[]
    OR?: SpoolColorStopScalarWhereInput[]
    NOT?: SpoolColorStopScalarWhereInput | SpoolColorStopScalarWhereInput[]
    id?: StringFilter<"SpoolColorStop"> | string
    spoolId?: StringFilter<"SpoolColorStop"> | string
    hex?: StringFilter<"SpoolColorStop"> | string
    name?: StringNullableFilter<"SpoolColorStop"> | string | null
    position?: FloatFilter<"SpoolColorStop"> | number
    weight?: FloatNullableFilter<"SpoolColorStop"> | number | null
  }

  export type UsageUpsertWithWhereUniqueWithoutSpoolInput = {
    where: UsageWhereUniqueInput
    update: XOR<UsageUpdateWithoutSpoolInput, UsageUncheckedUpdateWithoutSpoolInput>
    create: XOR<UsageCreateWithoutSpoolInput, UsageUncheckedCreateWithoutSpoolInput>
  }

  export type UsageUpdateWithWhereUniqueWithoutSpoolInput = {
    where: UsageWhereUniqueInput
    data: XOR<UsageUpdateWithoutSpoolInput, UsageUncheckedUpdateWithoutSpoolInput>
  }

  export type UsageUpdateManyWithWhereWithoutSpoolInput = {
    where: UsageScalarWhereInput
    data: XOR<UsageUpdateManyMutationInput, UsageUncheckedUpdateManyWithoutSpoolInput>
  }

  export type UsageScalarWhereInput = {
    AND?: UsageScalarWhereInput | UsageScalarWhereInput[]
    OR?: UsageScalarWhereInput[]
    NOT?: UsageScalarWhereInput | UsageScalarWhereInput[]
    id?: StringFilter<"Usage"> | string
    spoolId?: StringFilter<"Usage"> | string
    gramsUsed?: IntFilter<"Usage"> | number
    note?: StringNullableFilter<"Usage"> | string | null
    usedAt?: DateTimeFilter<"Usage"> | Date | string
  }

  export type CustomFieldValueUpsertWithWhereUniqueWithoutSpoolInput = {
    where: CustomFieldValueWhereUniqueInput
    update: XOR<CustomFieldValueUpdateWithoutSpoolInput, CustomFieldValueUncheckedUpdateWithoutSpoolInput>
    create: XOR<CustomFieldValueCreateWithoutSpoolInput, CustomFieldValueUncheckedCreateWithoutSpoolInput>
  }

  export type CustomFieldValueUpdateWithWhereUniqueWithoutSpoolInput = {
    where: CustomFieldValueWhereUniqueInput
    data: XOR<CustomFieldValueUpdateWithoutSpoolInput, CustomFieldValueUncheckedUpdateWithoutSpoolInput>
  }

  export type CustomFieldValueUpdateManyWithWhereWithoutSpoolInput = {
    where: CustomFieldValueScalarWhereInput
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyWithoutSpoolInput>
  }

  export type CustomFieldValueScalarWhereInput = {
    AND?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
    OR?: CustomFieldValueScalarWhereInput[]
    NOT?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
    id?: StringFilter<"CustomFieldValue"> | string
    fieldId?: StringFilter<"CustomFieldValue"> | string
    spoolId?: StringFilter<"CustomFieldValue"> | string
    valueText?: StringNullableFilter<"CustomFieldValue"> | string | null
    valueNumber?: FloatNullableFilter<"CustomFieldValue"> | number | null
    valueBoolean?: BoolNullableFilter<"CustomFieldValue"> | boolean | null
    valueDate?: DateTimeNullableFilter<"CustomFieldValue"> | Date | string | null
  }

  export type SpoolCreateWithoutColorsInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpoolsInput
    brand: BrandCreateNestedOneWithoutSpoolsInput
    material: MaterialCreateNestedOneWithoutSpoolsInput
    location?: LocationCreateNestedOneWithoutSpoolsInput
    usages?: UsageCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateWithoutColorsInput = {
    id?: string
    userId: string
    brandId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usages?: UsageUncheckedCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolCreateOrConnectWithoutColorsInput = {
    where: SpoolWhereUniqueInput
    create: XOR<SpoolCreateWithoutColorsInput, SpoolUncheckedCreateWithoutColorsInput>
  }

  export type SpoolUpsertWithoutColorsInput = {
    update: XOR<SpoolUpdateWithoutColorsInput, SpoolUncheckedUpdateWithoutColorsInput>
    create: XOR<SpoolCreateWithoutColorsInput, SpoolUncheckedCreateWithoutColorsInput>
    where?: SpoolWhereInput
  }

  export type SpoolUpdateToOneWithWhereWithoutColorsInput = {
    where?: SpoolWhereInput
    data: XOR<SpoolUpdateWithoutColorsInput, SpoolUncheckedUpdateWithoutColorsInput>
  }

  export type SpoolUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpoolsNestedInput
    brand?: BrandUpdateOneRequiredWithoutSpoolsNestedInput
    material?: MaterialUpdateOneRequiredWithoutSpoolsNestedInput
    location?: LocationUpdateOneWithoutSpoolsNestedInput
    usages?: UsageUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usages?: UsageUncheckedUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolCreateWithoutUsagesInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpoolsInput
    brand: BrandCreateNestedOneWithoutSpoolsInput
    material: MaterialCreateNestedOneWithoutSpoolsInput
    location?: LocationCreateNestedOneWithoutSpoolsInput
    colors?: SpoolColorStopCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateWithoutUsagesInput = {
    id?: string
    userId: string
    brandId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput
    customFieldValues?: CustomFieldValueUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolCreateOrConnectWithoutUsagesInput = {
    where: SpoolWhereUniqueInput
    create: XOR<SpoolCreateWithoutUsagesInput, SpoolUncheckedCreateWithoutUsagesInput>
  }

  export type SpoolUpsertWithoutUsagesInput = {
    update: XOR<SpoolUpdateWithoutUsagesInput, SpoolUncheckedUpdateWithoutUsagesInput>
    create: XOR<SpoolCreateWithoutUsagesInput, SpoolUncheckedCreateWithoutUsagesInput>
    where?: SpoolWhereInput
  }

  export type SpoolUpdateToOneWithWhereWithoutUsagesInput = {
    where?: SpoolWhereInput
    data: XOR<SpoolUpdateWithoutUsagesInput, SpoolUncheckedUpdateWithoutUsagesInput>
  }

  export type SpoolUpdateWithoutUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpoolsNestedInput
    brand?: BrandUpdateOneRequiredWithoutSpoolsNestedInput
    material?: MaterialUpdateOneRequiredWithoutSpoolsNestedInput
    location?: LocationUpdateOneWithoutSpoolsNestedInput
    colors?: SpoolColorStopUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateWithoutUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type UserCreateWithoutCustomFieldsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    brands?: BrandCreateNestedManyWithoutUserInput
    locations?: LocationCreateNestedManyWithoutUserInput
    spools?: SpoolCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomFieldsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    brands?: BrandUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationUncheckedCreateNestedManyWithoutUserInput
    spools?: SpoolUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomFieldsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomFieldsInput, UserUncheckedCreateWithoutCustomFieldsInput>
  }

  export type CustomFieldValueCreateWithoutFieldInput = {
    id?: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
    spool: SpoolCreateNestedOneWithoutCustomFieldValuesInput
  }

  export type CustomFieldValueUncheckedCreateWithoutFieldInput = {
    id?: string
    spoolId: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
  }

  export type CustomFieldValueCreateOrConnectWithoutFieldInput = {
    where: CustomFieldValueWhereUniqueInput
    create: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput>
  }

  export type CustomFieldValueCreateManyFieldInputEnvelope = {
    data: CustomFieldValueCreateManyFieldInput | CustomFieldValueCreateManyFieldInput[]
  }

  export type UserUpsertWithoutCustomFieldsInput = {
    update: XOR<UserUpdateWithoutCustomFieldsInput, UserUncheckedUpdateWithoutCustomFieldsInput>
    create: XOR<UserCreateWithoutCustomFieldsInput, UserUncheckedCreateWithoutCustomFieldsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomFieldsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomFieldsInput, UserUncheckedUpdateWithoutCustomFieldsInput>
  }

  export type UserUpdateWithoutCustomFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    brands?: BrandUpdateManyWithoutUserNestedInput
    locations?: LocationUpdateManyWithoutUserNestedInput
    spools?: SpoolUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    brands?: BrandUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationUncheckedUpdateManyWithoutUserNestedInput
    spools?: SpoolUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput = {
    where: CustomFieldValueWhereUniqueInput
    update: XOR<CustomFieldValueUpdateWithoutFieldInput, CustomFieldValueUncheckedUpdateWithoutFieldInput>
    create: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput>
  }

  export type CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput = {
    where: CustomFieldValueWhereUniqueInput
    data: XOR<CustomFieldValueUpdateWithoutFieldInput, CustomFieldValueUncheckedUpdateWithoutFieldInput>
  }

  export type CustomFieldValueUpdateManyWithWhereWithoutFieldInput = {
    where: CustomFieldValueScalarWhereInput
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyWithoutFieldInput>
  }

  export type CustomFieldCreateWithoutValuesInput = {
    id?: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomFieldsInput
  }

  export type CustomFieldUncheckedCreateWithoutValuesInput = {
    id?: string
    userId: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomFieldCreateOrConnectWithoutValuesInput = {
    where: CustomFieldWhereUniqueInput
    create: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
  }

  export type SpoolCreateWithoutCustomFieldValuesInput = {
    id?: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpoolsInput
    brand: BrandCreateNestedOneWithoutSpoolsInput
    material: MaterialCreateNestedOneWithoutSpoolsInput
    location?: LocationCreateNestedOneWithoutSpoolsInput
    colors?: SpoolColorStopCreateNestedManyWithoutSpoolInput
    usages?: UsageCreateNestedManyWithoutSpoolInput
  }

  export type SpoolUncheckedCreateWithoutCustomFieldValuesInput = {
    id?: string
    userId: string
    brandId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: SpoolColorStopUncheckedCreateNestedManyWithoutSpoolInput
    usages?: UsageUncheckedCreateNestedManyWithoutSpoolInput
  }

  export type SpoolCreateOrConnectWithoutCustomFieldValuesInput = {
    where: SpoolWhereUniqueInput
    create: XOR<SpoolCreateWithoutCustomFieldValuesInput, SpoolUncheckedCreateWithoutCustomFieldValuesInput>
  }

  export type CustomFieldUpsertWithoutValuesInput = {
    update: XOR<CustomFieldUpdateWithoutValuesInput, CustomFieldUncheckedUpdateWithoutValuesInput>
    create: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
    where?: CustomFieldWhereInput
  }

  export type CustomFieldUpdateToOneWithWhereWithoutValuesInput = {
    where?: CustomFieldWhereInput
    data: XOR<CustomFieldUpdateWithoutValuesInput, CustomFieldUncheckedUpdateWithoutValuesInput>
  }

  export type CustomFieldUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomFieldsNestedInput
  }

  export type CustomFieldUncheckedUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolUpsertWithoutCustomFieldValuesInput = {
    update: XOR<SpoolUpdateWithoutCustomFieldValuesInput, SpoolUncheckedUpdateWithoutCustomFieldValuesInput>
    create: XOR<SpoolCreateWithoutCustomFieldValuesInput, SpoolUncheckedCreateWithoutCustomFieldValuesInput>
    where?: SpoolWhereInput
  }

  export type SpoolUpdateToOneWithWhereWithoutCustomFieldValuesInput = {
    where?: SpoolWhereInput
    data: XOR<SpoolUpdateWithoutCustomFieldValuesInput, SpoolUncheckedUpdateWithoutCustomFieldValuesInput>
  }

  export type SpoolUpdateWithoutCustomFieldValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpoolsNestedInput
    brand?: BrandUpdateOneRequiredWithoutSpoolsNestedInput
    material?: MaterialUpdateOneRequiredWithoutSpoolsNestedInput
    location?: LocationUpdateOneWithoutSpoolsNestedInput
    colors?: SpoolColorStopUpdateManyWithoutSpoolNestedInput
    usages?: UsageUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateWithoutCustomFieldValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput
    usages?: UsageUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateManyUserInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpoolCreateManyUserInput = {
    id?: string
    brandId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomFieldCreateManyUserInput = {
    id?: string
    entity?: string
    key: string
    label: string
    type: string
    required?: boolean
    options?: string | null
    sortOrder?: number
    showInList?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spools?: SpoolUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutSpoolsNestedInput
    material?: MaterialUpdateOneRequiredWithoutSpoolsNestedInput
    location?: LocationUpdateOneWithoutSpoolsNestedInput
    colors?: SpoolColorStopUpdateManyWithoutSpoolNestedInput
    usages?: UsageUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput
    usages?: UsageUncheckedUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: CustomFieldValueUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: CustomFieldValueUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    showInList?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolCreateManyBrandInput = {
    id?: string
    userId: string
    materialId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpoolUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpoolsNestedInput
    material?: MaterialUpdateOneRequiredWithoutSpoolsNestedInput
    location?: LocationUpdateOneWithoutSpoolsNestedInput
    colors?: SpoolColorStopUpdateManyWithoutSpoolNestedInput
    usages?: UsageUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput
    usages?: UsageUncheckedUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolCreateManyMaterialInput = {
    id?: string
    userId: string
    brandId: string
    locationId?: string | null
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpoolUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpoolsNestedInput
    brand?: BrandUpdateOneRequiredWithoutSpoolsNestedInput
    location?: LocationUpdateOneWithoutSpoolsNestedInput
    colors?: SpoolColorStopUpdateManyWithoutSpoolNestedInput
    usages?: UsageUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput
    usages?: UsageUncheckedUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolCreateManyLocationInput = {
    id?: string
    userId: string
    brandId: string
    materialId: string
    colorMode?: string
    colorName?: string | null
    diameterMm?: number
    initialWeightG: number
    remainingWeightG: number
    status?: string
    needsRepurchase?: boolean
    productUrl?: string | null
    purchasedAt?: Date | string | null
    priceCents?: number | null
    notes?: string | null
    lastDriedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpoolUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpoolsNestedInput
    brand?: BrandUpdateOneRequiredWithoutSpoolsNestedInput
    material?: MaterialUpdateOneRequiredWithoutSpoolsNestedInput
    colors?: SpoolColorStopUpdateManyWithoutSpoolNestedInput
    usages?: UsageUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: SpoolColorStopUncheckedUpdateManyWithoutSpoolNestedInput
    usages?: UsageUncheckedUpdateManyWithoutSpoolNestedInput
    customFieldValues?: CustomFieldValueUncheckedUpdateManyWithoutSpoolNestedInput
  }

  export type SpoolUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    colorMode?: StringFieldUpdateOperationsInput | string
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    diameterMm?: FloatFieldUpdateOperationsInput | number
    initialWeightG?: IntFieldUpdateOperationsInput | number
    remainingWeightG?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    needsRepurchase?: BoolFieldUpdateOperationsInput | boolean
    productUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCents?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastDriedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpoolColorStopCreateManySpoolInput = {
    id?: string
    hex: string
    name?: string | null
    position: number
    weight?: number | null
  }

  export type UsageCreateManySpoolInput = {
    id?: string
    gramsUsed: number
    note?: string | null
    usedAt?: Date | string
  }

  export type CustomFieldValueCreateManySpoolInput = {
    id?: string
    fieldId: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
  }

  export type SpoolColorStopUpdateWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    hex?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SpoolColorStopUncheckedUpdateWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    hex?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SpoolColorStopUncheckedUpdateManyWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    hex?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UsageUpdateWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    gramsUsed?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageUncheckedUpdateWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    gramsUsed?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageUncheckedUpdateManyWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    gramsUsed?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldValueUpdateWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    field?: CustomFieldUpdateOneRequiredWithoutValuesNestedInput
  }

  export type CustomFieldValueUncheckedUpdateWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutSpoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomFieldValueCreateManyFieldInput = {
    id?: string
    spoolId: string
    valueText?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    valueDate?: Date | string | null
  }

  export type CustomFieldValueUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spool?: SpoolUpdateOneRequiredWithoutCustomFieldValuesNestedInput
  }

  export type CustomFieldValueUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    spoolId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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