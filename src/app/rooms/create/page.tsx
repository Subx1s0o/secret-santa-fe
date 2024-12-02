import CreateSantaSection from '@/components/sections/CreateSantaSection/CreateSantaSection'

export default function CreateRoom() {
  return (
    <section className='relative'>
      <div
        className='absolute right-[9%] top-[100px] flex w-[600px] flex-col gap-6 rounded-[20px]
          bg-white p-7 shadow-super shadow-pink xl:right-[10.5%] xl:top-[150px]
          xl:w-[720px] xl:gap-[36px]'>
        <CreateSantaSection />
      </div>
    </section>
  )
}
