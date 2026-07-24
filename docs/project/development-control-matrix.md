# Development Control Matrix

## Purpose

این سند ماتریس کنترل توسعه پروژه Monji را مشخص می‌کند.

اهداف:

- تعیین مالکیت هر بخش توسعه
- مشخص کردن Branch و Baseline رسمی
- تعیین مسیر Merge
- جلوگیری از تغییرات خارج از فرآیند
- ایجاد دید مدیریتی واحد برای کل پروژه

این سند مرجع هماهنگی بین تیم‌های Frontend و Backend است.

---

# Project Baselines

## Frontend Baseline

```
baseline/frontend-feature-development-ready-2026-07-24
```

وضعیت:

```
READY FOR FEATURE DEVELOPMENT
```

---

## Backend Baseline

```
baseline/backend-feature-development-ready-2026-07-24
```

وضعیت:

```
READY FOR FEATURE DEVELOPMENT
```

---

# Team Ownership Matrix

| Area | Owner | Branch | Baseline | Merge Authority |
|---|---|---|---|---|
| Frontend Architecture | Structure Team | chore/structure-next-phase | baseline/frontend-feature-development-ready-2026-07-24 | Structure Review |
| Modian Frontend | Modian Team | feature/modian-development-phase | baseline/frontend-feature-development-ready-2026-07-24 | Structure Review |
| Landing Frontend | Landing Team | feature/landing-development-phase | baseline/frontend-feature-development-ready-2026-07-24 | Structure Review |
| Backend Development | Backend Controlled Development | development/backend-controlled-phase | baseline/backend-feature-development-ready-2026-07-24 | Backend Review |

---

# Frontend Development Rules

## Ownership

Frontend تغییرات باید توسط تیم مالک همان بخش انجام شود.

---

## Branch Policy

توسعه باید در Branch اختصاصی تیم انجام شود.

Branch مستقیم:

```
main
```

برای توسعه ممنوع است.

---

## Merge Policy

Merge به:

```
main
```

فقط پس از بررسی Structure Team انجام می‌شود.

---

# Backend Development Rules

## Ownership

Backend تحت فرآیند Controlled Development مدیریت می‌شود.

---

## Branch Policy

توسعه Backend در مسیر:

```
development/backend-controlled-phase
```

انجام می‌شود.

---

## Change Approval

تغییرات حساس نیازمند بررسی هستند:

- Database Schema
- Migration
- Authentication
- Authorization
- API Contract
- Business Rules

---

## Merge Policy

Merge Backend به main فقط پس از:

- Review
- Build
- Test Verification
- Documentation Update

انجام می‌شود.

---

# Documentation Policy

هر تغییر مهم باید مستند شود.

شامل:

- معماری
- API
- Database
- Ownership
- Workflow

---

# Development Flow

فرآیند استاندارد:

```
Task Definition
        |
        v
Impact Review
        |
        v
Implementation
        |
        v
Testing
        |
        v
Commit
        |
        v
Review
        |
        v
Merge
```

---

# Final Authority

در صورت اختلاف:

اولویت تصمیم:

1. Architecture Documentation
2. Ownership Rules
3. Responsible Team Review
4. Project Owner Decision

---

# Current Status

```
Frontend:
Feature Development Ready

Backend:
Feature Development Ready
```

---

# Last Update

```
2026-07-24
```