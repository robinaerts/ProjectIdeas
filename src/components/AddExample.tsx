import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const AddExample = (props: any) => {
  const addExample = async (e: any) => {
    const project = { ...props.project };
    project.examples.push(e.target.parentNode.children[1].value);
    await updateDoc(
      doc(db, "projects", project.title.replace(/ /g, "-").toLowerCase()),
      { examples: project.examples }
    );
    props.setAddExample(false);
  };

  return (
    <div id="add-example-page" style={{ top: window.scrollY }}>
      <div
        onClick={() => props.setAddExample(false)}
        className="backdrop"
      ></div>
      <div id="add-example-container">
        <h3>Add the URL to your project</h3>
        <input
          style={{
            outline: "none",
            border: "none",
            padding: "0.5rem 1.2rem",
            borderRadius: "50px",
          }}
          type="text"
        />
        <button onClick={(e) => addExample(e)} id="add-btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddExample;
