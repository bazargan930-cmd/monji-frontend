//src/components/modian/index.ts

// Module-level barrel for Modian components
// زیر-برِل‌ها
export * from "./portal";
export * from "./layout";
export * from "./auth";
export * from "./ui";
export * from "./common";
export * from "./taxfile";
export * from "./home";
export * from "./admin";

// سازگاری با ایمپورت‌های قدیمی اما با مسیر مجاز یک‌سطحی:
export { default as ModianSidebar } from "./ModianSidebar";
export { default as ModianPortal } from "./ModianPortal";
export { default as ModianWorkspace } from "./ModianWorkspace";
export { default as ModianQuickAccess } from "./ModianQuickAccess";
export { default as ModianNoticesTabs } from "./ModianNoticesTabs";
export { default as ModianFaqTab } from "./ModianFaqTab";
export { default as ModianHome } from "./ModianHome";
