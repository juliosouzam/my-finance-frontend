import gql from 'graphql-tag';

export const ADD_CATEGORY = gql`
  mutation MyAddMutation($objects: [categories_insert_input!]!) {
    insert_categories(objects: $objects) {
      affected_rows
    }
  }
`;

export const GET_CATEGORIES = gql`
  query MyGetQuery {
    categories(where: { deleted_at: { _is_null: true } }) {
      id
      name
      slug
      providers_aggregate {
        aggregate {
          count(columns: category_id, distinct: true)
        }
      }
    }
  }
`;

export const UPD_CATEGORY = gql`
  mutation MyUpdMutation($id: uuid, $objects: categories_set_input) {
    update_categories(_set: $objects, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
