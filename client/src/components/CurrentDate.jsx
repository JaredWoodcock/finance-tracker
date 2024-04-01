function CurrentDate() {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <p className="fw-bold">Today's Date: {currentDate}</p>
    </div>
  );
}

export default CurrentDate;