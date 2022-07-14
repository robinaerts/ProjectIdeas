import { getDoc, doc, DocumentData, getDocs, collection } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import ProjectPage from "../../components/ProjectPage";
import { db } from "../../config/firebase"

export const getStaticPaths: GetStaticPaths = async () => {
    const entries = await getDocs(collection(db, "projects"));
  const paths = entries.docs.map(doc => ({
    params: {
      project: doc.id
    }
  }));

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
    const project = context.params?.project;
    let projectData;
    if (typeof project == "string") {
        const docRef = doc(db, "projects", project)
        const docSnapshot = await getDoc(docRef);
        projectData = docSnapshot.data()
    }
    return {
      props: {
          project: projectData
      }
  }
}

const AdvancedProject = ({project}: DocumentData) => {
return(
    <ProjectPage project={project}/>
)
}

export default AdvancedProject;