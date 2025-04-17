import { Spinner as BootstrapSpinner } from 'react-bootstrap';

// variant= primary, secondary, success
export default function Spinner({ animation = 'border', variant = 'primary', size = null, centered = true }) {
    const spinnerStyle = centered
        ? { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }
        : {};

    return (
        <div style={spinnerStyle}>
            <BootstrapSpinner animation={animation} variant={variant} size={size} />
        </div>
    );
};