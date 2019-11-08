import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Profile, Content } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.user);
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">MY FINANCES</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
