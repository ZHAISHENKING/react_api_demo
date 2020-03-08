
// 接收type, props, children， 返回一个vnode
function createElement(type, props, ...children) {
  if (props) {
    delete props.__source;
    delete props.__self;
  }

  return {
    type: type,
    props: {
      ...props,
      //!这里的处理与源码稍有不同，源码里的话，只有一个元素，children是对象，多于一个的时候，是数组
      children: children.map(child =>
        typeof child === "object" ? child : createTextNode(child)
      )
    }
  };
}

function createTextNode(text) {
  return {
    type: "TEXT",
    props: {
      children: [],
      nodeValue: text
    }
  };
}

export default {
  createElement
};
