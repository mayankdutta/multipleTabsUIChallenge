import "./styles.css";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
import { useState } from "react";

const INIT_DATA = {
  name: "mayank",
  age: "23",
  email: "mayank@gmail.com",
  interest: ["music", "walking", "chess"],
};

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(INIT_DATA);
  const [errors, setErrors] = useState();

  const tabs = [
    {
      id: 0,
      component: Profile,
      heading: "Profile",
      validations: () => {
        const { name, age, email } = data;
        let err = {};
        if (name.length < 2) {
          err.name = "name length should be more than 2";
        }
        if (age < 18) {
          err.age = "age should be greater than 18";
        }
        if (
          !email.split("@")[1].split(".")[1].includes("com") &&
          !email.includes(".") &&
          !email.includes("@")
        ) {
          err.email = "invalid email";
        }

        setErrors(err);
        return err.name || err.age || err.email;
      },
    },
    {
      id: 1,
      component: Interest,
      heading: "Interest",
      validations: () => {
        let err = {};
        if (data.interest.length <= 1) {
          err.interest = "At least 2 should be selected";
        }
        setErrors(err);
        return err.interest;
      },
    },
    {
      id: 2,
      component: Settings,
      heading: "Settings",
    },
  ];

  const handleNext = () => {
    const areErrors = tabs[activeTab].validations();
    if (!areErrors) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrev = () => {
    setActiveTab(activeTab - 1);
  };

  const ActiveCompoenent = tabs[activeTab].component;
  return (
    <div className="app-body">
      <div className="headings">
        {tabs.map((tab) => (
          <div
            className="heading"
            onClick={() => setActiveTab(tab.id)}
            style={
              tab.id === activeTab
                ? { backgroundColor: "gold" }
                : { backgroundColor: "white" }
            }
          >
            {tab.heading}
          </div>
        ))}
      </div>

      <ActiveCompoenent data={data} setData={setData} errors={errors} />
      {activeTab > 0 && <button onClick={handlePrev}> {"< prev"} </button>}
      <button onClick={handleNext}>
        {activeTab === tabs.length - 1 ? "Submit" : "next >"}
      </button>
    </div>
  );
}
