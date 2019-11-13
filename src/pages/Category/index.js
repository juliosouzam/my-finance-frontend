import React, { useState } from 'react';

import { Container } from './styles';

export default function Category() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Mark',
      slug: 'Otto',
    },
    {
      id: 2,
      name: 'Jacob',
      slug: 'Thornton',
    },
    {
      id: 3,
      name: 'Larry',
      slug: 'Bird',
    },
    {
      id: 4,
      name: 'twitter',
      slug: 'fat',
    },
  ]);

  return (
    <Container>
      <div>
        <button type="button">Add</button>
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
                <button type="button">Edi</button>
                <button type="button">Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
