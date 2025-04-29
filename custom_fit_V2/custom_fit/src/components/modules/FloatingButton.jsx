    import React, { useState } from 'react';
    import { Fab } from '@mui/material';
    import AddIcon from '@mui/icons-material/Add';
    import CloseIcon from '@mui/icons-material/Close';
    import ChatIcon from '@mui/icons-material/Chat';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import WhatsAppIcon from '@mui/icons-material/WhatsApp';
    import ChatbotModal from './ChatbotModal'; // <-- Importa el modal
    import '../../scss/FloatingButton.scss';

    const FloatingButton = () => {
    const [open, setOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    const toggleButtons = () => {
        setOpen(!open);
    };

    const openChatbot = () => {
        setChatOpen(true);
        setOpen(false); // Opcional: cerrar los botones flotantes cuando abren el chat
    };

    return (
        <div className="fab-container">
        {open && (
            <div className="fab-options">
            <Fab
                className="fab-option chatbot"
                size="small"
                color="warning"
                aria-label="Chatbot"
                onClick={openChatbot}
            >
                <ChatIcon />
            </Fab>
            <Fab
                className="fab-option instagram"
                size="small"
                style={{ backgroundColor: '#e1306c', color: 'white' }}
                aria-label="Instagram"
                onClick={() => window.open('https://instagram.com', '_blank')}
            >
                <InstagramIcon />
            </Fab>
            <Fab
                className="fab-option facebook"
                size="small"
                style={{ backgroundColor: '#3b5998', color: 'white' }}
                aria-label="Facebook"
                onClick={() => window.open('https://facebook.com', '_blank')}
            >
                <FacebookIcon />
            </Fab>
            <Fab
                className="fab-option whatsapp"
                size="small"
                style={{ backgroundColor: '#25d366', color: 'white' }}
                aria-label="WhatsApp"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
                <WhatsAppIcon />
            </Fab>
            </div>
        )}
        <Fab color="primary" className="fab-button" onClick={toggleButtons}>
            {open ? <CloseIcon /> : <AddIcon />}
        </Fab>

        {/* Modal del chatbot */}
        <ChatbotModal open={chatOpen} handleClose={() => setChatOpen(false)} />
        </div>
    );
    };

    export default FloatingButton;
