import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { format } from 'date-fns';
import { useMutation } from '@apollo/react-hooks';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '../../../services/history';

import Loading from '../../../components/Loading';

import { ADD_CATEGORY } from '../../../graphql/categories';

export default function Create() {
  const [addCategory, { loading }] = useMutation(ADD_CATEGORY);
  const [category] = useState({
    id: uuid(),
    name: '',
    slug: '',
    created_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    updated_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  });

  function handleSubmit({ name, slug }) {
    try {
      const data = { ...category, name, slug };

      addCategory({ variables: { objects: data } });

      history.push('/categories');
    } catch (error) {
      toast.error('Erro ao salvar categoria');
    }
  }

  if (loading) return <Loading />;

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input name="name" />
          <Input name="slug" />
          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </>
  );
}
