export interface NavbarModel {
  logo: {
    image: {};
    text: string;
  };
  navigator: {
    title: string;
    path: string;
  }[];
}

const navbar: NavbarModel = {
  logo: {
    image: {},
    text: "Webdrei UI",
  },
  navigator: [
    {
      title: "Components",
      path: "components",
    },
  ],
};

export default navbar;
