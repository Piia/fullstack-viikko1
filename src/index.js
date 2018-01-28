import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtava}</p>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa nimi={props.osat[0]} tehtava={props.tehtavat[0]} />
            <Osa nimi={props.osat[1]} tehtava={props.tehtavat[1]} />
            <Osa nimi={props.osat[2]} tehtava={props.tehtavat[2]} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>Yhteensä {props.maara} tehtävää</p>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={[osa1, osa2, osa3]} tehtavat={[tehtavia1, tehtavia2, tehtavia3]} />
        <Yhteensa maara={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)