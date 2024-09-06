const Status = ({ count }) => {
  return (
    <div className='Status'>
      <p>{count > 10 ? 'High count!' : 'Keep counting...'}</p>
    </div>
  );
};
export default Status;
