'use client'

import { useState } from 'react'
import cn from '@/lib/cn'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Control } from 'react-hook-form'
import { IoCheckmark } from 'react-icons/io5'
import { MdOutlineAttachMoney } from 'react-icons/md'

import Input from '../Input'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CheckboxLimit({ control }: { control: Control<any> }) {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div className='flex items-center justify-center gap-[36px]'>
      <div className='flex items-center gap-2'>
        <Checkbox.Root
          checked={checked}
          onCheckedChange={e => setChecked(e.valueOf() as boolean)}
          className='flex size-6 items-center justify-center rounded-md border border-grey'
          id='c1'>
          <Checkbox.Indicator>
            <IoCheckmark />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className='text-lg'>встановити ліміт</p>
      </div>
      <div className='relative'>
        <Input
          disabled={!checked}
          control={control}
          name='limit'
          className={cn('max-w-[180px] pr-[50px]', {
            'cursor-not-allowed bg-slate-200': !checked
          })}
          type='number'
        />
        <MdOutlineAttachMoney
          size={28}
          className='absolute right-[17px] top-[17px]'
        />
      </div>
    </div>
  )
}
