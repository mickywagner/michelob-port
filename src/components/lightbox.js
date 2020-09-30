import React from "react"

const Lightbox = () => {
  return(
      <div id="myModal" className="modal">
          <span className="close cursor" onClick={closeModal()}>&times;</span>
      </div>
  )
}

export default Lightbox
