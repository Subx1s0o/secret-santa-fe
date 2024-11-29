import CreateSantaSection from '@/components/sections/CreateSantaSection/CreateSantaSection'

export default function CreateRoom() {
  return (
    <section className='relative'>
      <div
        className='absolute right-[16.5%] top-[200px] flex w-[720px] flex-col gap-[36px]
          rounded-[20px] bg-white p-7 shadow-super shadow-pink'>
        <CreateSantaSection />
      </div>
    </section>
  )
}
