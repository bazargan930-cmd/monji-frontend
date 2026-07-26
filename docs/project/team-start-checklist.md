# Frontend Team Start Checklist

## Purpose

این سند چک‌لیست شروع فعالیت هر تیم توسعه Frontend پروژه Monji است.

هدف:

- شروع هماهنگ تیم‌ها
- استفاده از Baseline رسمی پروژه
- جلوگیری از انحراف معماری
- ایجاد فرآیند یکسان برای توسعه، Commit و گزارش‌دهی

این سند برای تیم‌های زیر استفاده می‌شود:

- Structure Team
- Modian Team
- Landing Team

---

# 1. Required Baseline

تمام تیم‌ها باید توسعه خود را از Baseline رسمی شروع کنند.

## Current Baseline

```
baseline/frontend-multiteam-ready-2026-07-24
```

## Main Commit

```
feee171
```

---

# 2. Required Documents

قبل از شروع توسعه، اعضای تیم باید اسناد زیر را مطالعه کنند:

# Context Package

قبل از شروع Chat یا Task جدید، Context Package پروژه باید بررسی شود.

مسیر:

docs/project/context/

فایل‌ها:

- MONJI-CONTEXT.md

هدف:
شناخت وضعیت کلی پروژه، قوانین اصلی و محدودیت‌های مهم.

- MONJI-TECHNICAL-MAP.md

هدف:
شناخت نقشه فنی سطح بالا و محل قرارگیری Domainها.

- MONJI-CHANGELOG.md

هدف:
شناخت تغییرات مهم اخیر که روی تصمیم‌ها و Context پروژه اثر دارند.


## Architecture

```
docs/architecture/
```

هدف:

- شناخت ساختار پروژه
- رعایت قوانین معماری

---

## Ownership Rules

```
docs/governance/ownership-boundaries.md
```

هدف:

- شناخت محدوده مالکیت تیم‌ها
- جلوگیری از تغییرات خارج از Scope

---

## Team Operation

```
docs/governance/team-operation-guideline.md
```

هدف:

- آشنایی با فرآیند کار تیمی
- قوانین Commit و Merge

---

## Project Status

```
docs/project/team-status.md
```

هدف:

- اطلاع از وضعیت جاری تیم‌ها

---

## Development Roadmap

```
docs/project/development-roadmap.md
```

هدف:

- شناخت ترتیب توسعه
- شناخت Dependencyها

---

# 3. Team Environment Check

قبل از شروع Task:

بررسی شود:

- Branch صحیح فعال است.
- Worktree صحیح استفاده می‌شود.
- Repository clean است.

نمونه:

```bash
git status -sb
```

انتظار:

```
Working tree clean
```

---

# 4. Branch Rules

هر تیم فقط روی Branch اختصاصی خود توسعه می‌دهد.

## Structure Team

```
chore/structure-next-phase
```

## Modian Team

```
feature/modian-development-phase
```

## Landing Team

```
feature/landing-development-phase
```

قانون:

توسعه مستقیم روی main ممنوع است.

---

# 5. Task Start Template

قبل از شروع هر Task مشخص شود:

```
Task:

Goal:

Team:

Branch:

Worktree:

Files Scope:

Dependencies:

Risk:

Expected Result:
```

---

# 6. Development Rules

در زمان توسعه:

- تغییرات کوچک و قابل بررسی ایجاد شود.
- Commitها معنی‌دار باشند.
- فایل‌های خارج از Scope تغییر نکنند.
- Documentation در صورت نیاز بروزرسانی شود.

---

# 7. Commit Policy

تیم‌ها مجاز هستند:

- Commit روی Branch خود
- Push Branch خود

انجام دهند.

اما:

Merge مستقیم به:

```
main
```

ممنوع است.

---

# 8. Task Completion Report

پس از پایان Task گزارش زیر تهیه شود:

```
Task Result:

Changed Files:

Commit:

Build Status:

Tests:

Known Issues:

Next Step:
```

---

# 9. Merge Policy

Merge به main فقط توسط:

```
Structure Team
```

انجام می‌شود.

قبل از Merge:

بررسی شود:

- Architecture Compliance
- Build Status
- Tests
- Documentation Update

---

# 10. Team Specific Responsibilities

## Structure Team

مسئول:

- Architecture
- Documentation
- Governance
- Shared Rules

---

## Modian Team

مسئول:

- Modian Features
- Modian Domain Logic
- Modian Platform Development

---

## Landing Team

مسئول:

- Public Pages
- Landing Experience
- Public Components

---

# 11. Final Authority

در صورت اختلاف:

اولویت تصمیم:

1. Architecture Documentation
2. Ownership Rules
3. Structure Team Review
4. Project Owner Decision

---

# Document Owner

```
Structure Team
```

# Last Update

```
2026-07-24
```