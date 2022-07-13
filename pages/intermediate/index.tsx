import ProjectList from "../../components/ProjectList";
import {db} from "../../config/firebase";
import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import Link from "next/link";

export const getStaticProps = async () => {
    const q = query(collection(db, "projects"), where("difficulty", "==", 2))
    const docs = await getDocs(q);
    const projects: DocumentData[] = [];
    docs.forEach((doc) => {
        projects.push(doc.data())
    })
    return {
        props: {
            projects
        }
    }
}

const Intermediate = ({projects}:DocumentData) => {
    return (
        <div className="project-list-container">
            <div style={{display: "flex", alignItems: "center"}}>
            <Link href="/"><p style={{marginBottom: "0.5rem"}} className="back-arrow">&#60;</p></Link>
            <h3 className="project-list-difficulty">Intermediate</h3>
            </div>

            <p className="project-list-difficulty-description">Projects for programmers already feel comfortable and want to experiment</p>
            <ProjectList projects={projects}/>
        </div>
    )
}

export default Intermediate;