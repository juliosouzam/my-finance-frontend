import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { format } from 'date-fns';
import { Mutation } from 'react-apollo';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '../../../services/history';

import { ADD_CATEGORY } from '../../../graphql/categories';

export default function Create() {
  const [category, setCategory] = useState({
    id: uuid(),
    name: '',
    slug: '',
    created_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    updated_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  });

  return (
    <Container>
      <form>
        <label htmlFor="">Digite o nome</label>
        <Input
          id="name"
          onChange={e => setCategory({ ...category, name: e.target.value })}
          name="name"
          placeholder="Digite o nome"
        />

        <label htmlFor="">Digite a slug</label>
        <Input
          name="slug"
          onChange={e => setCategory({ ...category, slug: e.target.value })}
          placeholder="Digite a slug"
        />
        <Mutation
          mutation={ADD_CATEGORY}
          variables={{
            objects: { ...category },
          }}
          awaitRefetchQueries
          refetchQueries={[`MyGetQuery`]}
          onCompleted={data => {
            toast.success('Category added!');
            history.push('/categories');
          }}
        >
          {addCategory => (
            <button type="button" onClick={addCategory}>
              Salvar
            </button>
          )}
        </Mutation>
      </form>
    </Container>
  );
}
