import React from 'react';
import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <a href="http://github.com/alexhauka">My Github</a>
          </li>
          <br></br>
          <li>
            <a href="mailto:alexhauka@gmail.com">My Email</a>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default Contact;