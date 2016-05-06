import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IHelloMessageProps {
  name: string,
  age?: number
};

class HelloMessage extends React.Component<IHelloMessageProps, {}> {
  public render() {
    return <div>Hello {this.props.name}</div>;
  }
};

ReactDOM.render(<HelloMessage name="ReactTS" />, document.getElementsByTagName('my-app')[0]);
