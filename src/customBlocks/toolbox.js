import "./custom_Blocks";

const toolboxCategories = {
  kind: "flyoutToolbox",
   contents: [
    {
      kind: "block",
      type: "infinite_loop",
      fields: {
        NUM: 1
      },
      maxBlocks: 1,
    },
    {
      kind: "block",
      type: "return",
      maxBlocks: 1,
      fields: {
        NUM: 1
      },
    },
  ],
};

export default toolboxCategories 