---
name: Zod
slug: zod
tags: [tech, typescript, validation]
growth: budding
description: TypeScript-first schema validation
---

# Zod

Schema validation that actually understands [[TypeScript]]. My go-to for form
validation and runtime type checking.

## Why Zod Over Alternatives

I've used yup and other validation libraries. Zod's TypeScript integration is
a tier above. The inference works properly, the error messages make sense, and
the API feels like it was designed by someone who actually writes TypeScript.

## How I Use It

Primarily for form schemas with [[React]] Hook Form. My evolution:
Formik → Yup → React Hook Form → Zod. Each step was an improvement in DX
and type safety.

## The Gotchas

**Schema splitting doesn't scale.** At [[LogRock]], I tried splitting a large
form schema into parts and merging them. Sounds clean in theory. In practice,
conditional validations across merged schemas turned into hack city. The code
is in the Sapphire project if you want to see the scars.

**Large forms need discipline.** At [[Enterprise E-Commerce Platform]], we have massive forms where you
have to be careful not to mess with form state too much. It gets tricky when
fields trigger async calls that require refetching and reinitializing the
form. The validation stays solid, but the state management around it demands
attention.

## Type Direction Matters

Two patterns depending on context:

**Schema-first (use `z.infer`):**
When the form defines the data shape. Let Zod be the source of truth, infer
the TypeScript type from the schema.

**Type-first (schema conforms to type):**
When you already have solid type definitions, like API response types. Make
the Zod schema validate against the existing type rather than the other way
around. Keeps the API contract as the source of truth.

The right choice depends on where the data originates. Forms own their shape.
APIs own theirs.

## Related

- [[TypeScript]] - The whole point
- [[React]] - Form libraries integrate well

