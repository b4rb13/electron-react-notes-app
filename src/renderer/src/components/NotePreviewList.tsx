import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks'
import { isEmpty } from 'lodash'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}
export const NotePreviewList = ({ className, onSelect, ...props }: NotePreviewListProps) => {
  const { notes, handleNoteSelected, selectedNoteIndex } = useNotesList({ onSelect })
  if (!notes) return null
  if (isEmpty(notes)) {
    return (
      <div className={twMerge('text-center pt-4', className)}>
        <span>Create Your firs note!</span>
      </div>
    )
  }
  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          isActive={selectedNoteIndex === index}
          key={note.title + note.lastEditTime}
          onClick={handleNoteSelected(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
