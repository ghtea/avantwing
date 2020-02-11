window.onload = function(){
          class Greetings extends React.Component{
                    render(){
                        return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
                    }
          };
          
          class App extends React.Component{
                    render(){
                              return React.createElement('div', null, 'Todo App을 만들자!');
                    }
          };
          
          ReactDOM.render(React.createElement(Greetings, { name : 'Chris' }),
                    document.getElementById('root')
          );
          ReacrDOM.render(React.createElement(App),
                    document.getElementById('root')
          );
};
        