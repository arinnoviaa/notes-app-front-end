import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const AddNote = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <>
      <section className="addnote-page" ref={componentRef}>
        <div class="container-addnote">
          <div className="title-addnote" >
            <input type="text" name="titlenote" id="titlenote" className="input-field" placeholder="Title" />
            <label for="titlenote" className="input-label">Title</label>
          </div>
          <div className="note-columns" id="note-columns">
            <textarea id="note-columns-note" name="columns-note" className="input-notee" rows="15" cols="50" />
            <label for="columns-note" className="input-label-note">Notes </label>
          </div>
          <div className="cue-columns">
            <textarea id="cue-columns-note" name="cue-columns-note" className="input-cue" rows="15" cols="50" />
            <label for="cue-columns-note" className="input-label-cue">Cue</label>
          </div>
          <div className="summary">
            <div className="summary-note">
              <textarea type="text" name="summarynote" className="input-summary" placeholder="Summary" rows="8" />
              <label for="summarynote" className="input-label-summary">Summary</label>
            </div>
          </div>
          <div className="button-sec">
            <div>
              <button className="note-button"> Save Note </button>
              <button className="note-button" onClick={handlePrint}> Export to PDF </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default AddNote;