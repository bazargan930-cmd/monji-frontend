# Frontend Team Operation Guideline

## Purpose

هدف این سند تعریف فرآیند همکاری تیم‌های توسعه Frontend پروژه Monji،
جلوگیری از انحراف معماری، کاهش Conflictهای Merge و ایجاد هماهنگی بین
تیم‌های مستقل توسعه است.

این سند مرجع عملیاتی تیم‌های: - Structure - Modian - Landing

است.

------------------------------------------------------------------------

# Development Model

Frontend پروژه به صورت چند تیمی توسعه داده می‌شود.

هر تیم دارای: - Worktree مستقل - Branch اختصاصی - Ownership مشخص -
فرآیند گزارش‌دهی مشخص

است.

تمام تیم‌ها باید توسعه خود را از Baseline رسمی پروژه شروع کنند.

## Current Baseline

baseline/platform-teams-activation-2026-07-24

Commit: 6fc6f25

------------------------------------------------------------------------

# Merge Policy

Merge به main فقط توسط Structure Team انجام می‌شود.

تیم‌ها مجاز به Commit و Push Branch خود هستند، اما Merge مستقیم به main
ممنوع است.

------------------------------------------------------------------------

# Task Workflow

قبل از شروع هر Task:

Task: هدف: Branch: Worktree: Files: Risk: Expected Result:

پس از پایان Task:

Task Result: Changed Files: Commit: Build: Tests: Known Issues: Next
Step:

------------------------------------------------------------------------

# Documentation Rule

Documentation بخشی از توسعه است.

هر تغییر مهم معماری باید: 1. بررسی شود. 2. در Documentation ثبت شود. 3.
سپس در Code اعمال شود.

------------------------------------------------------------------------

# Chat Collaboration Model

هر تیم دارای Chat مستقل است: - Structure Chat - Modian Chat - Landing
Chat

هر Chat مطابق این دستورالعمل کار می‌کند و گزارش‌های استاندارد تولید می‌کند.

------------------------------------------------------------------------

# Final Authority

در موارد اختلاف: 1. Architecture Documentation 2. Ownership Rules 3.
Structure Team Review 4. Project Owner Decision
