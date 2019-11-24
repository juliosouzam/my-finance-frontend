import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { format } from 'date-fns';

import { toast } from 'react-toastify';
import { Container } from './styles';
import Loading from '../../../components/Loading';

import { GET_CATEGORIES, UPD_CATEGORY } from '../../../graphql/categories';

export default function List({ history }) {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  const [updCategory, { loading: l }] = useMutation(UPD_CATEGORY);

  if (loading) return <Loading />;

  function handleDelete(category) {
    const { id, providers_aggregate, name } = category;

    if (providers_aggregate.aggregate.count > 0) {
      toast.error(
        'Não é possível excluir essa categoria, já existe providers vinculados'
      );

      return false;
    }

    updCategory({
      variables: {
        id,
        objects: { deleted_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss') },
      },
    });

    toast.success(`Categoria ${name} exluída com sucesso!`);

    if (l) return <Loading />;

    data.categories = data.categories.filter(c => c.id !== id);

    return true;
  }

  return (
    <Container>
      <div>
        <Link to="/categories/create">Add</Link>
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
            data.categories &&
            data.categories.map((category, idx) => (
              <tr key={category.id}>
                <th scope="row">{idx + 1}</th>
                <td>{category.name}</td>
                <td>{category.slug}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      history.push('/categories/edit', { category })
                    }
                  >
                    Edi
                  </button>
                  <button type="button" onClick={() => handleDelete(category)}>
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
