function Clock() {
  let currentDate = new Date().toLocaleDateString();
  let currentTime = new Date().toLocaleTimeString();

  return (
    <p className="para">
      This is the current time:{currentDate}-{currentTime} A.M
    </p>
  );
}

export default Clock;
