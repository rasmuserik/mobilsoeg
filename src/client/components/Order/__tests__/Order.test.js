'use strict';

/**
 * @file
 * Testing Order.component.js
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import Order from '../Order.component.js';

describe('Test Order Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Assert type of rendered element', () => {
    const order = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };
    render.render(<Order order={order} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
  });

  it('Assert element with info about material being ordered', () => {
    const order = {
      pickupAgency: '710100',
      creator: '',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };
    render.render(<Order order={order}/>);
    const rendered = render.getRenderOutput();
    const text = 'This is a title';
    assert.strictEqual(text, rendered.props.children[1].props.children[0].props.children[1].props.children);
  });

  it('Assert element with correct classes', () => {
    const order = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };
    render.render(<Order order={order} />);
    const rendered = render.getRenderOutput();
    const classes = 'place-order-button button';
    assert.strictEqual(classes, rendered.props.children[1].props.children[2].props.className);
  });

});
