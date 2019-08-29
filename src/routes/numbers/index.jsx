import { h, Component } from 'preact';
import style from './style';

import { get } from '@app/data';

export default class Numbers extends Component {
  state = {
    numbers: [],
    isLoading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ isLoading: true });

    const data = await get('/test');

    this.setState({
      numbers: data.numbers,
      isLoading: false,
    });
  }

  render({ user }, { time, count }) {
    return (
      <div class={style.numbers}>
        <h1>Numbers</h1>

        <p>Number data fetched from the API <button onClick={this.fetchData}>Refresh</button></p>

        {this.state.isLoading ? (
          <span>Loading...</span>
        ) : (
            <div>
              <h2>Numbers:</h2>
              <ul>
                {this.state.numbers.map((number) => <li>{number}</li>)}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
