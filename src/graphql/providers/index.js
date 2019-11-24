import gql from 'graphql-tag';

export const ADD_PROVIDER = gql`
  mutation MyProviders($objects: [categories_insert_input!]!) {
    insert_categories(objects: $objects) {
      affected_rows
    }
  }
`;

export const GET_PROVIDERS = gql`
  query MyProviders {
    providers(where: { deleted_at: { _is_null: true } }) {
      id
      name
      slug
    }
  }
`;

export const UPD_PROVIDER = gql`
  mutation MyUpdateProvider($id: uuid, $objects: providers_set_input) {
    update_providers(_set: $objects, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
