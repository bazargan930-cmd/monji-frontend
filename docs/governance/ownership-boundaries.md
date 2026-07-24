# Frontend Ownership Boundaries

## Purpose

ظ‡ط¯ظپ ط§غŒظ† ط³ظ†ط¯ طھط¹غŒغŒظ† ظ…ط±ط² ظ…ط§ظ„ع©غŒطھ طھغŒظ…â€Œظ‡ط§طŒ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² طھط؛غŒغŒط± ظ‡ظ…ط²ظ…ط§ظ† ط±ظˆغŒ ظپط§غŒظ„â€Œظ‡ط§غŒ ظ…ط´طھط±ع© ظˆ ع©ط§ظ‡ط´ Conflictظ‡ط§غŒ Merge ط§ط³طھ.

ط§غŒظ† ط³ظ†ط¯ ظ…ط±ط¬ط¹ ظ‡ظ…ع©ط§ط±غŒ طھغŒظ…â€Œظ‡ط§غŒ طھظˆط³ط¹ظ‡ Frontend ط§ط³طھ.

---

# Teams

## Structure Team

ظ…ط³ط¦ظˆظ„غŒطھ:

- ظ…ط¹ظ…ط§ط±غŒ Frontend
- ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§غŒ ط³ط§ط®طھط§ط± ظ¾ط±ظˆعکظ‡
- Documentation
- Governance Rules
- Shared Configuration

ظ…ط§ظ„ع©غŒطھ ط§طµظ„غŒ:

- `docs/*`
- `src/app/*` ط¯ط± ط¨ط®ط´â€Œظ‡ط§غŒ ظ…ط¹ظ…ط§ط±غŒ ظˆ Routing ط¹ظ…ظˆظ…غŒ
- `src/components/ui/*`
- ظ‚ظˆط§ظ†غŒظ† Import ظˆ Naming Convention

---

## Modian Team

ظ…ط³ط¦ظˆظ„غŒطھ:

- طھظˆط³ط¹ظ‡ Platform ظ…ظˆط¯غŒط§ظ†
- Featureظ‡ط§غŒ ط§ط®طھطµط§طµغŒ ظ…ظˆط¯غŒط§ظ†
- طµظپط­ط§طھ ظˆ ظ…ظ†ط·ظ‚ Domain ظ…ظˆط¯غŒط§ظ†

ظ…ط§ظ„ع©غŒطھ:

- `src/features/modian/*`
- `src/app/simulators/modian/*`

ظ‚ط§ظ†ظˆظ†:

Routeظ‡ط§ ط¯ط± `src/app` ظ‚ط±ط§ط± ط¯ط§ط±ظ†ط¯طŒ ط§ظ…ط§ Domain Logic ظˆ Componentظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ† ط¨ط§غŒط¯ ط§ط² Feature ظ…ط±ط¨ظˆط·ظ‡ ظ…طµط±ظپ ط´ظˆظ†ط¯.

---

## Landing Team

ظ…ط³ط¦ظˆظ„غŒطھ:

- طµظپط­ط§طھ ط¹ظ…ظˆظ…غŒ ط³ط§غŒطھ
- طھط¬ط±ط¨ظ‡ ع©ط§ط±ط¨ط±غŒ ظ‚ط¨ظ„ ط§ط² ظˆط±ظˆط¯ ط¨ظ‡ Platformظ‡ط§
- Landing Components

ظ…ط§ظ„ع©غŒطھ:

- Landing Pages
- Public Site Components

---

# Shared Domains

## Business Domain

ظ…ط³غŒط±:

```text
src/components/business/*
