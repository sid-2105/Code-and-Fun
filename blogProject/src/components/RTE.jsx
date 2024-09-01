import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=""}) {
  return (
    <div>
        {label && <label htmlFor={name} className="inline-block mb-1 pl-1">{label}</label>}
        <Controller
            name={name || "content"}
            control={control}
            defaultValue={defaultValue}
            render={({field:{onChange}}) => (
                <Editor
                initialValue={defaultValue}
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={(content, editor) => {
                        onChange(content)
                    }
                }
                />
            )}
    />
    </div>
  )
}

