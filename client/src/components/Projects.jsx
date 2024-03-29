import Loading from './Loading'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQuery'
import ProjectCard from './ProjectCard';
export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Loading />
    else if (error) {
        console.log(error);
        return <p>مشکلی پیش آمد لطفا دوباره امتحان کنید</p>
    }
    else {
        return (
            <>
                {data.projects.length > 0 ? (
                    <div className="row">
                        {data.projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (<p>هیچ پروژه ای وجود ندارد</p>)}
            </>
        )
    }
}
