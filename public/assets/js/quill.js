import Quill from 'quill'
import QuillMarkdown from 'quilljs-markdown'

const editor = new Quill('#markup-editor', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ 'list' : 'ordered' }, { 'list' : 'bullet' }],
      ["image", "code-block"]
    ]
  },
  placeholder: "Compose an epic...",
  theme: "snow" // or 'bubble'
})

new QuillMarkdown(editor)