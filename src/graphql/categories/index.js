import gql from 'graphql-tag';

export const ADD_CATEGORY = gql`
  mutation MyMutation($objects: [categories_insert_input!]!) {
    insert_categories(objects: $objects) {
      affected_rows
    }
  }
`;

export const GET_CATEGORIES = gql`
  query MyCategories {
    categories(where: { deleted_at: { _is_null: true } }) {
      id
      name
      slug
    }
  }
`;

export const UPD_CATEGORY = gql`
  mutation MyMutation($id: uuid, $objects: categories_set_input) {
    update_categories(_set: $objects, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
