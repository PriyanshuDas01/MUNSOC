import React from 'react'
import ReactDom from 'react-dom'
import "./modal.css"


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  padding: '50px',
  zIndex: 1000,
  height: '40vw',
  width: '80vw',
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose, ag1, ag1i, ag1n }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />

      <div style={MODAL_STYLES} className='mod'>
        {/* {children} */}

        <div className='agendapop'>Agenda</div>
        <div className='popbox'>

          <div className='agendatextpop'>
            {ag1}
          </div>

          <figure class="snip1113 blue hover"><img src={ag1i} alt="pr-sample3" />
            <figcaption>
              <h3>{ag1n}</h3>
              <h4>
                Executive Board
              </h4>
            </figcaption>
          </figure>
          <button className="close" onClick={onClose}>Close</button>

        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}