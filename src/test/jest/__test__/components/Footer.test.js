import { mount } from 'enzyme';
import React from 'react';
import Footer from '../../../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('render footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la IU del componente footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot(); // si no exitste el snapshoot lo crea y despues lo comprueba
  });
});
