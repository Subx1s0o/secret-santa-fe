/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react'
import { Control, useController } from 'react-hook-form'

type InputProps = ComponentProps<'input'> & {
  control: Control<any>
  name: string
  label?: string
}

export default function Input({
  name,
  control,
  label,
  ...inputProps
}: InputProps) {
  const {
    formState: { errors }
  } = useController({ control, name })

  return (
    <div className='flex flex-col gap-1'>
      {label && <label>{label}</label>}
      <div className='relative'>
        <input
          {...control.register(name)}
          {...inputProps}
          className='w-full rounded-[20px] border border-grey p-[14px] text-lg outline-none
            transition-colors placeholder:text-grey focus-visible:border-blue'
        />
      </div>
      {errors[name] && (
        <div className='ml-[14px] mt-1'>
          <p className='text-md text-red'>{errors[name].message?.toString()}</p>
        </div>
      )}
    </div>
  )
}
