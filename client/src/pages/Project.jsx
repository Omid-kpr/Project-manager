import { Link, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQuery"
import ClientInfo from "../components/ClientInfo"
import DeleteProjectButton from "../components/DeleteProjectButton"
import EditProjectForm from "../components/EditProjectForm"

export default function Projects() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: {
            id: id
        }
    });

    if (loading) return <loading />
    else if (error) {
        console.log(error);
        return <p>مشکلی پیش آمد لطفا دوباره امتحان کنید</p>
    }
    else {
        return (
            <>
                <div className="mx-auto w-80 card p-5">
                    <Link to='/' className="btn btn-light btn-sm w-20 d-inline me-auto">
                        برگشت
                    </Link>

                    <h1 className="ms-auto mt-4">{data.project.name}</h1>
                    <p className="ms-auto">{data.project.description}</p>

                    <h5 className="ms-auto mt-3">وضعیت پروژه</h5>
                    <p className="ms-auto lead">{data.project.status}</p>

                    <ClientInfo client={data.project.client} />

                    <EditProjectForm project={data.project} />
                    <DeleteProjectButton projectId={data.project.id} />
                </div>
            </>
        )
    }
}
