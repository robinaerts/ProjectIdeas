import { getDoc, doc, DocumentData, getDocs, collection } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import ProjectPage from "../../components/ProjectPage";
import { db } from "../../config/firebase"

export const getStaticPaths: GetStaticPaths = async () => {
    const entries = await getDocs(collection(db, "projects"));
  const paths = entries.docs.map(doc => ({
    params: {
      project: doc.data().title.toLowerCase()
    }
  }));

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
    const project = context.params?.project;
    if (typeof project == "string") {
        const docRef = doc(db, "projects", project)
        const docSnapshot = await getDoc(docRef);
        return {
            props: {
                project: docSnapshot.data()
            }
        }
    } else {
        return {
            props: {}
        }
    }
}

const BeginnerProject = ({project}: DocumentData) => {
    
return(
    <ProjectPage project={project}/>
)
}

export default BeginnerProject;