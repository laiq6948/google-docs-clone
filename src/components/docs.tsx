import React from 'react';
import AppModal from './Modal';


const Docs = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='docs-main'>
      <h1>Docs Clone</h1>

      <button className='add-docs' onClick={handleOpen}>
        Add a Document
      </button>

      <AppModal
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Docs;