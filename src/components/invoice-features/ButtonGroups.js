const ButtonGroups = ({
  handleViewItem,
  handleDeleteItem,
  handleEditItem,
  handleCloneInvoice,
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button className="custom-btn" onClick={handleViewItem}>
        View
      </button>
      <button className="custom-btn" onClick={handleEditItem}>
        Edit
      </button>
      <button className="custom-btn" onClick={handleCloneInvoice}>
        Clone
      </button>
      <button className="btn btn-danger" onClick={handleDeleteItem}>
        Delete
      </button>
    </div>
  );
};

export default ButtonGroups;
