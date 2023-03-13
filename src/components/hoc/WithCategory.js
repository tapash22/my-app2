import React from "react";

function WithCategory(limit) {
  return function (WrapperComponent) {
    return class extends React.Component {
      state = {
        categorys: ["category1", "category2", "category3",'category4'],
      };
      render() {
        const categorys = this.state.categorys.slice(0,limit);

        return (
          <div>
            <WrapperComponent {...this.props}  categorys={categorys} />
          </div>
        );
      }
    };
  };
}
export default WithCategory;
