import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class TextEditor extends Component {
  modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  render() {
    const { value, onChange, className, style } = this.props;
    return (
      <>
        <ReactQuill
          style={style}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={value || ""}
          onChange={onChange}
          // onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
          className={className}
        />
      </>
    );
  }
}
export default TextEditor;
