/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Checkbox from '@radix-ui/react-checkbox'
import { Control, useController } from 'react-hook-form'

export default function CheckboxRandomizer({
  control
}: {
  control: Control<any>
}) {
  const { field } = useController({
    name: 'randomizer',
    control,
    defaultValue: false
  })

  return (
    <div className='flex items-center'>
      <div className='flex items-center gap-2'>
        <Checkbox.Root
          checked={field.value}
          onCheckedChange={checked => field.onChange(checked)}
          className='flex size-6 items-center justify-center rounded-md border border-grey'
          id='randomizer-checkbox'>
          <Checkbox.Indicator>
            <svg className='size-4 fill-black'>
              <use href='/sprite.svg#icon-check' />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className='text-md xl:text-lg'>Піключити режим рандомайзера</p>
      </div>
    </div>
  )
}
