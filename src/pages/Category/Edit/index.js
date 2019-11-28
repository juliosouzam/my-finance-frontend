import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { Container } from './styles';
import history from '../../../services/history';

import { UPD_CATEGORY } from '../../../graphql/categories';

export default function Edit() {
  const { category: c } = history.location.state;
  const [category, setCategory] = useState(c);

  // function handleSubmit({ name, slug }) {
  //   try {
  //     updCategory({ variables: { id: category.id, objects: { name, slug } } });
  //     toast.success(`Categoria ${name} atualizada com sucesso`);

  //     history.push('/categories');
  //   } catch (error) {
  //     toast.error('Erro ao salvar categoria');
  //   }
  // }

  return (
    <Container>
      <form>
        <label htmlFor="">Digite o nome</label>
        <Input
          id="name"
          value={category.name}
          onChange={e => setCategory({ ...category, name: e.target.value })}
          name="name"
          placeholder="Digite o nome"
        />

        <label htmlFor="">Digite a slug</label>
        <Input
          name="slug"
          onChange={e => setCategory({ ...category, slug: e.target.value })}
          value={category.slug}
          placeholder="Digite a slug"
        />
        <Mutation
          mutation={UPD_CATEGORY}
          variables={{
            id: category.id,
            objects: {
              name: category.name,
              slug: category.slug,
              updated_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            },
          }}
          awaitRefetchQueries
          refetchQueries={[`MyGetQuery`]}
          onCompleted={data => {
            toast.success('Category updated!');
            history.push('/categories');
          }}
        >
          {editCategory => (
            <button type="button" onClick={editCategory}>
              Salvar
            </button>
          )}
        </Mutation>
      </form>
    </Container>
  );
}
