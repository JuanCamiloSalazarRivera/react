
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form"

export default function Signup() {
    return (
        <Form onSubmit={e => {e.preventDefault();
        alert('¡Enviando!');
        }}>
            <label>
                <h1>Form Login</h1>
            </label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email adress</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    Well never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}