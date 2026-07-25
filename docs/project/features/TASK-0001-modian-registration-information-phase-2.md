# Change Documentation Prompt

## Purpose

این Prompt برای استانداردسازی فرآیند ثبت تغییرات پروژه Monji استفاده می‌شود.

---

## Prompt

من یک تغییر جدید در پروژه Monji انجام داده‌ام.

لطفاً براساس Change Record Template:

1. نوع تغییر را مشخص کن:

- Feature
- Architecture
- Governance
- Bug Fix
- Documentation

2. Impact Analysis ارائه بده:

Frontend:
Backend:
Database:
API:
Security:

3. فایل‌های مستنداتی تحت تأثیر را مشخص کن.

4. اگر نیاز به بروزرسانی Documentation وجود دارد:

Patch/Diff ارائه بده.

فرمت:

File:

Before:

After:

Reason:

5. مشخص کن:

- Branch تحت تأثیر
- Team مسئول
- Risk Level

6. بدون درخواست صریح:

- Patch کد ارائه نکن.
- Architecture را تغییر نده.
- Migration پیشنهاد نکن.
B-3) تعریف رسمی TASK-0001
مسیر:
docs/project/features/TASK-0001-modian-registration-information-phase-2.md

این فایل مهم‌ترین فایل مرحله فعلی است.

محتوای پیشنهادی:
# TASK-0001

## Modian Registration Information Phase 2 Integration

# Task Information

## Task ID


TASK-0001

---

## Owner Team

Modian Team

---

## Supporting Teams

Backend Controlled Development

Structure Team

---

## Branch

feature/modian-development-phase

---

# Objective

## Goal

اتصال بخش دوم صفحه اطلاعات ثبت نامی مودیان به Backend و Database.

هدف:

- حذف وابستگی به داده‌های Mock
- دریافت اطلاعات واقعی از Backend
- حفظ Business Ownership Rules
- ایجاد مسیر استاندارد توسعه صفحات بعدی Modian

---

# Scope

## Included

- بررسی نیازهای Data بخش دوم اطلاعات ثبت نامی
- تعریف API مورد نیاز
- اتصال Frontend به Backend
- Validation دسترسی User/Business
- تست Integration

---

## Out of Scope

- تغییر معماری کلی پروژه
- تغییر ساختار Authentication
- حذف مسیرهای Legacy
- تغییرات خارج از Modian Portal

---

# Technical Impact

## Frontend Impact

Modian Portal Pages
Components
API Integration Layer

---

## Backend Impact

Controllers
Services
Business Context
Authorization Validation

---

## Database Impact

To be determined after Data Mapping

---

## API Impact

New or updated endpoints may be required

---

## Security Impact

High Attention

Requirements:

- User isolation
- Business ownership validation
- No cross-business access

---

# Implementation Plan

1. بررسی Data Mapping صفحه
2. بررسی مدل‌های موجود Database
3. طراحی API Contract
4. Backend Implementation
5. Frontend Integration
6. Build
7. Tests
8. Review

---

# Validation Plan

## Build

[ ] Passed

## Tests

[ ] Passed

## Manual Verification

[ ] Completed

---

# Risk Assessment

## Risk Level

Medium

## Risks

- اشتباه در Mapping داده
- نقض Ownership Rules
- تغییر ناخواسته API Contract

---

# Rollback Plan

Revert Feature Branch Changes

---

# Documentation Update

Required:

Yes

Paths:

docs/project/
docs/api/
docs/database/

---

# Review Checklist

[ ] Scope Verified
[ ] Security Reviewed
[ ] Build Successful
[ ] Tests Verified
[ ] Documentation Updated
