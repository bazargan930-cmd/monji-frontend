# Development Kickoff Status

## Purpose

این سند وضعیت رسمی شروع توسعه Featureهای پروژه Monji را ثبت می‌کند.

اهداف:

- ثبت Baselineهای رسمی توسعه
- مشخص کردن وضعیت آمادگی تیم‌ها
- ثبت قوانین توسعه
- ایجاد نقطه مرجع قبل از شروع Feature Development

این سند آخرین Checkpoint مدیریتی قبل از ورود به توسعه Featureها است.

---

# Project Development Status

## Current Phase

```
Feature Development Phase
```

## Status

```
READY
```

---

# Frontend Status

## Baseline

```
baseline/frontend-development-control-ready-2026-07-24
```

## Status

```
READY FOR FEATURE DEVELOPMENT
```

## Active Teams

### Structure Team

Responsibility:

- Frontend Architecture
- Shared Structure
- Governance
- Merge Control

Branch:

```
chore/structure-next-phase
```

---

### Modian Team

Responsibility:

- Modian Frontend Development

Branch:

```
feature/modian-development-phase
```

---

### Landing Team

Responsibility:

- Landing Frontend Development

Branch:

```
feature/landing-development-phase
```

---

# Backend Status

## Baseline

```
baseline/backend-development-control-ready-2026-07-24
```

## Status

```
READY FOR FEATURE DEVELOPMENT
```

## Development Branch

```
development/backend-controlled-phase
```

---

# Development Rules

## Branch Policy

توسعه مستقیم روی:

```
main
```

ممنوع است.

تمام تغییرات باید از مسیر Branch اختصاصی انجام شوند.

---

## Review Policy

هر Task قبل از اجرا باید مشخص کند:

- هدف
- محدوده تغییر
- فایل‌های تحت تأثیر
- Risk
- روش تست

---

## Documentation Policy

هر تغییر مهم باید همراه با Documentation Update باشد.

شامل:

- Architecture
- API
- Database
- Workflow
- Ownership

---

# Merge Policy

Merge به Main فقط پس از:

```
[ ] Review completed
[ ] Build successful
[ ] Tests verified
[ ] Documentation updated
[ ] Risk evaluated
```

انجام می‌شود.

---

# Current Baselines

## Frontend

```
baseline/frontend-development-control-ready-2026-07-24
```

---

## Backend

```
baseline/backend-development-control-ready-2026-07-24
```

---

# Next Phase

پس از این Checkpoint:

```
Feature Task Execution
```

شروع خواهد شد.

هر Feature باید ابتدا به صورت Task رسمی تعریف شود.

---

# Final Authority

در صورت اختلاف:

1. Architecture Documentation
2. Development Control Matrix
3. Responsible Team Review
4. Project Owner Decision

---

# Last Update

```
2026-07-24
```