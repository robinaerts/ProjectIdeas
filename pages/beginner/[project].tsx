import { getDoc, doc, DocumentData, getDocs, collection, where, query } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ProjectPage from "../../components/ProjectPage";
import { db } from "../../config/firebase"

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getDocs(query(collection(db, "projects"), where("difficulty", "==", 1)));
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

const BeginnerProject = ({project}: DocumentData) => {
    
return(
  <>
    <Head>
        <title>{project.title} | Project Ideas</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:title" content={project.title  + " | Project Ideas"} />
        <meta property="og:description" content={project.shortDescription} />
      </Head>
    <ProjectPage project={project}/>
  </>
)
}

export default BeginnerProject;