import React, { useState, useEffect } from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

const Dice = ({totalRonda,guardarTotalTotal,numDadoBlok,setNumDadoBlok,setNumDado, setPrimerTiro, setBlok1, setBlok2, setBlok3, setBlok4, setBlok5,blok1,blok2, blok3, blok4, blok5}) => {
    
    const [dado1, setDado1] = useState(0)
    const [dado2, setDado2] = useState(0)
    const [dado3, setDado3] = useState(0)
    const [dado4, setDado4] = useState(0)
    const [dado5, setDado5] = useState(0)

      
    useEffect(() => {
      //if(dado1===&& dado2&& dado3&& dado4&& dado5){
      if(setPrimerTiro){
    
        setNumDado([
          dado1,dado2,dado3,dado4,dado5
        ])
      }
      
    }, [dado1,dado2,dado3,dado4,dado5])

    //useEffect(() => {
    //  if(blok1||blok2||blok3||blok4||blok5){
    //    setPrimerTiro(false)
    //    
    //  }
    //  
    //}, [blok1,blok2,blok3,blok4,blok5])

      function rollDoneCallback1(num) {
        guardarTotalTotal(totalRonda)
        setDado1(num)
        setPrimerTiro(true)
        setNumDadoBlok([])
      }
      function rollDoneCallback2(num) {
        guardarTotalTotal(totalRonda)
        setDado2(num)
        setPrimerTiro(true)
        setNumDadoBlok([])
      }
      function rollDoneCallback3(num) {
        guardarTotalTotal(totalRonda)
        setDado3(num)
        setPrimerTiro(true)
        setNumDadoBlok([])
      }
      function rollDoneCallback4(num) {
        guardarTotalTotal(totalRonda)
        setDado4(num)
        setPrimerTiro(true)
        setNumDadoBlok([])
      }
      function rollDoneCallback5(num) {
        guardarTotalTotal(totalRonda)
        setDado5(num)
        setPrimerTiro(true)
        setNumDadoBlok([])
      }
      
      const bloqueado1 = ()=>{
        setBlok1(true)
        setPrimerTiro(false)
        setNumDadoBlok([
          ...numDadoBlok,
          dado1
        ])
        setDado1(0) 
      }
      const bloqueado2 = ()=>{
        setBlok2(true)
        setPrimerTiro(false)
        setNumDadoBlok([
          ...numDadoBlok,
          dado2
        ])
        setDado2(0) 
      }
      const bloqueado3 = ()=>{
        setBlok3(true)
        setPrimerTiro(false)
        setNumDadoBlok([
          ...numDadoBlok,
          dado3
        ])
        setDado3(0) 
      }
      const bloqueado4 = ()=>{
        setBlok4(true)
        setPrimerTiro(false)
        setNumDadoBlok([
          ...numDadoBlok,
          dado4
        ])
        setDado4(0) 
      }
      const bloqueado5 = ()=>{
        setBlok5(true)
        setPrimerTiro(false)
        setNumDadoBlok([
          ...numDadoBlok,
          dado5
        ])
        setDado5(0) 
      }
      


    return (
      <div>
        <div className='dados'>
          <div className={blok1 ? 'bloqueado' : null}>
            <ReactDice
              numDice={1}
              rollDone={rollDoneCallback1}
              //ref={dice =>  reactDice = dice }
            />
          </div>  
          <div className={blok2 ? 'bloqueado' : null}>
            <ReactDice
              numDice={1}
              rollDone={rollDoneCallback2}
              //ref={dice => reactDice = dice}
            />
            </div>
            <div className={blok3 ? 'bloqueado' : null}>
            <ReactDice
              numDice={1}
              rollDone={rollDoneCallback3}
              //ref={dice => reactDice = dice}
            />
            </div>
            <div className={blok4 ? 'bloqueado' : null}>
            <ReactDice
              numDice={1}
              rollDone={rollDoneCallback4}
              //ref={dice => reactDice = dice}
            />
            </div>
            <div className={blok5 ? 'bloqueado' : null}>
            <ReactDice
              numDice={1}
              rollDone={rollDoneCallback5}
              //ref={dice => reactDice = dice}
            />
            </div>
        </div>
        <div className='botonBloqueo'>
          <button type='button' className='bloquear' onClick={bloqueado1}>bloquear</button>
          <button type='button' className='bloquear' onClick={bloqueado2}>bloquear</button>
          <button type='button' className='bloquear' onClick={bloqueado3}>bloquear</button>
          <button type='button' className='bloquear' onClick={bloqueado4}>bloquear</button>
          <button type='button' className='bloquear' onClick={bloqueado5}>bloquear</button>
        </div>
      </div>
    )
}

export default Dice;


  
