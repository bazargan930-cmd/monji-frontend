// src/constants/modianRoutes.ts

interface ModianRoute {
  path: string
  label: string
  parent?: string
}

export const modianRoutes: ModianRoute[] = [
  {
    path: '/simulators/modian/home',
    label: 'پیشخوان',
  },
  {
    path: '/simulators/modian/admin/dashboard',
    label: 'داشبورد مدیریتی',
    parent: '/simulators/modian/home',
  },
  // صفحات بعدی را نیز به همین شکل اضافه کنید
]
