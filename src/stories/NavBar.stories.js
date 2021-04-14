import MyNavBar from "./NavBar.vue";

export default {
  title: "Example/NavBar",
  component: MyNavBar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyNavBar },
  template: "<my-nav-bar />",
});

export const Main = Template.bind({});
Main.args = {};
