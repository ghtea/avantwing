window.onload = function(){
          class Greetings extends React.Component{
                    render(){
                        return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
                    }
          };
          
          const App = () => {
                    return React.createElement('div', null, 'Todo App을 만들자!');
          };
          
          ReactDOM.render(React.createElement(Greetings, { name : 'Chris' }),
                    document.getElementById('root')
          );
          
          /* i can't put below at same place(root)*/
          ReactDOM.render(React.createElement(App),
                    document.getElementById('root2')
          );
};
        