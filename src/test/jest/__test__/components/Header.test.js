import React from 'react';
import { mount, shallow } from 'enzyme'; //shallow nos permite traer elementos y probarlos como una unidad
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Shapshot', () => {
  test('Comprobar el snapsahot del Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
