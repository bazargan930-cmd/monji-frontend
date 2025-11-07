// src/components/modian/common/search/InvoicesSearchHeader.tsx
'use client';
import * as React from 'react';
import { Tabs } from '@/components/modian/ui';
import { SearchByFilters, SearchByTaxId } from './index';
import type { FilterField } from './SearchByFilters';
 

type Props = {
  filtersConfig: FilterField[];
  onSubmitFilters: (values: Record<string, string>) => void;
  onSubmitTaxId: (taxId: string) => void;
  defaultTab?: 'filter' | 'taxid';
};

export default function InvoicesSearchHeader({
  filtersConfig,
  onSubmitFilters,
  onSubmitTaxId,
  defaultTab = 'filter',
}: Props) {
  return (
    <Tabs
      aria-label="انواع جستجو"
      defaultValue={defaultTab}
      className="bg-transparent"
      items={[
        {
          id: 'filter',
          title: 'جستجو با فیلتر',
          content: <SearchByFilters fields={filtersConfig} onSubmit={onSubmitFilters} />,
        },
        {
          id: 'taxid',
          title: 'جستجو با شماره مالیاتی',
          content: (
            <SearchByTaxId
              onSubmit={onSubmitTaxId}
            />
          ),
        },
      ]}
    />
  );
}
