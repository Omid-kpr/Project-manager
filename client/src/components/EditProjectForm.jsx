import { useState } from "react"
import { useMutation } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQuery"
import { UPDATE_PROJECT } from "../mutations/projectMutation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EditProjectForm({ project }) {

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState('');

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: project.id, name, description, status },
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }]
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !status) {
            return alert('لطفا تمام فیلد ها را به درستی وارد کنید');
        }
        else {
            updateProject(name, description, status,);
            return alert('تغییرات اعمال شد')
        }
    };


    return (
        <div className="mt-5">تغییر پروژه
            <Form onSubmit={onSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label className='d-flex justify-content-end'>نام پروژه</Form.Label>
                    <Form.Control
                        type='text'
                        id='name'
                        placeholder='ایزی پروژه'
                        value={name}
                        autoFocus
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='d-flex justify-content-end'>توضیحات</Form.Label>
                    <Form.Control
                        type="textarea"
                        id='description'
                        placeholder="برنامه ای برای مدیریت پروزه ها"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='d-flex justify-content-end'>وضعیت</Form.Label>
                    <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}>

                        <option value="new">جدید</option>
                        <option value="progress">در حال انجام</option>
                        <option value="completed">تکمیل شده</option>

                    </select>

                </Form.Group>

                <div className='d-flex justify-content-end'>
                    <Button className='mx-2' type='submit' variant="primary">
                        ذخیره تغییرات
                    </Button>
                </div>
            </Form>
        </div>
    )
}
