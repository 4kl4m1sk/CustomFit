import React from 'react'
import Nav from '../components/modules/header_l'
import CamisaP from '../components/modules/camisaPer'
import Footer from './modules/footer';

export default function Personalizar() {
  return (
    <>
      <Nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />
      <div style={{ paddingTop: '80px' }}> {/* Ajusta el valor según la altura del Nav */}
        <CamisaP />
        <Footer />
      </div>
    </>
  )
}
