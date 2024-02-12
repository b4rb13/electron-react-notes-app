import { saveNoteAtom, selectedNoteAtom } from '@/store'
import { MDXEditorMethods } from '@mdxeditor/editor'
import { autoSavingTime } from '@shared/constant'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { throttle } from 'lodash'
import { useRef } from 'react'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return
      console.info('Auto saving:', selectedNote.title)
      await saveNote(content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!selectedNote) return

    handleAutoSaving.cancel()

    const content = await editorRef.current?.getMarkdown()
    if (content) {
      await saveNote(content)
    }
  }

  return { selectedNote, editorRef, handleAutoSaving, handleBlur }
}
