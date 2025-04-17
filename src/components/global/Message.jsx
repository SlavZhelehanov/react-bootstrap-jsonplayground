import Alert from 'react-bootstrap/Alert';

// color=primary, secondary, success, danger
export default function Message({ content, color = 'primary' }) {
    return (
        <Alert variant={color}>
            {content}
        </Alert>
    );
};