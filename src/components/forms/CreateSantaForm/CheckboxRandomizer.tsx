/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Checkbox from '@radix-ui/react-checkbox'
import { Control, useController } from 'react-hook-form'
import { IoCheckmark } from 'react-icons/io5'

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
            <IoCheckmark />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className='text-lg'>Піключити режим рандомайзера</p>
      </div>
    </div>
  )
}
