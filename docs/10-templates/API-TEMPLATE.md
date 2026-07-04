---
id: TPL-API-001
title: API Specification Template
status: active
owner: skip
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: templates
tags: [template, api, engineering, specification]
dependencies: [DOC-FND-004]
related: [TPL-PRD-001, TPL-DB-001]
---

# API Specification Template

Documents an API surface (service, module, or endpoint group) before it is built. Copy into `docs/03-engineering/`, rename `API-NNN-<slug>.md`, replace all `<placeholders>`. For large APIs, this document is the narrative spec and may link to a machine spec (OpenAPI) kept alongside it.

## Front matter for the new document

```yaml
---
id: API-<NNN>
title: <API name> API
status: draft
owner: <owner>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
version: 0.1.0
domain: engineering
tags: [api]
dependencies: [PRD-<NNN>]
related: [DB-<NNN>]
---
```

---

# API: <Name>

## Purpose

What this API does and which PRD(s) it serves.

## Consumers

| Consumer | Usage |
|----------|-------|
| <client/service> | <what it calls and why> |

## Conventions

- **Base URL:** `<https://api.example.com/v1>`
- **Auth:** <scheme — e.g. bearer token, API key header>
- **Content type:** `application/json`
- **Versioning:** <URL / header strategy>
- **Idempotency:** <which operations accept idempotency keys and how>
- **Pagination:** <cursor/offset scheme>

## Endpoints

Repeat this block per endpoint:

### `<METHOD> /<path>`

<One-line description.>

**Request**

| Part | Field | Type | Required | Notes |
|------|-------|------|----------|-------|
| path | `<param>` | string | yes | <notes> |
| body | `<field>` | string | yes | <validation rules> |

```json
{
  "<field>": "<example-value>"
}
```

**Responses**

| Status | Meaning | Body |
|--------|---------|------|
| 200 | <success case> | <schema/example below> |
| 400 | <validation failure> | Standard error object |
| 404 | <not found case> | Standard error object |

```json
{
  "id": "<example-id>",
  "<field>": "<example-value>"
}
```

**Errors & retries:** <retry-safety, idempotency behavior for this endpoint>

## Error Object

```json
{
  "error": {
    "code": "<machine_code>",
    "message": "<human message>",
    "details": []
  }
}
```

## Non-Functional Requirements

- **Rate limits:** <policy>
- **Latency target:** <p95/p99>
- **Availability:** <target>

## Security Considerations

- Authn/authz model per endpoint.
- Sensitive fields and how they are protected (never log <list>).

## Open Questions

- [ ] <question — owner>
