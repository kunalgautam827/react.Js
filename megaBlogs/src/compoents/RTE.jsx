import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import conf from "../conf/conf";
function RTE({ name, label, control, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field }) => (
          <Editor
          apiKey= {conf.tinymceAPI}
            initialValue={defaultValue}
            // value={field.value}
            init={{
              height: 500,
              plugin: [
                "image",
                "autolink",
                "advlist",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar: [
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              ],
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              tinymceai_token_provider: async () => {
                await fetch(
                  `https://demo.api.tiny.cloud/1/v0aq9tvoioxpovafi260gp6fv3a09yp5nw33daons4xy14jy/auth/random`,
                  { method: "POST", credentials: "include" },
                );
                return {
                  token: await fetch(
                    `https://demo.api.tiny.cloud/1/v0aq9tvoioxpovafi260gp6fv3a09yp5nw33daons4xy14jy/jwt/tinymceai`,
                    { credentials: "include" },
                  ).then((r) => r.text()),
                };
              },
              uploadcare_public_key: "d0b2c28ee2c91dbc353c",
            }}
            onEditorChange={field.onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
