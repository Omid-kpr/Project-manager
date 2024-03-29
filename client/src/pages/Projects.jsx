import { Link, useParams } from "react-router-dom"
import loading from "../components/Loading"
import { useQuery } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQuery"
import ClientInfo from "../components/ClientInfo"

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
                    <Link className="btn btn-light btn-sm w-20 d-inline ms-auto">
                        برگشت
                    </Link>

                    <h1>{data.project.name}</h1>
                    <p>{data.project.description}</p>

                    <h5 className="mt-3">وضعیت پروژه</h5>
                    <p className="lead">{data.project.status}</p>

                    <ClientInfo client={data.project.client} />
                </div>
            </>
        )
    }
}
