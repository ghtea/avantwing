window.onload = function(){
          class Greetings extends React.Component{
                    render(){
                        return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
                    }
          }
          
          const App = () => {
                    return <div> Todo App을 만들자! </div>;
          }
          
          ReactDOM.render(React.createElement(Greetings, { name : 'Chris' }),
                    document.getElementById('root')
          );
          ReacrDOM.render(React.createElement(App),
                    document.getElementById('root')
          );
};
        