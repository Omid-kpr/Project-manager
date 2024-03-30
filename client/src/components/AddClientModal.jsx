import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client'
import { FaUser } from 'react-icons/fa'
import { GET_CLIENTS } from '../queries/clientQueries';
import { ADD_CLIENT } from '../mutations/clientMutations';

function AddClientModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: clients.concat([addClient]) }
            });
        }

    });


    const onsubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || phone === '') {
            return alert('لطفا تمام فیلد ها را به درستی وارد کنید');
        }
        else {
            addClient();
            setName('');
            setEmail('');
            setPhone('');
            handleClose();
        }
    };

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <div className="d-flex align-items-center">
                    <FaUser className='icon' />
                    <div className="ml-2">افزودن کاربر</div>
                </div>
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>افزودن کاربر جدید</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={onsubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label className='d-flex justify-content-end'>نام کاربری</Form.Label>
                            <Form.Control
                                type='text'
                                id='name'
                                placeholder='امید'
                                value={name}
                                autoFocus
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='d-flex justify-content-end'>ایمیل</Form.Label>
                            <Form.Control
                                type="email"
                                id='email'
                                placeholder="name@example.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='d-flex justify-content-end'>تلفن همراه</Form.Label>
                            <Form.Control
                                type="phone"
                                id='phone'
                                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </Form.Group>
                        <div className='d-flex justify-content-end'>
                            <Button className='mx-2' variant="secondary" onClick={handleClose}>
                                برگشت
                            </Button>

                            <Button className='mx-2' type='submit' variant="primary" onClick={handleClose}>
                                ذخیره تغییرات
                            </Button>
                        </div>
                    </Form>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default AddClientModal;