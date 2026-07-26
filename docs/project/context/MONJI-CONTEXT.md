# Monji Project Context

## Purpose

این فایل Context اصلی شروع Chatهای توسعه پروژه Monji است.

هدف: - انتقال سریع وضعیت پروژه - جلوگیری از تصمیم‌گیری بر اساس فرضیات -
کاهش نیاز به بارگذاری تمام مستندات در هر Chat جدید

Source Documents همچنان مرجع اصلی پروژه هستند. این فایل جایگزین آنها
نیست.

------------------------------------------------------------------------

# Project Identity

Project: Monji

Architecture:

Frontend: Next.js

Backend: NestJS

Database: Prisma

Current Phase:

Feature Development

------------------------------------------------------------------------

# Current Development Model

Rules:

-   Security First
-   No direct development on main
-   No architecture change without Impact Analysis
-   No patch execution without approval
-   Documentation follows important changes

------------------------------------------------------------------------

# Team Structure

## Structure Team

Responsibilities: - Architecture consistency - Shared structure -
Documentation governance

## Modian Team

Responsibilities: - Modian Portal - Modian Features - Modian Integration

## Landing Team

Responsibilities: - Landing UI/UX - Public pages

------------------------------------------------------------------------

# Current Priority

TASK-0001

Title:

Modian Portal Database Integration

Objective:

اتصال صفحات آماده مودیان به Backend و Database.

Status:

Ready To Start

------------------------------------------------------------------------

# Important Constraints

-   Security has priority over speed.
-   Ownership rules must be preserved.
-   Database changes require review.
-   API changes require contract review.
-   Existing Legacy paths must not be removed without approval.

------------------------------------------------------------------------

# Documentation Usage Policy

برای شروع Chat جدید:

1.  MONJI-CONTEXT.md
2.  MONJI-TECHNICAL-MAP.md
3.  Latest MONJI-CHANGELOG.md

Detailed Source Documents فقط در موارد زیر اضافه می‌شوند:

-   Database Change
-   API Change
-   Architecture Change
-   Security Sensitive Change
-   Migration
