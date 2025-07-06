import './App.css';

import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Quiz from './Quiz';
import SignOutButton from './SignOutButton';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
          <main>
            <header className='App-header'>
              <SignOutButton />
              <Quiz />
            </header>
          </main>
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
