---
name: TypeScript
slug: typescript
tags: [tech]
growth: evergreen
---

# TypeScript

My default since 2018. Once you've caught a bug at compile time that would've
been a 3 AM production incident, there's no going back.

## The Philosophy

I'm `any`-allergic. If I wrote the code, it gets typed properly. No shortcuts,
no "I'll fix it later" comments. Types are documentation that the compiler
enforces. Why would I give that up?

That said, I'm not religious about it. At [[Enterprise E-Commerce Platform]], there are microservice
payloads that pass through our frontend from god-knows-where in their
architecture. Spending a week typing some legacy mystery object that we
just forward along? That's not engineering, that's busywork. `unknown` with
runtime validation at the boundaries, move on.

## Dealing With `any` Codebases

Going on a crusade to fix all `any` at once is almost never the right answer.
The smarter strategy: improve everything you touch. Working on a bug fix?
Add types to things you find along the way. Adding a feature? Write it in
proper TypeScript from the start and clean up the surrounding code that
touches it.

Two tools that stop the bleeding immediately without a big rewrite:

- `noImplicitAny` in tsconfig: new code can't introduce accidental `any`
- `@typescript-eslint/no-explicit-any` ESLint rule: flags intentional `any` too

Existing `any`s stay but don't multiply. The codebase improves incrementally.

## `unknown` vs `any`

`any` is a full opt-out. TypeScript stops checking entirely, you can call
`.anything()` on it with no errors.

`unknown` means "I don't know the type yet, but I have to figure it out
before I can use it." TypeScript forces you to narrow it first:

```typescript
let a: any = "hello"
a.nonsense()  // fine, no error. dangerous.

let u: unknown = "hello"
u.toUpperCase()  // ERROR - must narrow first
if (typeof u === "string") {
    u.toUpperCase()  // fine now
}
```

The practical use: API responses. `JSON.parse()` returns `any`, but typing
it as `unknown` forces you to validate before using. Pairs perfectly with
[[Zod]] - parse the unknown, get a typed result.

Without Zod, use a **type guard** with a type predicate:

```typescript
function isUser(data: unknown): data is User {
    return (
        typeof data === "object" &&
        data !== null &&
        "id" in data &&
        "name" in data
    )
}

if (isUser(data)) {
    // TypeScript knows it's User here
    console.log(data.name)
}
```

The `data is User` return type is the key. Without it, TypeScript won't
carry the narrowing into the calling scope even if the function returns true.
You're making a promise to the compiler: "if this returns true, trust the type."

## `type` vs `interface`

I don't have a strong preference. Consistency within a codebase matters more
than the choice itself. That said, there are real technical differences:

- **Interfaces** support declaration merging. Declare the same interface twice
  and TypeScript merges them. Useful for extending third-party types.
- **Types** can express unions with `|`. Interfaces can't. `type Status = 'active' | 'inactive'` is always a type.
- Both support intersections: `type Combined = A & B` and `interface Combined extends A, B` are roughly equivalent.

In practice: unions are always `type`, complex extending hierarchies lean
toward `interface`, everything else is whatever the codebase already uses.

## Structural Typing

TypeScript uses structural typing, also called duck typing. It doesn't care
what a type is called, only what shape it has. If it has the right fields,
it's compatible:

```typescript
interface User { id: number; name: string }
interface Admin { id: number; name: string; role: string }

function greet(user: User) { console.log(user.name) }

const admin: Admin = { id: 1, name: "Lipe", role: "superadmin" }
greet(admin)  // works - Admin has everything User needs
```

**Where it surprises people:** object literals get stricter excess property checking:

```typescript
greet({ id: 1, name: "Lipe", role: "superadmin" })  // ERROR
// object literal has 'role' which doesn't exist on User
```

Same data, different behavior depending on how you pass it. Comes up most
often with React component props, passing an object variable works but
an inline object with extra props errors.

## `as const`

Freezes a value and makes TypeScript infer the narrowest possible type:

```typescript
const variants = ['primary', 'secondary', 'ghost'] as const
// inferred as: readonly ['primary', 'secondary', 'ghost']
// without as const: string[]
```

The main use case is deriving a union type from an array so they stay in sync:

```typescript
const VARIANTS = ['primary', 'secondary', 'ghost'] as const
type Variant = typeof VARIANTS[number]  // 'primary' | 'secondary' | 'ghost'
```

