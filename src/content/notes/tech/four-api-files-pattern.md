---
name: Four API Files Pattern
slug: four-api-files-pattern
tags: [tech, react, typescript, patterns]
growth: budding
description: A clean structure for organizing API layers
---

# Four API Files Pattern

My pattern for organizing API integrations in [[React]] + [[TypeScript]]
projects. Keeps things decoupled, predictable, and easy to navigate.

## The Structure

Under `/api`, create subdirectories for each backend you consume:

```
/api
  /supabase
  /backend
  /external-service
```

Each directory contains four files:

### client.ts

Client-side function that calls your API endpoint. Uses fetch, axios, or
whatever HTTP client you prefer.

```typescript
export async function getUser(id: string): Promise<User> {
  const response = await fetch(`/api/backend/users/${id}`);
  return response.json();
}
```

### server.ts

Server handler that receives the client request. Handles auth, validation,
transforms data, then forwards to the actual backend.

```typescript
export async function GET(request: Request) {
  const user = await validateSession(request);
  const data = await backendClient.getUser(user.id);
  return Response.json(data);
}
```

### types.ts

Request and response type definitions. Shared between client and server.

```typescript
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface GetUserRequest {
  id: string;
}
```

### hooks.ts

[[React]] Query or [[SWR]] wrappers when you need caching, refetching, or
other data-fetching features.

```typescript
export function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  });
}
```

## Testing

Four main files, excluding tests. But the isolation makes each layer trivially
testable:

- **client.ts** - Mock axios/fetch calls
- **server.ts** - Mock the actual backend responses
- **hooks.ts** - Mock the client functions

You can also write integration tests at different levels. Mock just the HTTP
layer and test client + hooks together. Or mock the backend and test the full
server → client → hooks flow.

The boundaries are clean, so you pick your test granularity.

## Why This Works

**Predictable location.** Need to know how we call the backend's user
endpoint? Check `/api/backend/users/`. Always the same structure.

**Clear boundaries.** The server file handles auth and backend communication.
The client file is just a typed function call. No mixing concerns.

**Easy to trace.** When something breaks, you know exactly which file to
check. Types wrong? `types.ts`. Auth issue? `server.ts`. Caching bug?
`hooks.ts`.

**Scales cleanly.** Add a new endpoint? Create the four files. Add a new
backend? Create a new directory. The pattern stays consistent.

## Related

- [[React]] - Where this pattern lives
- [[TypeScript]] - Types are central to making this work
- [[OpenAPI]] - Could generate the types file from specs

