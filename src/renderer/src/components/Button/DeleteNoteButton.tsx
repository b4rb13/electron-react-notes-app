import { ActionButton } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { ComponentProps } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ComponentProps<'button'>) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleDelete = async () => {
    await deleteNote()
  }
  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
