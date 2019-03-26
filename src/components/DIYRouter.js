import React from 'react';
import DataTile from './DataTile';

class DIYRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: 'test',
      data: [{
        name: "/javascript",
        info: "A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing."
      },
      {
        name: "/haskell",
        info: "A high-level, dynamic, untyped, and interpreted programming language."
      },
      {
        name: "/coffeescript",
        info: "CoffeScript is a programming language that transcompiles to JavaScript, so we'll be redirecting back to JavaScript in 5."
      }],


    }

  };

  componentDidMount() {
    console.log("component did mount");
    this.setState({ pathname: window.location.pathname }, () => {
      if (this.state.pathname === '/coffeescript') {
        console.log("inside - if for coffeescript")
        setTimeout(() => {
          window.location.replace('/javascript')
        }, 5000)
      }
    })


  }

  // setState is a asynchronous function - it get's placed on the call back stack.
  // that is the reason why we do not see the state value changing in the console.log immediately after setState is run
  // componentDidMount = () => {
  //   console.log("component did mount", window.location.pathname);
  //   this.setState({ pathname: window.location.pathname }, () => {

  //     console.log(this.state.pathname);
  //   });

  // }
  // a tag's href controlls the - link's destination
  //http://www.newmexico.gov/
  // href needs http infront of it to render the webpage
  // if no http - it will append everything to the current page

  render() {
    //document.location or window.location passes all the different properties it holds
    // host, hostname, href, origin, pathname, port, protocol (as an object)
    // console.log(document.location);
    // console.log(window.location);
    // console.log(window.history);
    // console.log(window.history.previous);

    return (
      <div>
        <ul>
          <li><a href="/javascript">JavaScript</a></li>
          <li><a href="/haskell">Haskell</a></li>
          <li><a href="/coffeescript">CoffeeScript</a></li>
        </ul>
        {this.state.data.map((item) => {
          return <div>
            {this.state.pathname === item.name ? <DataTile displayInfo={item.info} /> : ''}
          </div>

        })}

      </div>
    )
  }

}
export default DIYRouter;