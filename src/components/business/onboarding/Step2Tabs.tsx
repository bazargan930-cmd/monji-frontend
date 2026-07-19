// src/components/business/onboarding/Step2Tabs.tsx

"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Plus, Pencil, Trash2 } from "lucide-react"

// ---- Types (temporary until backend is connected) ----
interface Branch {
  branchName: string
  branchCode: string
  province: string
  city: string
  county: string
  postalCode: string
  branchAddress: string
}

interface Member {
  fullNameOrCompany: string
  idCode: string
  nationality: string
  role: string
  personType: string
  sharePercent: string
}

interface Activity {
  activityPercent: string
  isicCode: string
  isicTitle: string
  activityType: string
  activityTitle: string
}

interface TaxOffice {
  officeId: string
  officeName: string
  unitCode: string
  taxType: string
}


export default function Step2Tabs() {
  // Later these will be loaded from backend:
  const [branches, setBranches] = useState<Branch[]>([])
  const [members, setMembers] = useState<Member[]>([])
  const [activities, setActivities] = useState<Activity[]>([])
  const [taxOffices, setTaxOffices] = useState<TaxOffice[]>([])

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">مرحله ۲ — اطلاعات تکمیلی</h2>

      <Tabs defaultValue="branches" className="w-full">

        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="branches">شعبه‌ها</TabsTrigger>
          <TabsTrigger value="members">اعضا</TabsTrigger>
          <TabsTrigger value="activities">فعالیت‌ها</TabsTrigger>
          <TabsTrigger value="taxoffices">ادارات مالیاتی</TabsTrigger>
        </TabsList>

        {/* ----------------- BRANCHES ----------------- */}
        <TabsContent value="branches">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>شعبه‌ها</CardTitle>
                <Button>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن شعبه
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {branches.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  هنوز هیچ شعبه‌ای ثبت نشده است.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>کد شعبه</TableHead>
                      <TableHead>نام شعبه</TableHead>
                      <TableHead>استان</TableHead>
                      <TableHead>شهر</TableHead>
                      <TableHead>شهرستان</TableHead>
                      <TableHead>کد پستی</TableHead>
                      <TableHead>آدرس شعبه</TableHead>
                      <TableHead className="text-left">عملیات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {branches.map((b, i) => (
                      <TableRow key={i}>
                        <TableCell>{b.branchCode}</TableCell>
                        <TableCell>{b.branchName}</TableCell>                        
                        <TableCell>{b.province}</TableCell>
                        <TableCell>{b.city}</TableCell>
                        <TableCell>{b.county}</TableCell>
                        <TableCell>{b.postalCode}</TableCell>
                        <TableCell>{b.branchAddress}</TableCell>
                        <TableCell className="flex gap-3">
                          <Button variant="ghost" size="icon">
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ----------------- MEMBERS ----------------- */}
        <TabsContent value="members">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>اعضا</CardTitle>
                <Button>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن عضو
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {members.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  هنوز هیچ عضوی ثبت نشده است.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>نام و نام خانوادگی/نام شرکت</TableHead>
                      <TableHead>کد ملی/شناسه ملی/کدفراگیر اتباع خارجی</TableHead>
                      <TableHead>ملیت</TableHead>
                      <TableHead>سمت</TableHead>
                      <TableHead>نوع شخص</TableHead>
                      <TableHead>درصد سهم</TableHead>
                      <TableHead className="text-left">عملیات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((m, i) => (
                      <TableRow key={i}>
                        <TableCell>{m.fullNameOrCompany}</TableCell>
                        <TableCell>{m.idCode}</TableCell>
                        <TableCell>{m.nationality}</TableCell>
                        <TableCell>{m.role}</TableCell>
                        <TableCell>{m.personType}</TableCell>
                        <TableCell>{m.sharePercent}</TableCell>
                        <TableCell className="flex gap-3">
                          <Button variant="ghost" size="icon">
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ----------------- ACTIVITIES ----------------- */}
        <TabsContent value="activities">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>فعالیت‌ها</CardTitle>
                <Button>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن فعالیت
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {activities.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  هنوز هیچ فعالیتی ثبت نشده است.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>درصد فعالیت</TableHead>
                      <TableHead>کد آیسیک</TableHead>
                      <TableHead>عنوان آیسیک</TableHead>
                      <TableHead>نوع فعالیت</TableHead>
                      <TableHead>عنوان فعالیت</TableHead>
                      <TableHead className="text-left">عملیات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activities.map((a, i) => (
                      <TableRow key={i}>
                        <TableCell>{a.activityPercent}</TableCell>
                        <TableCell>{a.isicCode}</TableCell>
                        <TableCell>{a.isicTitle}</TableCell>
                        <TableCell>{a.activityType}</TableCell>
                        <TableCell>{a.activityTitle}</TableCell>
                        <TableCell className="flex gap-3">
                          <Button variant="ghost" size="icon">
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ----------------- TAX OFFICES ----------------- */}
        <TabsContent value="taxoffices">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>ادارات مالیاتی</CardTitle>
                <Button>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن اداره مالیاتی
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {taxOffices.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  هنوز هیچ اداره مالیاتی ثبت نشده است.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>شناسه اداره</TableHead>
                      <TableHead>نام اداره</TableHead>
                      <TableHead>کد واحد</TableHead>
                      <TableHead>نوع مالیات</TableHead>
                      <TableHead className="text-left">عملیات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {taxOffices.map((t, i) => (
                      <TableRow key={i}>
                        <TableCell>{t.officeId}</TableCell>
                        <TableCell>{t.officeName}</TableCell>
                        <TableCell>{t.unitCode}</TableCell>
                        <TableCell>{t.taxType}</TableCell>
                        <TableCell className="flex gap-3">
                          <Button variant="ghost" size="icon">
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}
