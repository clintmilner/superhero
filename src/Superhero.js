import React from 'react';
import Statistics from "./components/Statistics";

const API = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`;
const TEAM_SIZE = 4;
export default class Superhero extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.updateTeam = this.updateTeam.bind(this);

        this.state = {
            superheroList: [],
            teamList: [],
            search: ''
        };
    }

    componentDidMount() {
        fetch(API)
            .then((data) => (data.json()))
            .then((superheroJSON) => {
                console.log(superheroJSON[311]);
                const superheroList = superheroJSON
                    // .filter(({biography: {publisher = null}}) => (publisher && publisher.includes('Marvel'))) // let's only keep the Marvel superheroes for now
                    .map(({name, images, id, powerstats}) => ({name, images, id, powerstats}));
                this.setState(() => ({superheroList}));
            })
            .catch((e) => console.error('ERROR: ', e));
    }

    handleChange({target: {name, value}}){
        this.setState(() => ({[name]: value}))
    }

    updateTeam({target: {name, value}}) {
        const heroID = parseInt(value);
        this.setState((prevState) => {
            switch(name) {
                case 'ADD': {
                    /* Before adding, check that:
                        - Hero isn't already on the team
                        - Team isn't full
                    */
                    const hero = prevState.superheroList.filter(({id}) => (id === heroID)),
                        isOnTeam = prevState.teamList.some(({id}) => (id === heroID)),
                        teamFull = (prevState.teamList.length === TEAM_SIZE);
                    return ({
                        teamList: (!isOnTeam && !teamFull) ? prevState.teamList.concat(hero) : prevState.teamList
                    })
                }
                case 'REMOVE': {
                    const teamList = prevState.teamList.filter(({id}) => (id !== heroID));
                    return ({
                        teamList
                    })
                }
                default: console.log('unknown action', name, value);
            }
        })
    }

    render() {
        const {teamList, superheroList, search} = this.state;
        return (
            <div className="superhero">
                <header className='superhero-header'>
                    <h1 className="logo">Marvel</h1>
                </header>
                <main className="superhero-body">
                    <div className="superhero-content">
                        <h1>Choose Your Team</h1>
                        <div className="team">
                            {
                                (teamList.length > 0)
                                    ? teamList.map(({name, images: {sm: img}, id}) => {
                                        return ( <button type='button' key={id} value={id} name={'REMOVE'} onClick={this.updateTeam} className="hero" style={{backgroundImage: `url(${img})`}}>
                                            <p className="name">{name}</p>
                                        </button> );
                                    })
                                    : <React.Fragment>
                                        {
                                            [...Array(TEAM_SIZE).keys()].map((idx) => {
                                                return (<div key={idx} className='empty'><p>Add A Hero</p></div>);
                                            })
                                        }
                                    </React.Fragment>
                            }
                            {
                                (teamList.length > 0 && teamList.length < TEAM_SIZE)
                                ? [...Array(TEAM_SIZE - teamList.length).keys()].map((idx) => {
                                    return (<div key={idx} className='empty'><p>Add A Hero</p></div>);
                                })
                                : null
                            }
                        </div>
                        {
                            (teamList.length > 0)
                            ? <Statistics team={teamList} size={TEAM_SIZE} />
                            : null
                        }
                        <div className="search">
                            <label htmlFor='search'>Filter by Name: </label>
                            <input name='search' id='search' type="text" value={search} onChange={this.handleChange} />
                        </div>
                        <div className="superhero-list">
                            {
                                (superheroList.length > 0)
                                    ? superheroList
                                        .filter(({name: heroName}) => (heroName.toLowerCase().includes(search.toLowerCase())))
                                        .map(({name, images: {sm: img}, id}) => {
                                            const isOnTeam = teamList.some(({id: heroID}) => (heroID === id));
                                        return ( <button type='button' key={id} value={id} name={'ADD'} onClick={this.updateTeam} className={`hero ${(isOnTeam) ? 'onTeam' : ''}`} style={{backgroundImage: `url(${img})`}}>
                                            <p className="name">{name}</p>
                                        </button> );
                                    })
                                    : null
                            }
                        </div>
                    </div>
                    <nav className='superhero-nav'>
                        <ul>
                            <li><button type='button' className="save-team">Save Team</button></li>
                            <li><button type='button' className="clear-team">Clear Team</button></li>
                        </ul>
                    </nav>
                </main>
                <footer className='superhero-footer'>
                    <p>Created by Clint Milner - Source happily lives on <a href="https://github.com/clintmilner/superhero" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </footer>
            </div>
        );
    }
}