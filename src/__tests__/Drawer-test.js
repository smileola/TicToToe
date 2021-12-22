import React from 'react';
import Drawer from '../Drawer';
import renderer from 'react-test-renderer';
import {configure, shallow, render, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Drawer Test Cases',()=>{
  it('Click on menu item',()=>{
    const wrapper = mount(
    <MuiThemeProvider>
      <Drawer  toggle={true}/>
    </MuiThemeProvider>);

    var menuItem_0 = wrapper.find('MenuItem').at(0);
    var menuItem_1 = wrapper.find('MenuItem').at(1);
    expect(toJson(wrapper)).toMatchSnapshot();
    menuItem_0.prop('onClick')();
    menuItem_1.prop('onClick')();
  });
});
