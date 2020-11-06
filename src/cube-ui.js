import Vue from 'vue';

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  // basic
  Button,
  Checkbox,
  Input,
  CheckboxGroup,
  Radio,
  Checker,
  Textarea,
  Select,
} from 'cube-ui';

Vue.use(Style);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Input);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(Checker);
Vue.use(Textarea);
Vue.use(Select);
