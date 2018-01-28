import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            points: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0} 
        }
    }

    nextClick = () => {
        return () => {
            this.setState({selected: Math.floor(Math.random() * 7)})
        }
    }

    voteClick = () => {
        return () => {
            const copy = {...this.state.points}
            copy[this.state.selected] += 1
            this.setState({points: copy})
        }
    }

    mostVoted = () => {
        let max = 0
        let winner = null
        for (let key in this.state.points) {
            if(this.state.points[key] > max) {
                max = this.state.points[key]
                winner = key
            }
        }
        return winner
    }

    render() {
        const selected = this.state.selected
        const winner = this.mostVoted()

        return (
            <div>
                <button onClick={this.nextClick()}>next</button>
                <button onClick={this.voteClick()}>vote</button>
                <p>{this.props.anecdotes[selected]}</p>
                <p>Votes: {this.state.points[selected]}</p>

                <h2>Most voted</h2>
                <p>{this.props.anecdotes[winner]}</p>
                <p>Votes: {this.state.points[winner]}</p>
            </div>
        )
    }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)




/*
// Unicafe-tehtävät:
import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>
const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Response = ({handler}) => {
    return (
        <div>
            <h1>Anna palautetta</h1>
            <Button text="hyvä" handleClick={handler("good")} />
            <Button text="neutraali" handleClick={handler("neutral")} />
            <Button text="huono" handleClick={handler("bad")} />
        </div>
    )    
}

const Statistics = ({states}) => {
    const responses = states.good + states.neutral + states.bad;
    const average = () => {
        return ((states.good - states.bad) / (states.good + states.neutral + states.bad)).toFixed(1)
    }

    const positive = () => {
        return (states.good / (states.good + states.neutral + states.bad) * 100).toFixed(1) + '%'
    }

    const elements = () => {
        if (responses === 0) {
            return <div>Ei palautteita</div>
        }
        return (
            <table>
                <tbody>
                <Statistic text="hyvä" value={states.good} />
                <Statistic text="neutraali" value={states.neutral} />
                <Statistic text="huono" value={states.bad} />
                <Statistic text="keskiarvo" value={average()} />
                <Statistic text="positiivisia" value={positive()} />
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h1>Statistiikka</h1>
            {elements()}
        </div>    
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    clickHandler = (key) => {
        return () => {
            let newState = {}
            newState[key] = this.state[key] + 1
            this.setState(newState)
        }
    }

    render() {
        return (
            <div>
                <Response handler={this.clickHandler} />
                <Statistics states={this.state} />
            </div>    
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
*/


/*
// Kurssimateriaalin läpikäymistä:
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        vasen: 0,
        oikea: 0,
        kaikki: []
      }
    }
  
    klikVasen = () => {
      this.setState({
        vasen: this.state.vasen + 1,
        kaikki: this.state.kaikki.concat('v')
        
      })
    }
  
    klikOikea = () => {
      this.setState({
        oikea: this.state.oikea + 1,
        kaikki: this.state.kaikki.concat('o')
      })
    }
  
    render() {
        const historia = () => {
            if (this.state.kaikki.length === 0) {
              return (
                <div>
                  <em>sovellusta käytetään nappeja painelemalla</em>
                </div>
              )
            }
            return (
              <div>
                näppäilyhistoria: {this.state.kaikki.join(' ')}
              </div>
            )
          }
      return (
        <div>
          <div>
            {this.state.vasen}
            <button onClick={this.klikVasen}>vasen</button>
            <button onClick={this.klikOikea}>oikea</button>
            {this.state.oikea}
            <div>{historia()}</div>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
*/


/*
// Kurssien listaus -tehtävät:
const Headline = (props) => {
    return (
        <h1>{props.kurssi.nimi}</h1>
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
            <Osa nimi={props.kurssi.osat[0].nimi} tehtava={props.kurssi.osat[0].tehtavia} />
            <Osa nimi={props.kurssi.osat[1].nimi} tehtava={props.kurssi.osat[1].tehtavia} />
            <Osa nimi={props.kurssi.osat[2].nimi} tehtava={props.kurssi.osat[2].tehtavia} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>Yhteensä {props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia} tehtävää</p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }

  return (
    <div>
        <Headline kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
*/