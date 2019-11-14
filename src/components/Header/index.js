import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Profile, Content } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">MY FINANCES</Link>
          <ul>
            <li>
              <Link to="/categories">Categorias</Link>
              <Link to="/">Ordem de Serviços</Link>
            </li>
          </ul>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button
                type="button"
                onClick={() => {
                  dispatch(signOut());
                }}
              >
                Sair
              </button>
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
