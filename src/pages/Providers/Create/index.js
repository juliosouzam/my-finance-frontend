import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { format } from 'date-fns';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '../../../services/history';

import Loading from '../../../components/Loading';

import { ADD_PROVIDER } from '../../../graphql/providers';
import { GET_CATEGORIES } from '../../../graphql/categories';

export default function Create() {
  const { data, loading: load, error } = useQuery(GET_CATEGORIES);

  const [addProvider, { loading }] = useMutation(ADD_PROVIDER);
  const [category] = useState({
    id: uuid(),
    name: '',
    slug: '',
    category_id: '',
    created_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    updated_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  });

  if (loading || load) return <Loading />;

  const categories = data.categories.map(c => ({
    id: c.id,
    title: c.name,
  }));

  function handleSubmit({ name, slug }) {
    try {
      const data = { ...category, name, slug };

      addProvider({ variables: { objects: data } });

      history.push('/categories');
    } catch (error) {
      toast.error('Erro ao salvar categoria');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="">Digite o nome</label>
        <Input id="name" name="name" placeholder="Digite o nome" />

        <label htmlFor="">Digite a slug</label>
        <Input name="slug" placeholder="Digite a slug" />

        <label htmlFor="">Selecione a categoria</label>
        <Select
          name="category_id"
          options={categories}
          placeholder="Categoria"
        />

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
