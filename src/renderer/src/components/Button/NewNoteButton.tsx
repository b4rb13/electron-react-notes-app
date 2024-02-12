import { ActionButton } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { ComponentProps } from 'react'
import { LuFileSignature } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ComponentProps<'button'>) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const handleCreate = async () => {
    await createEmptyNote()
  }
  return (
    <ActionButton onClick={handleCreate} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
