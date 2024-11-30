/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import cn from '@/lib/cn'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Control, useController } from 'react-hook-form'
import { IoCheckmark } from 'react-icons/io5'
import { MdOutlineAttachMoney } from 'react-icons/md'

export default function CheckboxLimit({ control }: { control: Control<any> }) {
  const [checked, setChecked] = useState<boolean>(true)

  const {
    field: { value, onChange, ref }
  } = useController({
    name: 'limit',
    control,
    defaultValue: '0'
  })

  useEffect(() => {
    if (!checked) {
      onChange('0')
    }
  }, [checked, onChange])

  return (
    <div className='flex items-center gap-[36px]'>
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
        <input
          disabled={!checked}
          ref={ref}
          value={checked ? value : ''}
          onChange={e => onChange(e.target.value)}
          onBlur={e => {
            const val = e.target.value
            if (val === '' || +val < 1) {
              onChange('0')
            }
          }}
          name='limit'
          min={0}
          className={cn(
            `w-[180px] rounded-[20px] border border-grey p-[14px] text-lg outline-none
            transition-colors placeholder:text-grey focus-visible:border-blue`,
            {
              'cursor-not-allowed bg-slate-200': !checked
            }
          )}
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
