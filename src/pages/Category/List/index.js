import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { format } from 'date-fns';

import { toast } from 'react-toastify';
import { Container } from './styles';
import Loading from '../../../components/Loading';

import { GET_CATEGORIES, UPD_CATEGORY } from '../../../graphql/categories';

export default function List({ history }) {
  function BtnDelete({ data }) {
    return (
      <Mutation
        mutation={UPD_CATEGORY}
        variables={{
          id: data.id,
          objects: { deleted_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss') },
        }}
        awaitRefetchQueries
        refetchQueries={[`MyGetQuery`]}
        onCompleted={data => {
          if (data.update_categories.affected_rows === 1) {
            toast.success('Category deleted success!');
          } else {
            toast.error('Error!');
          }
        }}
      >
        {updCategory => (
          <button type="button" onClick={updCategory}>
            Del
          </button>
        )}
      </Mutation>
    );
  }

  return (
    <Query query={GET_CATEGORIES}>
      {({ loading, data, error }) => {
        if (loading) return <Loading />;
        if (error) return <b>Error</b>;

        const { categories } = data;

        return (
          <Container>
            <h1>Categories</h1>
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
                {categories.map((category, idx) => (
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
                      <BtnDelete data={category} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Container>
        );
      }}
    </Query>
  );
}

List.propTypes = {
  history: PropTypes.shape().isRequired,
};
