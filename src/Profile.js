import "./profilestyles.css";

const Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  return (
    <div className="profile-body">
      <label> Name </label>
      <input
        name="name"
        type={"text"}
        value={name}
        onChange={(e) => handleChange(e)}
      />
      {errors && errors.name && (
        <span style={{ color: "red", fontSize: "small" }}> {errors.name} </span>
      )}

      <label> Email </label>
      <input
        name="email"
        type={"email"}
        value={email}
        onChange={(e) => handleChange(e)}
      />
      {errors && errors.email && (
        <span style={{ color: "red", fontSize: "small" }}>
          {" "}
          {errors.email}{" "}
        </span>
      )}

      <label> Age </label>
      <input
        name="age"
        type={"number"}
        value={age}
        onChange={(e) => handleChange(e)}
      />
      {errors && errors.age && (
        <span style={{ color: "red", fontSize: "small" }}> {errors.age} </span>
      )}
    </div>
  );
};

export default Profile;
