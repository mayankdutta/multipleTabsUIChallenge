const interestList = ["music", "chess", "singing", "painting", "walking"];

const Interest = ({ data, setData, errors }) => {
  console.log(data.interest);
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      interest: prevData.interest.includes(e.target.value)
        ? prevData.interest.filter((val) => val !== e.target.value)
        : [...prevData.interest, e.target.value],
    }));
  };
  return (
    <div className="interst-body">
      {interestList.map((i) => (
        <label className="interest-list">
          <input
            type="checkbox"
            value={i}
            name={i}
            checked={data.interest.includes(i)}
            onChange={(e) => handleChange(e)}
          />
          {i}
        </label>
      ))}
      {errors && errors.interest && (
        <span style={{ color: "red", fontSize: "small" }}>
          {errors.interest}
        </span>
      )}
    </div>
  );
};

export default Interest;
