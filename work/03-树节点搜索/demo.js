/**
 * 使用树组件来渲染树结构数据时，如果要对树节点进行模糊搜索，如何实现该模糊搜索算法。
 * 树结构数据如下所示：
 */

const treeData = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          },
          {
            label: '三级 1-1-2',
            children: [
              {
                label: '四级 2-1'
              }
            ]
          },
          {
            label: '三级 2-1-2'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1'
      },
      {
        label: '二级 2-2'
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1'
      },
      {
        label: '二级 3-2'
      }
    ]
  },
  {
    label: '一级 4',
  }
];


// Vue中（this.myData即绑定到树上的数据，需要根据搜索条件实时渲染的数据）
function myFilter(value) {
  // 每次过滤之前需要取得完整数据
  this.myData = JSON.parse(JSON.stringify(this.treeData));
  // 开始过滤
  this.myFilterNode(value, this.myData);
}

/**
 * value: 匹配文本
 * data: 数组
*/
function myFilterNode(value, data) {
  data.forEach(root => {
    this.setLabel(value, root);
  })
  this.deleteNodes(data);
}

/**
 * value: 待匹配文本
 * root: 树对象
 * 
 * 作用：给树的每个节点打标签，判断是否需要删除
*/
function setLabel(value, root) {
  // root为叶节点，且label不包含value，该节点需删除
  if (!root.children && root.label.indexOf(value) === -1) root.isDelete = true;
  if (root.children) {
    root.children.forEach(node => {
      this.setLabel(value, node);
    })
    // 后序遍历：设置所有子节点后再设置父节点
    if (!root.label.includes(value) && root.children.every(node => node.isDelete)) {
      root.isDelete = true;
    }
  }
}

/**
 * data: 数组
*/
function deleteNodes(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].isDelete) {
      data.splice(i, 1);
      i--;
    } else {
      // 该节点的子节点可能需要删除
      if (data[i].children) {
        this.deleteNodes(data[i].children);
      }
    }
  }
}