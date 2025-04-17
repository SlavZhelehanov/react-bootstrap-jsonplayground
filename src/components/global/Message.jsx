import Alert from 'react-bootstrap/Alert';

export default function Message({ content, color = 'primary' }) {
    const icon = {
        danger: "fa-hand-paper-o",
        warning: "fa-exclamation-circle",
        info: "fa-info-circle",
    }
    // [
    //     'primary',
    //     'secondary',
    //     'success',
    //     'danger',
    //     'warning',
    //     'info',
    //     'light',
    //     'dark',
    // ]

    return (
        <Alert className='d-flex justify-content-center align-items-center' variant={color}>
            <i className={`fa ${icon[color]}`} aria-hidden="true"></i> <span> {content}</span>
        </Alert>
    );
};