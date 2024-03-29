import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation, useQuery } from '@apollo/client'
import { FaList } from 'react-icons/fa'
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQuery';
import { ADD_PROJECT } from '../mutations/projectMutation';

function AddClientModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [clientId, setClientId] = useState('');
    const [status, setStatus] = useState('new');

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: { name, description, status, clientId },
        update(cache, { data: { addProject } }) {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: projects.concat([addProject]) }
            });
        }
    });

    // Get Clients for select
    const { loading, error, data } = useQuery(GET_CLIENTS);


    const onsubmit = (e) => {
        e.preventDefault();
        if (name === '' || description === '' || status === '') {
            return alert('لطفا تمام فیلد ها را به درستی وارد کنید');
        }
        else {
            addProject(name, description, status, clientId);
            setName('');
            setDescription('');
            setStatus('new');
            setClientId('');
            handleClose();
        }
    };

    if (loading) return null;
    else if (error) {
        console.log(error);
        return alert('مشکلی پیش آمد لطفا دوباره امتحان کنید');
    }
    else {
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    <div className="d-flex align-items-center">
                        <FaList className='icon' />
                        <div className="ml-2">افزودن پروژه</div>
                    </div>
                </Button>

                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>افزودن پروژه جدید</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={onsubmit}>

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

                            <Form.Group className="mb-3">
                                <Form.Label className='d-flex justify-content-end'>کاربر</Form.Label>
                                <select
                                    className="form-select"
                                    id="clientId"
                                    value={clientId}
                                    onChange={(event) => setClientId(event.target.value)}>

                                    <option value="">کاربر را انتخاب کنید</option>
                                    {data.clients.map((client) => (
                                        <option key={client.id} value={client.id}>
                                            {client.name}
                                        </option>
                                    ))}

                                </select>

                            </Form.Group>

                            <div className='d-flex justify-content-end'>
                                <Button className='mx-2' variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>

                                <Button className='mx-2' type='submit' variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </div>
                        </Form>

                    </Modal.Body>

                </Modal>
            </>
        );
    }
}

export default AddClientModal;