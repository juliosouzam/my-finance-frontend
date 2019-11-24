import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { format } from 'date-fns';

import { toast } from 'react-toastify';
import { Container } from './styles';
import Loading from '../../../components/Loading';

import { GET_PROVIDERS, UPD_PROVIDER } from '../../../graphql/providers';

export default function List({ history }) {
  const { data, loading, error } = useQuery(GET_PROVIDERS);

  const [updProvider, { loading: l }] = useMutation(UPD_PROVIDER);

  if (loading) return <Loading />;

  function handleDelete(provider) {
    const { id, name } = provider;

    updProvider({
      variables: {
        id,
        objects: { deleted_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss') },
      },
    });

    toast.success(`Provider ${name} deleted with success!`);

    if (l) return <Loading />;

    data.providers = data.providers.filter(c => c.id !== id);

    return true;
  }

  return (
    <Container>
      <div>
        <Link to="/providers/create">Add</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Slug</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <p>Houve um erro</p>
          ) : (
            data.providers &&
            data.providers.map((provider, idx) => (
              <tr key={provider.id}>
                <th scope="row">{idx + 1}</th>
                <td>{provider.name}</td>
                <td>{provider.slug}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      history.push('/providers/edit', { provider })
                    }
                  >
                    Edi
                  </button>
                  <button type="button" onClick={() => handleDelete(provider)}>
                    Del
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Container>
  );
}

List.propTypes = {
  history: PropTypes.func.isRequired,
};
