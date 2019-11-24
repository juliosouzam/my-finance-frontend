import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '../../../services/history';

import Loading from '../../../components/Loading';

import { UPD_CATEGORY } from '../../../graphql/categories';

export default function Edit() {
  const { category } = history.location.state;
  const [updCategory, { loading }] = useMutation(UPD_CATEGORY);

  function handleSubmit({ name, slug }) {
    try {
      updCategory({ variables: { id: category.id, objects: { name, slug } } });
      toast.success(`Categoria ${name} atualizada com sucesso`);

      history.push('/categories');
    } catch (error) {
      toast.error('Erro ao salvar categoria');
    }
  }

  if (loading) return <Loading />;

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={category}>
        <label htmlFor="">Digite o nome</label>
        <Input id="name" name="name" placeholder="Digite o nome" />

        <label htmlFor="">Digite a slug</label>
        <Input name="slug" placeholder="Digite a slug" />
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