Add a value to the array, the type updates automatically. No maintaining
both separately. Most useful in design systems and component libraries where
the same list drives TypeScript types, Storybook controls, and UI dropdowns
from one source.

## Where I'm Strict

API contracts. Always. The boundary between frontend and backend is where
bugs love to hide. If your API types don't match reality, you're just
decorating your code with lies.

I'll generate types from [[OpenAPI]] specs, use [[Zod]] for runtime validation,
whatever it takes. The API layer is not where you cut corners.

## The Fun Part

I genuinely enjoy TypeScript's type system. Generic constraints, conditional
types, mapped types, `infer` keywords. The whole bag of tricks. There's
something satisfying about crafting a type that catches bugs at compile time
that no amount of runtime validation would find.

When someone asks "can TypeScript even do that?" the answer is usually yes,
and figuring out how is half the fun.

### Generics Are My Favorite

Using `<T>` for reusable structures. API calls especially benefit:

- **Paginated responses** - `PaginatedResponse<T>` with `data: T[]`, page
  info, navigation flags. Write once, use for every list endpoint.
- **Result wrappers** - `ApiResult<T>` that's success with data or failure
  with error. Discriminated unions make handling clean.
- **Table components** - Generic row type so columns know the data shape
- **Form components** - `<T extends FieldValues>` for typed form handlers
- **Select/autocomplete** - Generic option type, typed render functions

Build the structure once, plug in the specific type. The compiler ensures
everything lines up.

### Branded Types? Meh.

The pattern where you make `UserId` and `OrderId` incompatible even though
both are strings at runtime. It prevents accidentally passing the wrong ID.

I don't use it. If I'm getting `user.id` from the user object, I'm not going
to accidentally pass an order ID. Good naming and structure already prevent
the bugs branded types are meant to catch. The ceremony isn't worth it.

## Utility Types I Actually Use

**`Partial<T>`** - makes all fields optional. Useful for API payloads where
some fields are technically required in the domain but optional in a given
context, or for objects from backends that can come partially null from
the database. Using `Partial` as a defensive signal to future developers:
"null-check everything here, we've been burned before."

**`Pick<T, K>`** - creates a type with only the selected fields. Good for
defining what a specific user role can see from a larger object.

**`Omit<T, K>`** - opposite of Pick. Remove specific fields from a type.

**`Required<T>`** - opposite of Partial. Forces everything to be non-optional.

**`NonNullable<T>`** - strips `null` and `undefined`. Useful after validating
a Python backend payload where `None` can become `null`, `undefined`, or a
missing key depending on the serializer.

**`ReturnType<T>`** - extracts what a function returns. Useful for typing
things that consume a function's output without manually tracking the type.

**`Awaited<T>`** - unwraps a Promise. `Awaited<Promise<User>>` gives `User`.
Pairs well with ReturnType on async functions:

```typescript
async function fetchUser(): Promise<User> { ... }
type UserResult = Awaited<ReturnType<typeof fetchUser>>  // User
```

**`Parameters<T>`** - extracts a function's argument types as a tuple.
Niche, but useful when wrapping a function and wanting to guarantee the
wrapper accepts the same arguments:

```typescript
function wrapper(...args: Parameters<typeof original>) {
    return original(...args)
}
```

**`React.ComponentProps<T>`** - not in the standard lib but worth mentioning.
Extracts the prop types of any component without needing to export and import
them explicitly.

## The Payoff

Refactoring without fear. When I rename a field or change a function
signature, the compiler shows me everywhere that breaks. That confidence
compounds over time. You move faster because you trust the codebase.

At [[LogRock]], I built a pre-start script that hit our APIs, fetched all
enums and object shapes, and generated TypeScript files from them. The local
dev server would fail immediately if anything in the API contract changed.
Deployments were set to hard-fail if the API was unreachable, so stale types
could never reach production.

At my current gig, many internal API endpoints aren't versioned since they're
only consumed by our own app. TypeScript is the contract enforcement layer.
When a backend developer changes a field, as soon as I update the type the
compiler shows every place in the frontend that needs updating. Price fields
changing from numbers to strings, dates switching from timestamps to ISO
strings: all caught at compile time instead of in production.

## Related

- [[React]] - Where most of my TypeScript lives
- [[Zod]] - Runtime validation that pairs with unknown typing
- [[OpenAPI]] - Source of truth for generating API types
- [[Four API Files Pattern]] - Where TypeScript types are organized
