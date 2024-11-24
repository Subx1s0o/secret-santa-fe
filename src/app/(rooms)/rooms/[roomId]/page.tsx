export default function Room({ params }: { params: { roomId: string } }) {
  return <div>{params.roomId}</div>
}
